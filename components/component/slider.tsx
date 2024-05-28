
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import Image from "next/image";

export function Slider() {
  return (
    <section className="mx-auto max-w-7xl">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                alt="Slide 1"
                className="w-full h-full object-cover"
                height="540"
                src="/lng-boat.jpg"
                style={{
                  aspectRatio: "960/540",
                  objectFit: "cover",
                }}
                width="960"
              />
              <div className="absolute overlay-bg  overlay-text text-center">
          <div className='overlay-text fade-in'>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-md">
          Penta BAY
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white drop-shadow-md">
          NAVIGATING LNG INNOVATION
        </p>
        </div>
      </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                alt="Slide 2"
                className="w-full h-full object-cover"
                height="540"
                src="/power-station.jpg"
                style={{
                  aspectRatio: "960/540",
                  objectFit: "cover",
                }}
                width="960"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-center justify-center">
                <h2 className="text-3xl sm:text-5xl font-bold text-white text-center max-w-md">
                Full Lifecycle Management for Every Power Plant
                </h2>
              </div>
            </div>
          </CarouselItem>
          
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-black hover:text-black focus:text-gray-300 transition-colors">
          <span className="sr-only">Previous</span>
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-black hover:text-black focus:text-gray-300 transition-colors">
          <span className="sr-only">Next</span>
        </CarouselNext>
      </Carousel>
    </section>
  )
}

