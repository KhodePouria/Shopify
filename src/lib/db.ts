import {PrismaClient} from '@prisma/client';

export const mockProducts = [
  {
    id: 1,
    title: 'Professional Drill Set',
    slug: 'professional-drill-set',
    description:
      'A high-quality professional drill set with various attachments for all your drilling needs.',
    price: 199,
    images: '/images/drill-set.jpg',
  },
  {
    id: 2,
    title: 'Electric Screwdriver',
    slug: 'electric-screwdriver',
    description:
      'Powerful electric screwdriver with adjustable torque settings and LED work light.',
    price: 79,
    images: '/images/screwdriver.jpg',
  },
  {
    id: 3,
    title: 'Professional Toolbox',
    slug: 'professional-toolbox',
    description:
      'Durable toolbox with multiple compartments for organizing all your tools.',
    price: 129,
    images: '/images/toolbox.jpg',
  },
];

let prismaInstance: PrismaClient | null = null;

function getPrismaClient() {
  if (!process.env.DATABASE_URL) {
    console.warn(
      'DATABASE_URL not found, database operations will use fallback data'
    );
    return null;
  }

  if (!prismaInstance) {
    prismaInstance = new PrismaClient({
      log: ['error', 'warn'],
    });
  }

  return prismaInstance;
}

export const prisma = getPrismaClient();

export async function getProducts() {
  try {
    if (!prisma) {
      console.warn('Database not available, using mock data');
      return mockProducts;
    }

    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error(
      'Database connection failed, using mock data instead:',
      error
    );
    return mockProducts;
  }
}

export async function getProductById(id: number) {
  try {
    if (!prisma) {
      console.warn('Database not available, using mock data');
      return mockProducts.find((product) => product.id === id) || null;
    }
    const product = await prisma.product.findUnique({
      where: {id},
    });
    if (!product) {
      return mockProducts.find((p) => p.id === id) || null;
    }
    return product;
  } catch (e) {
    console.error('Database connection failed, using mock data instead:', e);
    return mockProducts.find((p) => p.id === id);
  }
}

export async function getProductBySlug(slug: string) {
  try {
    if (!prisma) {
      console.warn('Database not available, using mock data');
      return mockProducts.find((product) => product.slug === slug) || null;
    }

    const product = await prisma.product.findUnique({
      where: {slug},
    });

    if (!product) {
      return mockProducts.find((p) => p.slug === slug) || null;
    }

    return product;
  } catch (error) {
    console.error(
      'Database connection failed, using mock data instead:',
      error
    );
    return mockProducts.find((product) => product.slug === slug) || null;
  }
}
