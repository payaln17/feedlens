import ResearchHero from "@/components/research/ResearchHero";
import ResearchObjectives from "@/components/research/ResearchObjectives";
import Methodology from "@/components/research/Methodology";
import ResearchProcess from "@/components/research/ResearchProcess";
import DataCollection from "@/components/research/DataCollection";
import WhatWeMeasure from "@/components/research/WhatWeMeasure";
import ResearchLimitations from "@/components/research/ResearchLimitations";
import ResearchCTA from "@/components/research/ResearchCTA";
import ResearchInsights from "@/components/research/ResearchInsights";

export default function ResearchPage() {
  return (
    <main className="overflow-hidden">
      <ResearchHero />
      <ResearchObjectives />
      <Methodology />
      <ResearchInsights/>
      <ResearchProcess />
      <DataCollection />
      <WhatWeMeasure />
      <ResearchLimitations />
      <ResearchCTA />
    </main>
  );
}