import { Hero } from "@/components/Hero";
import { ContextGap } from "@/components/ContextGap";
import { DistributedIntelligence } from "@/components/DistributedIntelligence";
import { IntelligenceLayer } from "@/components/IntelligenceLayer";
import { IntelligenceLoop } from "@/components/IntelligenceLoop";
import { WhatScoreBoardUnderstands } from "@/components/WhatScoreBoardUnderstands";
import { SignalsToAnswers } from "@/components/SignalsToAnswers";
import { IntelligenceModules } from "@/components/IntelligenceModules";
import { AIFactory } from "@/components/AIFactory";
import { InfrastructureEconomics } from "@/components/InfrastructureEconomics";
import { EdgeIntelligence } from "@/components/EdgeIntelligence";
import { TechnologyFlow } from "@/components/TechnologyFlow";
import { Ecosystem } from "@/components/Ecosystem";
import { Insights } from "@/components/Insights";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ContextGap />
      <DistributedIntelligence />
      <IntelligenceLayer />
      <IntelligenceLoop />
      <WhatScoreBoardUnderstands />
      <SignalsToAnswers />
        <IntelligenceModules />
      <AIFactory />
      <InfrastructureEconomics />
      <EdgeIntelligence />
      <TechnologyFlow />
      <Ecosystem />
      <Insights />
      <FinalCTA />
      <Footer />
    </main>
  );
}
