"use client";
import allexcom from "@/assets/hero-images/all-excom.jpg";
import duothanImg from "@/assets/hero-images/duothan4.0.jpg";
import duothanImg2 from "@/assets/hero-images/duothan4.1.jpg";
import duothanImg4 from "@/assets/hero-images/duothan4.3.jpg";
import skillshare from "@/assets/hero-images/skill-share.jpg";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function HeroCarousel() {
  const images = [duothanImg, duothanImg2, allexcom, duothanImg4, skillshare];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="mx-auto overflow-hidden object-cover xl:max-w-[1920px] xl:max-h-[810px] lg:max-w-[1280px] lg:max-h-[540px] md:max-w-[960px] md:max-h-[405px] sm:max-w-[640px] sm:max-h-[270px]"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="aspect-video">
              <Image
                src={image}
                alt={`carousel image ${index + 1}`}
                width={1920}
                height={1080}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
