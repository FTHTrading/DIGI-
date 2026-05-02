#!/usr/bin/env node

/**
 * Port availability checker for Dignity workspace
 * Verifies that required ports are free before starting development
 */

import net from "node:net";

const PORTS = {
  "3300": "Next.js Web Application",
  "5100": "Fastify Agent Backend",
  "5433": "PostgreSQL",
};

async function checkPort(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", (err) => {
      if (err.code === "EADDRINUSE") {
        resolve(false);
      } else {
        resolve(true);
      }
    });
    server.once("listening", () => {
      server.close();
      resolve(true);
    });
    server.listen(port);
  });
}

async function main() {
  console.log("🔍 Checking port availability...\n");

  let allFree = true;
  for (const [port, service] of Object.entries(PORTS)) {
    const isFree = await checkPort(parseInt(port));
    const status = isFree ? "✓ Free" : "✗ In use";
    console.log(`  Port ${port} (${service}): ${status}`);
    if (!isFree) allFree = false;
  }

  console.log();
  if (allFree) {
    console.log("✅ All ports available. Ready to start development.\n");
    process.exit(0);
  } else {
    console.log("❌ Some ports are in use.");
    console.log("   Windows: netstat -ano | findstr :<PORT>");
    console.log("   Windows: taskkill /PID <PID> /F");
    console.log("   Then rerun: pnpm check-ports\n");
    process.exit(1);
  }
}

main();
