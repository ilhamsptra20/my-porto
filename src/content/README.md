# Portfolio Content Guide

Edit these JSON files when updating portfolio copy:

- `home.json`: homepage labels, hero copy, selected work section, about, contact, and visual ticker content.
- `projects.json`: all project cards and case study content. Set `selected` to `true` to show a project on the homepage. Use `problem`, `impact`, and `constraint` for the concise case study context.
- `experience.json`: work experience timeline and technology logo groups.
- `profile.json`: personal identity, capabilities, education, credentials, and contact links.
- `site.json`: shared labels, navigation copy, project page labels, and global SEO metadata.
- `services.json`: service names, starting prices, timelines, deliverables, and services page copy.

For project media, keep each item complete:

- `src`: image URL.
- `title`: carousel title.
- `subtitle`: short image explanation.
- `figure`: figure number, such as `FIG. 01`.
- `caption`: compact caption shown below media.

When the portfolio has a production domain, set `NEXT_PUBLIC_SITE_URL` to the public URL used for social previews. The value in `seo.siteUrl` remains a local fallback for development.
