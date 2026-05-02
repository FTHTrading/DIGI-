import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

// TODO: Add MCP tool routes
// TODO: Add A2A message routing
// TODO: Add x402 stubs

fastify.get("/health", async (request, reply) => {
  return { status: "ok", timestamp: new Date().toISOString() };
});

fastify.get("/tools", async (request, reply) => {
  return {
    totalTools: 21,
    domains: [
      "audit",
      "reserve",
      "token",
      "approval",
      "compliance",
      "market",
      "analytics",
    ],
    personas: [
      "treasury",
      "board",
      "compliance",
      "reserve",
      "market",
      "audit",
    ],
  };
});

const start = async () => {
  try {
    await fastify.listen({ port: 5100, host: "0.0.0.0" });
    console.log("Agent backend running at http://localhost:5100");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
