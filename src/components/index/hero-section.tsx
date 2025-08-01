"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";
import * as React from "react";

interface CarouselImage {
  image: StaticImageData;
  text: string;
}

interface HeroCarouselProps {
  cimages: CarouselImage[];
  title?: string;
  gradient: string;
}

export default function HeroCarousel({
  cimages,
  gradient,
  title,
}: HeroCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  );

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent className="h-full">
        {cimages.map((item, index) => (
          <CarouselItem
            key={index}
            className="relative md:h-screen aspect-video"
          >
            <div className="w-full ">
              <Image
                src={item.image}
                alt={`carousel image ${index + 1}`}
                quality={70}
                className="object-cover"
                priority={index === 0}
              />
              <div
                className={
                  "absolute bottom-0 w-full h-20 md:h-[170px] bg-gradient-to-t pb-5 " +
                  gradient
                }
              >
                {title && (
                  <div className="absolute bottom-0 flex flex-row justify-center w-full pb-1 items-center md:h-16">
                    <div className="md:max-w-[1170px] w-full mx-4 xl:px-0 text-center pr-4 md:pr-0">
                      <h1 className="font-semibold text-white xl:text-3xl text-base ">
                        {title}
                      </h1>
                      {/* <p className="text-xs xl:text-base text-white">
                        {item.text}
                      </p> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
