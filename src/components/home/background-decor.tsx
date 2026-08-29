export function BackgroundDecor() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(19,78,74,0.18),transparent_28%),radial-gradient(circle_at_86%_12%,rgba(234,88,12,0.16),transparent_30%),linear-gradient(to_bottom,rgba(243,240,233,0.84),rgba(243,240,233,1)_42%)]" />
        <div className="portfolio-grid absolute inset-0 opacity-[0.28]" />
        <div className="portfolio-noise absolute inset-0 opacity-[0.18]" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-0 left-8 z-40 hidden w-px bg-black/10 xl:block"
      >
        <span className="absolute top-24 h-24 w-px bg-gradient-to-b from-emerald-500 to-transparent" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-0 right-8 z-40 hidden w-px bg-black/10 xl:block"
      >
        <span className="absolute bottom-24 h-24 w-px bg-gradient-to-t from-orange-500 to-transparent" />
      </div>
    </>
  );
}
