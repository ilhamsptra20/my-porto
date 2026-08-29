import {
  ArrowLeftIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PortfolioChrome } from "@/components/portfolio-chrome";
import { ProjectArchiveGrid } from "@/components/project/archive";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f0e9] text-neutral-950">
      <PortfolioChrome />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(19,78,74,0.14),transparent_28%),radial-gradient(circle_at_88%_8%,rgba(234,88,12,0.12),transparent_30%),linear-gradient(to_bottom,rgba(243,240,233,0.9),rgba(243,240,233,1)_44%)]" />
        <div className="portfolio-grid absolute inset-0 opacity-[0.2]" />
        <div className="portfolio-noise absolute inset-0 opacity-[0.12]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3f0e9]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <Link
            href="/"
            className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em]"
          >
            <span className="monogram-mark grid size-9 place-items-center border border-black bg-neutral-950 text-[11px] text-[#f3f0e9] transition-transform duration-300 group-hover:rotate-6">
              MIS
            </span>
            Ilham Saputra
          </Link>

          <nav className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.16em] md:gap-8">
            <Link className="nav-link transition-opacity hover:opacity-50" href="/">
              Home
            </Link>
            <Link className="nav-link transition-opacity hover:opacity-50" href="/#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative mx-auto max-w-[1600px] px-5 pb-14 pt-10 md:px-8 md:pb-20 md:pt-16 lg:px-12"
      >
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 transition-opacity hover:opacity-50 md:mb-12"
        >
          <ArrowLeftIcon className="size-4" />
          Back home
        </Link>

        <div className="grid gap-10 border-b border-black pb-10 md:pb-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Project Archive / 2026
            </p>

            <Stagger>
              <h1 className="max-w-6xl text-[18vw] font-black uppercase leading-[0.8] tracking-normal sm:text-[14vw] lg:text-[8.6vw]">
                <StaggerItem>
                  <span className="block">All</span>
                </StaggerItem>
                <StaggerItem>
                  <span className="hero-accent block">Projects</span>
                </StaggerItem>
              </h1>
            </Stagger>
          </div>

          <Reveal delay={0.16}>
            <div className="max-w-md border-l border-black/20 pl-6">
              <p className="text-xl leading-8 text-neutral-700">
                Collection of production work across financial systems,
                payment infrastructure, enterprise operations, and internal
                business applications.
              </p>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                {String(projects.length).padStart(2, "0")} Featured Projects
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="projects"
        className="section-wipe mx-auto max-w-[1600px] px-5 pb-20 md:px-8 md:pb-28 lg:px-12"
      >
        <ProjectArchiveGrid projects={projects} />

        <div className="mt-16 flex items-end justify-between border-t border-black/20 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          <span>{String(projects.length).padStart(2, "0")} Projects</span>
          <Link
            href="#top"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-50"
          >
            Back to top
            <ArrowUpIcon className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
