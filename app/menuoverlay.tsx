'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
interface NavbarProps {
    navbarOpen: boolean;
    setNavbarOpen: any;
}
const MenuOverlay = ({ navbarOpen, setNavbarOpen }:NavbarProps) => {
    const router = useRouter();
    return (
        <nav
        className={`menuOverlay fixed block top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-white text-black bg-opacity-100 transform delay-100 transition-all duration-300 ${
            navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
        }`}
        >
            <div data-state="closed"  className="border-b">
    <h3  data-state="closed" className="flex">
      <button
        type="button"
        aria-controls="radix-:r29:"
        aria-expanded="false"
        data-state="closed"
        
        id="radix-:r28:"
        className="flex-1 py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180 flex items-center justify-between"
        data-radix-collection-item=""
        onClick={() => {
            setNavbarOpen(!navbarOpen);
            router.push('/');
            }}
      >
      HOME
      </button>
    </h3>
  </div>
  <div data-state="closed"  className="border-b">
    <h3  data-state="closed" className="flex">
      <button
        type="button"
        aria-controls="radix-:r2b:"
        aria-expanded="false"
        data-state="closed"
        
        id="radix-:r2a:"
        className="flex-1 py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180 flex items-center justify-between"
        data-radix-collection-item=""
        onClick={() => {
            setNavbarOpen(!navbarOpen);
            router.push('/generaltrade');
            }}
      >
      GENERAL TRADE
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 shrink-0 transition-transform duration-200"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg> */}
      </button>
    </h3>
    <div
      data-state="closed"
      id="radix-:r2b:"
      role="region"
      aria-labelledby="radix-:r2a:"
      
      className="hidden overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    ></div>
  </div>
  <div data-state="closed"  className="border-b">
    <h3  data-state="closed" className="flex">
      <button
        type="button"
        aria-controls="radix-:r2d:"
        aria-expanded="false"
        data-state="closed"
        id="radix-:r2c:"
        className="flex-1 py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180 flex items-center justify-between"
        data-radix-collection-item=""
        onClick={() => {
            setNavbarOpen(!navbarOpen);
            router.push('/project');
            }}
      >
      PROJECT
      </button>
    </h3>
  </div>
  <div data-state="closed"  className="border-b">
    <h3  data-state="closed" className="flex">
      <button
        type="button"
        aria-controls="radix-:r2f:"
        aria-expanded="false"
        data-state="closed"
        
        id="radix-:r2e:"
        className="flex-1 py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180 flex items-center justify-between"
        data-radix-collection-item=""
        onClick={() => {
            setNavbarOpen(!navbarOpen);
            router.push('/aboutus');
            }}
      >
      ABOUT US
        </button>
    </h3>
  </div>
  <div data-state="closed"  className="border-b">
    <h3  data-state="closed" className="flex">
      <button
        type="button"
        aria-controls="radix-:r2h:"
        aria-expanded="false"
        data-state="closed"
        
        id="radix-:r2g:"
        className="flex-1 py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180 flex items-center justify-between"
        data-radix-collection-item=""
        onClick={() => {
            setNavbarOpen(!navbarOpen);
            router.push('/contact');
            }}
      >
      CONTACT
      </button>
    </h3>
  </div>
      
        </nav>
);
};

export default MenuOverlay;