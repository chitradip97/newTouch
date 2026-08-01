"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Home as HomeIcon } from "lucide-react";
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

export default function MobileMenu({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          // className={`rounded-full lg:hidden ${
          //   scrolled
          //     ? "text-black hover:bg-gray-100"
          //     : "text-white hover:bg-white/15"
          // }`}
          className="h-12 w-12 rounded-full bg-white shadow-none hover:bg-white focus-visible:ring-0"
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7 stroke-[2.75] text-green-600" aria-hidden="true" />
        </Button>
      </SheetTrigger>

      <SheetContent
  side="right"
  width="w-[200px]"
  className=" p-0 flex flex-col"
>
  {/* Header */}
  <div className="border-b px-5 py-5">
    <SheetTitle className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
        <HomeIcon className="h-5 w-5" />
      </div>

      <div>
        <h2 className="text-base font-semibold">EstateCo</h2>
        <p className="text-xs text-muted-foreground">
          Dream Properties
        </p>
      </div>
    </SheetTitle>
  </div>

  {/* Navigation */}
  <nav className="flex-1 px-4 py-4">
    <AnimatePresence>
      {open &&
        navLinks.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: i * 0.04,
              duration: 0.2,
            }}
          >
            <SheetClose asChild>
              <Link
                href={link.href}
                className="mb-1.5 flex items-center rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition-all hover:bg-primary hover:text-white"
              >
                {link.label}
              </Link>
            </SheetClose>
          </motion.div>
        ))}
    </AnimatePresence>
  </nav>

  {/* Footer */}
  <div className="border-t px-4 py-4">
    <SheetClose asChild>
      <Button
        asChild
        className="h-10 w-full rounded-full"
      >
        <Link href="/login">Login</Link>
      </Button>
    </SheetClose>

    <p className="mt-3 text-center text-[11px] text-muted-foreground">
      © {new Date().getFullYear()} EstateCo
    </p>
  </div>
</SheetContent>
    </Sheet>
  );
}
