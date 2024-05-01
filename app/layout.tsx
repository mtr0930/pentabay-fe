import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { FixedWidth } from "./fixedwidth";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Penta BAY",
  description: "Penta BAY | Trade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <FixedWidth>
        <main className={inter.className}>{children}</main>
        </FixedWidth>
        <Footer/>
      </body>
    </html>
  );
}
