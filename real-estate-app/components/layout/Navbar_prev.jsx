"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home as HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navigation";
import MobileMenu from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frameId = null;

    const getScrollTop = () =>
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const handleScroll = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        setScrolled(getScrollTop() > 8);
        frameId = null;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="container-custom">
        <div
          className={cn(
            "flex items-center justify-between px-4 py-2.5 transition-all duration-300 sm:px-6",
            scrolled
              ? "mt-2 rounded-2xl border border-gray-200 bg-white shadow-lg"
              : "mt-4 rounded-full border border-white/20 bg-white/10 shadow-sm backdrop-blur-md"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "flex items-center gap-2 font-semibold transition-colors duration-300",
              scrolled ? "text-black" : "text-white"
            )}
          >
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300",
                scrolled ? "bg-primary text-white" : "bg-white text-primary"
              )}
            >
              <HomeIcon className="h-4 w-4" />
            </span>

            <span className="hidden text-sm sm:inline">EstateCo</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                  scrolled
                    ? "text-black hover:bg-primary hover:text-white"
                    : "text-white hover:bg-white/15"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className={cn(
                "hidden rounded-full transition-all duration-300 sm:inline-flex",
                scrolled
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "border border-white/30 bg-white/15 text-white hover:bg-white/25"
              )}
            >
              <Link href="/login">Login</Link>
            </Button>

            <MobileMenu
              className={cn(
                "transition-colors duration-300",
                scrolled
                  ? "text-black hover:bg-gray-100"
                  : "text-white hover:bg-white/15"
              )}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
