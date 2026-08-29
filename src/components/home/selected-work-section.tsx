import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Reveal, ScaleReveal } from "@/components/motion";
import { selectedProjects } from "@/data/projects";

export function SelectedWorkSection() {
  return (
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
  );
}
