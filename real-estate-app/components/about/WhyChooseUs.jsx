import { whyChooseUs } from "@/data/about";

export default function WhyChooseUs() {
  return (
    <section className="container-custom py-16 sm:py-20">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
          Why choose us
        </h2>
        <p className="mt-4 text-neutral-600">
          Thank you for considering us as your web developer. We believe that our experience,
          skills, and dedication set us apart and make us the ideal choice for your project.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {whyChooseUs.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 hover:border-primary/30 hover:bg-primary/5 transition-all"
          >
            <div className="mb-4 text-4xl">{item.icon}</div>
            <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}