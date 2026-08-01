"use client";

import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const propertyDetails = {
  description: [
    "Welcome to this stunning luxury villa located in the heart of Rego Park, where elegance meets comfort. Spanning an impressive 2,500 square feet, this exquisite property boasts 12 spacious rooms, perfect for both relaxation and entertainment. The villa is designed with a perfect blend of modern finishes and classic charm, featuring high ceilings, large windows that flood the rooms with natural light, and beautiful hardwood floors that create a warm and inviting atmosphere.",
    "The thoughtfully designed layout includes two well-appointed baths, ensuring convenience for both residents and guests. The gourmet kitchen is a chef's dream, complete with top-of-the-line appliances, sleek cabinetry, and an expansive island that encourages gatherings and culinary adventures. Whether you're hosting intimate dinner parties or large celebrations, this villa provides the perfect setting for memorable moments.",
    "Step outside to discover a resort-like outdoor space, complete with a pristine swimming pool, manicured gardens, and comfortable seating areas. The property also includes a detached guest house, offering privacy and flexibility for guests or potential rental income opportunities.",
  ],
  investment: [
    "This property represents an exceptional investment opportunity in one of the most sought-after neighborhoods. With strong rental demand and consistent appreciation, this villa is positioned to deliver impressive returns.",
    "The property qualifies for several tax benefits and investment incentives. Historical performance data shows an average annual appreciation of 6-8% in this market segment.",
  ],
  offering: [
    "Offering includes the main villa with all furnishings and current rental management setup. Seller is willing to consider seller financing for qualified buyers.",
    "Flexible closing timeline available. Property can be delivered fully managed with existing tenant base or vacant.",
  ],
  performance: [
    "5-year average ROI: 12.39%",
    "Occupancy rate: 92% (average)",
    "Annual rental income projection: $85,000",
    "Property appreciation: Historical 7.2% annually",
    "Days on market: 15 (low for class A properties)",
  ],
};

export default function PropertyTabs() {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <section className="border-t pt-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full gap-0">
        {/* <TabsList
          variant="line"
          className="!h-auto w-full justify-start overflow-x-auto border-b !p-0"
        >
          <TabsTrigger className="!h-auto flex-none rounded-none px-0 py-3 pr-6" value="details">
            Property details
          </TabsTrigger>
          <TabsTrigger className="!h-auto flex-none rounded-none px-0 py-3 pr-6" value="investment">
            Investment details
          </TabsTrigger>
          <TabsTrigger className="!h-auto flex-none rounded-none px-0 py-3 pr-6" value="offering">
            Offering
          </TabsTrigger>
          <TabsTrigger className="!h-auto flex-none rounded-none px-0 py-3" value="performance">
            Performance
          </TabsTrigger>
        </TabsList> */}
        <TabsList className="grid  grid-cols-2 sm:grid-cols-4 border-b">
          <TabsTrigger value="details">Property details</TabsTrigger>
          <TabsTrigger value="investment">Investment details</TabsTrigger>
          <TabsTrigger value="offering">Offering</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="mt-4 space-y-3">
          <div className="space-y-2 text-neutral-600">
            {propertyDetails.description.map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <button className="text-sm font-semibold text-neutral-900 hover:text-primary transition-colors">
            Show more
          </button>
        </TabsContent>

        <TabsContent value="investment" className="mt-4">
          <div className="space-y-2 text-neutral-600">
            {propertyDetails.investment.map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="offering" className="mt-4">
          <div className="space-y-2 text-neutral-600">
            {propertyDetails.offering.map((para, idx) => (
              <p key={idx} className="leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="performance" className="mt-4">
          <ul className="space-y-2 text-neutral-600">
            {propertyDetails.performance.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </section>
  );
}
