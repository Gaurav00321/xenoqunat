
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { FocusCardsDemo } from "@/components/Influencer";
import Team from "@/components/team";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <Team />
      <Brands />
      <FocusCardsDemo />
    </main>
  );
}