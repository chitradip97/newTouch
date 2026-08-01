import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section
      className="container-custom py-16 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-12">
        <div>
          <h2
            id="faq-heading"
            className="text-2xl font-bold text-neutral-900 sm:text-3xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 max-w-sm text-sm text-neutral-600">
            We connect buyers and sellers through a trusted platform with
            verified properties, transparent deals, and expert guidance —
            supporting you at every step.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-xl border border-neutral-100 px-4 mb-3 last:mb-0 data-[state=open]:bg-secondary/30"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-neutral-900 hover:no-underline sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-neutral-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}