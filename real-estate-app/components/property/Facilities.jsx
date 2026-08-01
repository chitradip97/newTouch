import {
  Bed,
  Bath,
  Wifi,
  Zap,
  Dumbbell,
  Waves,
  Car,
  Trees,
} from "lucide-react";

const facilities = [
  { icon: Bed, label: "2 Bedrooms" },
  { icon: Bath, label: "4 Bathrooms" },
  { icon: Wifi, label: "Smart home system" },
  { icon: Zap, label: "EV Charging" },
  { icon: Dumbbell, label: "Gym" },
  { icon: Waves, label: "Pool" },
  { icon: Car, label: "Garage" },
  { icon: Trees, label: "Garden View" },
];

export default function Facilities() {
  return (
    <section className="space-y-4 border-t pt-8">
      <h2 className="text-2xl font-bold text-neutral-900">Facilities</h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {facilities.map((facility, idx) => {
          const Icon = facility.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 rounded-lg bg-neutral-50 p-4 border border-neutral-200 hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              <Icon className="h-5 w-5 text-neutral-600" aria-hidden="true" />
              <span className="text-sm font-medium text-neutral-900">
                {facility.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}