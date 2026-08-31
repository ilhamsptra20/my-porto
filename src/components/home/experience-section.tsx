"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/motion";
import { experience, type ExperienceDetail } from "@/data/experience";
import { experienceSection } from "@/data/home";
import { TechnologyIcon } from "@/components/technology/technology-icon";

function DetailTextBlock({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div className="border-t border-white/20 pt-4">
      <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
        {label}
      </h4>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="max-w-xl text-sm leading-7 text-white/60">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechnologiesBlock({
  label,
  technologies,
}: {
  label: string;
  technologies: ExperienceDetail["technologies"];
}) {
  return (
    <div className="border-t border-white/20 pt-4">
      <div className="flex items-center justify-between gap-6">
        <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
          {label}
        </h4>

        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/30">
          {String(technologies.length).padStart(2, "0")}
        </span>
      </div>

      <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-5">
        {technologies.map((technology) => (
          <li key={technology.name}>
            <span className="group/tech inline-flex items-center gap-2.5 text-white/60 transition duration-200 hover:-translate-y-px hover:text-white">
              <TechnologyIcon
                slug={technology.iconSlug}
                className="size-5 shrink-0 bg-current opacity-80 transition-opacity duration-200 group-hover/tech:opacity-100"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                {technology.name}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceDetailGrid({ details }: { details: ExperienceDetail }) {
  return (
    <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
      <DetailTextBlock
        label={experienceSection.detailLabels.responsibilities}
        items={details.responsibilities}
      />
      <DetailTextBlock
        label={experienceSection.detailLabels.projects}
        items={details.projects}
      />
      <TechnologiesBlock
        label={experienceSection.detailLabels.technologies}
        technologies={details.technologies}
      />
      <DetailTextBlock
        label={experienceSection.detailLabels.contribution}
        items={details.contributions}
      />
    </div>
  );
}

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-wipe relative overflow-hidden bg-neutral-950 text-[#f3f0e9]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(45,212,191,0.18),transparent_28%),radial-gradient(circle_at_20%_88%,rgba(251,146,60,0.12),transparent_26%)]" />
      <div className="portfolio-grid pointer-events-none absolute inset-0 opacity-[0.09]" />
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-36">
        <div className="mb-16 flex items-end justify-between border-b border-white/30 pb-5">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              {experienceSection.eyebrow}
            </p>

            <h2 className="text-4xl font-black uppercase tracking-normal md:text-6xl">
              {experienceSection.title}
            </h2>
          </div>

          <span className="hidden text-xs uppercase tracking-[0.18em] text-white/40 md:block">
            {experienceSection.range}
          </span>
        </div>

        <div>
          {experience.map((item, index) => {
            const itemNumber = String(index + 1).padStart(2, "0");
            const isOpen = openIndex === index;
            const panelId = `experience-detail-${itemNumber}`;

            return (
              <Reveal key={`${item.company}-${item.period}`} delay={index * 0.08}>
                <article
                  className="spotlight-card group border-b border-white/15 transition-colors duration-300 hover:border-white/35"
                  data-open={isOpen}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="grid w-full cursor-pointer gap-7 py-10 text-left md:grid-cols-[80px_180px_minmax(0,1fr)_minmax(260px,360px)_32px] md:gap-10 md:py-12"
                  >
                    <span className="text-xs font-medium tracking-[0.18em] text-white/30 transition-colors duration-300 group-hover:text-emerald-300">
                      {itemNumber}
                    </span>

                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/45 transition-colors duration-300 group-hover:text-white/70">
                      {item.period}
                    </span>

                    <span>
                      <span className="block text-2xl font-bold uppercase leading-tight tracking-normal transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                        {item.company}
                      </span>

                      <span className="mt-3 block text-sm uppercase tracking-[0.12em] text-white/45">
                        {item.role}
                      </span>
                    </span>

                    <span className="max-w-sm leading-7 text-white/55 transition-colors duration-300 group-hover:text-white/70">
                      {item.focus}
                    </span>

                    <span
                      aria-hidden="true"
                      className="self-start justify-self-start text-2xl font-light leading-none text-white/28 transition duration-300 group-hover:rotate-90 group-hover:text-white/70 md:justify-self-end"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.36,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-7 pb-12 md:grid-cols-[80px_180px_minmax(0,1fr)_minmax(260px,360px)_32px] md:gap-10 md:pb-14">
                          <div className="hidden md:block" />
                          <div className="hidden md:block" />

                          <div className="md:col-span-3">
                            <p className="mb-9 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-300/70">
                              {experienceSection.detailPrefix} / {itemNumber}
                            </p>

                            <ExperienceDetailGrid details={item.details} />
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
