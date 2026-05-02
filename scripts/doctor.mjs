#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const ROOT = process.cwd();

function checkCommand(command, args = ["--version"]) {
  const res = spawnSync(command, args, { shell: true, stdio: "pipe" });
  return res.status === 0;
}

function checkPortOpen(port) {
  const cmd = process.platform === "win32"
    ? `netstat -ano | findstr :${port}`
    : `lsof -i :${port}`;
  const res = spawnSync(cmd, { shell: true, stdio: "pipe", cwd: ROOT });
  return res.status === 0;
}

function main() {
  console.log("Dignity Doctor");
  console.log("--------------");

  const checks = [];

  checks.push({
    name: "Node.js installed",
    ok: checkCommand("node"),
    fix: "Install Node.js 20+ from https://nodejs.org",
  });

  checks.push({
    name: "pnpm installed",
    ok: checkCommand("pnpm", ["-v"]),
    fix: "Install pnpm: npm install -g pnpm",
  });

  checks.push({
    name: ".env.local exists",
    ok: fs.existsSync(path.join(ROOT, ".env.local")),
    fix: "Copy .env.local.example to .env.local",
  });

  checks.push({
    name: "node_modules exists",
    ok: fs.existsSync(path.join(ROOT, "node_modules")),
    fix: "Run pnpm install",
  });

  const webPortInUse = checkPortOpen(3300);
  const agentPortInUse = checkPortOpen(5100);

  checks.push({
    name: "Port 3300 available for web app",
    ok: !webPortInUse,
    fix: "Stop existing process on 3300 or change web dev port",
  });

  checks.push({
    name: "Port 5100 available for agent backend",
    ok: !agentPortInUse,
    fix: "Stop existing process on 5100 or change backend dev port",
  });

  let hasFailure = false;
  for (const check of checks) {
    if (check.ok) {
      console.log(`✓ ${check.name}`);
    } else {
      console.log(`✗ ${check.name}`);
      console.log(`  Fix: ${check.fix}`);
      hasFailure = true;
    }
  }

  if (hasFailure) {
    console.log("\nDoctor check failed. Resolve the items above and rerun: pnpm doctor");
    process.exit(1);
  }

  console.log("\nDoctor check passed. Next steps:");
  console.log("1) pnpm setup:auto");
  console.log("2) pnpm dev");
}

main();
