import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Discover() {
  return (
    // <section
    //   className="bg-secondary/40"
    //   aria-labelledby="discover-heading"
    // >
    //   <div className="container-custom grid grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
    //     <div>
    //       <h2
    //         id="discover-heading"
    //         className="text-2xl font-bold text-neutral-900 sm:text-3xl"
    //       >
    //         Discover Properties with the Best Value
    //       </h2>
    //       <p className="mt-3 max-w-md text-sm text-neutral-600">
    //         We connect buyers and sellers through a trusted platform with
    //         verified properties, transparent deals, and expert guidance —
    //         supporting you at every step.
    //       </p>
    //       <Button asChild className="mt-6 rounded-full px-6">
    //         <Link href="/properties">
    //           Find Nearest Properties
    //           <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
    //         </Link>
    //       </Button>
    //     </div>

    //     <div
    //       className="relative h-64 w-full overflow-hidden rounded-2xl bg-[url('/images/map-pattern.WebP')] bg-cover bg-center sm:h-80"
    //       role="img"
    //       aria-label="Illustrative map showing nearby property locations"
    //     >
    //       <div className="absolute inset-0 bg-white/10" />
    //       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    //         <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
    //           <MapPin
    //             className="h-6 w-6 fill-primary text-primary"
    //             aria-hidden="true"
    //           />
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </section>


    <section
  className="bg-secondary/40"
  aria-labelledby="discover-heading"
>
  <div className="container-custom grid grid-cols-1 items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
    <div>
      <h2
        id="discover-heading"
        className="text-2xl font-bold text-neutral-900 sm:text-3xl"
      >
        Discover Properties with the Best Value
      </h2>

      <p className="mt-3 max-w-md text-sm text-neutral-600">
        We connect buyers and sellers through a trusted platform with
        verified properties, transparent deals, and expert guidance —
        supporting you at every step.
      </p>

      <Button asChild className="mt-6 rounded-full px-6">
        <Link href="/properties">
          Find Nearest Properties
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>

    <div className="relative h-64 overflow-hidden rounded-2xl shadow-lg sm:h-80">
      {/* <iframe
        title="Dumdum, Kolkata Location"
        src="https://www.google.com/maps?q=Dumdum,Kolkata&z=14&output=embed"
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      /> */}
      <iframe title="Dumdum, Kolkata Location"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d804.0548147256734!2d88.39503886058671!3d22.618921393377263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89dfbc2fca39d%3A0x3d52ec992d41da09!2sKundubagan%2C%20Ghughudanga%2C%20Dum%20Dum%2C%20South%20Dumdum%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1785344631911!5m2!1sen!2sin" 
       className="h-full w-full border-0"
       loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"/>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl ring-4 ring-white/50">
          <MapPin className="h-8 w-8 fill-green-600 text-green-600 animate-bounce" />
        </div>
      </div>
    </div>
  </div>
</section>
  );
}