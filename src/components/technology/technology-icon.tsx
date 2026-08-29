import type { CSSProperties } from "react";

type TechnologyIconProps = {
  slug?: string;
  className?: string;
};

export function TechnologyIcon({
  slug,
  className,
}: TechnologyIconProps) {
  if (!slug) {
    return null;
  }

  return (
    <span
      aria-hidden="true"
      className={`tech-ticker-icon ${className ?? ""}`}
      style={
        {
          "--icon-url": `url("https://cdn.simpleicons.org/${slug}/f3f0e9")`,
        } as CSSProperties
      }
    />
  );
}
