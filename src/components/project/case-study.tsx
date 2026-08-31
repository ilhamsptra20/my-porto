import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Reveal, ScaleReveal, Stagger, StaggerItem } from "@/components/motion";
import {
  MediaCarousel,
  type CarouselMediaItem,
} from "@/components/project/media-carousel";
import type { Project } from "@/data/projects";
import { projectDetail } from "@/data/site";

export type MediaItem = CarouselMediaItem & {
  src: string;
};

type MetaItem = {
  label: string;
  value: string;
};

type ColumnItem = {
  number?: string;
  heading: string;
  content: readonly string[] | ReactNode;
};

const splitRatioClass = {
  "50/50": "lg:grid-cols-2",
  "60/40": "lg:grid-cols-[1.2fr_0.8fr]",
  "40/60": "lg:grid-cols-[0.8fr_1.2fr]",
} as const;

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-[1600px] px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-14 lg:px-12 lg:pb-12"
    >
      <Link
        href="/projects"
        className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 transition-opacity hover:opacity-50 md:mb-12"
      >
        <ArrowLeftIcon className="size-4" />
        {projectDetail.backLabel}
      </Link>

      <Reveal>
        <div className="max-w-6xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            {projectDetail.heroEyebrowPrefix} / {project.index}
          </p>

          <Stagger>
            <h1 className="text-6xl font-black uppercase leading-[0.82] tracking-normal sm:text-7xl md:text-8xl lg:text-[8.5rem]">
              {project.title.split(" ").map((word, index) => (
                <StaggerItem key={`${word}-${index}`}>
                  <span className="block">{word}</span>
                </StaggerItem>
              ))}
            </h1>
          </Stagger>
        </div>
      </Reveal>

      <ProjectMeta
        className="mt-9 md:mt-10"
        items={[
          { label: projectDetail.metaLabels.category, value: project.category },
          { label: projectDetail.metaLabels.role, value: project.role },
          { label: projectDetail.metaLabels.focus, value: project.metric },
        ]}
      />
    </section>
  );
}

export function ProjectMeta({
  items,
  className = "",
}: {
  items: readonly MetaItem[];
  className?: string;
}) {
  return (
    <Reveal delay={0.1}>
      <div className={`flex flex-wrap gap-2.5 md:gap-3 ${className}`}>
        {items.map((item) => (
          <div
            key={`${item.label}-${item.value}`}
            className="flex items-center gap-3 border border-black/15 bg-[#f3f0e9]/80 px-3.5 py-2.5 md:px-4"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
              {item.label}
            </span>
            <span className="h-1 w-1 bg-neutral-300" />
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-800">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  meta,
  number,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  meta?: string;
  number?: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <div className="mb-8 flex items-end justify-between gap-8 border-b border-black/15 pb-5 md:mb-10">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {number ? <span>{number}</span> : null}
            {number && eyebrow ? <span>/</span> : null}
            {eyebrow ? <span>{eyebrow}</span> : null}
          </div>
          <h2 className="text-4xl font-black uppercase tracking-normal md:text-6xl">
            {title}
          </h2>
        </div>
        {meta ? (
          <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 md:block">
            {meta}
          </span>
        ) : null}
      </div>
    </Reveal>
  );
}

export function FullMedia({
  media,
  ratio = "aspect-[16/9]",
  className = "",
}: {
  media: MediaItem | readonly MediaItem[];
  ratio?: string;
  className?: string;
}) {
  const mediaItems = Array.isArray(media) ? media : [media];

  if (mediaItems.length > 1) {
    return (
      <ScaleReveal
        className={`mx-auto max-w-[1600px] px-5 md:px-8 lg:px-12 ${className}`}
      >
        <figure>
          <MediaCarousel items={mediaItems} ratio={ratio} />
        </figure>
      </ScaleReveal>
    );
  }

  const firstMedia = mediaItems[0];

  if (!firstMedia) {
    return null;
  }

  return (
    <ScaleReveal
      className={`mx-auto max-w-[1600px] px-5 md:px-8 lg:px-12 ${className}`}
    >
      <figure>
        <ProjectMedia src={firstMedia.src} ratio={ratio} />
        <MediaCaption figure={firstMedia.figure} caption={firstMedia.caption} />
      </figure>
    </ScaleReveal>
  );
}

export function SplitMedia({
  items,
  ratio = "50/50",
}: {
  items: readonly [MediaItem, MediaItem];
  ratio?: keyof typeof splitRatioClass;
}) {
  return (
    <div className={`grid gap-5 ${splitRatioClass[ratio]}`}>
      {items.map((item) => (
        <figure key={`${item.figure}-${item.caption}`}>
          <ProjectMedia src={item.src} ratio="aspect-[16/11]" />
          <MediaCaption figure={item.figure} caption={item.caption} />
        </figure>
      ))}
    </div>
  );
}

export function AsymmetricMedia({
  large,
  small,
}: {
  large: MediaItem;
  small: MediaItem;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch">
      <figure>
        <ProjectMedia src={large.src} ratio="aspect-[16/10]" />
        <MediaCaption figure={large.figure} caption={large.caption} />
      </figure>
      <figure className="lg:self-end">
        <ProjectMedia src={small.src} ratio="aspect-[4/5]" />
        <MediaCaption figure={small.figure} caption={small.caption} />
      </figure>
    </div>
  );
}

export function MediaGrid({ items }: { items: readonly MediaItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item) => (
        <figure key={`${item.figure}-${item.caption}`}>
          <ProjectMedia src={item.src} ratio="aspect-[4/3]" />
          <MediaCaption figure={item.figure} caption={item.caption} />
        </figure>
      ))}
    </div>
  );
}

export function MediaCaption({
  figure,
  caption,
}: {
  figure?: string;
  caption?: string;
}) {
  if (!figure && !caption) {
    return null;
  }

  return (
    <figcaption className="mt-3 flex items-center justify-between gap-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 md:mt-3.5">
      <span>{figure}</span>
      <span className="text-right">{caption}</span>
    </figcaption>
  );
}

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <section className="section-wipe mx-auto max-w-[1600px] px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16 lg:px-12 lg:pt-20">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-20">
        <Reveal>
          <article>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {projectDetail.overviewEyebrow}
            </p>
            <p className="max-w-3xl text-2xl leading-9 text-neutral-700 md:text-3xl md:leading-10">
              {project.overview}
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {project.details.map((item) => (
                <span
                  key={item}
                  className="bg-black px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f3f0e9]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="bg-neutral-950 p-6 text-[#f3f0e9] md:p-8 lg:p-10">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {projectDetail.roleEyebrow}
            </p>
            <h2 className="text-3xl font-black uppercase leading-[0.92] tracking-normal md:text-5xl">
              {project.role}
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              {project.roleDescription}
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export function StatementBlock({
  eyebrow,
  statement,
  meta,
}: {
  eyebrow?: string;
  statement: string;
  meta?: string;
}) {
  return (
    <Reveal>
      <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        {eyebrow ? (
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {eyebrow}
          </p>
        ) : null}
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_280px] md:items-end">
          <p className="max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-normal md:text-7xl lg:text-8xl">
            {statement}
          </p>
          {meta ? (
            <span className="text-left text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 md:text-right">
              {meta}
            </span>
          ) : null}
        </div>
      </section>
    </Reveal>
  );
}

export function StatsBlock({ items }: { items: readonly MetaItem[] }) {
  return (
    <div className="grid gap-8 border-y border-black/15 py-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={`${item.label}-${item.value}`}>
          <p className="text-3xl font-black uppercase tracking-normal md:text-5xl">
            {item.value}
          </p>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function NumberedStrip({
  items,
}: {
  items: readonly string[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item, index) => (
        <div key={item} className="border-t border-black/20 pt-5">
          <p className="mb-6 text-xs font-semibold tracking-[0.18em] text-neutral-400">
            {String(index + 1).padStart(2, "0")}
          </p>
          <p className="text-sm font-black uppercase tracking-[0.12em]">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

export function ThreeColumnBlock({ columns }: { columns: readonly ColumnItem[] }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      {columns.map((column, index) => (
        <Reveal key={column.heading} delay={index * 0.06}>
          <article className="border-t border-black/20 pt-6 md:pt-7">
            <div className="mb-8 flex items-center justify-between gap-6">
              <span className="text-xs font-semibold tracking-[0.18em] text-neutral-400">
                {column.number ?? String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="text-2xl font-black uppercase leading-[0.95] tracking-normal md:text-3xl">
              {column.heading}
            </h3>

            <div className="mt-8 space-y-4 md:mt-9">
              {Array.isArray(column.content)
                ? column.content.map((item) => (
                    <p
                      key={item}
                      className="relative pl-5 text-base leading-7 text-neutral-700 before:absolute before:left-0 before:top-3 before:size-1.5 before:bg-neutral-950"
                    >
                      {item}
                    </p>
                  ))
                : column.content}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function QuoteBlock({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
        <blockquote className="mx-auto max-w-5xl text-center text-4xl font-black uppercase leading-[0.95] tracking-normal md:text-6xl">
          <span className="mb-8 block text-7xl leading-none text-neutral-300">“</span>
          {children}
          <span className="mt-8 block text-7xl leading-none text-neutral-300">”</span>
        </blockquote>
      </section>
    </Reveal>
  );
}

export function TextMediaBlock({
  children,
  media,
  reverse = false,
}: {
  children: ReactNode;
  media: MediaItem;
  reverse?: boolean;
}) {
  return (
    <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal className={reverse ? "lg:order-2" : ""}>{children}</Reveal>
        <ScaleReveal className={reverse ? "lg:order-1" : ""}>
          <figure>
            <ProjectMedia src={media.src} ratio="aspect-[16/11]" />
            <MediaCaption figure={media.figure} caption={media.caption} />
          </figure>
        </ScaleReveal>
      </div>
    </section>
  );
}

export function ProjectNavigation({
  previous,
  next,
}: {
  previous?: Project;
  next?: Project;
}) {
  return (
    <section className="bg-neutral-950 text-[#f3f0e9]">
      <div className="mx-auto grid max-w-[1600px] md:grid-cols-2">
        {previous ? (
          <ProjectNavigationLink project={previous} direction="previous" />
        ) : (
          <div className="hidden md:block" />
        )}
        {next ? <ProjectNavigationLink project={next} direction="next" /> : null}
      </div>
    </section>
  );
}

function ProjectNavigationLink({
  project,
  direction,
}: {
  project: Project;
  direction: "previous" | "next";
}) {
  const isPrevious = direction === "previous";

  return (
    <Link
      href={project.href}
      className="group flex min-h-[300px] flex-col justify-between gap-12 border-white/15 bg-neutral-950 p-6 transition-colors duration-300 hover:bg-[#f3f0e9] hover:text-neutral-950 md:min-h-[340px] md:p-10 lg:p-12 md:[&:not(:last-child)]:border-r"
    >
      <div className="flex items-center justify-between gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 transition-colors group-hover:text-neutral-500">
          {isPrevious ? projectDetail.previousLabel : projectDetail.nextLabel}
        </p>
        {isPrevious ? (
          <ArrowLeftIcon className="size-5 transition-transform duration-300 group-hover:-translate-x-1" />
        ) : (
          <ArrowRightIcon className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </div>
      <p className={`max-w-3xl text-3xl font-black uppercase leading-[0.9] tracking-normal transition-transform duration-300 md:text-5xl ${isPrevious ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}>
        {project.title}
      </p>
    </Link>
  );
}

function ProjectMedia({ src, ratio }: { src: string; ratio: string }) {
  return (
    <div className={`project-preview group relative overflow-hidden bg-neutral-950 p-3 md:p-5 ${ratio}`}>
      <div className="relative h-full overflow-hidden bg-[#101010]">
        <div className="portfolio-grid absolute inset-0 opacity-[0.045]" />
        <div
          className="project-image absolute inset-4 bg-contain bg-center bg-no-repeat opacity-100 transition duration-700 group-hover:scale-[1.01] md:inset-8"
          style={
            {
              backgroundImage: `url("${src}")`,
            } as CSSProperties
          }
        />
      </div>
    </div>
  );
}
