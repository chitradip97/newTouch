"use client";

import Image from "next/image";
import { processSteps } from "@/data/about";
import { useState } from "react";

export default function Process() {
  const [expandedStep, setExpandedStep] = useState(0);

  return (
    <section className="container-custom py-16 sm:py-20">
      {/* Main Process Section */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-16">
        {/* Left Column - Text */}
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            Process
          </h2>
          <p className="mt-4 text-neutral-600">
            As a web developer, I follow a comprehensive and structured working process to
            ensure that every project is delivered on time, within budget, and meets the
            highest quality standards.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            Our recent work
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-96 overflow-hidden rounded-3xl">
          <Image
            src="/images/about/process.jpg"
            alt="Our team working on development process"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Process Steps */}
      <div className="space-y-4">
        {processSteps.map((step, idx) => (
          <div
            key={idx}
            onClick={() => setExpandedStep(expandedStep === idx ? -1 : idx)}
            className="group cursor-pointer rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-primary/30 hover:bg-neutral-50"
          >
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                {step.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-neutral-900">
                  {step.title}
                </h3>

                {expandedStep === idx && (
                  <p className="mt-3 text-sm text-neutral-600">
                    {step.description}
                  </p>
                )}
              </div>

              <div className="mt-1 text-neutral-400 group-hover:text-primary transition-colors text-xl flex-shrink-0">
                {expandedStep === idx ? "−" : "+"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}