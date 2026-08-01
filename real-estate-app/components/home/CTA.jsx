import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="container-custom pb-16 sm:pb-20" aria-labelledby="cta-heading">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="relative h-72 w-full sm:h-80">
          <Image
            src="/images/cta-bg.jpg"
            alt="Modern building facade with geometric architectural lines"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2
            id="cta-heading"
            className="max-w-xl text-2xl font-bold text-white sm:text-4xl"
          >
            Ready to make your Dream property a reality
          </h2>
          <p className="mt-3 max-w-md text-sm text-white/85">
            We connect buyers and sellers through a trusted platform with
            verified properties, transparent deals, and expert guidance —
            supporting you at every step.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-full px-6">
            <Link href="/properties">
              Start Now
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}