"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      className="container-custom py-16 sm:py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2
          id="testimonials-heading"
          className="text-2xl font-bold text-neutral-900 sm:text-3xl"
        >
          What our clients say about us
        </h2>
        <p className="max-w-sm text-sm text-neutral-600">
          We connect buyers and sellers through a trusted platform with
          verified properties, transparent deals, and expert guidance —
          supporting you at every step.
        </p>
      </div>

      <Carousel opts={{ loop: true }} className="mt-10 w-full">
        <CarouselContent>
          {testimonials.map((t) => (
            <CarouselItem key={t.id}>
              <div className="flex flex-col items-center gap-6 rounded-2xl bg-secondary/30 p-8 sm:flex-row sm:p-10">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={`Portrait of ${t.name}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <Quote
                    className="mx-auto mb-2 h-6 w-6 text-primary sm:mx-0"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-neutral-700 sm:text-base">
                    {t.quote}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-neutral-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-neutral-500">{t.role}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-0 rounded-full sm:-left-4" />
        <CarouselNext className="right-0 rounded-full sm:-right-4" />
      </Carousel>
    </section>
  );
}