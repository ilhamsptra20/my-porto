import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Reveal } from "@/components/motion";
import type { Project } from "@/data/projects";
import { projectsArchive } from "@/data/site";

type ArchiveLayout = Project["archiveLayout"];

const itemSpanClass: Record<ArchiveLayout, string> = {
  featured: "lg:col-span-12",
  split: "lg:col-span-7",
  landscape: "lg:col-span-12",
  portrait: "lg:col-span-5",
};

export function ProjectArchiveGrid({ projects }: { projects: readonly Project[] }) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      {projects.map((project, index) => (
        <Reveal
          key={project.slug}
          delay={index * 0.06}
          className={itemSpanClass[project.archiveLayout]}
        >
          <ProjectArchiveItem project={project} variant={project.archiveLayout} />
        </Reveal>
      ))}
    </div>
  );
}

export function ProjectArchiveItem({
  project,
  variant,
}: {
  project: Project;
  variant: ArchiveLayout;
}) {
  if (variant === "featured") {
    return <FeaturedProjectArchiveItem project={project} />;
  }

  if (variant === "landscape") {
    return <LandscapeProjectArchiveItem project={project} />;
  }

  if (variant === "portrait") {
    return <PortraitProjectArchiveItem project={project} />;
  }

  return <SplitProjectArchiveItem project={project} />;
}

function FeaturedProjectArchiveItem({ project }: { project: Project }) {
  return (
    <article className="group grid overflow-hidden border border-black bg-[#f3f0e9] shadow-[10px_10px_0_rgba(10,10,10,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[14px_14px_0_rgba(10,10,10,0.1)] lg:grid-cols-[1.18fr_0.82fr]">
      <ProjectArchiveMedia
        project={project}
        label={`${project.index} / ${projectsArchive.itemLabels.featured}`}
        className="min-h-[340px] md:min-h-[520px]"
      />
      <ProjectArchiveInfo
        project={project}
        titleClassName="text-5xl md:text-7xl"
        className="border-t border-black p-6 md:p-9 lg:border-l lg:border-t-0 lg:p-12"
      />
    </article>
  );
}

function SplitProjectArchiveItem({ project }: { project: Project }) {
  return (
    <article className="group grid min-h-[420px] overflow-hidden border border-black bg-[#f3f0e9] shadow-[8px_8px_0_rgba(10,10,10,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_rgba(10,10,10,0.09)] md:grid-cols-[0.95fr_1.05fr]">
      <ProjectArchiveInfo
        project={project}
        titleClassName="text-3xl md:text-4xl"
        className="p-5 md:p-7 lg:p-8"
      />
      <ProjectArchiveMedia
        project={project}
        label={`${project.index} / ${projectsArchive.itemLabels.split}`}
        className="min-h-[300px] border-t border-black md:border-l md:border-t-0"
      />
    </article>
  );
}

function LandscapeProjectArchiveItem({ project }: { project: Project }) {
  return (
    <article className="group grid overflow-hidden border border-black bg-[#f3f0e9] shadow-[8px_8px_0_rgba(10,10,10,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_rgba(10,10,10,0.09)] lg:grid-cols-[0.78fr_1.22fr]">
      <ProjectArchiveInfo
        project={project}
        titleClassName="text-4xl md:text-5xl"
        className="p-6 md:p-8 lg:p-10"
      />
      <ProjectArchiveMedia
        project={project}
        label={`${project.index} / ${projectsArchive.itemLabels.landscape}`}
        className="min-h-[340px] border-t border-black lg:border-l lg:border-t-0"
      />
    </article>
  );
}

function PortraitProjectArchiveItem({ project }: { project: Project }) {
  return (
    <article className="group flex h-full min-h-[620px] flex-col overflow-hidden border border-black bg-[#f3f0e9] shadow-[8px_8px_0_rgba(10,10,10,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_rgba(10,10,10,0.09)]">
      <ProjectArchiveInfo
        project={project}
        titleClassName="text-3xl md:text-4xl"
        className="p-5 md:p-7 lg:p-8"
      />
      <ProjectArchiveMedia
        project={project}
        label={`${project.index} / ${projectsArchive.itemLabels.portrait}`}
        className="min-h-[300px] flex-1 border-t border-black"
      />
    </article>
  );
}

function ProjectArchiveInfo({
  project,
  className,
  titleClassName,
}: {
  project: Project;
  className: string;
  titleClassName: string;
}) {
  return (
    <div className={`flex flex-col justify-between gap-10 ${className}`}>
      <div>
        <div className="mb-7 flex items-start justify-between gap-6">
          <span className="text-xs font-semibold tracking-[0.18em] text-neutral-400">
            {project.index}
          </span>
          <ArrowTopRightOnSquareIcon className="size-4 shrink-0 text-neutral-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-neutral-950" />
        </div>

        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
          {project.category}
        </p>

        <h2
          className={`mt-5 font-black uppercase leading-[0.9] tracking-normal transition-transform duration-300 group-hover:translate-x-1 ${titleClassName}`}
        >
          <Link href={project.href}>{project.title}</Link>
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-6 text-neutral-700 md:text-base md:leading-7">
          {project.description}
        </p>
      </div>

      <div>
        <div className="mb-5 grid gap-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
          <div className="flex justify-between gap-6 border-t border-black/15 pt-3">
            <span>{projectsArchive.itemLabels.role}</span>
            <span className="text-right text-neutral-800">{project.role}</span>
          </div>
          <div className="flex justify-between gap-6 border-t border-black/15 pt-3">
            <span>{projectsArchive.itemLabels.focus}</span>
            <span className="text-right text-neutral-800">{project.metric}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((item) => (
            <span
              key={item}
              className="border border-black/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href={project.href}
          className="mt-7 inline-flex items-center gap-2 border-b border-black pb-1 text-xs font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-50"
        >
          {projectsArchive.itemLabels.viewCaseStudy}
          <ArrowTopRightOnSquareIcon className="size-4" />
        </Link>
      </div>
    </div>
  );
}

function ProjectArchiveMedia({
  project,
  label,
  className = "",
}: {
  project: Project;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={project.href}
      aria-label={`Open ${project.title}`}
      className={`project-preview relative block overflow-hidden bg-neutral-950 ${className}`}
    >
      <div
        className="project-image absolute inset-0 bg-cover bg-center opacity-95 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
        style={
          {
            backgroundImage: `url("${project.image}")`,
          } as CSSProperties
        }
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.04),transparent_52%,rgba(10,10,10,0.28))] transition-opacity duration-500 group-hover:opacity-0" />
      <div className="absolute left-4 top-4 border border-white/25 bg-black/35 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
        {label}
      </div>
    </Link>
  );
}
