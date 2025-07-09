import Link from "next/link";

export default function About() {
  // Company values
  const values = [
    {
      id: 1,
      title: "Quality Assurance",
      description: "We carefully vet every product to ensure it meets our high standards for performance, reliability, and value.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Customer-First Approach",
      description: "Our decisions are guided by what&apos;s best for our customers. We prioritize your satisfaction above all else.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Transparency",
      description: "We believe in clear communication about our products, pricing, and policies. No hidden fees or surprises.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: "Accessibility",
      description: "We strive to make technology accessible to everyone through competitive pricing and inclusive customer service.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <main className="pt-10 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ animationDelay: '0.2s' }}>My Story</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Founded by Pouria Ramezani, Shopify was born from a simple idea: make quality tech products accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">My Mission</h2>
          <div className="text-gray-600 text-lg space-y-6">
            <p>
              At Shopify, I&apos;m on a mission to democratize access to technology. I believe that everyone deserves high-quality tech products at fair prices, backed by exceptional customer service.
            </p>
            <p>
              I carefully curate the product selection, working directly with manufacturers to cut out middlemen and pass the savings on to you. Each product is personally tested to ensure it meets high standards for performance, reliability, and value.
            </p>
            <p className="font-semibold text-gray-700">
              Beyond just selling products, I&apos;m building a community of tech lovers who share my passion for innovation and quality. I&apos;m here to help you navigate the ever-changing tech landscape and find the perfect tools for your digital life.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 animate-fade-in-up">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.id} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="mb-4 text-blue-500">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">A Message from the Founder</h2>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl shadow-xl p-8 md:p-12 transform hover:scale-[1.02] transition-transform duration-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl h-full flex flex-col justify-center transform hover:rotate-[-2deg] transition-transform duration-300">
                  <svg className="w-12 h-12 mb-4 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                  <p className="text-lg italic">
                    &quot;My goal is to build more than just a store—it&apos;s to build a community founded on trust, quality, and a shared passion for technology.&quot;
                  </p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Pouria Ramezani</h3>
                <p className="text-blue-600 mb-4 text-xl font-semibold">Founder &amp; CEO</p>
                <p className="text-gray-600 mb-4 text-lg">
                  As the founder of Shopify, I bring my passion for technology and customer service to every aspect of the business. With a background in software development and a keen eye for quality products, I personally oversee all operations.
                </p>
                <p className="text-gray-600 text-lg">
                  My vision is to create a platform where customers can find reliable tech without the typical markup. I believe in building long-term relationships through honesty, quality, and exceptional service. When I&apos;m not working on Shopify, I&apos;m exploring the latest tech trends and contributing to open-source projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Join My Journey</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
            I&apos;m just getting started, and I&apos;d love for you to be part of this story. Explore the products, join the community, and experience tech shopping the Shopify way.
          </p>
          <Link 
            href="/products" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Our Products
          </Link>
        </div>
      </section>
    </main>
  );
}