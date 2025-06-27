import Image from "next/image";
import Link from "next/link";

export default function ProductShowcase() {
  // Product data - can be expanded with real data later
  const products = [
    {
      id: 1,
      title: "Smartphones",
      description: "Latest models with cutting-edge features",
      imageUrl: "/placeholder-phone.jpg", // Replace with actual image later
      link: "/products/smartphones"
    },
    {
      id: 2,
      title: "Laptops",
      description: "Powerful machines for work and play",
      imageUrl: "/placeholder-laptop.jpg", // Replace with actual image later
      link: "/products/laptops"
    },
    {
      id: 3,
      title: "Smart Watches",
      description: "Stay connected on the go",
      imageUrl: "/placeholder-watch.jpg", // Replace with actual image later
      link: "/products/watches"
    },
    {
      id: 4,
      title: "Accessories",
      description: "Complete your tech collection",
      imageUrl: "/placeholder-accessories.jpg", // Replace with actual image later
      link: "/products/accessories"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Product Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of high-quality tech products designed to enhance your digital lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
            >
              <div className="h-48 bg-gray-200 relative">
                {/* Placeholder for product image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                {/* Uncomment this when actual images are available */}
                 <Image 
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  className="object-cover"
                /> 
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mt-auto flex justify-center">
                  <Link 
                    href={product.link}
                    className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
