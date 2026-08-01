// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Home as HomeIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { navLinks } from "@/data/navigation";
// import MobileMenu from "@/components/layout/MobileMenu";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     if (pathname !== "/") {
//       setScrolled(true);
//       return;
//     }
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 200);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [pathname]);
//   console.log('scrolled',scrolled)

//   return (
//     <header className="fixed left-0 right-0 top-0 z-50">
//       <div className="container-custom">
//         <div
//           className={`mt-4 flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6 ${
//             scrolled
//               ? "bg-white shadow-lg"
//               : "border border-white/20 bg-white/10 backdrop-blur-md"
//           }`}
//         >
//           {/* Logo */}
//           <Link
//             href="/"
//             className={`flex items-center gap-2 font-semibold transition-colors duration-300 ${
//               scrolled ? "text-black" : "text-white"
//             }`}
//           >
//             <span
//               className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${
//                 scrolled ? "bg-primary text-white" : "bg-white text-primary"
//               }`}
//             >
//               <HomeIcon className="h-4 w-4" aria-hidden="true" />
//             </span>
//             <span className="hidden text-sm sm:inline">EstateCo</span>
//           </Link>

//           {/* Desktop Menu */}
//           <nav className="hidden items-center gap-1 lg:flex">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
//                   scrolled
//                     ? "text-black hover:bg-primary hover:text-white"
//                     : "text-white hover:bg-white/15"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Side */}
//           <div className="flex items-center gap-2">
//             {/* <Button
//               asChild
//               size="sm"
//               className={`hidden rounded-full transition-colors duration-300 sm:inline-flex ${
//                 scrolled
//                   ? "bg-primary text-white hover:bg-primary/90"
//                   : "border border-white/30 bg-white/15 text-white hover:bg-white/25"
//               }`}
//             >
//               <Link href="/login">Login</Link>
//             </Button> */}

//             <MobileMenu scrolled={scrolled} />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home as HomeIcon } from "lucide-react";
import { navLinks } from "@/data/navigation";
import MobileMenu from "@/components/layout/MobileMenu";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      {/* Desktop & Tablet Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 hidden md:block">
        <div className="container-custom">
          <div
            className={`mt-4 flex items-center justify-between rounded-full px-6 py-2.5 transition-all duration-300 ${
              scrolled
                ? "bg-white shadow-lg"
                : "border border-white/20 bg-white/10 backdrop-blur-md"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className={`flex items-center gap-2 font-semibold transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                  scrolled
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }`}
              >
                <HomeIcon className="h-4 w-4" />
              </span>

              <span className="text-sm font-semibold">New Touch</span>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-black hover:bg-primary hover:text-white"
                      : "text-white hover:bg-white/15"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Button Only */}
      <div className="fixed right-4 top-4 z-50 md:hidden">
        <MobileMenu scrolled={scrolled} />
      </div>
    </>
  );
}