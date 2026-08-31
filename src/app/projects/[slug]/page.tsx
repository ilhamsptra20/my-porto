import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortfolioChrome } from "@/components/portfolio-chrome";
import {
  FullMedia,
  NumberedStrip,
  ProjectHero,
  ProjectNavigation,
  ProjectOverview,
  SectionHeader,
  StatementBlock,
  StatsBlock,
  ThreeColumnBlock,
} from "@/components/project/case-study";
import { getProjectBySlug, projects, type Project } from "@/data/projects";
import { brand, projectDetail } from "@/data/site";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: projectDetail.notFoundTitle,
    };
  }

  return {
    title: `${project.title} | ${projectDetail.metadataTitleSuffix}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : undefined;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : undefined;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f0e9] text-neutral-950">
      <PortfolioChrome />

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(19,78,74,0.13),transparent_30%),radial-gradient(circle_at_88%_10%,rgba(234,88,12,0.12),transparent_30%),linear-gradient(to_bottom,rgba(243,240,233,0.92),rgba(243,240,233,1)_42%)]" />
        <div className="portfolio-grid absolute inset-0 opacity-[0.18]" />
        <div className="portfolio-noise absolute inset-0 opacity-[0.1]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3f0e9]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <Link
            href="/"
            className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em]"
          >
            <span className="monogram-mark grid size-9 place-items-center border border-black bg-neutral-950 text-[11px] text-[#f3f0e9] transition-transform duration-300 group-hover:rotate-6">
              {brand.monogram}
            </span>
            {brand.name}
          </Link>

          <nav className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.16em] md:gap-8">
            {projectDetail.nav.map((item) => (
              <Link
                key={item.label}
                className="nav-link transition-opacity hover:opacity-50"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <ProjectHero project={project} />

      <FullMedia
        className="pb-2 md:pb-4"
        media={project.media}
      />

      <ProjectOverview project={project} />

      <ProjectExecution project={project} projectIndex={projectIndex} />

      <ProjectNavigation previous={previousProject} next={nextProject} />
    </main>
  );
}

function ProjectExecution({
  project,
  projectIndex,
}: {
  project: Project;
  projectIndex: number;
}) {
  const columns = [
    {
      number: "01",
      heading: projectDetail.executionColumns.scope,
      content: project.scope,
    },
    {
      number: "02",
      heading: projectDetail.executionColumns.responsibility,
      content: project.responsibilities,
    },
    {
      number: "03",
      heading: projectDetail.executionColumns.highlights,
      content: project.highlights,
    },
  ];

  if (projectIndex % 3 === 1) {
    return (
      <>
        <StatementBlock
          eyebrow={projectDetail.statementEyebrow}
          statement={project.metric}
          meta={project.category}
        />

        <section className="mx-auto max-w-[1600px] px-5 pb-20 md:px-8 md:pb-28 lg:px-12">
          <SectionHeader
            eyebrow={projectDetail.executionEyebrow}
            title={projectDetail.executionTitle}
            meta={projectDetail.executionMeta}
            number={projectDetail.executionNumber}
          />
          <ThreeColumnBlock columns={columns} />
        </section>
      </>
    );
  }

  if (projectIndex % 3 === 2) {
    return (
      <section className="mx-auto max-w-[1600px] px-5 pb-20 md:px-8 md:pb-28 lg:px-12">
        <SectionHeader
          eyebrow={projectDetail.executionEyebrow}
          title={projectDetail.executionTitle}
          meta={projectDetail.executionMeta}
          number={projectDetail.executionNumber}
        />
        <ThreeColumnBlock columns={columns} />

        <div className="mt-16">
          <SectionHeader
            eyebrow={projectDetail.systemEyebrow}
            title={projectDetail.systemTitle}
            number={projectDetail.systemNumber}
          />
          <StatsBlock
            items={project.stack.map((item) => ({
              label: projectDetail.stackLabel,
              value: item,
            }))}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1600px] px-5 pb-20 md:px-8 md:pb-28 lg:px-12">
      <SectionHeader
        eyebrow={projectDetail.executionEyebrow}
        title={projectDetail.executionTitle}
        meta={projectDetail.executionMeta}
        number={projectDetail.executionNumber}
      />
      <ThreeColumnBlock columns={columns} />

      <div className="mt-16">
        <SectionHeader
          eyebrow={projectDetail.flowEyebrow}
          title={projectDetail.flowTitle}
          number={projectDetail.flowNumber}
        />
        <NumberedStrip items={project.details} />
      </div>
    </section>
  );
}
