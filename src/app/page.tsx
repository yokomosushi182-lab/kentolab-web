import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { OfficeHours } from "@/components/OfficeHours";
import { Team } from "@/components/Team";
import { BrandTerritory } from "@/components/BrandTerritory";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
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
