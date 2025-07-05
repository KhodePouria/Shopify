// filepath: /home/pouria/Desktop/Work/Next js/ToolPal/myproject/src/lib/db.ts
import { PrismaClient, Product } from '@/generated/prisma';

// Mock data for fallback when database isn't available
export const mockProducts = [
  {
    id: '1',
    title: 'Professional Drill Set',
    slug: 'professional-drill-set',
    content: 'A high-quality professional drill set with various attachments for all your drilling needs.',
    price: 199,
    picture: '/images/drill-set.jpg',
  },
  {
    id: '2',
    title: 'Electric Screwdriver',
    slug: 'electric-screwdriver',
    content: 'Powerful electric screwdriver with adjustable torque settings and LED work light.',
    price: 79,
    picture: '/images/screwdriver.jpg',
  },
  {
    id: '3',
    title: 'Professional Toolbox',
    slug: 'professional-toolbox',
    content: 'Durable toolbox with multiple compartments for organizing all your tools.',
    price: 129,
    picture: '/images/toolbox.jpg',
  },
];

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
// Learn more: https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'error', 'warn'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Fallback function to use mock data when database isn't available
export async function getProducts(): Promise<Product[]> {
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

export async function getProductBySlug(slug: string): Promise<Product | null> {
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