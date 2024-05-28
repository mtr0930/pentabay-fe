'use client'
import Image from "next/image";
import { Slider } from "@/components/component/slider";

export default function Home() {
  return (
    <div className="bg-white mt-16">
        <Slider/>
          <section className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="gap-8 block">
              <div className="space-y-4">
                <Image
                  alt="General Trade"
                  className="w-full h-auto"
                  height="300"
                  src="/general_trade.jpg"
                  style={{
                    aspectRatio: "600/300",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h2 className="text-2xl font-bold">GENERAL TRADE</h2>
                <p>
                  We can proudly say PENTABAY is capable to provide the optimal product solutions across all industries
                  and geographic.
                </p>
                <a className="text-blue-600 hover:underline" href="/generaltrade">
                  Read More
                </a>
              </div>
              <div className="space-y-4">
                <Image
                  alt="Project"
                  className="w-full h-auto"
                  height="300"
                  src="/projects.jpg"
                  style={{
                    aspectRatio: "600/300",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h2 className="text-2xl font-bold">PROJECT</h2>
                <p>
                  Penta Bay has extensive experience across all industries. Our highly customized teams bring each client
                  a combination of deep industry knowledge and expert perspectives from other industries on the challenge
                  at stake, to offer our clients fresh perspectives.
                </p>
                <a className="text-blue-600 hover:underline" href="/project">
                  Read More
                </a>
              </div>
            </div>
          </section>
          <section className="bg-gray-100">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
              <div className="space-y-4">
                <Image
                  alt="About Us"
                  className="w-full h-auto"
                  height="300"
                  src="/about_us.jpg"
                  style={{
                    aspectRatio: "600/300",
                    objectFit: "cover",
                  }}
                  width="600"
                />
                <h2 className="text-2xl font-bold">ABOUT US</h2>
                <p>
                  We are designed to operate as one. We are a single global partnership united by a strong set of values,
                  focused on client impact.
                </p>
                <a className="text-blue-600 hover:underline" href="/aboutus">
                  Read More
                </a>
              </div>
            </div>
          </section>
          <section className="container mx-auto px-4 py-8 max-w-7xl">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">CONTACT</h2>
              <div className="space-y-2">
                <p>
                  #604 Ace Gwanggyo Tower, 91 Changnyong-daero 256 beon-gil, Yeongtong-gu, Suwon-si, Gyeonggi-do, South
                  Korea
                </p>
                <p>Tel: +82 70 7875 3536</p>
                <p>Fax: +82 303 3443 8880</p>
                <a className="text-blue-600 hover:underline" href="#">
                  info@pentabay.org
                </a>
              </div>
              <form className="grid grid-cols-2 gap-4">
                <input className="border p-2" placeholder="Name" type="text" />
                <input className="border p-2" placeholder="Email" type="text" />
                <input className="border p-2 col-span-2" placeholder="Subject" type="text" />
                <textarea className="border p-2 col-span-2 h-32" placeholder="Message" />
                <button className="bg-blue-600 text-white py-2 px-4 hover:bg-blue-700 col-span-2" type="submit">
                  Send
                </button>
              </form>
            </div>
          </section>
      </div>
  );
}
