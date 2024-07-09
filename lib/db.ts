import { PrismaClient } from '@prisma/client'

// Not using this because we are using the global object
// const prisma = new PrismaClient()

// Global object avoids Next.js hot reloading
// NextJS hot reloading would load PrismaClient
// Over and over, multiple times.

// In a regular React or Node.js app the simple
// const prisma = new PrismaClient() would work
// just fine.

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;