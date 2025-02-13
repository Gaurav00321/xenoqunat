// import HeroSection from "@/components/HeroSection";
import { Brands } from "@/components/Brands";
import { FocusCardsDemo } from "@/components/Influencer";
import { StickyScrollRevealDemo } from "@/components/team";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <HeroSection /> */}
      <StickyScrollRevealDemo />
      <Brands />
      <FocusCardsDemo />
    </main>
  );
}