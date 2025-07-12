import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function ProductsPage() {
  const [laptops, smartphones, tablets] = await Promise.all([
    fetch("https://dummyjson.com/products/category/laptops"),
    fetch("https://dummyjson.com/products/category/smartphones"),
    fetch('https://dummyjson.com/products/category/tablets')
  ]);

  const laptopsData = await laptops.json();
  const smartphonesData = await smartphones.json();
  const tabletsData = await tablets.json();

  const allproducts = [...smartphonesData.products, ...laptopsData.products, ...tabletsData.products];

  type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-800 relative inline-block">
            <span className="text-black font-semibold">Premium Products</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our collection of high-quality techs designed for professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allproducts.map((product: Product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-blue-200"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image
                  src={product.images[0] ?? "/default-image.jpg"} // Use the first image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  alt={product.title}
                  className="group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                  {product.description}
                </p>
                {/* Price */}
                <div className="text-lg font-semibold text-blue-600 mb-4">
                  <span className="bg-blue-100 px-3 py-1 rounded-full">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
                <div className="mt-auto">
                  <Link href={`/products/${product.id}`}>
                    <button className="w-full hover:cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center group relative overflow-hidden">
                      <span className="relative z-10">Details</span>
                      <span className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 flex items-center justify-center">
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}