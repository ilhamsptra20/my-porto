"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { useRef } from "react";

type MagneticLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function MagneticLink({
  children,
  className,
  onMouseLeave,
  onMouseMove,
  ...props
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={ref}
      className={className}
      onMouseMove={(event) => {
        const element = ref.current;

        if (element) {
          const rect = element.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;

          element.style.transform = `translate3d(${x * 0.12}px, ${y * 0.18}px, 0)`;
        }

        onMouseMove?.(event);
      }}
      onMouseLeave={(event) => {
        if (ref.current) {
          ref.current.style.transform = "translate3d(0, 0, 0)";
        }

        onMouseLeave?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
