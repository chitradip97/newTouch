// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, Home as HomeIcon } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Sheet,
//   SheetContent,
//   SheetTrigger,
//   SheetClose,
//   SheetTitle,
// } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
// import { navLinks } from "@/data/navigation";

// export default function MobileMenu({ scrolled }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <Sheet open={open} onOpenChange={setOpen}>
//       <SheetTrigger asChild>
//         <Button
//           variant="ghost"
//           size="icon"
//           // className={`rounded-full lg:hidden ${
//           //   scrolled
//           //     ? "text-black hover:bg-gray-100"
//           //     : "text-white hover:bg-white/15"
//           // }`}
//           className="h-12 w-12 rounded-full bg-white shadow-none hover:bg-white focus-visible:ring-0"
//           aria-label="Open menu"
//         >
//           <Menu className="h-7 w-7 stroke-[2.75] text-green-600" aria-hidden="true" />
//         </Button>
//       </SheetTrigger>

//       <SheetContent
//         side="right"
//         width="w-[200px]"
//         className=" p-0 flex flex-col"
//       >
//         {/* Header */}
//         <div className="border-b px-5 py-5">
//           <SheetTitle className="flex items-center gap-3">
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
//               <HomeIcon className="h-5 w-5" />
//             </div>

//             <div>
//               <h2 className="text-base font-semibold">New Touch</h2>
//               <p className="text-xs text-muted-foreground">
//                 Dream Properties
//               </p>
//             </div>
//           </SheetTitle>
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 px-4 py-4">
//           <AnimatePresence>
//             {open &&
//               navLinks.map((link, i) => (
//                 <motion.div
//                   key={link.href}
//                   initial={{ opacity: 0, x: 12 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{
//                     delay: i * 0.04,
//                     duration: 0.2,
//                   }}
//                 >
//                   <SheetClose asChild>
//                     <Link
//                       href={link.href}
//                       className="mb-1.5 flex items-center rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition-all hover:bg-primary hover:text-white"
//                     >
//                       {link.label}
//                     </Link>
//                   </SheetClose>
//                 </motion.div>
//               ))}
//           </AnimatePresence>
//         </nav>

//         {/* Footer */}
//         <div className="border-t px-4 py-4">
//           <SheetClose asChild>
//             <Button
//               asChild
//               className="h-10 w-full rounded-full"
//             >
//               <Link href="/login">Login</Link>
//             </Button>
//           </SheetClose>

//           <p className="mt-3 text-center text-[11px] text-muted-foreground">
//             © {new Date().getFullYear()} The New Touch
//           </p>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Home,
  Building2,
  Users,
  Phone,
  FileText,
  LogIn,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navigation";

const navIcons= {
  "/": Home,
  "/properties": Building2,
  "/about": Users,
  "/services": FileText,
  "/contact": Phone,
};

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open Menu"
          className="h-12 w-12 rounded-full bg-white shadow-sm transition-all hover:scale-105 hover:shadow-md focus-visible:ring-0"
        >
          <Menu className="h-7 w-7 text-green-600" />
        </Button>
      </SheetTrigger>

      {/* Drawer */}
      <SheetContent
        side="right"
        className="w-[300px] p-0 flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-green-500 px-6 py-7 text-white">
          <SheetTitle className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
              <Home className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-lg font-bold tracking-wide">
                New Touch
              </h2>

              <p className="text-xs text-green-100">
                Dream Properties
              </p>
            </div>
          </SheetTitle>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-5">
          <AnimatePresence>
            {open &&
              navLinks.map((link, index) => {
                const Icon = navIcons[link.href] || Home;
                const active = pathname === link.href;

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.25,
                    }}
                  >
                    <SheetClose asChild>
                      <Link
                        href={link.href}
                        className={`group relative mb-2 flex items-center justify-between overflow-hidden rounded-2xl px-4 py-3 transition-all duration-300
                        
                        ${
                          active
                            ? "bg-green-50 text-primary shadow-sm"
                            : "text-neutral-700 hover:bg-green-50 hover:text-green-700 hover:translate-x-1"
                        }`}
                      >
                        {/* Active Indicator */}
                        {active && (
                          <motion.div
                            layoutId="active-nav"
                            className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-primary"
                          />
                        )}

                        <div className="flex items-center gap-3">
                          <div
                            className={`rounded-xl p-2 transition-all duration-300
                            
                            ${
                              active
                                ? "bg-primary text-white"
                                : "bg-neutral-100 text-neutral-600 group-hover:bg-green-600 group-hover:text-white"
                            }`}
                          >
                            <Icon size={18} />
                          </div>

                          <span className="font-medium">
                            {link.label}
                          </span>
                        </div>

                        <ChevronRight
                          size={18}
                          className={`transition-all duration-300
                          
                          ${
                            active
                              ? "text-primary"
                              : "text-neutral-400 group-hover:translate-x-1 group-hover:text-green-600"
                          }`}
                        />
                      </Link>
                    </SheetClose>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </nav>

        {/* Footer */}
        <div className="border-t bg-neutral-50 px-4 py-5">
          <SheetClose asChild>
            <Button
              asChild
              className="h-11 w-full rounded-full bg-primary text-white transition-all hover:bg-green-700 hover:shadow-lg"
            >
              <Link
                href="/login"
                className="flex items-center justify-center gap-2"
              >
                <LogIn size={18} />
                Login
              </Link>
            </Button>
          </SheetClose>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} The New Touch
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}