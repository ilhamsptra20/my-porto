import { capabilities } from "@/data/home";

export function CapabilitiesStrip() {
  return (
    <section
      aria-label="Capabilities"
      className="border-b border-black/20 bg-[#e8e2d6]/70 px-5 py-5 md:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-px overflow-hidden border border-black/15 bg-black/15 sm:grid-cols-3 lg:grid-cols-6">
        {capabilities.map((item) => (
          <div
            key={item}
            className="spotlight-card group relative flex min-h-24 items-end overflow-hidden bg-[#f3f0e9] p-4 text-neutral-950 transition-colors duration-300 hover:bg-neutral-950 hover:text-[#f3f0e9]"
          >
            <h3 className="text-sm font-black uppercase tracking-[0.12em]">
              {item}
            </h3>
            <span className="absolute right-5 top-5 h-px w-10 bg-black/20 transition-colors duration-300 group-hover:bg-emerald-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
