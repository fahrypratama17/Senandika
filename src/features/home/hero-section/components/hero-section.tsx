"use client"

import { useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/shared/components/ui/carousel";
import { slides } from "../data/hero-data";

export default function CarouselSection() {
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextRef.current?.click();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex justify-center items-center w-full mx-auto">
      <Carousel className="w-full max-w-7xl">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem
              key={slide.id}
              className="h-[500px] w-full"
              style={{background: slide.color}}></CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext ref={nextRef} className="hidden" />
      </Carousel>
    </section>
  );
}
