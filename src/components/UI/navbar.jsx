"use client";

import { useState } from "react";
import { Search, ShoppingCart, Heart, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="">
      <div className="bg-black  text-white text-center text-sm py-2">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="font-bold cursor-pointer">ShopNow</span>
      </div>

      <nav className="bg-white shadow-md w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="text-2xl font-bold">Exclusive</div>

          <ul className="hidden md:flex space-x-6 text-lg font-medium">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:underline">
                Dashboard
              </Link>
            </li>

            <li>
              <Link href="/register" className="hover:underline">
                Sign Up
              </Link>
            </li>
          </ul>

          {/* Search & Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="border px-4 py-1 rounded-md focus:outline-none"
              />
              <Search
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={18}
              />
            </div>
            <Heart className="cursor-pointer" size={24} />

            <Link href="/cart" className="relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-semibold rounded-full px-1">
                3
              </span>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center space-y-4 bg-white py-4 shadow-md">
            <li>
              <Link
                href="/"
                className="hover:underline"
                onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline"
                onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline"
                onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="hover:underline"
                onClick={() => setIsOpen(false)}></Link>{" "}
              Dashboard
            </li>
            <li>
              <Link
                href="/signup"
                className="hover:underline"
                onClick={() => setIsOpen(false)}>
                Sign Up
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
