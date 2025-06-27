"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`flex w-full items-center justify-between p-4 bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "shadow-md" : ""
    }`}>
      {/* Logo (Left Section) */}
      <div className="flex-1">
        <Image src="/Frame 13.svg" alt="logo" width="120" height="40" className="w-45" />
      </div>

      {/* Nav Links (Center Section) - Desktop */}
      <nav className="hidden md:flex flex-1 justify-center items-center gap-6">
        <Link href="/" className={`text-gray-600 hover:text-black transition-all duration-100 ease-in-out ${pathname === "/" ? "underline" : ""}`}>Home</Link>
        <Link href="/products" className={`text-gray-600 hover:text-black transition-all duration-100 ease-in-out ${pathname === "/products" ? "underline" : ""}`}>Products</Link>
        <Link href="/about" className={`text-gray-600 hover:text-black transition-all duration-100 ease-in-out ${pathname === "/about" ? "underline" : ""}`}>About</Link>
      </nav>

      {/* Buttons (Right Section) - Desktop */}
      <div className="hidden md:flex flex-1 justify-end items-center gap-4">
        <button className="text-black hover:text-gray-400 cursor-pointer transition-all duration-100 ease-in-out">Sign Up</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-400 cursor-pointer transition-all duration-300 ease-in-out">Log In</button>
      </div>

      {/* Hamburger Icon - Mobile with Animation */}
      <button
        className="md:hidden flex flex-col justify-center items-center mr-5 w-6 h-6 relative cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`absolute block w-6 h-0.75 rounded-3xl bg-black transition-all duration-100 ease-in-out ${
          menuOpen ? "transform rotate-45 top-[11px]" : "transform rotate-0 top-1"
        }`}></span>
        <span className={`absolute block w-6 h-0.75 rounded-3xl bg-black transition-all duration-100 ease-in-out ${
          menuOpen ? "opacity-0" : "opacity-100 top-[11px]"
        }`}></span>
        <span className={`absolute block w-6 h-0.75 rounded-3xl bg-black transition-all duration-100 ease-in-out ${
          menuOpen ? "transform -rotate-45 top-[11px]" : "transform rotate-0 top-5"
        }`}></span>
      </button>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-[68px] right-0 h-screen w-64 bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden z-50 transition-transform duration-300 ease-in-out ${
          menuOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-4">
          <Link href="/" className={`text-black hover:text-gray-400 transition-all duration-100 ease-in-out ${pathname === "/" ? "underline" : ""}`} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/products" className={`text-black hover:text-gray-400 transition-all duration-100 ease-in-out ${pathname === "/products" ? "underline" : ""}`} onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/about" className={`text-black hover:text-gray-400 transition-all duration-100 ease-in-out ${pathname === "/about" ? "underline" : ""}`} onClick={() => setMenuOpen(false)}>About</Link>
        </nav>
        <div className="flex flex-col items-center gap-2">
          <button className="text-black hover:text-gray-400 cursor-pointer transition-all duration-100 ease-in-out">Sign Up</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-100 cursor-pointer transition-all duration-300 ease-in-out">Log In</button>
        </div>
      </div>
    </div>
  );
}