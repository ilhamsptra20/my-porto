"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 850);

    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="preloader fixed inset-0 z-[90] grid place-items-center bg-neutral-950 text-[#f3f0e9]">
      <div className="min-w-64">
        <div className="mb-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-white/55">
          <span>MIS</span>
          <span>Systems Loading</span>
        </div>
        <div className="h-px overflow-hidden bg-white/15">
          <span className="preloader-line block h-full bg-gradient-to-r from-emerald-400 via-cyan-300 to-orange-400" />
        </div>
      </div>
    </div>
  );
}
