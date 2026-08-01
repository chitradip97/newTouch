import Hero from "@/components/home/Hero";
import FeaturedSection from "@/components/home/FeaturedSection";
import Stats from "@/components/home/Stats";
import Discover from "@/components/home/Discover";
import PropertyGrid from "@/components/home/PropertyGrid";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { properties } from "@/data/properties";

export const metadata = {
  title: "Your Trusted Real Estate Partner | Buy, Sell & Rent Properties",
  description:
    "Discover verified homes for rent and sale across 100+ cities. Transparent deals, expert guidance, and 2000+ listings to help you find your dream property.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <Stats />
      <Discover />
      <PropertyGrid
        properties={properties}
        heading="Explore Available Houses Near Your Location"
        subheading="Discover hidden gems in your neighborhood that your dream home is closer than you think — explore beautiful houses modern designs and comfortable."
      />
      <FAQ />
      <Testimonials />
      <CTA />
    </>
  );
}