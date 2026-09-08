import { ArrowLeftIcon, ArrowUpRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PortfolioChrome } from "@/components/portfolio-chrome";
import { brand } from "@/data/site";
import { services, servicesPage } from "@/data/services";

export function ServicesPage() {
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
              {brand.monogram}
            </span>
            {brand.name}
          </Link>

          <nav className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.14em] sm:gap-6 md:gap-8 md:text-xs md:tracking-[0.16em]">
            {servicesPage.nav.map((item) => (
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

      <section className="relative mx-auto max-w-[1600px] px-5 pb-14 pt-10 md:px-8 md:pb-20 md:pt-16 lg:px-12">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 transition-opacity hover:opacity-50 md:mb-12"
        >
          <ArrowLeftIcon className="size-4" />
          {servicesPage.backLabel}
        </Link>

        <div className="grid gap-10 border-b border-black pb-10 md:pb-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              {servicesPage.eyebrow}
            </p>
            <Stagger>
              <h1 className="max-w-6xl text-[18vw] font-black uppercase leading-[0.8] tracking-normal sm:text-[14vw] lg:text-[8.6vw]">
                {servicesPage.titleLines.map((line, index) => (
                  <StaggerItem key={line}>
                    <span className={index === 1 ? "hero-accent block" : "block"}>
                      {line}
                    </span>
                  </StaggerItem>
                ))}
              </h1>
            </Stagger>
          </div>

          <Reveal delay={0.16}>
            <div className="max-w-md border-l border-black/20 pl-6">
              <p className="text-xl leading-8 text-neutral-700">{servicesPage.description}</p>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                {servicesPage.pricingEyebrow}
              </p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{servicesPage.pricingNote}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-wipe mx-auto max-w-[1600px] px-5 pb-20 md:px-8 md:pb-28 lg:px-12">
        <div className="mb-6 flex items-end justify-between border-b border-black pb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {String(services.length).padStart(2, "0")} services
          </p>
          <p className="hidden text-xs uppercase tracking-[0.18em] text-neutral-500 sm:block">
            Starting rates / IDR
          </p>
        </div>

        <div className="grid gap-px border border-black/20 bg-black/20 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 0.06}>
              <article className="group flex min-h-[430px] flex-col justify-between bg-[#f3f0e9] p-6 transition-colors duration-300 hover:bg-neutral-950 hover:text-[#f3f0e9] md:p-8 lg:p-10">
                <div>
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-xs font-semibold tracking-[0.18em] text-neutral-400 group-hover:text-[#f3f0e9]/50">
                      {service.number}
                    </span>
                    <ArrowUpRightIcon className="size-5 text-neutral-400 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#f3f0e9]" />
                  </div>

                  <h2 className="mt-12 max-w-xl text-3xl font-black uppercase leading-[0.92] tracking-normal md:text-4xl">
                    {service.name}
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-600 transition-colors group-hover:text-[#f3f0e9]/70 md:text-base md:leading-7">
                    {service.description}
                  </p>
                </div>

                <div className="mt-10">
                  <div className="border-t border-black/15 pt-4 group-hover:border-[#f3f0e9]/20">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 group-hover:text-[#f3f0e9]/55">
                      {service.pricePrefix}
                    </p>
                    <p className="mt-1 text-2xl font-black tracking-normal md:text-3xl">{service.price}</p>
                  </div>

                  <div className="mt-7 grid gap-4 text-xs leading-5 text-neutral-600 group-hover:text-[#f3f0e9]/70 sm:grid-cols-2">
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500 group-hover:text-[#f3f0e9]/55">
                        {servicesPage.durationLabel}
                      </p>
                      <p>{service.duration}</p>
                    </div>
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500 group-hover:text-[#f3f0e9]/55">
                        {servicesPage.fitLabel}
                      </p>
                      <p>{service.fit}</p>
                    </div>
                  </div>

                  <div className="mt-7 border-t border-black/15 pt-4 group-hover:border-[#f3f0e9]/20">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500 group-hover:text-[#f3f0e9]/55">
                      {servicesPage.deliverablesLabel}
                    </p>
                    <ul className="grid gap-2 text-xs text-neutral-700 group-hover:text-[#f3f0e9]/80">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-2">
                          <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-[#00b894]" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-black/15 bg-[#e4eee8]">
        <div className="mx-auto max-w-[1600px] px-5 py-16 md:px-8 md:py-24 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  {servicesPage.processEyebrow}
                </p>
                <h2 className="mt-5 max-w-md text-4xl font-black uppercase leading-[0.92] md:text-6xl">
                  {servicesPage.processTitle}
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-3">
              {servicesPage.process.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.08}>
                  <div className="border-t border-black/25 pt-4">
                    <p className="text-xs font-semibold tracking-[0.18em] text-neutral-400">{step.number}</p>
                    <h3 className="mt-8 text-xl font-black uppercase">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.16}>
            <div className="mt-16 flex flex-col gap-5 border-t border-black pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm leading-6 text-neutral-600">
                Have a project in mind? Share the context, and we can shape the right scope together.
              </p>
              <Link
                href={servicesPage.contactHref}
                className="inline-flex items-center gap-3 self-start border-b border-black pb-2 text-xs font-semibold uppercase tracking-[0.16em] transition-opacity hover:opacity-50 sm:self-auto"
              >
                {servicesPage.contactCta}
                <ArrowUpRightIcon className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
