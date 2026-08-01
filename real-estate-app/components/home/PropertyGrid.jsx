import PropertyCard from "@/components/home/PropertyCard";

export default function PropertyGrid({ properties, heading, subheading }) {
  return (
    <section
      className="container-custom py-16 sm:py-20"
      aria-labelledby="property-grid-heading"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2
          id="property-grid-heading"
          className="max-w-md text-2xl font-bold text-neutral-900 sm:text-3xl"
        >
          {heading}
        </h2>
        {subheading && (
          <p className="max-w-sm text-sm text-neutral-600">{subheading}</p>
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, index) => (
          <PropertyCard
            key={property.id}
            property={property}
            priority={index < 3}
          />
        ))}
      </div>
    </section>
  );
}