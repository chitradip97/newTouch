import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
// import BrandLogos from "@/components/contact/BrandLogos";
import ContactFAQ from "@/components/contact/ContactFAQ";

export const metadata = {
  title: "Contact Us | Your Trusted Real Estate Partner",
  description:
    "Get in touch with our dedicated customer support team. We're here to help with any questions about properties, investments, or our services.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="container-custom py-16 sm:py-20">
        <div className="mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-4">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            Contact
          </span>
          <h1 className="text-4xl font-bold text-neutral-900 sm:text-5xl">
            How can we help you today?
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Our dedicated customer support team is just a message or call away.
          </p>
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <ContactInfo />

          {/* Right Column - Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* Brand Logos Section */}
      {/* <BrandLogos /> */}

      {/* FAQ Section */}
      <ContactFAQ />
    </div>
  );
}