import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

async function main() {
  // Adjust the path to your JSON file as needed
  const [laptops, smartphones, tablets] = await Promise.all([
    fetch("https://dummyjson.com/products/category/laptops"),
    fetch("https://dummyjson.com/products/category/smartphones"),
    fetch('https://dummyjson.com/products/category/tablets')
  ]);

  const laptopsData = await laptops.json();
  const smartphonesData = await smartphones.json();
  const tabletsData = await tablets.json();

  const products = [...smartphonesData.products, ...laptopsData.products, ...tabletsData.products];


  for (const product of products) {
    // Check if product already exists by slug
    const exists = await prisma.product.findUnique({
      where: { slug: product.slug },
    });
    if (!exists) {
      await prisma.product.create({
        data: {
          title: product.title,
          description: product.description,
          price: product.price,
          images: Array.isArray(product.images)
            ? JSON.stringify(product.images)
            : product.images,
          slug: product.slug,
        },
      });
      console.log(`Inserted: ${product.title}`);
    } else {
      console.log(`Skipped (already exists): ${product.title}`);
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
