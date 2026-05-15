import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { EmotionalSection } from "@/components/sections/EmotionalSection";
import { RealizationSection } from "@/components/sections/RealizationSection";
import { MiniCourseSection } from "@/components/sections/MiniCourseSection";
import { AuthorSection } from "@/components/sections/AuthorSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-graphite text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <EmotionalSection />
      <RealizationSection />
      <MiniCourseSection />
      <AuthorSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCtaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
