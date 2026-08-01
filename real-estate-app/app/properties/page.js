import PropertyGrid from "@/components/home/PropertyGrid";
import { properties } from "@/data/properties";

export const metadata = {
  title: "Properties | EstateCo",
  description:
    "Explore verified homes for sale and rent with transparent pricing, property details, and expert support.",
  alternates: {
    canonical: "/properties",
  },
};

export default function PropertiesPage() {
  return (
    <div className="bg-white pt-24">
      <PropertyGrid
        properties={properties}
        heading="Explore Available Houses Near Your Location"
        subheading="Browse verified properties with transparent prices, useful details, and expert guidance for your next move."
      />
    </div>
  );
}
