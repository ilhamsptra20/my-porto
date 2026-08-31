import {
  ArrowTopRightOnSquareIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { Reveal } from "@/components/motion";
import { contact, contactLinks, footer } from "@/data/home";

export function ContactFooter() {
  return (
    <footer
      id="contact"
      className="section-wipe relative border-t border-black bg-[#f3f0e9] text-neutral-950"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-8 md:py-28 lg:px-12 lg:py-36">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          {contact.eyebrow}
        </p>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div>
            <Reveal>
              <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-normal md:text-7xl lg:text-8xl">
                {contact.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
              {contact.description}
            </p>
          </div>

          <div className="border-t border-black/20 pt-6 lg:border-t-0 lg:pt-0">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
              {contact.linksLabel}
            </p>

            <Reveal delay={0.15}>
              <div className="flex flex-col">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="spotlight-card group flex items-center justify-between border-b border-black/20 py-5"
                  >
                    <span className="text-lg font-semibold uppercase tracking-normal">
                      {item.label}
                    </span>

                    <ArrowTopRightOnSquareIcon className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-black pt-5 text-xs font-medium uppercase tracking-[0.16em] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>{footer.copyright}</span>

          <div className="flex flex-wrap gap-6">
            <a
              href="#top"
              className="inline-flex items-center gap-2 transition-opacity hover:opacity-50"
            >
              {footer.backToTopLabel}
              <ArrowUpIcon className="size-4" />
            </a>

            <span>{footer.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
