import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoBanner from "@/components/LogoBanner";
import KotaSalesOSSection from "@/components/KotaSalesOSSection";
import Problem from "@/components/Problem";
import ProductScreenshot from "@/components/ProductScreenshot";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <Hero />
      <LogoBanner />
      <KotaSalesOSSection />
      <Problem />
      <ProductScreenshot />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
