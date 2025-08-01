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
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {cimages.map((item, index) => (
          <CarouselItem key={index} className="relative aspect-video">
            <div className="w-full aspect-video">
              <Image
                src={item.image}
                alt={`carousel image ${index + 1}`}
                quality={70}
                className="w-full"
              />
              <div
                className={
                  "absolute bottom-0 w-full h-[170px] bg-gradient-to-t pb-5 " +
                  gradient
                }
              >
                {title && (
                  <div className="absolute bottom-0 flex flex-row justify-center w-full pb-5">
                    <div className="max-w-[1170px] w-full px-5 xl:px-0">
                      <h1 className="font-semibold text-white xl:text-3xl text-base pb-2">
                        {title}
                      </h1>
                      <p className="text-xs xl:text-base text-white">
                        {item.text}
                      </p>
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
