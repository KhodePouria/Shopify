import Image from "next/image";
import Link from "next/link";
export default function First(){
    return(
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/FirstPic.png" 
                    alt="Tech devices" 
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                {/* Additional Blue Tint */}
                <div className="absolute inset-0 bg-blue-900/20"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 flex items-center min-h-screen px-4 md:px-20">
                <div className="max-w-2xl">
                    <div className="mb-8">
                        <h1 className="text-white mb-2 text-5xl md:text-7xl font-bold leading-tight">
                            Tech Deals,
                        </h1>
                        <h2 className="text-blue-400 mb-6 text-6xl md:text-8xl font-bold leading-none">
                            Fast!
                        </h2>
                    </div>
                    
                    <p className="text-gray-200 text-xl md:text-2xl mb-12 leading-relaxed max-w-xl">
                        Welcome to your one-stop shop for the latest phones, laptops, and must-have tech—where quality meets unbeatable prices.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="group relative px-8 py-4 text-lg md:text-xl font-semibold text-white 
                        bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                            <Link href="./products">
                            <span className="relative z-10">Shop Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 
                            group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            </Link>
                        </button>
                        
                        <button className="px-8 py-4 text-lg md:text-xl font-semibold text-white border-2 border-white/30 
                        rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                            <Link href="./about">
                            Learn More
                            </Link>
                        </button>
                    </div>
                    
                    {/* Stats or Features */}
                    <div className="flex flex-wrap gap-6 mt-16">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400">1000+</div>
                            <div className="text-gray-300 text-sm">Products</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400">24/7</div>
                            <div className="text-gray-300 text-sm">Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400">Fast</div>
                            <div className="text-gray-300 text-sm">Delivery</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Floating Elements for Extra Coolness */}
            <div className="absolute top-20 right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-32 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-lg animate-pulse delay-500"></div>
        </div>
    );
}