import { MapPin, Ruler, Bed, Bath, Badge } from "lucide-react";
import { formatPrice } from "@/data/properties";

export default function PropertyHeader({ property }) {
  return (
    <section className="space-y-4">
      {/* Badge & Title */}
      <div>
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600">
          <Badge className="h-2 w-2 bg-green-500" aria-hidden="true" />
          New
        </div>
        <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
          {property.title}
        </h1>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1 text-neutral-600">
        <MapPin className="h-4 w-4" aria-hidden="true" />
        <span>{property.location}</span>
      </div>

      {/* Quick Info */}
      <div className="flex flex-wrap gap-6 border-b pb-6 pt-2">
        <div className="flex items-center gap-2 text-sm">
          <Ruler className="h-4 w-4 text-neutral-500" aria-hidden="true" />
          <span className="font-medium">{property.area.toLocaleString()} sqft</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Bed className="h-4 w-4 text-neutral-500" aria-hidden="true" />
          <span className="font-medium">{property.beds} bed</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Bath className="h-4 w-4 text-neutral-500" aria-hidden="true" />
          <span className="font-medium">{property.baths} bath</span>
        </div>
      </div>

      {/* Price */}
      <div className="pt-2">
        <p className="text-sm text-neutral-600">Min Investment</p>
        <p className="text-3xl font-bold text-primary">
          {formatPrice(property.price)}
        </p>
      </div>
    </section>
  );
}