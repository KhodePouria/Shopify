'use client';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
export default function First() {
  const router = useRouter();

  const handleclick = () => {
    router.push('/about');
  };

  return (
    <div
      data-testid="cypress-first"
      className="relative min-h-screen overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/FirstPic.png"
          alt="Tech devices"
          fill
          className="object-cover object-center"
          priority={true}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        <div className="absolute inset-0 bg-blue-900/20"></div>
      </div>

      <div className="relative z-10 flex items-center min-h-screen px-4 md:px-20">
        <div className="max-w-2xl">
          <div className="mb-8">
            <h1 className="mb-2 text-5xl font-bold leading-tight text-white md:text-7xl">
              Tech Deals,
            </h1>
            <h2 className="mb-6 text-6xl font-bold leading-none text-blue-400 md:text-8xl">
              Fast!
            </h2>
          </div>

          <p className="max-w-xl mb-12 text-xl leading-relaxed text-gray-200 md:text-2xl">
            Welcome to your one-stop shop for the latest phones, laptops, and
            must-have tech—where quality meets unbeatable prices.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="relative px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform bg-blue-600 group md:text-xl hover:bg-blue-700 rounded-xl hover:scale-105 hover:shadow-2xl">
              <Link href="./products">
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:opacity-100 rounded-xl"></div>
              </Link>
            </button>

            <button
              onClick={() => {
                handleclick();
              }}
              className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 md:text-xl border-white/30 rounded-xl backdrop-blur-sm hover:bg-white/10"
            >
              Learn More
            </button>
          </div>

          <div className="flex flex-wrap gap-6 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">1000+</div>
              <div className="text-sm text-gray-300">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">Fast</div>
              <div className="text-sm text-gray-300">Delivery</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-20 h-20 rounded-full top-20 right-10 bg-blue-500/20 blur-xl animate-pulse"></div>
      <div className="absolute w-32 h-32 delay-1000 rounded-full bottom-32 right-20 bg-purple-500/20 blur-2xl animate-pulse"></div>
      <div className="absolute w-16 h-16 delay-500 rounded-full top-1/2 right-1/4 bg-cyan-500/20 blur-lg animate-pulse"></div>
    </div>
  );
}
