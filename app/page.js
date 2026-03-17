import { buildMetadata } from "@/utils/seoConfig";
import HeroSection from "@/components/home/HeroSection";
import StatsStrip from "@/components/home/StatsStrip";
import ServicesSection from "@/components/home/ServicesSection";
import AboutPreview from "@/components/home/AboutPreview";
import ProcessSection from "@/components/home/ProcessSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhySection from "@/components/home/WhySection";
import InstagramCTA from "@/components/home/InstagramCTA";

export const metadata = buildMetadata("home");

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <AboutPreview />
      <ProcessSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <WhySection />
      <InstagramCTA />
    </>
  );
}
