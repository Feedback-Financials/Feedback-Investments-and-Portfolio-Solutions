import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { openWhatsApp } from "@/lib/whatsapp";

type Service = {
  title: string;
  items: string[];
};

const DETAILS: Record<string, { desc: string; points: string[] }> = {
  "Life Insurance": {
    desc: "Protect your family’s future with plans tailored to your life goals and budget.",
    points: ["High cover term plans", "Savings & endowment", "ULIPs", "Guaranteed returns", "Critical illness riders"],
  },
  "Health Insurance": {
    desc: "Comprehensive medical protection with cashless treatments and add-on benefits.",
    points: ["Mediclaim", "Personal accident", "Critical illness", "Family floater", "Tax benefits"],
  },
  "General Insurance": {
    desc: "Cover for vehicle, fire, marine and business risks to safeguard your assets.",
    points: ["Motor insurance", "Commercial & shop", "Fire & burglary", "Marine & transit", "Liability"],
  },
  Loans: {
    desc: "Fast and flexible loans with the right lender for your profile and goals.",
    points: ["Home & mortgage", "Business & working capital", "Personal", "Agriculture", "Balance transfer / loan shifting"],
  },
  "Mutual Funds": {
    desc: "Goal-based investments across equity and debt with disciplined SIPs.",
    points: ["Equity growth", "Debt stability", "Hybrid allocation", "Tax saving (ELSS)", "SIP/ STP/ SWP"],
  },
  "Corporate FDs / Bonds": {
    desc: "Enhance returns with high-quality corporate FDs, NCDs and bonds.",
    points: ["Better than bank FDs", "Rated issuers", "Regular income", "Laddering"],
  },
  "Portfolio Management": {
    desc: "Professional advisory for wealth creation and risk-managed returns.",
    points: ["Asset allocation", "Periodic review", "Goal tracking"],
  },
  "Real Estate": {
    desc: "End-to-end assistance for rentals, plots and property purchase/maintenance.",
    points: ["Rental management", "Plots & purchase", "Due diligence", "Maintenance"],
  },
  "Placement Services": {
    desc: "Connecting talent with the right opportunities across sectors.",
    points: ["Hiring", "Screening", "Onboarding"],
  },
};

const SERVICES: Service[] = [
  { title: "Life Insurance", items: ["Term Plans", "Endowment", "ULIP", "Guaranteed Returns", "Critical Illness Plans"] },
  { title: "Health Insurance", items: ["Mediclaim", "Accident", "Critical Illness"] },
  { title: "General Insurance", items: ["Vehicle", "Commercial", "Fire", "Marine", "Liability"] },
  { title: "Loans", items: ["Home", "Personal", "Mortgage", "Business", "Agriculture", "Loan Shifting"] },
  { title: "Mutual Funds", items: ["Equity", "Debt", "Hybrid"] },
  { title: "Corporate FDs / Bonds", items: ["Better than Banks", "Tax Efficient"] },
  { title: "Portfolio Management", items: ["Advisory", "Goal Based", "Wealth"] },
  { title: "Real Estate", items: ["Rentals", "Plots", "Purchase", "Maintenance"] },
  { title: "Placement Services", items: ["Talent", "Opportunities"] },
];

// 🎯 Manual positions for each service's small bubbles
const BUBBLE_POSITIONS: Record<string, { label: string; x: number; y: number }[]> = {
  "Life Insurance": [
    { label: "Term Plans", x: 200, y: -120 },
    { label: "Endowment", x: -180, y: -100 },
    { label: "ULIP", x: 0, y: -200 },
    { label: "Guaranteed Returns", x: 180, y: 200 },
    { label: "Critical Illness Plans", x: -150, y: 160 },
  ],
  "Health Insurance": [
    { label: "Mediclaim", x: 180, y: -120 },
    { label: "Accident", x: -160, y: 80 },
    { label: "Critical Illness", x: 0, y: 200 },
  ],
  "General Insurance": [
    { label: "Vehicle", x: 200, y: -100 },
    { label: "Commercial", x: -180, y: -120 },
    { label: "Fire", x: 0, y: -200 },
    { label: "Marine", x: 150, y: 220 },
    { label: "Liability", x: -150, y: 120 },
  ],
  "Loans": [
    { label: "Home", x: 200, y: -100 },
    { label: "Personal", x: -180, y: -120 },
    { label: "Mortgage", x: 0, y: -200 },
    { label: "Business", x: 160, y: 220 },
    { label: "Agriculture", x: -160, y: 120 },
  ],
  "Mutual Funds": [
    { label: "Equity", x: 180, y: -120 },
    { label: "Debt", x: -160, y: 120 },
    { label: "Hybrid", x: 0, y: 200 },
    { label: "SIP/ STP/ SWP", x: 165, y: 200 },
  ],
  "Corporate FDs / Bonds": [
    { label: "Better than Banks", x: 200, y: -100 },
    { label: "Tax Efficient", x: -200, y: 100 },
  ],
  "Portfolio Management": [
    { label: "Advisory", x: 200, y: -100 },
    { label: "Goal Based", x: -180, y: -120 },
    { label: "Wealth", x: 0, y: 200 },
  ],
  "Real Estate": [
    { label: "Rentals", x: 200, y: -100 },
    { label: "Plots", x: -180, y: -120 },
    { label: "Purchase", x: 0, y: -200 },
    { label: "Maintenance", x: 0, y: 200 },
  ],
  "Placement Services": [
    { label: "Talent", x: 200, y: -100 },
    { label: "Opportunities", x: -200, y: 100 },
  ],
};

export default function BubbleSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const active = SERVICES[index];
  const next = () => setIndex((i) => (i + 1) % SERVICES.length);
  const prev = () => setIndex((i) => (i - 1 + SERVICES.length) % SERVICES.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [paused, index]);

  const isMobile = useIsMobile();

  const bubbles = BUBBLE_POSITIONS[active.title] ?? [];

  return (
    <div
      className="relative mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-[minmax(0,520px)_minmax(0,360px)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const x0 = touchStartX.current;
        touchStartX.current = null;
        if (x0 == null) return;
        const dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 40) {
          if (dx < 0) next();
          else prev();
        }
      }}
    >
      <div className="relative aspect-square w-full max-w-[520px]">
        {/* Decorative gradients */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(closest-side,hsla(19,88%,54%,.12),transparent)]" />
        <div className="pointer-events-none absolute inset-8 rounded-full border border-border/50" />

        {/* Center bubble */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active.title}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className={cn(
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
              "z-0 flex h-40 w-40 items-center justify-center rounded-full shadow-2xl sm:h-48 sm:w-48 md:h-56 md:w-56",
              "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
            )}
          >
            <span className="px-6 text-center text-xl font-semibold leading-snug md:text-2xl">{active.title}</span>
          </motion.div>
        </AnimatePresence>

        {/* Manual-positioned bubbles */}
        {bubbles.map((b) => (
          <motion.button
            key={b.label}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 select-none z-20",
              "flex items-center justify-center rounded-full px-3 py-2 min-h-12 min-w-12 sm:min-h-14 sm:min-w-14 md:min-h-16 md:min-w-16",
              "border border-white/50 bg-white/30 text-xs md:text-sm text-foreground shadow-md backdrop-blur-md",
              "transition-colors hover:border-primary/70 hover:text-primary"
            )}
            style={{
              left: `calc(50% + ${b.x}px)`,
              top: `calc(50% + ${b.y}px)`,
            }}
            aria-label={b.label}
            onClick={() => {}}
          >
            <span className="px-1 text-center leading-snug whitespace-normal break-words">{b.label}</span>
          </motion.button>
        ))}

        {/* Arrows */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between">
          <button
            className="pointer-events-auto ml-[-16px] grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-background/70 text-foreground/80 backdrop-blur hover:border-primary hover:text-primary"
            onClick={prev}
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            className="pointer-events-auto mr-[-16px] grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-background/70 text-foreground/80 backdrop-blur hover:border-primary hover:text-primary"
            onClick={next}
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {/* Right: details card */}
      <div className="order-last max-w-md md:order-none">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <h3 className="text-xl font-semibold text-primary">{active.title}</h3>
          <p className="mt-2 text-sm text-foreground/80">{(DETAILS[active.title]?.desc) ?? "Explore options tailored to your needs."}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-foreground/80">
            {(DETAILS[active.title]?.points ?? []).slice(0, 5).map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <a
            href="https://wa.me/917023655404?text=Hello%20Deepak%2C%20I%20want%20to%20schedule%20an%20appointment%20with%20you."
            onClick={(e) => { e.preventDefault(); openWhatsApp("Hello Deepak, I want to schedule an appointment with you."); }}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="mt-6 flex items-center justify-center gap-2 md:col-span-2">
        {SERVICES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={cn(
              "h-2.5 w-2.5 rounded-full",
              i === index ? "bg-primary" : "bg-foreground/20 hover:bg-foreground/40"
            )}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <div className="mt-2 text-center text-xs text-foreground/60 md:col-span-2">
        {index + 1} / {SERVICES.length}
      </div>
    </div>
  );
}
