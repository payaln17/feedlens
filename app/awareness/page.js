import AwarenessHero from "@/components/awareness/AwarenessHero";
import AwarenessTips from "@/components/awareness/AwarenessTips";
import FilterBubble from "@/components/awareness/FilterBubble";

import AwarenessIntro from "@/components/awareness/AwarenessIntro";
import MythFact from "@/components/awareness/MythFact";
import ControlPanel from "@/components/awareness/ControlPanel";
import AwarenessQuiz from "@/components/awareness/AwarenessQuiz";
import DigitalHygiene from "@/components/awareness/DigitalHygiene";
import AwarenessFAQ from "@/components/awareness/AwarenessFAQ";
import AwarenessCTA from "@/components/awareness/AwarenessCTA";

export default function AwarenessPage() {
  return (
    <main className="overflow-hidden">

      <AwarenessHero />

      <AwarenessIntro />

      <AwarenessTips />

      <MythFact />

      <ControlPanel />

      <FilterBubble />

      <AwarenessQuiz />

      <DigitalHygiene />

      <AwarenessFAQ />

      <AwarenessCTA />

    </main>
  );
}