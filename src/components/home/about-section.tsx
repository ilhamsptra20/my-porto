import { Reveal, ScaleReveal, StaggerItem } from "@/components/motion";
import { ProfileBackground } from "@/components/home/profile-background";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-wipe relative mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-36"
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr_0.8fr] lg:gap-14">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            03 / About
          </p>

          <Reveal>
            <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-normal md:text-7xl lg:text-8xl">
              I build systems,
              <br />
              not just pages.
            </h2>
          </Reveal>
        </div>

        <ScaleReveal delay={0.08}>
          <div className="profile-frame spotlight-card relative aspect-[4/5] overflow-hidden border border-black bg-neutral-950 shadow-[12px_12px_0_rgba(10,10,10,0.1)]">
            <div className="absolute inset-0 bg-[url('/images/profile-placeholder.png')] bg-cover bg-center opacity-80 grayscale" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.08),rgba(10,10,10,0.62))]" />
            <div className="portfolio-noise absolute inset-0 opacity-20" />
            <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              FIG. 04 / Portrait
            </span>
            <span className="absolute right-4 top-4 grid size-10 place-items-center border border-white/20 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/55">
              MIS
            </span>
          </div>
        </ScaleReveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col justify-end">
            <p className="max-w-xl text-xl leading-8 text-neutral-700 md:text-2xl md:leading-9">
              I work across frontend, backend, APIs, databases, and application
              architecture to turn business processes into software that is clear,
              maintainable, and ready to scale.
            </p>

            <p className="mt-6 max-w-xl leading-7 text-neutral-500">
              My focus is not only making features work, but understanding how data,
              workflows, integrations, and system boundaries fit together over the
              long term.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid border-t border-black/20 md:grid-cols-3">
        <StaggerItem>
          <div className="group border-b border-black/20 py-7 transition-colors duration-300 hover:bg-emerald-300/10 md:border-b-0 md:border-r md:pr-8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              01 / Product Engineering
            </span>

            <p className="mt-4 max-w-sm leading-7 text-neutral-700">
              Translating real operational requirements into usable and maintainable
              application flows.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="group border-b border-black/20 py-7 transition-colors duration-300 hover:bg-orange-300/10 md:border-b-0 md:border-r md:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              02 / System Design
            </span>

            <p className="mt-4 max-w-sm leading-7 text-neutral-700">
              Designing clear boundaries between frontend, backend, data, and
              integrations without unnecessary complexity.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem>
          <div className="group py-7 transition-colors duration-300 hover:bg-cyan-300/10 md:pl-8">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              03 / Maintainability
            </span>

            <p className="mt-4 max-w-sm leading-7 text-neutral-700">
              Writing software that other developers can understand, extend, debug,
              and operate safely.
            </p>
          </div>
        </StaggerItem>
      </div>

      <div className="mt-16 grid gap-8 border-t border-black pt-6 lg:grid-cols-[220px_1fr]">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Core capabilities
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm font-semibold uppercase tracking-[0.1em] md:grid-cols-3">
          <span>Frontend Engineering</span>
          <span>Backend Engineering</span>
          <span>REST API Design</span>
          <span>Database Design</span>
          <span>System Architecture</span>
          <span>Enterprise Applications</span>
        </div>
      </div>

      <ProfileBackground />
    </section>
  );
}
