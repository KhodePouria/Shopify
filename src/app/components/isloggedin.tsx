"use server"
import { auth } from "@/auth";
import Link from "next/link";

export default async function IsLoggedIn(){
    const session = await auth();

    if(session?.user) return(
        <h1>signed in</h1>
    )
    else return(
    <div>
        <Link href="/signup"><button className="text-black hover:text-gray-400 cursor-pointer transition-all duration-100 ease-in-out">Sign Up</button></Link>
        <Link href="/login"><button className="px-4 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-100 cursor-pointer transition-all duration-300 ease-in-out">Log In</button></Link>
    </div>);
    
}