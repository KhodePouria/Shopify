// filepath: /home/pouria/Desktop/Work/Next js/ToolPal/myproject/src/lib/db.ts
import { PrismaClient } from "../generated/prisma";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

console.log("Prisma Client initialized:", prisma);

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;