import { AboutSection } from "@/components/home/about-section";
import { BackgroundDecor } from "@/components/home/background-decor";
import { CapabilitiesStrip } from "@/components/home/capabilities-strip";
import { ContactFooter } from "@/components/home/contact-footer";
import { DiagonalDivider } from "@/components/home/section-divider";
import { ExperienceSection } from "@/components/home/experience-section";
import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { SelectedWorkSection } from "@/components/home/selected-work-section";
import { TechTicker } from "@/components/home/tech-ticker";
import { PortfolioChrome } from "@/components/portfolio-chrome";
import { Preloader } from "@/components/preloader";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3f0e9] text-neutral-950">
      <Preloader />
      <PortfolioChrome />
      <BackgroundDecor />
      <Header />
      <HeroSection />
      <TechTicker />
      <CapabilitiesStrip />
      <DiagonalDivider />
      <SelectedWorkSection />
      <ExperienceSection />
      <AboutSection />
      <ContactFooter />
    </main>
  );
}
