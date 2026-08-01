"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { featuredProperties } from "@/data/properties";

export default function FeaturedSection() {
  return (
    <section
      className="container-custom py-16 sm:py-20"
      aria-labelledby="featured-heading"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2
            id="featured-heading"
            className="text-2xl font-bold text-neutral-900 sm:text-3xl"
          >
            Your Primary home might begin to feel left out
          </h2>
          <p className="mt-3 max-w-md text-sm text-neutral-600">
            We connect buyers and sellers through a trusted platform with
            verified properties, transparent deals, and expert guidance —
            supporting you at every step.
          </p>

          <div className="relative mt-6 h-72 w-full overflow-hidden rounded-2xl sm:h-96">
            <Image
              src="/images/featured-main.jpg"
              alt="Modern lakeside home with warm interior lighting at dusk"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <Carousel
          opts={{ loop: true, align: "start" }}
          className="w-full"
        >
          <CarouselContent>
            {featuredProperties.map((item) => (
              <CarouselItem key={item.id}>
                <div className="relative h-72 w-full overflow-hidden rounded-2xl sm:h-96">
                  <Image
                    src={item.image}
                    alt="Featured property exterior"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-lg font-semibold text-white sm:text-xl">
                      {item.title}
                    </p>
                    <p className="mt-1 max-w-xs text-xs text-white/80 sm:text-sm">
                      We connect buyers and sellers through a trusted
                      platform with verified properties, transparent deals,
                      and expert guidance.
                    </p>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="mt-4 rounded-full"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-4 flex items-center justify-end gap-2">
            <CarouselPrevious className="static translate-y-0 rounded-full" />
            <CarouselNext className="static translate-y-0 rounded-full" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}