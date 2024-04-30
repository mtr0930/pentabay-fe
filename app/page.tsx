import Image from "next/image";

export default function Home() {
  return (
      <div className="bg-white">
        <header className="bg-[#f8f9fa] p-4">
          <div className="container mx-auto flex items-center justify-between">
            <a className="flex items-center space-x-2" href="#">
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
            </a>
            <nav className="flex space-x-4">
              <a className="text-sm font-semibold text-gray-700 hover:text-gray-900" href="#">
                HOME
              </a>
              <a className="text-sm font-semibold text-gray-700 hover:text-gray-900" href="#">
                GENERAL TRADE
              </a>
              <a className="text-sm font-semibold text-gray-700 hover:text-gray-900" href="#">
                PROJECTS
              </a>
              <a className="text-sm font-semibold text-gray-700 hover:text-gray-900" href="#">
                ABOUT US
              </a>
              <a className="text-sm font-semibold text-gray-700 hover:text-gray-900" href="#">
                CONTACT
              </a>
            </nav>
          </div>
        </header>
        <main>
          <section className="relative">
            <Image
              alt="Skyscrapers"
              className="w-full h-auto"
              height="600"
              src="/skyscraper.jpg"
              style={{
                aspectRatio: "1440/600",
                objectFit: "cover",
              }}
              width="1440"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
              <Image
                alt="Penta Bay logo"
                className="h-20 w-20"
                height="80"
                src="/pentabay_logo.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "fill",
                }}
                width="80"
              />
              <h1 className="text-4xl font-bold text-white">Penta BAY</h1>
              <p className="text-lg text-white mt-2 text-center">
                YOUR TRUSTWORTHY PARTNER
                <br />
                DELIVERS PERFORMANCE EXCELLENCE
              </p>
            </div>
          </section>
          <section className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 gap-8">
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
                <a className="text-blue-600 hover:underline" href="#">
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
                <h2 className="text-2xl font-bold">PROJECTS</h2>
                <p>
                  Penta Bay has extensive experience across all industries. Our highly customized teams bring each client
                  a combination of deep industry knowledge and expert perspectives from other industries on the challenge
                  at stake, to offer our clients fresh perspectives.
                </p>
                <a className="text-blue-600 hover:underline" href="#">
                  Read More
                </a>
              </div>
            </div>
          </section>
          <section className="bg-gray-100">
            <div className="container mx-auto px-4 py-8">
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
                <a className="text-blue-600 hover:underline" href="#">
                  Read More
                </a>
              </div>
            </div>
          </section>
          <section className="container mx-auto px-4 py-8">
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
        </main>
        <footer className="bg-[#f8f9fa] p-4">
          <div className="container mx-auto grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold">TRADE GENERAL</h3>
              <ul className="space-y-1 text-sm">
                <li>Crude Oil</li>
                <li>Refined Product & Energy</li>
                <li>Bulk Materials</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">PROJECTS</h3>
              <ul className="space-y-1 text-sm">
                <li>Petro Chemicals</li>
                <li>Steel</li>
                <li>Power</li>
                <li>Private Equity</li>
                <li>Oil, Gas & Energy</li>
                <li>Power</li>
                <li>ICT & Telecommunications</li>
                <li>Technology Development</li>
                <li>Consumer Market</li>
                <li>Healthcare</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm py-4">© 2023 by Penta Bay Co.,LTD</div>
        </footer>
      </div> 
  );
}
