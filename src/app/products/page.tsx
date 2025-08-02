import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getProducts } from "@/lib/db";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container px-4 py-16 mx-auto md:px-6">
        <div className="mb-12 text-center">
          <h1 className="relative inline-block mb-4 text-5xl font-extrabold text-gray-800">
            <span className="font-semibold text-black">Premium Products</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Discover our collection of high-quality techs designed for professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            let images: string[] = [];
            try {
              images = JSON.parse(product.images);
            } catch {
              images = [product.images];
            }
            const imageUrl = images[0] ?? "/default-image.jpg";

            return (
              <div
                key={product.id}
                className="relative flex flex-col h-full overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg group rounded-xl hover:shadow-2xl hover:border-blue-200"
              >
                {/* Image */}
                <div data-testid={`product-${product.id}`} className="relative overflow-hidden bg-gray-100 h-72">
                  <Image
                    src={imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    alt={product.title}
                    className="transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <h2 className="mb-2 text-xl font-bold text-gray-800 transition-colors group-hover:text-blue-600">
                    {product.title}
                  </h2>
                  <p className="flex-grow mb-4 text-gray-600 line-clamp-3">
                    {product.description}
                  </p>
                  {/* Price */}
                  <div className="mb-4 text-lg font-semibold text-blue-600">
                    <span className="px-3 py-1 bg-blue-100 rounded-full">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-auto">
                    <Link href={`/products/${product.slug}`}>
                      <button className="relative flex items-center justify-center w-full px-4 py-3 overflow-hidden font-medium text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:cursor-pointer hover:bg-blue-700 group">
                        <span className="relative z-10">Details</span>
                        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 origin-left transform scale-x-0 bg-blue-800 group-hover:scale-x-100">
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}