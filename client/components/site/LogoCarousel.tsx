import { useEffect, useMemo, useState } from "react";

const items = [
  "SBI Life",
  "ICICI",
  "HDFC",
  "Bajaj Allianz",
  "Max Life",
  "Tata AIG",
  "Reliance General",
  "Aditya Birla Health",
  "Kotak Life",
  "Star Health",
  "…and many more",
];

function chunk<T>(arr: T[], size: number) {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function LogoCarousel() {
  const frames = useMemo(() => chunk(items, 4), []);
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % frames.length);
  const prev = () => setI((v) => (v - 1 + frames.length) % frames.length);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % frames.length), 8000);
    return () => clearInterval(id);
  }, [frames.length]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl border border-border/60 bg-background">
        <div
          className="flex transition-transform duration-1500 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {frames.map((frame, idx) => (
            <div key={idx} className="min-w-full p-6">
              <div className="grid grid-cols-4 gap-3 sm:gap-4">
                {frame.map((name) => (
                  <div
                    key={name}
                    className={`flex h-14 sm:h-16 md:h-20 items-center justify-center rounded-xl px-4 text-center text-sm sm:text-base md:text-lg font-bold tracking-wide shadow-md ${name === "…and many more" ? "bg-gradient-to-br from-primary to-primary/80 text-gray-200" : "bg-gradient-to-br from-primary to-primary/80 text-white"}`}
                    style={{ lineHeight: 1.1 }}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center" aria-label="Logo carousel controls">
        <div className="flex items-center gap-2">
          {frames.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to frame ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${idx === i ? "bg-primary" : "bg-foreground/20 hover:bg-foreground/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
