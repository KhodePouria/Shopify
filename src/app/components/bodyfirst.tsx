import Image from "next/image";
export default function First(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-8 md:p-20">
            <div className="flex flex-col ml-10 mr-10 justify-center gap-4 order-2 md:order-1">
                <p className="text-black mb-0 text-4xl md:text-5xl">Tech Deals,</p>
                <p className="text-blue-500 mb-5 text-5xl md:text-7xl">Fast!</p>
                <p className="text-gray-700 text-xl md:text-2xl">Welcome to your one-stop shop for the latest phones, laptops, and must-have tech—where quality meets unbeatable prices.</p>
                <div className="flex justify-center md:mt-28">
                    <button className="relative px-6 py-3 text-lg md:text-2xl border rounded-xl shadow-xl border-gray-400
                    bg-white overflow-hidden group hover:text-white cursor-pointer transition-colors duration-300 ease-out">
                        <span className="absolute inset-0 w-full h-0 transition-all duration-300 ease-out bg-blue-500 group-hover:h-full"></span>
                        <span className="relative group-hover:text-white transition-colors duration-300">Our Products</span>
                    </button>
                </div>
            </div>
            <div className="flex justify-center m-4 items-center gap-8 order-1 md:order-2">
                <Image 
                    src="/FirstPic.png" 
                    alt="Tech devices" 
                    width={660} 
                    height={744} 
                    className="shadow-2xl rounded-[100px] w-full max-w-[500px] md:max-w-[660px] min-w-[460px]"
                    priority
                />
            </div>
        </div>
    );
}