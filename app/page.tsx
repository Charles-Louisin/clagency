import dynamic from "next/dynamic";
import { SiteNav } from "@/components/SiteNav";
import { LoadingWithLogo } from "@/components/LoadingWithLogo";

const CaseStudiesSection = dynamic(
  () =>
    import("@/components/CaseStudiesSection").then((m) => m.CaseStudiesSection),
  {
    loading: () => <LoadingWithLogo className="min-h-[50vh]" />,
  }
);

const PricingCards = dynamic(
  () => import("@/components/PricingCards").then((m) => m.PricingCards),
  { loading: () => <LoadingWithLogo className="min-h-[40vh]" /> }
);

const WhatsAppSimulator = dynamic(
  () =>
    import("@/components/WhatsAppSimulator").then((m) => m.WhatsAppSimulator),
  { loading: () => <LoadingWithLogo className="min-h-[40vh]" /> }
);

const VoidFooter = dynamic(
  () => import("@/components/VoidFooter").then((m) => m.VoidFooter),
  {
    loading: () => (
      <LoadingWithLogo className="min-h-[30vh] bg-black" />
    ),
  }
);

const HeroSection = dynamic(
  () => import("@/components/HeroSection").then((m) => m.HeroSection),
  { loading: () => <LoadingWithLogo className="min-h-svh" /> }
);

const ExpertiseScrollSection = dynamic(
  () =>
    import("@/components/ExpertiseScrollSection").then(
      (m) => m.ExpertiseScrollSection
    ),
  { loading: () => <LoadingWithLogo className="min-h-[55vh]" /> }
);

const MethodologyGrid = dynamic(
  () =>
    import("@/components/MethodologyGrid").then((m) => m.MethodologyGrid),
  { loading: () => <LoadingWithLogo className="min-h-[55vh]" /> }
);

const AtelierSection = dynamic(
  () => import("@/components/AtelierSection").then((m) => m.AtelierSection),
  { loading: () => <LoadingWithLogo className="min-h-[50vh]" /> }
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
