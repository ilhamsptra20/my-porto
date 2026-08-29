import type { CSSProperties } from "react";
import { techTicker } from "@/data/home";

export function TechTicker() {
  return (
    <div className="overflow-hidden border-y border-black bg-neutral-950 py-4 text-[#f3f0e9]">
      <div className="marquee-track flex w-max gap-8">
        {[...techTicker, ...techTicker].map((item, index) => (
          <span key={`${item.slug}-${index}`} className="flex items-center gap-8">
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/78">
              <span
                aria-hidden="true"
                className="tech-ticker-icon size-5 bg-[#f3f0e9]"
                style={
                  {
                    "--icon-url": `url("https://cdn.simpleicons.org/${item.slug}/f3f0e9")`,
                  } as CSSProperties
                }
              />
              {item.label}
            </span>
            <span className="h-px w-8 bg-emerald-300" />
          </span>
        ))}
      </div>
    </div>
  );
}
