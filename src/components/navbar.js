"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatedModalDemo } from "./ui/Contact-Button";

export default function Navbar() {
  return (
    <nav className="bg-[rgba(17,25,40,0.75)] backdrop-blur-sm fixed w-full z-[100]  saturate-180 border border-white/10 rounded-b-xl px-6 py-2 shadow-md font-geist">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-10 h-10">
          <Link href="/">
            <Image
              src="/XenoQuant-logo-white.webp"
              alt="XenoQuant Logo"
              width={40}
              height={40}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavItem title="Home" />
          <NavItem title="Services" dropdown />
          <NavItem title="Clients" dropdown />
          <AnimatedModalDemo />
        </div>
      </div>
    </nav>
  );
}

const NavItem = ({ title, dropdown = false }) => {
  return (
    <div className="relative group">
      <button className="flex items-center font-bold text-[rgb(255,255,255)]">
        {title}
        {dropdown && <ChevronDown size={16} className="ml-1" />}
      </button>

      {/* Animated Underline Effect */}
      <div className="absolute left-0 w-full h-[2px] bg-[rgb(255,255,255)] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
    </div>
  );
};