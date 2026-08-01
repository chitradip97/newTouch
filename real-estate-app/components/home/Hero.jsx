import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSearch from "@/components/home/HeroSearch";

export default function Hero() {
  return (
    <section
      className="relative"
      aria-label="Hero — Your Trusted Real Estate Partner"
    >
      <div className="relative h-[560px] w-full overflow-hidden sm:h-[620px] lg:h-[680px]">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern house nestled among green forest trees"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20" />

        <div className="container-custom relative flex h-full flex-col justify-center pt-20">
          <div className="max-w-xl">
            <span className="mb-4 inline-block rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-primary">
              Home &nbsp;•&nbsp; Apartments &nbsp;•&nbsp; Residential
            </span>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Your Trusted Real
              <br />
              Estate Partner
            </h1>
            <p className="mt-4 max-w-md text-sm text-white/90 sm:text-base">
              We connect buyers and sellers through a trusted platform with
              verified properties, transparent deals, and expert guidance —
              supporting you at every step.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 rounded-full px-6 hidden sm:inline-flex"
            >
              <Link href="/properties">
                Explore Properties
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container-custom -mt-16 pb-6 sm:-mt-20 lg:-mt-24">
        <HeroSearch />
      </div>
    </section>
  );
}