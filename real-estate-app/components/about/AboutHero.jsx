import { aboutContent } from "@/data/about";

export default function AboutHero() {
  return (
    <section className="container-custom py-12 sm:py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-neutral-900 sm:text-5xl">
          About us
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          {aboutContent.tagline}
        </p>
      </div>
    </section>
  );
}