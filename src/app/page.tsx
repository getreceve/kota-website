import LightNav from "@/components/light/LightNav";
import LightHero from "@/components/light/LightHero";
import ProblemCards from "@/components/light/ProblemCards";
import ProductPillars from "@/components/light/ProductPillars";
import FeaturesGrid from "@/components/light/FeaturesGrid";
import ResultsSection from "@/components/light/ResultsSection";
import FinalCtaLight from "@/components/light/FinalCtaLight";
import LightFooter from "@/components/light/LightFooter";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div style={{ background: "#FAFAF7" }}>
      <ScrollReveal />
      <LightNav />
      <main>
        <LightHero />
        <ProblemCards />
        <ProductPillars />
        <FeaturesGrid />
        <ResultsSection />
        <FinalCtaLight />
      </main>
      <LightFooter />
    </div>
  );
}
