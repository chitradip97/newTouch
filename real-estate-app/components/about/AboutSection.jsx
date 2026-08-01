// import Image from "next/image";
// import Link from "next/link";
// import { aboutContent } from "@/data/about";
// import { Button } from "@/components/ui/button";

// export default function AboutSection() {
//   return (
//     <section className="container-custom py-16 sm:py-20">
//       <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
//         {/* Left Column - Image */}
//         <div className="overflow-hidden rounded-3xl h-96 sm:h-full min-h-96">
//           <Image
//             src="/images/about/team.jpg"
//             alt="Our dedicated team working together on projects"
//             fill
//             sizes="(max-width: 1024px) 100vw, 50vw"
//             className="object-cover"
//           />
//         </div>

//         {/* Right Column - Content */}
//         <div className="space-y-6">
//           {aboutContent.description.map((para, idx) => (
//             <p key={idx} className="text-neutral-600 leading-relaxed">
//               {para}
//             </p>
//           ))}

//           <Button asChild className="rounded-full px-6">
//             <Link href="/contact">Get in touch</Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { aboutContent } from "@/data/about";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="container-custom py-16 sm:py-20">
      <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2">
        {/* Left Column */}
        <div className="relative min-h-[450px] overflow-hidden rounded-3xl lg:min-h-full">
          <Image
            src="/images/about/team.jpg"
            alt="Our dedicated team working together on projects"
            fill
            priority
            sizes="(max-width:1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center space-y-6">
          {aboutContent.description.map((para, idx) => (
            <p key={idx} className="leading-relaxed text-neutral-600">
              {para}
            </p>
          ))}

          <Button asChild className="w-fit rounded-full px-6">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}