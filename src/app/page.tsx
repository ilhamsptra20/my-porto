import {
  ArrowDownIcon,
  ArrowTopRightOnSquareIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  Reveal,
  ScaleReveal,
  Stagger,
  StaggerItem,
} from "@/components/motion";
import { MagneticLink } from "@/components/magnetic-link";
import { ExperienceSection } from "@/components/experience-section";
import { PortfolioChrome } from "@/components/portfolio-chrome";
import { ProfileBackground } from "@/components/profile-background";
import { Preloader } from "@/components/preloader";
import { selectedProjects } from "@/data/projects";

const techTicker = [
  { label: "Next.js", slug: "nextdotjs" },
  { label: "React", slug: "react" },
  { label: "Laravel", slug: "laravel" },
  { label: "PHP", slug: "php" },
  { label: "PostgreSQL", slug: "postgresql" },
  { label: "MySQL", slug: "mysql" },
  { label: "Redis", slug: "redis" },
  { label: "Tailwind CSS", slug: "tailwindcss" },
  { label: "Git", slug: "git" },
  { label: "GitHub", slug: "github" },
];

const capabilities = [
  "Architecture",
  "Engineering",
  "Database",
  "Responsibility",
  "Integration",
  "Product Thinking",
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f0e9] text-neutral-950">
      <Preloader />
      <PortfolioChrome />

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
            data-nav="top"
            className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em]"
          >
            <span className="monogram-mark grid size-9 place-items-center border border-black bg-neutral-950 text-[11px] text-[#f3f0e9] transition-transform duration-300 group-hover:rotate-6">
              MIS
            </span>
            Ilham Saputra
          </a>

          <nav className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.16em] md:gap-8">
            <a data-nav="work" className="nav-link transition-opacity hover:opacity-50" href="#work">
              Work
            </a>
            <Link className="nav-link transition-opacity hover:opacity-50" href="/projects">
              Projects
            </Link>
            <a data-nav="about" className="nav-link transition-opacity hover:opacity-50" href="#about">
              About
            </a>
            <a data-nav="contact" className="nav-link transition-opacity hover:opacity-50" href="#contact">
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

                <div className="mt-7 space-y-3 border-t border-white/10 pt-4 text-xs text-white/55">
                  {[
                    ["Currently building", "Financial systems"],
                    ["Main stack", "Next.js / Laravel"],
                    ["Strength", "Business logic & architecture"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="grid gap-1 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                        {label}
                      </span>
                      <span className="font-semibold text-[#f3f0e9]">
                        {value}
                      </span>
                    </div>
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
        <div className="marquee-track flex w-max gap-8">
          {[...techTicker, ...techTicker].map((item, index) => (
            <span
              key={`${item.slug}-${index}`}
              className="flex items-center gap-8"
            >
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

      <section
        aria-label="Capabilities"
        className="border-b border-black/20 bg-[#e8e2d6]/70 px-5 py-5 md:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-px overflow-hidden border border-black/15 bg-black/15 sm:grid-cols-3 lg:grid-cols-6">
          {capabilities.map((item) => (
            <div
              key={item}
              className="spotlight-card group relative flex min-h-24 items-end overflow-hidden bg-[#f3f0e9] p-4 text-neutral-950 transition-colors duration-300 hover:bg-neutral-950 hover:text-[#f3f0e9]"
            >
              <h3 className="text-sm font-black uppercase tracking-[0.12em]">
                {item}
              </h3>
              <span className="absolute right-5 top-5 h-px w-10 bg-black/20 transition-colors duration-300 group-hover:bg-emerald-300" />
            </div>
          ))}
        </div>
      </section>

      <div aria-hidden="true" className="diagonal-band h-14 border-b border-black/20" />

      <section
        id="work"
        className="section-wipe relative mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32"
      >
        <Reveal>
          <div className="mb-14 flex items-end justify-between gap-8 border-b border-black pb-5 md:mb-20">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                01 / Selected Work
              </p>
              <h2 className="text-4xl font-black uppercase tracking-normal md:text-6xl">
                Selected Work
              </h2>
            </div>

            <Link
              href="/projects"
              className="hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-50 md:flex"
            >
              All Projects
              <ArrowTopRightOnSquareIcon className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="space-y-14 md:space-y-20">
          {selectedProjects.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={project.index}
                className="group relative grid gap-6 border-b border-black/20 pb-14 md:gap-8 md:pb-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-stretch"
              >
                <ScaleReveal className={reverse ? "lg:order-2" : ""}>
                  <Link
                    href={project.href}
                    aria-label={`Open ${project.title}`}
                    className="project-preview relative block aspect-[16/10] overflow-hidden bg-neutral-950"
                  >
                    <div
                      className="project-image absolute inset-0 bg-cover bg-center opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                      style={
                        {
                          backgroundImage: `url("${project.image}")`,
                        } as CSSProperties
                      }
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.05),transparent_52%,rgba(10,10,10,0.34))] transition-opacity duration-500 group-hover:opacity-0" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                      <span>FIG. {project.index}</span>
                      <span>{project.metric}</span>
                    </div>
                  </Link>
                </ScaleReveal>

                <Reveal delay={0.08} className={reverse ? "lg:order-1" : ""}>
                  <div className="flex h-full flex-col justify-between gap-10">
                    <div>
                      <div className="mb-7 flex items-start justify-between gap-6">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700/70">
                          Project {project.index}
                        </span>
                        <ArrowTopRightOnSquareIcon className="size-4 shrink-0 text-neutral-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neutral-950" />
                      </div>

                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        {project.category}
                      </p>

                      <h3 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-normal transition-transform duration-300 group-hover:translate-x-1 md:text-6xl">
                        <Link href={project.href}>{project.title}</Link>
                      </h3>

                      <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-700">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="mb-5 grid gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
                        <div className="flex justify-between gap-6 border-t border-black/15 pt-3">
                          <span>Role</span>
                          <span className="text-right text-neutral-800">
                            {project.role}
                          </span>
                        </div>
                        <div className="flex justify-between gap-6 border-t border-black/15 pt-3">
                          <span>Stack</span>
                          <span className="text-right text-neutral-800">
                            {project.stack.slice(0, 3).join(" / ")}
                          </span>
                        </div>
                      </div>

                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-2 border-b border-black pb-1 text-xs font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-50"
                      >
                        Explore project
                        <ArrowTopRightOnSquareIcon className="size-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      <ExperienceSection />

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

      <footer
        id="contact"
        className="section-wipe relative border-t border-black bg-[#f3f0e9] text-neutral-950"
      >
        <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-36">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            04 / Contact
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
                    className="spotlight-card group flex items-center justify-between border-b border-black/20 py-5"
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
                    className="spotlight-card group flex items-center justify-between border-b border-black/20 py-5"
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
                    className="spotlight-card group flex items-center justify-between border-b border-black/20 py-5"
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
                    className="spotlight-card group flex items-center justify-between border-b border-black/20 py-5"
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

            <div className="flex flex-wrap gap-6">
              <a
                href="#top"
                className="inline-flex items-center gap-2 transition-opacity hover:opacity-50"
              >
                Back to top
                <ArrowUpIcon className="size-4" />
              </a>

              <span>Bogor, Indonesia</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
