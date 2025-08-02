import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Software Developer',
      content:
        "I purchased a laptop from ToolPal last month, and I'm amazed by the performance. The customer service was exceptional, and delivery was faster than expected.",
      avatar: '/avatars/avatar-1.jpg',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Graphic Designer',
      content:
        'Their smartphone selection is unmatched. I found exactly what I needed at a price significantly lower than other retailers. Will definitely shop here again.',
      avatar: '/avatars/avatar-2.jpg',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Manager',
      content:
        "The smartwatch I bought has transformed how I manage my day. ToolPal's technical support helped me set everything up seamlessly.",
      avatar: '/avatars/avatar-3.jpg',
      rating: 4,
    },
  ];

  const stats = [
    {id: 1, value: '20k+', label: 'Happy Customers'},
    {id: 2, value: '4.9', label: 'Customer Rating'},
    {id: 3, value: '99%', label: 'Satisfaction Rate'},
    {id: 4, value: '24/7', label: 'Customer Support'},
  ];

  const partners = [
    {id: 1, name: 'Apple', logo: '/logos/apple.svg'},
    {id: 2, name: 'Samsung', logo: '/logos/samsung.svg'},
    {id: 3, name: 'Microsoft', logo: '/logos/microsoft.svg'},
    {id: 4, name: 'Dell', logo: '/logos/dell.svg'},
    {id: 5, name: 'HP', logo: '/logos/hp.svg'},
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Trusted by Thousands of Tech Enthusiasts
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our customers have to
            say about their experience with ToolPal.
          </p>
        </div>
      </div>

      <div className="container px-4 mx-auto mb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="mb-6 italic text-gray-600">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4 overflow-hidden bg-gray-200 rounded-full">
                  <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-blue-500 bg-blue-100">
                    {testimonial.name.charAt(0)}
                  </div>

                  {/* <Image 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  /> */}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container px-4 mx-auto mb-20">
        <div className="p-10 bg-blue-600 shadow-xl rounded-2xl md:p-16">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col">
                <span className="mb-2 text-4xl font-bold text-white md:text-5xl">
                  {stat.value}
                </span>
                <span className="text-blue-100">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container px-4 mx-auto">
        <h3 className="mb-10 text-xl text-center text-gray-500">
          Authorized Retailer of Premium Brands
        </h3>
        <div className="flex flex-wrap items-center justify-center max-w-4xl gap-12 mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="relative w-24 h-12 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <p className="font-semibold">{partner.name}</p>
              </div>

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
