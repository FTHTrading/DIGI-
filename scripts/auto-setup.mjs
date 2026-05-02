#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import net from "node:net";

const ROOT = process.cwd();
const ENV_FILE = path.join(ROOT, ".env.local");
const ENV_EXAMPLE = path.join(ROOT, ".env.local.example");

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: true,
    cwd: ROOT,
    ...options,
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

function runWithResult(command, args, options = {}) {
  return spawnSync(command, args, {
    stdio: "pipe",
    shell: true,
    cwd: ROOT,
    encoding: "utf-8",
    ...options,
  });
}

function loadEnv(filePath) {
  const text = fs.readFileSync(filePath, "utf-8");
  const entries = text
    .split(/\r?\n/)
    .filter((line) => line && !line.trim().startsWith("#") && line.includes("="))
    .map((line) => {
      const idx = line.indexOf("=");
      const key = line.slice(0, idx).trim();
      const value = line.slice(idx + 1).trim();
      return [key, value];
    });

  return Object.fromEntries(entries);
}

function ensureEnvFile() {
  if (!fs.existsSync(ENV_FILE)) {
    fs.copyFileSync(ENV_EXAMPLE, ENV_FILE);
    console.log("✓ Created .env.local from .env.local.example");
  }

  const env = loadEnv(ENV_FILE);
  if (!env.DATABASE_URL) {
    console.error("✗ DATABASE_URL is missing in .env.local");
    console.error("  Expected format: postgresql://user:password@host:port/database");
    process.exit(1);
  }

  if (!(env.DATABASE_URL.startsWith("postgresql://") || env.DATABASE_URL.startsWith("postgres://"))) {
    console.error("✗ DATABASE_URL is invalid for PostgreSQL schema.");
    console.error("  Current value must start with postgresql:// or postgres://");
    console.error("  Example: postgresql://postgres:password@localhost:5433/dignity_institutional");
    process.exit(1);
  }

  if (!env.NEXTAUTH_SECRET || env.NEXTAUTH_SECRET.includes("your-32-byte")) {
    console.error("✗ NEXTAUTH_SECRET is missing or placeholder in .env.local");
    console.error("  Generate one with:");
    console.error("  node -e \"console.log(require('crypto').randomBytes(32).toString('base64'))\"");
    process.exit(1);
  }

  return loadEnv(ENV_FILE);
}

function ensureNodeModules() {
  const nodeModulesPath = path.join(ROOT, "node_modules");
  if (!fs.existsSync(nodeModulesPath)) {
    console.log("node_modules not found; installing dependencies...");
    run("pnpm", ["install"]);
  } else {
    console.log("✓ node_modules detected");
  }
}

async function checkPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(false));
    server.once("listening", () => {
      server.close();
      resolve(true);
    });
    server.listen(port, "0.0.0.0");
  });
}

async function ensureAppPortsAvailable() {
  const webPortFree = await checkPortAvailable(3300);
  const agentPortFree = await checkPortAvailable(5100);

  if (!webPortFree || !agentPortFree) {
    console.error("✗ One or more application ports are blocked.");
    if (!webPortFree) {
      console.error("  Port 3300 is in use (Next.js web app port).");
    }
    if (!agentPortFree) {
      console.error("  Port 5100 is in use (Fastify backend port).");
    }
    console.error("  Free those ports, then rerun: pnpm setup:auto");
    process.exit(1);
  }

  console.log("✓ App ports 3300 and 5100 are available");
}

function ensureDockerAndPostgres(env) {
  const dbUrl = env.DATABASE_URL || "";
  const isLocalPostgres = dbUrl.includes("localhost:5433") || dbUrl.includes("127.0.0.1:5433");

  if (!isLocalPostgres) {
    return;
  }

  const dockerInstalled = spawnSync("docker", ["--version"], {
    shell: true,
    stdio: "ignore",
  }).status === 0;

  if (!dockerInstalled) {
    console.error("✗ Docker is not installed, but DATABASE_URL points to localhost:5433.");
    console.error("  Install Docker Desktop or change DATABASE_URL to a reachable PostgreSQL host.");
    process.exit(1);
  }

  const dockerRunning = spawnSync("docker", ["info"], {
    shell: true,
    stdio: "ignore",
  }).status === 0;

  if (!dockerRunning) {
    console.error("✗ Docker daemon is not running.");
    console.error("  Start Docker Desktop (Linux engine), then re-run: pnpm setup:auto");
    process.exit(1);
  }

  if (fs.existsSync(path.join(ROOT, "docker-compose.local.yml"))) {
    console.log("Starting local PostgreSQL via docker compose...");
    run("docker", ["compose", "-f", "docker-compose.local.yml", "up", "-d"]);
    console.log("✓ Local PostgreSQL startup command sent");
  }
}

function ensurePrismaReady(env) {
  const childEnv = { ...process.env, ...env };

  // Write packages/db/.env so Prisma picks up DATABASE_URL natively
  // regardless of how the child process resolves env files.
  const dbEnvPath = path.join(ROOT, "packages", "db", ".env");
  fs.writeFileSync(dbEnvPath, `DATABASE_URL=${childEnv.DATABASE_URL}\n`, "utf-8");

  const genResult = runWithResult("pnpm", ["db:generate"], { env: childEnv });
  if (genResult.status !== 0) {
    console.error("✗ Prisma client generation failed.");
    console.error("  Check schema path: packages/db/src/prisma/schema.prisma");
    process.stderr.write(genResult.stderr || "");
    process.exit(genResult.status || 1);
  }
  process.stdout.write(genResult.stdout || "");

  const pushResult = runWithResult("pnpm", ["db:push"], { env: childEnv });
  if (pushResult.status !== 0) {
    console.error("✗ Prisma schema push failed.");
    console.error("  Confirm PostgreSQL is reachable and DATABASE_URL credentials are valid.");
    process.stderr.write(pushResult.stderr || "");
    process.exit(pushResult.status || 1);
  }
  process.stdout.write(pushResult.stdout || "");
}

async function main() {
  console.log("Dignity Auto Setup");
  console.log("-----------------");

  ensureNodeModules();

  const env = ensureEnvFile();

  // Note: app ports (3300, 5100) are intentionally NOT checked here.
  // If they are occupied it means the app is already running, which is fine.
  // Run `pnpm doctor` to see a full pre-flight checklist.

  ensureDockerAndPostgres(env);

  run("pnpm", ["validate-env"]);
  ensurePrismaReady(env);

  console.log("\nSetup complete.");
  console.log("Run: pnpm dev");
}

main();