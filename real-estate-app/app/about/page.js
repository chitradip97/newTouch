import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Process from "@/components/about/Process";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "About Us | Your Trusted Real Estate Partner",
  description:
    "Learn about our mission, expertise, and commitment to delivering exceptional real estate solutions and services.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-10">
      <AboutHero />
      <AboutSection />
      <WhyChooseUs />
      <Process />
      <CTA />
    </div>
  );
}