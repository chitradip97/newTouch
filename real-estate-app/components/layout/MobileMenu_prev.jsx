"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Home as HomeIcon, X } from "lucide-react";
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

export default function MobileMenu({ className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`rounded-full lg:hidden ${className}`}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[280px] sm:w-[320px]">
        <SheetTitle className="flex items-center gap-2 text-left">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <HomeIcon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold">EstateCo</span>
        </SheetTitle>

        <nav
          className="mt-8 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          <AnimatePresence>
            {open &&
              navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                >
                  <SheetClose asChild>
                    <Link
                      href={link.href}
                      className="block rounded-lg px-3 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                </motion.div>
              ))}
          </AnimatePresence>
        </nav>

        <div className="mt-8 border-t pt-6">
          <SheetClose asChild>
            <Button asChild className="w-full rounded-full">
              <Link href="/login">Login</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
