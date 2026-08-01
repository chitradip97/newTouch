"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  { id: 1, src: "/images/properties/property-1.jpg", alt: "Exterior view" },
  { id: 2, src: "/images/properties/room-1.jpg", alt: "Master bedroom" },
  { id: 3, src: "/images/properties/room-2.jpg", alt: "Kitchen" },
  { id: 4, src: "/images/properties/room-3.jpg", alt: "Living room" },
  { id: 5, src: "/images/properties/room-4.jpg", alt: "Bathroom" },
  { id: 6, src: "/images/properties/room-5.jpg", alt: "Garden view" },
];

export default function PropertyGallery({ property }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handlePrevious = () => {
    setSelectedImage((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="space-y-4">
      {/* Main Image */}
      <div
        className="relative h-96 w-full overflow-hidden rounded-2xl cursor-pointer group"
        onClick={() => setLightboxOpen(true)}
      >
        <Image
          src={galleryImages[selectedImage].src}
          alt={galleryImages[selectedImage].alt}
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-5 gap-3">
        {galleryImages.map((img, idx) => (
          <button
            key={img.id}
            onClick={() => setSelectedImage(idx)}
            className={`relative h-20 overflow-hidden rounded-lg transition-all ${
              selectedImage === idx
                ? "ring-2 ring-primary"
                : "hover:ring-2 hover:ring-neutral-300"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100px"
              className="object-cover"
            />
          </button>
        ))}
        <button
          onClick={() => setLightboxOpen(true)}
          className="relative h-20 flex items-center justify-center rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors font-semibold text-neutral-600 text-xs"
        >
          View All
          <br />
          Images
        </button>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl">
          <div className="relative h-96 w-full">
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 hover:bg-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 hover:bg-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}