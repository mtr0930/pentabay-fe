import { Inter } from "next/font/google";
import Footer from "../footer"
import Navbar from "../navbar"
const inter = Inter({ subsets: ["latin"] });

export default function GeneralTradeLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    
    return (
        <>
        <main className={inter.className}>{children}</main>
        </>
    )
  }