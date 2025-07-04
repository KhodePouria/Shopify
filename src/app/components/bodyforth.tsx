import Image from "next/image";

export default function FeatureSection() {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      description: "On all orders over $50",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "30-Day Returns",
      description: "Hassle-free return policy",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Secure Payment",
      description: "Multiple payment methods",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Get help when you need it",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      {/* Features Grid */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="text-blue-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter & App Promo */}
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side: Newsletter */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-white text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-blue-100 mb-6">
                Subscribe to our newsletter and be the first to know about new products, exclusive offers, and tech tips.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-300"
                  aria-label="Email address"
                />
                <button 
                  type="submit" 
                  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
            
            {/* Right Side: Mobile App Promo */}
            <div className="relative bg-indigo-800 p-8 md:p-12 flex flex-col justify-center">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600 opacity-20 rounded-full -mt-20 -mr-20"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400 opacity-20 rounded-full -mb-12 -ml-12"></div>
              
              <h2 className="text-white text-3xl font-bold mb-4 relative z-10">Get Our Mobile App</h2>
              <p className="text-blue-100 mb-6 relative z-10">
                Shop on the go, track your orders, and get exclusive mobile-only deals.
              </p>
              
              <div className="flex flex-wrap gap-4 relative z-10">
                <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-900 transition-colors duration-300">
                  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5636 12.0008C17.5592 10.1595 18.4445 8.76726 20.2323 7.86191C19.1786 6.37611 17.5759 5.57068 15.4778 5.4677C13.5002 5.36788 11.3256 6.57312 10.5433 6.57312C9.72133 6.57312 7.85225 5.52606 6.32328 5.52606C3.58014 5.57068 0.666626 7.65997 0.666626 11.9043C0.666626 13.3606 0.936521 14.8633 1.47631 16.4099C2.19169 18.4859 4.99236 23.3836 7.91435 23.3096C9.43629 23.2798 10.5433 22.2179 12.5764 22.2179C14.5654 22.2179 15.6018 23.3096 17.2723 23.3096C20.2286 23.2761 22.7778 18.8099 23.4559 16.7302C19.4926 14.7687 17.5636 12.0008 17.5636 12.0008ZM14.5654 3.62094C16.0695 1.8313 15.9158 0.166626 15.861 0.166626C14.5246 0.226225 12.9805 1.12463 12.1388 2.20132C11.3781 3.16205 10.8903 4.33765 11.0034 5.46135C12.4596 5.55772 13.6204 4.71266 14.5654 3.62094Z" />
                  </svg>
                  App Store
                </a>
                <a href="#" className="bg-black text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-900 transition-colors duration-300">
                  <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.16669 21.8337C2.94448 21.8337 2.7378 21.7449 2.58779 21.5949C2.43777 21.4449 2.34892 21.2382 2.34892 21.016C2.34892 20.9438 2.35836 20.8721 2.37696 20.8037L11.5425 2.79857C11.6071 2.66884 11.7036 2.55813 11.8228 2.47655C11.9419 2.39498 12.0794 2.34528 12.2222 2.33185C12.365 2.31842 12.5092 2.34173 12.6391 2.39925C12.769 2.45677 12.8801 2.54628 12.9614 2.66033L21.8709 15.7847C21.9521 15.9011 21.9986 16.0384 22.0054 16.18C22.0121 16.3217 21.9788 16.4628 21.9087 16.5862C21.8385 16.7096 21.7343 16.8105 21.6074 16.877C21.4805 16.9435 21.3361 16.9729 21.1935 16.9617H14.0275L12.9431 19.0161H18.1085C18.3314 19.0147 18.5453 19.103 18.7045 19.263C18.8637 19.423 18.9563 19.6427 18.9563 19.8728C18.9563 20.0943 18.8675 20.3073 18.7175 20.4573C18.5674 20.6074 18.3608 20.6962 18.1385 20.6962H5.88446C5.66225 20.6962 5.44557 20.6074 5.29556 20.4573C5.14554 20.3073 5.05669 20.0943 5.05669 19.8728C5.05669 19.6514 5.14554 19.4383 5.29556 19.2883C5.44557 19.1383 5.66225 19.0495 5.88446 19.0495H9.48835L13.2501 10.8827H7.08502C6.97335 10.8841 6.86287 10.8613 6.76031 10.8158C6.65774 10.7703 6.56536 10.7031 6.48946 10.6187L3.58946 7.00119C3.49 6.87253 3.43564 6.71481 3.43554 6.55269C3.43544 6.39057 3.48962 6.23278 3.58891 6.10401C3.68821 5.97523 3.82823 5.87927 3.98625 5.82997C4.14428 5.78067 4.31274 5.78029 4.47113 5.82891L10.8333 7.80075L12.0325 5.30552L5.96502 3.44647C5.81016 3.39775 5.67218 3.30423 5.56939 3.1783C5.4666 3.05237 5.40371 2.89967 5.38875 2.73852C5.37379 2.57737 5.40732 2.41549 5.48514 2.27349C5.56296 2.13148 5.68149 2.01617 5.82613 1.94113L6.31391 1.68558C6.43043 1.62492 6.56147 1.59668 6.69419 1.60362C6.82692 1.61056 6.95457 1.65245 7.06502 1.72558L20.3089 9.48358C20.4276 9.55502 20.5255 9.65737 20.5933 9.78025C20.661 9.90313 20.6963 10.0424 20.6963 10.1839C20.6963 10.3254 20.661 10.4647 20.5933 10.5876C20.5255 10.7104 20.4276 10.8128 20.3089 10.8842C20.1902 10.9557 20.0547 10.9956 19.9162 10.9999C19.7777 11.0043 19.6399 10.973 19.5163 10.9094L12.635 7.20075L3.96113 21.6228C3.89451 21.7126 3.80827 21.7864 3.70912 21.8387C3.60997 21.891 3.5001 21.9204 3.38835 21.9247L3.16669 21.8337Z" />
                  </svg>
                  Play Store
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
