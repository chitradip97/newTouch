import Link from "next/link";
import {
  Home as HomeIcon,
  MessageCircle,
  Camera,
  BriefcaseBusiness,
} from "lucide-react";
import { navLinks } from "@/data/navigation";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Properties", href: "/properties" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom flex flex-col items-center gap-6 py-16 text-center sm:py-20">
        <h2 className="max-w-lg text-2xl font-bold sm:text-3xl">
          Discover Nature Wonders with Expert Guidance
        </h2>
        <p className="max-w-md text-sm text-primary-foreground/85">
          We connect buyers and sellers through a trusted platform with
          verified properties, transparent deals, and expert guidance —
          supporting you at every step.
        </p>
      </div>

      <div className="border-t border-white/15">
        <div className="container-custom flex flex-col gap-10 py-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold"
              aria-label="Your Trusted Real Estate Partner — Home"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary">
                <HomeIcon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm">New Touch</span>
            </Link>
            <p className="mt-3 text-xs text-primary-foreground/75">
              Verified listings. Transparent deals. Expert guidance — every
              step of the way.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.facebook.com/yourrealestate"
                aria-label="Follow us on Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/yourrealestate"
                aria-label="Follow us on Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Camera className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/yourrealestate"
                aria-label="Follow us on LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav
            className="grid grid-cols-2 gap-8 sm:flex sm:gap-16"
            aria-label="Footer navigation"
          >
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">
                Explore
              </h3>
              <ul className="mt-3 space-y-2">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/90 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">
                  {col.title}
                </h3>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary-foreground/90 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="container-custom flex flex-col items-center justify-between gap-2 border-t border-white/15 py-6 text-xs text-primary-foreground/70 sm:flex-row">
          <p>© {new Date().getFullYear()} NewTouch. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
