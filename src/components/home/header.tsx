import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f3f0e9]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-8 lg:px-12">
        <a
          href="#top"
          data-nav="top"
          className="group flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em]"
        >
          <span className="monogram-mark grid size-9 place-items-center border border-black bg-neutral-950 text-[11px] text-[#f3f0e9] transition-transform duration-300 group-hover:rotate-6">
            MIS
          </span>
          Ilham Saputra
        </a>

        <nav className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.16em] md:gap-8">
          <a
            data-nav="work"
            className="nav-link transition-opacity hover:opacity-50"
            href="#work"
          >
            Work
          </a>
          <Link
            className="nav-link transition-opacity hover:opacity-50"
            href="/projects"
          >
            Projects
          </Link>
          <a
            data-nav="about"
            className="nav-link transition-opacity hover:opacity-50"
            href="#about"
          >
            About
          </a>
          <a
            data-nav="contact"
            className="nav-link transition-opacity hover:opacity-50"
            href="#contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
