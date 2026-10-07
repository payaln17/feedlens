import Hero from "@/components/home/Hero";
import ResearchQuestion from "@/components/home/ResearchQuestion";
import AlgorithmFlow from "@/components/home/AlgorithmFlow";
import WhyItMatters from "@/components/home/WhyItMatters";
import FeedSignals from "@/components/home/FeedSignals";
import ResearchPreview from "@/components/home/ResearchPreview";
import ExploreCTA from "@/components/home/ExploreCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ResearchQuestion />
      <AlgorithmFlow />
      <WhyItMatters />
      <FeedSignals />
      <ResearchPreview />
      <ExploreCTA />
    </main>
  );
}