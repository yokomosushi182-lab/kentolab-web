import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { OfficeHours } from "@/components/OfficeHours";
import { Team } from "@/components/Team";
import { BrandTerritory } from "@/components/BrandTerritory";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Problem />
        <Services />
        <OfficeHours />
        <Team />
        <BrandTerritory />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
