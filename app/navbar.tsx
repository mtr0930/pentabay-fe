'use client'
import Image from "next/image";
import {routes} from "./routes";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from "./dropdown";

function NavbarDesktop() {
    return (
        <header className="bg-[#f8f9fa] p-4 fixed top-0 left-0 right-0 z-10">
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
                    const { title, href, subroutes } = route;
                    return subroutes && subroutes.length > 0 ? (
                      <Dropdown key={route.title} route={route} />
                    ) : (
                      <Link key={title} className="text-sm font-semibold text-gray-700 hover:text-gray-900" href={href}>
                        {title}
                      </Link>
                    );
                })}
            </nav>
          </div>
        </header>
    )
}

function NavbarMobile() {
    const [isOpen, setOpen] = useState(false);

    return (
        <header className="bg-[#f8f9fa] p-4 fixed top-0 left-0 right-0 z-10">
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
          <Hamburger toggled={isOpen} size={20} toggle={setOpen}/>
        </div>
        <AnimatePresence>
        <div className="mx-auto bg-[#f8f9fa]">
        {isOpen && (
            <motion.ul initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="bg-[#f8f9fa] fixed inset-0 z-50 grid gap-6 items-center justify-center max-w-4xl p-8 backdrop-blur-sm transition-all duration-300 ease-in-out">
                {routes.map((route) => {
                    return (
                        <li key={route.title}>
                            <Link href={route.href} className="block cursor-pointer py-1.5 px-4  hover:text-gray-400 font-medium">
                                {route.title}
                            </Link>
                        </li>
                    )
                })}
            </motion.ul>
        )}
        </div>
        </AnimatePresence>
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