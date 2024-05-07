'use client'
import Link from "next/link";
import Image from "next/image";
import { JSX, SVGProps, useState } from "react";
import React from 'react';



export default function NavBar() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  }

  return (
    <>
    <nav className="bg-white fixed top-0 left-0 right-0 z-10 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
          <Link className="flex items-center space-x-2" href="#">
              <Image
                alt="Penta Bay logo"
                className="h-10 w-10"
                height="40"
                src="/pentabay_logo.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "fill",
                }}
                width="40"
              />
              <span className="text-xl font-bold">Penta BAY</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4 font-bold">
              <a href="/" className=" group text-black transition duration-300">HOME<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span></a>
              <a href="/generaltrade" className=" group text-black transition duration-300">GENERAL TRADE<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span></a>
              <a href="/project" className=" group text-black transition duration-300">PROJECT<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span></a>
              <a href="/" className=" group text-black transition duration-300">ABOUT US<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span></a>
              <a href="/" className=" group text-black transition duration-300">CONTACT<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span></a>
            </div>

          </div>
        <div className="md:hidden flex items-center">
          <button className="inline-flex items-center justify-center p-2 rounded-md text-black md:text-black 
          hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
          onClick={toggleNavbar}>
            {isClick ? (
              <svg  className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"/>
</svg>
            ) : (
              <svg  className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"/>
</svg>
            )}
          </button>
        </div>
        </div>
      </div>
        {isClick && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right font-bold">
              <a href="/" className=" group block text-black transition duration-300">HOME</a>
              <Link href="/generaltrade" className=" group block text-black transition duration-300">GENERAL TRADE</Link>
              <a href="/project" className=" group block text-black transition duration-300">PROJECT</a>
              <a href="/" className=" group block text-black transition duration-300">ABOUT US</a>
              <a href="/" className=" group block text-black transition duration-300">CONTACT</a>
          </div>
        )}
    </nav>
    </>
  )
}