import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Seed initial reserve lots
  await prisma.reserveLot.createMany({
    data: [
      {
        lbmaReference: "LBMA-AU-2026-001",
        custodian: "Brinks",
        valuationUsd: new Prisma.Decimal("2000000"),
        status: "ACTIVE",
      },
      {
        lbmaReference: "LBMA-AU-2026-002",
        custodian: "Brinks",
        valuationUsd: new Prisma.Decimal("1500000"),
        status: "ACTIVE",
      },
    ],
    skipDuplicates: true,
  });

  // Seed token supply
  await prisma.tokenSupply.upsert({
    where: { id: "token-supply-main" },
    update: {},
    create: {
      id: "token-supply-main",
      outstandingTokens: new Prisma.Decimal("1000000"),
      parValue: new Prisma.Decimal("1"),
      coverageRatio: new Prisma.Decimal("1.045"),
    },
  });

  console.log("✅ Database seeded successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
