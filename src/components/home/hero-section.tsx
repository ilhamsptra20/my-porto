import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { MagneticLink } from "@/components/magnetic-link";
import { Reveal, ScaleReveal, Stagger, StaggerItem } from "@/components/motion";
import { heroConsoleRows, heroMeta, heroStats } from "@/data/home";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[calc(100vh-61px)] max-w-[1600px] flex-col justify-between px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-14 lg:px-12"
    >
      <svg
        aria-hidden="true"
        className="signature-mark absolute right-0 top-20 -z-0 hidden w-[42vw] max-w-[640px] text-black/5 lg:block"
        viewBox="0 0 520 360"
        fill="none"
      >
        <path
          d="M52 314V46L182 224L312 46V314"
          stroke="currentColor"
          strokeWidth="28"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M390 58C448 58 486 90 486 136C486 184 449 207 401 226C359 243 334 257 334 288C334 319 362 338 405 338C437 338 462 329 489 308"
          stroke="currentColor"
          strokeWidth="28"
          strokeLinecap="square"
        />
      </svg>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <div className="relative z-10">
          <div className="absolute -left-3 top-2 hidden h-24 w-1 bg-gradient-to-b from-emerald-500 via-cyan-500 to-transparent md:block" />
          <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
            <span>Full Stack Software Engineer</span>
            <span className="hidden sm:inline">/</span>
            <span>Indonesia</span>
          </div>

          <Stagger className="max-w-[1200px]">
            <h1 className="text-[15vw] font-black uppercase leading-[0.78] tracking-normal sm:text-[13vw] lg:text-[9vw]">
              <StaggerItem>
                <span className="block">Muhamad</span>
              </StaggerItem>

              <StaggerItem>
                <span className="hero-accent block">Ilham</span>
              </StaggerItem>

              <StaggerItem>
                <span className="block">Saputra</span>
              </StaggerItem>
            </h1>
          </Stagger>
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between lg:min-h-[420px] lg:pt-10">
          <div>
            <Reveal delay={0.35}>
              <p className="text-xl leading-8 text-neutral-700 md:text-2xl md:leading-9">
                Building financial systems, enterprise applications, and maintainable
                software architecture.
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticLink
                  href="#work"
                  className="spotlight-card magnetic-link inline-flex items-center gap-2 border border-black bg-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-transparent hover:text-black"
                >
                  View work
                  <ArrowDownIcon className="size-4" />
                </MagneticLink>

                <MagneticLink
                  href="#contact"
                  className="spotlight-card magnetic-link inline-flex items-center gap-2 border border-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:bg-black hover:text-white"
                >
                  Contact me
                </MagneticLink>
              </div>
            </Reveal>
          </div>

          <ScaleReveal delay={0.55} className="mt-10 lg:mt-0">
            <div className="hero-console group relative overflow-hidden border border-black bg-neutral-950 p-4 text-[#f3f0e9] shadow-[12px_12px_0_rgba(10,10,10,0.12)]">
              <div className="mb-6 flex items-center justify-between border-b border-white/15 pb-3">
                <div className="flex gap-1.5">
                  <span className="size-2.5 bg-rose-400" />
                  <span className="size-2.5 bg-amber-300" />
                  <span className="size-2.5 bg-emerald-400" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                  systems.log
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs text-white/70">
                {heroConsoleRows.map(([label, value, colorClass]) => (
                  <div key={label} className="flex justify-between gap-4">
                    <span className={colorClass}>{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 space-y-3 border-t border-white/10 pt-4 text-xs text-white/55">
                {heroStats.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-1 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                      {label}
                    </span>
                    <span className="font-semibold text-[#f3f0e9]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScaleReveal>

          <div className="mt-10 border-t border-black/20 pt-5">
            <div className="grid grid-cols-2 gap-6 text-xs uppercase tracking-[0.15em]">
              {heroMeta.map(([label, value]) => (
                <div key={label}>
                  <p className="mb-2 text-neutral-400">{label}</p>
                  <p className="font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 flex items-end justify-between border-t border-black/20 pt-5 text-xs font-medium uppercase tracking-[0.18em]">
        <span>Portfolio / 2026</span>

        <a
          href="#work"
          className="flex items-center gap-2 transition-opacity hover:opacity-50"
        >
          Selected Work
          <ArrowDownIcon className="size-4" />
        </a>
      </div>
    </section>
  );
}
