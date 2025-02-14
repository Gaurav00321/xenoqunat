
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { FocusCardsDemo } from "@/components/Influencer";
import Team from "@/components/team";
import { HeroParallaxDemo } from "@/components/case-study";

export default function Home() {
  return (
    <main className="bg-[#020617]">
      <Navbar />
      <Hero/>
      <Team />
      <Brands />
      <FocusCardsDemo />
      <HeroParallaxDemo />
    </main>
  );
}