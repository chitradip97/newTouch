import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function FloorPlan() {
  return (
    <section className="space-y-4 border-t pt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-neutral-900">Floor Plan</h2>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full gap-2"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Download
        </Button>
      </div>

      <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src="/images/properties/floor-plan.jpg"
          alt="3D floor plan layout"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <p className="text-sm text-neutral-600">
        Interactive 3D floor plan showing the property layout, room dimensions,
        and spatial relationships. Click to explore different angles and
        get detailed measurements.
      </p>
    </section>
  );
}