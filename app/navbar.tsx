'use client'
import Link from "next/link";
import Image from "next/image";
import { JSX, SVGProps, useState } from "react";
import React from 'react';
import MenuOverlay from "./menuoverlay";


export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
    setNavbarOpen(!navbarOpen);
  }

  return (
    <>
    <nav className="bg-white fixed top-0 left-0 right-0 z-10 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
          <Link className="flex items-center space-x-2" href="/">
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
              <span className="text-2xl font-bold">Penta BAY</span>
            </Link>
          </div>
          <div className="navbar">
            <div className="ml-4 flex items-center space-x-4 font-bold text-2xl">
              <Link href="/" className=" group text-black transition duration-300">HOME<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span></Link>
              <Link href="/generaltrade" className=" group text-black transition duration-300">GENERAL TRADE<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span></Link>
              <Link href="/project" className=" group text-black transition duration-300">PROJECT<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span></Link>
              <Link href="/aboutus" className=" group text-black transition duration-300">ABOUT US<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span></Link>
              <Link href="/contact" className=" group text-black transition duration-300">CONTACT<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span></Link>
            </div>

          </div>
        <div className="hamburger flex items-center">
              <button
              className="lg:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <span
                    className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
                        navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                    }`}
                    ></span>
                    <span
                    className={`absolute h-0.5 bg-black transform transition-all duration-200 ease-in-out ${
                        navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                    }`}
                    ></span>
                    <span
                    className={`absolute h-0.5 w-5 bg-black transform transition duration-300 ease-in-out ${
                        navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                    }`}
                    ></span>
                </div>
              </button>
        </div>
        </div>
      </div>
        {/* {isClick && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right font-bold">
              <a href="/" className=" group block text-black transition duration-300">HOME</a>
              <a href="/generaltrade" className=" group block text-black transition duration-300">GENERAL TRADE</a>
              <a href="/project" className=" group block text-black transition duration-300">PROJECT</a>
              <a href="/aboutus" className=" group block text-black transition duration-300">ABOUT US</a>
              <a href="/contact" className=" group block text-black transition duration-300">CONTACT</a>
          </div>
        )} */}
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
    </nav>
    </>
  )
}