// filepath: /home/pouria/Desktop/Work/Next js/ToolPal/myproject/src/lib/db.ts
import { PrismaClient } from '@prisma/client';

// Mock data for fallback when database isn't available
export const mockProducts = [
  {
    id: 1,
    title: 'Professional Drill Set',
    slug: 'professional-drill-set',
    description: 'A high-quality professional drill set with various attachments for all your drilling needs.',
    price: 199,
    images: '/images/drill-set.jpg',
  },
  {
    id: 2,
    title: 'Electric Screwdriver',
    slug: 'electric-screwdriver',
    description: 'Powerful electric screwdriver with adjustable torque settings and LED work light.',
    price: 79,
    images: '/images/screwdriver.jpg',
  },
  {
    id: 3,
    title: 'Professional Toolbox',
    slug: 'professional-toolbox',
    description: 'Durable toolbox with multiple compartments for organizing all your tools.',
    price: 129,
    images: '/images/toolbox.jpg',
  },
];

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Fallback function to use mock data when database isn't available
export async function getProducts() {
  try {
    // Check if DATABASE_URL is available
    if (!process.env.DATABASE_URL) {
      console.warn('DATABASE_URL not found, using mock data');
      return mockProducts;
    }
    
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error('Database connection failed, using mock data instead:', error);
    return mockProducts;
  }
}

export async function getProductBySlug(slug: string) {
  try {
    // Check if DATABASE_URL is available
    if (!process.env.DATABASE_URL) {
      console.warn('DATABASE_URL not found, using mock data');
      return mockProducts.find(product => product.slug === slug) || null;
    }
    
    const product = await prisma.product.findUnique({
      where: { slug },
    });
    
    if (!product) {
      // Fallback to mock data if product not found in database
      return mockProducts.find(p => p.slug === slug) || null;
    }
    
    return product;
  } catch (error) {
    console.error('Database connection failed, using mock data instead:', error);
    return mockProducts.find(product => product.slug === slug) || null;
  }
}