// filepath: /home/pouria/Desktop/Work/Next js/ToolPal/myproject/src/lib/db.ts
import { PrismaClient } from '@/generated/prisma';

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
export const getProducts = async () => {
  try {
    const products = await prisma.product.findMany();
    return products.length > 0 ? products : mockProducts;
  } catch (error) {
    console.warn('Database connection failed, using mock data instead');
    return mockProducts;
  }
};

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: { slug },
    });
    
    if (product) return product;
    
    // If not found in database, look in mock data
    const mockProduct = mockProducts.find(p => p.slug === slug);
    return mockProduct || null;
  } catch (error) {
    console.warn('Database connection failed, using mock data instead');
    const mockProduct = mockProducts.find(p => p.slug === slug);
    return mockProduct || null;
  }
};