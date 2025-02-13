
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { FocusCardsDemo } from "@/components/Influencer";
import { StickyScrollRevealDemo } from "@/components/team";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HeroParallaxDemo } from "@/components/case-study";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <StickyScrollRevealDemo />
      <Brands />
      <FocusCardsDemo />
      <HeroParallaxDemo />
    </main>
  );
}