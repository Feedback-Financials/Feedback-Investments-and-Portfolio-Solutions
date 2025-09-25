import { useState } from "react";
import { cn } from "@/lib/utils";


const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#companies", label: "Companies" },
  { href: "#contact", label: "Contact" },
];

import { openWhatsApp } from "@/lib/whatsapp";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#fafafa] backdrop-blur">
      <div className="container mx-auto container-px flex h-20 items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-3 group ml-[-16px] sm:ml-[-24px] lg:ml-[-32px]"
        >
          <img
            src="/logo main fips.jpg"
            alt="Feedback Financial Solutions logo"
            className="h-[80px] w-[420px] md:w-[580px] lg:w-[680px] object-contain bg-[#fafafa] opacity-80"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/917023655404?text=Hello%20Deepak%2C%20I%20want%20to%20schedule%20an%20appointment%20with%20you."
            onClick={(e) => {
              e.preventDefault();
              openWhatsApp(
                "Hello Deepak, I want to schedule an appointment with you."
              );
            }}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90"
            )}
          >
            Book an appointment
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-foreground"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container mx-auto container-px py-3 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground/80 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/917023655404?text=Hello%20Deepak%2C%20I%20want%20to%20schedule%20an%20appointment%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                openWhatsApp(
                  "Hello Deepak, I want to schedule an appointment with you."
                );
              }}
              className="mt-2 inline-flex w-max rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90"
            >
              Book an appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
