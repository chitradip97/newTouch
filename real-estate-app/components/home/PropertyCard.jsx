import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Ruler, MapPin } from "lucide-react";
import { formatPrice } from "@/data/properties";

export default function PropertyCard({ property, priority = false }) {
  const { slug, title, location, price, beds, baths, area, image, type } =
    property;

  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <Link
        href={`/properties/${slug}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={image}
            alt={`${title} — ${type} in ${location}`}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-primary">
            {type}
          </span>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-1 text-xs text-neutral-500">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{location}</span>
          </div>

          <h3 className="mt-1 truncate text-sm font-semibold text-neutral-900 sm:text-base">
            {title}
          </h3>

          <div className="mt-3 flex items-center gap-4 text-xs text-neutral-600">
            <span className="flex items-center gap-1">
              <Bed className="h-3.5 w-3.5" aria-hidden="true" />
              {beds}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5" aria-hidden="true" />
              {baths}
            </span>
            <span className="flex items-center gap-1">
              <Ruler className="h-3.5 w-3.5" aria-hidden="true" />
              {area} sqft
            </span>
          </div>

          <p className="mt-3 text-base font-bold text-primary sm:text-lg">
            {formatPrice(price)}
          </p>
        </div>
      </Link>
    </article>
  );
}