import { HeroSection } from "@/components/hero-section";
import { Hotels } from "@/components/hotels";
import { Testmonial } from "@/components/testmonial";
import { Tours } from "@/components/tours";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Tours />
      <Hotels />
      <Testmonial />
    </>
  );
}
