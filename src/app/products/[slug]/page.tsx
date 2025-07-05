import { getProductBySlug, getProducts } from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";

// Generate static parameters for Static Site Generation (SSG)
export async function generateStaticParams() {
  try {
    const products = await getProducts();
    return products.map((product) => ({
      slug: product.slug,
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

// Define types for props according to Next.js App Router conventions


// Make sure to mark the component itself as async
export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  try {
    // Await params before accessing its properties
    const { slug } = await params;
    
    // Fetch the product data with fallback to mock data
    const product = await getProductBySlug(slug);

    // Handle case where product is not found
    if (!product) {
      return notFound();
    }

    return (
      <div className="container mx-auto py-10 px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-72 md:h-full">
                <Image 
                  src={product.picture ?? "/default-image.jpg"} 
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-8 md:w-1/2">
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
                <span className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg">
                  ${product.price}
                </span>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">(45 reviews)</span>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">{product.content}</p>
              
              <div className="mb-6">
                <h3 className="text-gray-700 font-semibold mb-2">Available Colors</h3>
                <div className="flex space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 ring-2 ring-white cursor-pointer"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-600 ring-2 ring-white cursor-pointer"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-600 ring-2 ring-white cursor-pointer"></div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300">
                  Add to Cart
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 p-3 rounded-lg transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in product page:", error);
    return <div>Something went wrong loading this product</div>;
  }
}