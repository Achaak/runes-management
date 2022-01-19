import { PrismaClient } from '@prisma/client'

async function seed() {
  const prisma = new PrismaClient()

  await prisma.$disconnect()
}

seed()
