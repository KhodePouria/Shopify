import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Developer",
      content: "I purchased a laptop from ToolPal last month, and I'm amazed by the performance. The customer service was exceptional, and delivery was faster than expected.",
      avatar: "/avatars/avatar-1.jpg", // Add actual images later
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Graphic Designer",
      content: "Their smartphone selection is unmatched. I found exactly what I needed at a price significantly lower than other retailers. Will definitely shop here again.",
      avatar: "/avatars/avatar-2.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      content: "The smartwatch I bought has transformed how I manage my day. ToolPal's technical support helped me set everything up seamlessly.",
      avatar: "/avatars/avatar-3.jpg",
      rating: 4
    }
  ];

  const stats = [
    { id: 1, value: "20k+", label: "Happy Customers" },
    { id: 2, value: "4.9", label: "Customer Rating" },
    { id: 3, value: "99%", label: "Satisfaction Rate" },
    { id: 4, value: "24/7", label: "Customer Support" }
  ];

  const partners = [
    { id: 1, name: "Apple", logo: "/logos/apple.svg" },
    { id: 2, name: "Samsung", logo: "/logos/samsung.svg" },
    { id: 3, name: "Microsoft", logo: "/logos/microsoft.svg" },
    { id: 4, name: "Dell", logo: "/logos/dell.svg" },
    { id: 5, name: "HP", logo: "/logos/hp.svg" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Main Heading */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Thousands of Tech Enthusiasts
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our customers have to say about their experience with ToolPal.
          </p>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial Content */}
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              
              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4 relative">
                  {/* Placeholder for avatar */}
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-100 text-blue-500 font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  {/* Uncomment when actual images are available */}
                  {/* <Image 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  /> */}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="bg-blue-600 rounded-2xl shadow-xl p-10 md:p-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col">
                <span className="text-white text-4xl md:text-5xl font-bold mb-2">{stat.value}</span>
                <span className="text-blue-100">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-500 text-xl mb-10">Authorized Retailer of Premium Brands</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <div key={partner.id} className="h-12 w-24 relative grayscale hover:grayscale-0 transition-all duration-300">
              {/* Placeholder for logo */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <p className="font-semibold">{partner.name}</p>
              </div>
              {/* Uncomment when actual logos are available */}
              {/* <Image 
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
