import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Reveal } from "@/components/motion";
import {
  education,
  featuredCredentials,
  profileSection,
  type Credential,
  type Education,
} from "@/data/profile";

function formatEducationPeriod(item: Education) {
  if (item.period) {
    return item.period;
  }

  if (item.startYear && item.endYear) {
    return `${item.startYear} — ${item.endYear}`;
  }

  return item.startYear ?? item.endYear;
}

function EducationList({ items }: { items: Education[] }) {
  return (
    <div>
      <div className="mb-5 border-b border-black/25 pb-3">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          {profileSection.educationHeading}
        </h3>
      </div>

      <div className="space-y-6">
        {items.map((item) => (
          <article key={`${item.institution}-${item.program}`}>
            <h4 className="max-w-xl text-lg font-black uppercase leading-tight tracking-normal md:text-xl">
              {item.institution}
            </h4>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-600">
              {item.program}
            </p>

            <div className="mt-4 space-y-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
              {formatEducationPeriod(item) ? (
                <p>{formatEducationPeriod(item)}</p>
              ) : null}
              {item.location ? <p>{item.location}</p> : null}
              {item.gpa ? <p>{profileSection.gpaLabel} / {item.gpa}</p> : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function CredentialList({ items }: { items: Credential[] }) {
  return (
    <div>
      <div className="mb-3 border-b border-black/25 pb-3">
        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          {profileSection.credentialsHeading}
        </h3>
      </div>

      <div className="divide-y divide-black/10">
        {items.map((item) => (
          <article
            key={`${item.provider}-${item.title}`}
            className="group py-4 first:pt-2 last:pb-0"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h4 className="max-w-xl text-sm font-black uppercase leading-snug tracking-normal md:text-base">
                  {item.title}
                </h4>

                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                  {[item.provider, item.year].filter(Boolean).join(" · ")}
                </p>
              </div>

              {item.credentialUrl ? (
                <a
                  href={item.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Verify ${item.title}`}
                  className="mt-0.5 shrink-0 text-neutral-400 transition-colors duration-200 hover:text-neutral-950"
                >
                  <ArrowTopRightOnSquareIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              ) : null}
            </div>

            {item.credentialId ? (
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                {profileSection.credentialIdLabel} / {item.credentialId}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}

export function ProfileBackground() {
  if (!education.length && !featuredCredentials.length) {
    return null;
  }

  return (
    <Reveal>
      <div className="mt-14 border-t border-black pt-5">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          {profileSection.label}
        </p>

        <div className="grid gap-10 md:grid-cols-[0.86fr_1.14fr] md:gap-12">
          {education.length ? (
            <div>
              <EducationList items={education} />
            </div>
          ) : null}

          {featuredCredentials.length ? (
            <div className={education.length ? "border-t border-black/15 pt-10 md:border-t-0 md:pt-0" : ""}>
              <CredentialList items={featuredCredentials} />
            </div>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}
