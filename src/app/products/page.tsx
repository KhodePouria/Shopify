import { Product } from "@/generated/prisma";
import { getProducts } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

// Define a named function to resolve the ESLint display-name issue
export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="container mx-auto py-16 px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-extrabold mb-4 text-gray-800 relative inline-block">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            Premium Products
                        </span>
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">Discover our collection of high-quality tools designed for professionals</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product: Product) => (
                        <div 
                            key={product.id} 
                            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-blue-200"
                        >
                            {/* Badge/label */}
                            <div className="absolute top-4 left-4 z-10">
                                <div className="bg-white/90 backdrop-blur-sm shadow-md rounded-full px-3 py-1 text-sm font-medium text-gray-800">
                                    New Arrival
                                </div>
                            </div>
                            
                            {/* Image container */}
                            <div className="relative h-72 overflow-hidden bg-gray-100">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-[1]"></div>
                                <Image 
                                    src={product.picture ?? "/default-image.jpg"} 
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: "cover" }}
                                    alt={product.title} 
                                    className="group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                
                                {/* Price tag */}
                                <div className="absolute top-4 right-4 z-10">
                                    <div className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                                        ${product.price}
                                    </div>
                                </div>
                                
                                {/* Quick actions */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">{product.title}</h2>
                                <div className="flex items-center mb-3">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500 ml-2">(45 reviews)</span>
                                </div>
                                <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{product.content}</p>
                                
                                {/* Available colors */}
                                <div className="flex space-x-2 mb-4">
                                    <div className="w-5 h-5 rounded-full bg-red-500 ring-2 ring-white"></div>
                                    <div className="w-5 h-5 rounded-full bg-blue-500 ring-2 ring-white"></div>
                                    <div className="w-5 h-5 rounded-full bg-green-500 ring-2 ring-white"></div>
                                </div>
                                
                                <div className="mt-auto">
                                    <Link href={`/products/${product.slug}`}>
                                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center group relative overflow-hidden">
                                            <span className="relative z-10">View Details</span>
                                            <span className="absolute inset-0 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
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