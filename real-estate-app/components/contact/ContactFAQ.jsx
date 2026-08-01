import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    id: "faq-1",
    question: "What differentiates Glimpse from other marketing analytics tools?",
    answer:
      "Glimpse connects all your marketing channels into one dashboard, so you get a complete picture of your campaign performance without manually combining data from different tools.",
  },
  {
    id: "faq-2",
    question: "What does Glimpse do?",
    answer:
      "Glimpse is a unified marketing analytics platform that brings together data from all your marketing channels, providing real-time insights and comprehensive performance metrics in one intuitive dashboard.",
  },
  {
    id: "faq-3",
    question: "Why Glimpse vs building integrations in-house?",
    answer:
      "Building integrations in-house requires significant engineering resources, maintenance overhead, and continuous updates as APIs change. Glimpse handles all of this for you, letting your team focus on strategy instead.",
  },
  {
    id: "faq-4",
    question: "What integrations does Glimpse support?",
    answer:
      "Glimpse supports integrations with all major platforms including Google Analytics, Facebook Ads, Instagram Ads, LinkedIn Ads, Twitter Ads, Mailchimp, HubSpot, Shopify, and many more.",
  },
  {
    id: "faq-5",
    question: "I use a tool that's not listed. What next?",
    answer:
      "Contact our support team and we'll help you get set up. We regularly add new integrations based on customer feedback and can often create custom solutions for enterprise clients.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="container-custom py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold text-neutral-900">
            Frequently asked question (FAQ)
          </h2>
          <p className="mt-3 text-neutral-600">
            Got questions about open banking? We've got answers!
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-6 rounded-full gap-2"
          >
            <Link href="/help-center" target="_blank">
              Help Center
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Right Column - Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-lg border border-neutral-200 px-4 mb-3 last:mb-0 data-[state=open]:bg-neutral-50"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-neutral-900 hover:no-underline py-4 sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-neutral-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}