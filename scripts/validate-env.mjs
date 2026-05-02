#!/usr/bin/env node

/**
 * Environment validation script
 * Verifies .env.local is properly configured before starting development
 */

import fs from "node:fs";
import path from "node:path";

const REQUIRED_VARS = [
  "DATABASE_URL",
  "NEXTAUTH_URL",
  "NEXTAUTH_SECRET",
  "NODE_ENV",
];

function main() {
  const envPath = path.join(process.cwd(), ".env.local");

  if (!fs.existsSync(envPath)) {
    console.error("❌ .env.local not found. Please copy from .env.local.example:");
    console.error("   cp .env.local.example .env.local");
    process.exit(1);
  }

  const envContent = fs.readFileSync(envPath, "utf-8");
  const envEntries = envContent
    .split(/\r?\n/)
    .filter((line) => line && !line.trim().startsWith("#") && line.includes("="))
    .map((line) => {
      const idx = line.indexOf("=");
      return [line.slice(0, idx).trim(), line.slice(idx + 1).trim()];
    });
  const env = Object.fromEntries(envEntries);

  const missing = REQUIRED_VARS.filter(
    (v) => !env[v] || env[v].includes("your-")
  );

  if (missing.length > 0) {
    console.error("❌ Missing or incomplete environment variables:");
    missing.forEach((v) => console.error(`   - ${v}`));
    process.exit(1);
  }

  if (!(env.DATABASE_URL.startsWith("postgresql://") || env.DATABASE_URL.startsWith("postgres://"))) {
    console.error("❌ DATABASE_URL must point to PostgreSQL for this workspace.");
    console.error("   Expected: postgresql://user:password@host:port/database");
    process.exit(1);
  }

  if (env.NEXTAUTH_SECRET.length < 32) {
    console.error("❌ NEXTAUTH_SECRET looks too short.");
    console.error("   Generate one with: node -e \"console.log(require('crypto').randomBytes(32).toString('base64'))\"");
    process.exit(1);
  }

  console.log("✅ Environment variables configured.");
}

main();
