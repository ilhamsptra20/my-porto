"use client";

import { useEffect, useRef } from "react";
import { ScrollProgress } from "@/components/scroll-progress";

const sections = ["top", "work", "about", "contact"];

export function PortfolioChrome() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const finePointer = window.matchMedia("(pointer: fine)");

    if (finePointer.matches) {
      let frame = 0;
      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;

      const moveCursor = () => {
        cursorRef.current?.style.setProperty("--cursor-x", `${x}px`);
        cursorRef.current?.style.setProperty("--cursor-y", `${y}px`);
        frame = 0;
      };

      const onPointerMove = (event: PointerEvent) => {
        x = event.clientX;
        y = event.clientY;

        if (!frame) {
          frame = window.requestAnimationFrame(moveCursor);
        }
      };

      const onPointerOver = (event: PointerEvent) => {
        const target = event.target;

        if (target instanceof Element && target.closest("a, button, .spotlight-card")) {
          root.dataset.cursor = "active";
        }
      };

      const onPointerOut = (event: PointerEvent) => {
        const target = event.target;

        if (target instanceof Element && target.closest("a, button, .spotlight-card")) {
          root.dataset.cursor = "";
        }
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerover", onPointerOver, { passive: true });
      window.addEventListener("pointerout", onPointerOut, { passive: true });

      return () => {
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerover", onPointerOver);
        window.removeEventListener("pointerout", onPointerOut);

        if (frame) {
          window.cancelAnimationFrame(frame);
        }
      };
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (active?.target.id) {
          document.documentElement.dataset.activeSection = active.target.id;
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.08, 0.18, 0.28, 0.38],
      },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      <div ref={cursorRef} aria-hidden="true" className="portfolio-cursor" />
    </>
  );
}
