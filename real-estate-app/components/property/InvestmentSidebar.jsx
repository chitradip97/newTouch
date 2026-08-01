"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/data/properties";

const investmentMetrics = [
  { label: "Gross Yield", value: "7.68%" },
  { label: "Gross IRR", value: "12.39%" },
  { label: "Investment Multiple", value: "12.39%" },
  { label: "Total Deal Value", value: "12.39%" },
];

const agent = {
  name: "Neha",
  role: "Property Consultant",
  avatar: "/images/testimonials/avatar-4.jpg",
};

export default function InvestmentSidebar({ property }) {
  const [contacted, setContacted] = useState(false);

  return (
    <div className="sticky top-24 space-y-6">
      {/* Investment Card */}
      <div className="rounded-2xl bg-neutral-50 p-6 border border-neutral-200">
        <h3 className="mb-4 text-sm font-semibold text-neutral-600 uppercase tracking-wide">
          Min Investment
        </h3>
        <p className="mb-6 text-3xl font-bold text-primary">
          {formatPrice(property.price)}
        </p>

        <div className="grid grid-cols-2 gap-4">
          {investmentMetrics.map((metric) => (
            <div key={metric.label} className="rounded-lg bg-white p-3">
              <p className="text-xs text-neutral-500">{metric.label}</p>
              <p className="mt-1 text-lg font-semibold text-neutral-900">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Connect With Agent */}
      <div className="rounded-2xl bg-neutral-50 p-6 border border-neutral-200">
        <h3 className="mb-4 text-sm font-semibold text-neutral-600 uppercase tracking-wide">
          Connect with
        </h3>

        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={agent.avatar}
              alt={agent.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-neutral-900">{agent.name}</p>
            <p className="text-xs text-neutral-500">{agent.role}</p>
          </div>
        </div>

        <Button
          onClick={() => setContacted(true)}
          className="mt-4 w-full rounded-full bg-neutral-900 text-white hover:bg-neutral-800"
        >
          {contacted ? "Message sent!" : "Get in Touch"}
        </Button>

        {contacted && (
          <p className="mt-2 text-xs text-center text-neutral-600">
            We&apos;ll connect you within 2 hours
          </p>
        )}
      </div>

      {/* Key Highlights */}
      <div className="rounded-2xl bg-primary/5 p-6 border border-primary/10">
        <h3 className="mb-3 font-semibold text-neutral-900">Why this property?</h3>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>High rental demand in the area</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>Strong historical appreciation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>Fully furnished and managed</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
            <span>Tax benefits available</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
