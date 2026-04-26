import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ForWhomSection } from "@/components/sections/ForWhomSection";
import { AuthorSection } from "@/components/sections/AuthorSection";
import { StructureSection } from "@/components/sections/StructureSection";
import { BonusesSection } from "@/components/sections/BonusesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhatYouWillDoSection } from "@/components/sections/WhatYouWillDoSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { FloatingCTA } from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <ForWhomSection />
      <AuthorSection />
      <StructureSection />
      <BonusesSection />
      <HowItWorksSection />
      <WhatYouWillDoSection />
      <GuaranteeSection />
      <FAQSection />
      <FooterSection />
      <FloatingCTA />
    </div>
  );
};

export default Index;
