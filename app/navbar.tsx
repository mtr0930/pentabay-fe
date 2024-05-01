'use client'
import Image from "next/image";
import {routes} from "./routes";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Hamburger from "hamburger-react";

function NavbarDesktop() {
    return (
        <header className="bg-[#f8f9fa] p-4">
          <div className="container flex mx-auto items-center justify-between">
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
            <nav className="flex space-x-4">
                {routes.map((route) => {
                    const { title, href } = route;
                    return (
                        <Link key={title} className="text-sm font-semibold text-gray-700 hover:text-gray-900" href={href}>
                            {title}
                        </Link>
                    )
                })}
            </nav>
          </div>
        </header>
    )
}

function NavbarMobile() {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="bg-[#f8f9fa] p-4">
        <div className="container mx-auto flex items-center justify-between">
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
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        </div>
        <div className="container mx-auto">
        {isOpen && (
            <ul className="block pl-0 mb-0">
                {routes.map((route) => {
                    return (
                        <li key={route.title}>
                            <Link href={route.href} className="block cursor-pointer py-1.5 px-4  hover:text-gray-400 font-medium">
                                {route.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )}
        </div>
      </header>
    )
}

export default function Navbar() {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1024px)"
    })

    const [desktop, setDesktop] = useState(false);

    useEffect(() => {
        setDesktop(isDesktop)
    }, [isDesktop])

    return (
        desktop ? <NavbarDesktop/> : <NavbarMobile/>
    )
}