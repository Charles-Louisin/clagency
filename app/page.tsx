import dynamic from "next/dynamic";
import { SiteNav } from "@/components/SiteNav";
import { HeroSection } from "@/components/HeroSection";
import { ExpertiseScrollSection } from "@/components/ExpertiseScrollSection";
import { MethodologyGrid } from "@/components/MethodologyGrid";
import { AtelierSection } from "@/components/AtelierSection";

const CaseStudiesSection = dynamic(
  () =>
    import("@/components/CaseStudiesSection").then((m) => m.CaseStudiesSection),
  { loading: () => <section className="min-h-[50vh]" aria-hidden /> }
);

const PricingCards = dynamic(
  () => import("@/components/PricingCards").then((m) => m.PricingCards),
  { loading: () => <section className="min-h-[40vh]" aria-hidden /> }
);

const WhatsAppSimulator = dynamic(
  () =>
    import("@/components/WhatsAppSimulator").then((m) => m.WhatsAppSimulator),
  { loading: () => <section className="min-h-[40vh]" aria-hidden /> }
);

const VoidFooter = dynamic(
  () => import("@/components/VoidFooter").then((m) => m.VoidFooter),
  { loading: () => <footer className="min-h-[30vh] bg-black" aria-hidden /> }
);

export default function Home() {
  return (
    <>
      <main>
        <div className="relative">
          <SiteNav />
          <HeroSection />
        </div>
        <ExpertiseScrollSection />
        <MethodologyGrid />
        <AtelierSection />
        <CaseStudiesSection />
        <PricingCards />
        <WhatsAppSimulator />
      </main>
      <VoidFooter />
    </>
  );
}
