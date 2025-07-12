const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  const [laptops, smartphones, tablets] = await Promise.all([
    fetch("https://dummyjson.com/products/category/laptops"),
    fetch("https://dummyjson.com/products/category/smartphones"),
    fetch("https://dummyjson.com/products/category/tablets"),
  ]);

  const laptopsData = await laptops.json();
  const smartphonesData = await smartphones.json();
  const tabletsData = await tablets.json();

  const allproducts = [
    ...smartphonesData.products,
    ...laptopsData.products,
    ...tabletsData.products,
  ];

  for (const product of allproducts) {
    await prisma.product.create({
      data: {
        title: product.title,
        description: product.description,
        price: product.price,
        images: product.images,
        slug: product.title.toLowerCase().replace(/ /g, "-"), // Generate a slug
      },
    });
  }

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
