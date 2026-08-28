import {
  ArrowDownIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import {
  Reveal,
  ScaleReveal,
  Stagger,
  StaggerItem,
} from "@/components/motion";
import { ScrollProgress } from "@/components/scroll-progress";

const projects = [
  {
    index: "01",
    category: "FINTECH / CORE BANKING",
    title: "SAKTI COREBANKING V2",
    description:
      "A modern core banking platform designed for multi-cooperative financial operations with scalable frontend and backend architecture.",
    stack: ["Next.js", "Laravel", "PostgreSQL", "Redis"],
    accent: "from-emerald-300 via-cyan-300 to-blue-500",
    metric: "Multi-tenant ledger",
    href: "#",
  },
  {
    index: "02",
    category: "PAYMENT INFRASTRUCTURE",
    title: "PAYMENT GATEWAY MIDDLEWARE",
    description:
      "Middleware for handling payment processing, callbacks, transaction orchestration, and financial service integrations.",
    stack: ["Laravel", "Redis", "REST API", "Queue"],
    accent: "from-amber-300 via-orange-400 to-rose-500",
    metric: "Callback orchestration",
    href: "#",
  },
  {
    index: "03",
    category: "ENTERPRISE / ERP",
    title: "SCHOOL & FOUNDATION SYSTEM",
    description:
      "An integrated operational platform covering student administration, billing, accounting, journals, reporting, and organization management.",
    stack: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    accent: "from-violet-300 via-fuchsia-400 to-sky-400",
    metric: "Operational ERP",
    href: "#",
  },
];

const stackTicker = [
  "Next.js",
  "Laravel",
  "PostgreSQL",
  "Redis",
  "REST APIs",
  "Queues",
  "Architecture",
  "Enterprise Apps",
];

const experience = [
  {
    period: "2025 — NOW",
    company: "PT SAKTI KINERJA KOLABORASI",
    role: "Full Stack Developer",
    focus: "Financial systems · Core banking · Enterprise applications",
  },
  {
    period: "2025",
    company: "PT BANGKIT MEMBANGUN NEGERI",
    role: "Full Stack Developer",
    focus: "Web applications · API development · Business systems",
  },
  {
    period: "2023 — 2024",
    company: "PT ANANTA BANGUN GRAHA",
    role: "Data Collection & Programmer",
    focus: "Document management · Telecom operations · Internal systems",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f0e9] text-neutral-950">
      <ScrollProgress />

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

      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3f0e9]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <a
            href="#top"
            className="text-sm font-semibold uppercase tracking-[0.18em]"
          >
            Ilham Saputra
          </a>

          <nav className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.16em] md:gap-8">
            <a className="transition-opacity hover:opacity-50" href="#work">
              Work
            </a>
            <a className="transition-opacity hover:opacity-50" href="#about">
              About
            </a>
            <a className="transition-opacity hover:opacity-50" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

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
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 border border-black bg-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-transparent hover:text-black"
                  >
                    View work
                    <ArrowDownIcon className="size-4" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 border border-black px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-colors hover:bg-black hover:text-white"
                  >
                    Contact me
                  </a>
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
                  <div className="flex justify-between gap-4">
                    <span className="text-emerald-300">status</span>
                    <span>available_to_connect</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-cyan-300">focus</span>
                    <span>financial_systems</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-orange-300">mode</span>
                    <span>build_maintain_scale</span>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-2">
                  {[78, 56, 88, 64, 92, 48].map((height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className="data-bar block bg-gradient-to-t from-emerald-400 to-cyan-200"
                      style={{ height }}
                    />
                  ))}
                </div>
              </div>
            </ScaleReveal>

            <div className="mt-10 border-t border-black/20 pt-5">
              <div className="grid grid-cols-2 gap-6 text-xs uppercase tracking-[0.15em]">
                <div>
                  <p className="mb-2 text-neutral-400">Based in</p>
                  <p className="font-semibold">Bogor</p>
                </div>

                <div>
                  <p className="mb-2 text-neutral-400">Focus</p>
                  <p className="font-semibold">Enterprise Systems</p>
                </div>

                <div>
                  <p className="mb-2 text-neutral-400">Stack</p>
                  <p className="font-semibold">Next.js / Laravel</p>
                </div>

                <div>
                  <p className="mb-2 text-neutral-400">Status</p>
                  <p className="font-semibold">Available to Connect</p>
                </div>
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

      <div className="overflow-hidden border-y border-black bg-neutral-950 py-4 text-[#f3f0e9]">
        <div className="marquee-track flex w-max gap-10 text-xs font-semibold uppercase tracking-[0.2em]">
          {[...stackTicker, ...stackTicker].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-10">
              {item}
              <span className="h-px w-10 bg-emerald-300" />
            </span>
          ))}
        </div>
      </div>

      <div aria-hidden="true" className="diagonal-band h-14 border-b border-black/20" />

      <section
        id="work"
        className="relative mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-36"
      >
        <div
          aria-hidden="true"
          className="absolute right-5 top-20 hidden h-40 w-40 border border-black/10 md:block"
        />
        <div
          aria-hidden="true"
          className="absolute right-16 top-32 hidden h-24 w-24 bg-emerald-300/20 md:block"
        />

        <Reveal>
          <div className="mb-14 flex items-end justify-between border-b border-black pb-5 md:mb-20">
            <h2 className="text-4xl font-black uppercase tracking-normal md:text-6xl">
              Selected Work
            </h2>

            <span className="hidden text-xs font-medium uppercase tracking-[0.18em] md:block">
              2023 — 2026
            </span>
          </div>
        </Reveal>

          <div className="space-y-28 lg:space-y-40">
            {projects.map((project) => (
              <article key={project.index}>
                {/* Project heading */}
                <Reveal>
                  <div className="grid gap-6 md:grid-cols-[100px_minmax(0,1fr)] md:gap-10">
                    <span className="text-xs font-semibold tracking-[0.18em]">
                      {project.index}
                    </span>

                    <div>
                      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                        {project.category}
                      </p>

                      <h3 className="max-w-5xl text-4xl font-black uppercase leading-[0.9] tracking-normal md:text-6xl lg:text-8xl">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Reveal>

                {/* Project visual */}
                <ScaleReveal className="mt-10 md:mt-14">
                  <div className="project-preview group relative aspect-[16/9] w-full overflow-hidden bg-neutral-950 text-white">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-90`} />
                    <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(10,10,10,0.82),rgba(10,10,10,0.42)_48%,rgba(10,10,10,0.9))]" />
                    <div className="portfolio-grid absolute inset-0 opacity-[0.2]" />
                    <div className="absolute -left-8 top-1/2 h-[140%] w-28 -translate-y-1/2 rotate-12 bg-white/10 blur-sm transition-transform duration-700 group-hover:translate-x-8" />
                    <div className="absolute left-[12%] top-[28%] hidden w-[44%] border border-white/15 bg-black/20 p-4 backdrop-blur-sm md:block">
                      <div className="mb-4 grid grid-cols-4 gap-2">
                        {[0, 1, 2, 3].map((item) => (
                          <span key={item} className="h-12 bg-white/10" />
                        ))}
                      </div>
                      <div className="space-y-2">
                        <span className="block h-2 w-3/4 bg-white/20" />
                        <span className="block h-2 w-1/2 bg-white/10" />
                      </div>
                    </div>

                    <div className="absolute left-5 top-5 right-5 flex items-center justify-between gap-4 border-b border-white/20 pb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55 md:left-8 md:right-8 md:top-8">
                      <span>{project.category}</span>
                      <span className="hidden shrink-0 sm:inline">{project.metric}</span>
                    </div>

                    <div className="absolute inset-x-5 bottom-5 grid gap-4 md:inset-x-8 md:bottom-8 md:grid-cols-[minmax(0,1fr)_280px] md:items-end">
                      <div className="transition-transform duration-500 ease-out group-hover:translate-x-2">
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/45">
                          Project Preview
                        </p>

                        <p className="mt-3 max-w-4xl text-3xl font-black uppercase leading-[0.9] tracking-normal md:text-6xl lg:text-8xl">
                          {project.title}
                        </p>
                      </div>

                      <div className="hidden border border-white/20 bg-black/25 p-4 backdrop-blur md:block">
                        <div className="mb-5 flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/45">
                          <span>Pipeline</span>
                          <span>Live</span>
                        </div>

                        <div className="space-y-3">
                          {project.stack.map((item, index) => (
                            <div key={item} className="grid grid-cols-[76px_1fr] items-center gap-3">
                              <span className="font-mono text-[10px] uppercase text-white/55">
                                {item}
                              </span>
                              <span className="h-1.5 overflow-hidden bg-white/15">
                                <span
                                  className="preview-meter block h-full bg-white"
                                  style={{ width: `${50 + index * 12}%` }}
                                />
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="floating-node absolute right-[18%] top-[22%] size-24 border border-white/25 bg-white/10 backdrop-blur-sm" />
                    <div className="floating-node-delayed absolute right-[8%] top-[42%] size-12 border border-white/25 bg-white/10 backdrop-blur-sm" />
                    <div className="absolute bottom-[24%] right-[14%] hidden h-28 w-px bg-white/25 md:block" />
                    <div className="absolute bottom-[24%] right-[14%] hidden h-px w-28 bg-white/25 md:block" />
                  </div>
                </ScaleReveal>

                {/* Project information */}
                <div className="mt-7 grid gap-8 border-b border-black/20 pb-12 md:grid-cols-[100px_minmax(0,1fr)_320px] md:gap-10 md:pb-16">
                  <div />

                  <p className="max-w-2xl text-lg leading-7 text-neutral-700 md:text-xl md:leading-8">
                    {project.description}
                  </p>

                  <div>
                    <div className="mb-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-neutral-500">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <a
                      href={project.href}
                      className="inline-flex items-center gap-2 border-b border-black pb-1 text-xs font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-50"
                    >
                      Explore project
                      <ArrowTopRightOnSquareIcon className="size-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
      </section>

      <section className="relative overflow-hidden bg-neutral-950 text-[#f3f0e9]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(45,212,191,0.18),transparent_28%),radial-gradient(circle_at_20%_88%,rgba(251,146,60,0.12),transparent_26%)]" />
        <div className="portfolio-grid pointer-events-none absolute inset-0 opacity-[0.09]" />
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-36">
          <div className="mb-16 flex items-end justify-between border-b border-white/30 pb-5">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Career
              </p>

              <h2 className="text-4xl font-black uppercase tracking-normal md:text-6xl">
                Experience
              </h2>
            </div>

            <span className="hidden text-xs uppercase tracking-[0.18em] text-white/40 md:block">
              2023 — Present
            </span>
          </div>

          <div>
            {experience.map((item, index) => (
              <Reveal
                key={`${item.company}-${item.period}`}
                delay={index * 0.08}
              >

                <article
                  className="group grid gap-7 border-b border-white/15 py-10 md:grid-cols-[80px_180px_minmax(0,1fr)_360px] md:gap-10 md:py-12"
                >
                  <span className="text-xs font-medium tracking-[0.18em] text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/45">
                    {item.period}
                  </p>

                  <div>
                    <h3 className="text-2xl font-bold uppercase leading-tight tracking-normal transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                      {item.company}
                    </h3>

                    <p className="mt-3 text-sm uppercase tracking-[0.12em] text-white/45">
                      {item.role}
                    </p>
                  </div>

                  <div className="flex items-start justify-between gap-6">
                    <p className="max-w-sm leading-7 text-white/55">
                      {item.focus}
                    </p>

                    <span className="hidden text-xl text-white/20 md:block">
                      ↗
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-36"
      >
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              About
            </p>

            <Reveal>
              <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-normal md:text-7xl lg:text-8xl">
                I build systems,
                <br />
                not just pages.
              </h2>
            </Reveal>
          </div>

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
      </section>

      <footer
        id="contact"
        className="border-t border-black bg-[#f3f0e9] text-neutral-950"
      >
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-36">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Contact
          </p>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div>
              <Reveal>
                <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-normal md:text-7xl lg:text-8xl">
                  Let&apos;s build
                  <br />
                  something useful.
                </h2>
              </Reveal>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
                Open to conversations about software engineering, enterprise systems,
                financial technology, and product development.
              </p>
            </div>

            <div className="border-t border-black/20 pt-6 lg:border-t-0 lg:pt-0">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Find me
              </p>

              <Reveal delay={0.15}>
                <div className="flex flex-col">
                  <a
                    href="mailto:your@email.com"
                    className="group flex items-center justify-between border-b border-black/20 py-5"
                  >
                    <span className="text-lg font-semibold uppercase tracking-normal">
                      Email
                    </span>

                    <ArrowTopRightOnSquareIcon className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>

                  <a
                    href="https://github.com/ilhamsptra20"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between border-b border-black/20 py-5"
                  >
                    <span className="text-lg font-semibold uppercase tracking-normal">
                      Github
                    </span>

                    <ArrowTopRightOnSquareIcon className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between border-b border-black/20 py-5"
                  >
                    <span className="text-lg font-semibold uppercase tracking-normal">
                      LinkedIn
                    </span>

                    <ArrowTopRightOnSquareIcon className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>

                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between border-b border-black/20 py-5"
                  >
                    <span className="text-lg font-semibold uppercase tracking-normal">
                      Resume / CV
                    </span>

                    <ArrowTopRightOnSquareIcon className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-24 flex flex-col gap-4 border-t border-black pt-5 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Muhamad Ilham Saputra</span>

            <div className="flex gap-6">
              <a
                href="#top"
                className="transition-opacity hover:opacity-50"
              >
                Back to top
              </a>

              <span>Bogor, Indonesia</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
