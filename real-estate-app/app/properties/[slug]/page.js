import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { properties } from "@/data/properties";
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyHeader from "@/components/property/PropertyHeader";
import PropertyTabs from "@/components/property/PropertyTabs";
import InvestmentSidebar from "@/components/property/InvestmentSidebar";
import Facilities from "@/components/property/Facilities";
import FloorPlan from "@/components/property/FloorPlan";

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    return { title: "Property Not Found" };
  }

  return {
    title: `${property.title} - ${property.location}`,
    description: `Luxury ${property.type} in ${property.location}. ${property.beds} beds, ${property.baths} baths, ${property.area} sqft.`,
    openGraph: {
      images: [property.image],
    },
  };
}

export default async function PropertyDetailPage({ params }) {
  const { slug } = await params;
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pt-10">
      <div className="container-custom py-6">
        {/* Back Button */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to properties
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column - Images & Details */}
          <div className="lg:col-span-2 space-y-8">
            <PropertyGallery property={property} />
            <PropertyHeader property={property} />
            <PropertyTabs property={property} />
            <Facilities />
            <FloorPlan />
          </div>

          {/* Right Column - Investment Sidebar */}
          <div className="lg:col-span-1">
            <InvestmentSidebar property={property} />
          </div>
        </div>
      </div>
    </div>
  );
}
