"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import type { CSSProperties } from "react";
import { useState } from "react";

export type CarouselMediaItem = {
  src: string;
  title: string;
  subtitle: string;
  caption?: string;
  figure?: string;
};

export function MediaCarousel({
  items,
  ratio,
}: {
  items: readonly CarouselMediaItem[];
  ratio: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];
  const total = items.length;

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? total - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === total - 1 ? 0 : current + 1));
  };

  return (
    <div className="project-preview group relative overflow-hidden bg-neutral-950 p-3 md:p-5">
      <div className={`relative overflow-hidden bg-[#101010] ${ratio}`}>
        <div className="portfolio-grid absolute inset-0 opacity-[0.045]" />
        <div
          className="project-image absolute inset-4 bg-contain bg-center bg-no-repeat opacity-100 transition duration-500 group-hover:scale-[1.01] md:inset-8"
          style={
            {
              backgroundImage: `url("${activeItem.src}")`,
            } as CSSProperties
          }
        />
      </div>

      <div className="mt-4 grid gap-5 border-t border-white/15 pt-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div>
          <p className="mb-3 flex max-w-2xl items-center justify-between gap-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
            <span>{activeItem.figure}</span>
            <span className="text-right">{activeItem.caption}</span>
          </p>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#f3f0e9]">
            {activeItem.title}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
            {activeItem.subtitle}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 md:justify-end">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous image"
              className="grid size-10 place-items-center border border-white/20 text-white/70 transition duration-300 hover:border-white/45 hover:text-white"
            >
              <ChevronLeftIcon className="size-4" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next image"
              className="grid size-10 place-items-center border border-white/20 text-white/70 transition duration-300 hover:border-white/45 hover:text-white"
            >
              <ChevronRightIcon className="size-4" />
            </button>
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {items.map((item, index) => (
          <button
            key={`${item.title}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${item.title}`}
            className={`h-1.5 flex-1 transition-colors duration-300 ${
              index === activeIndex ? "bg-[#f3f0e9]" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
