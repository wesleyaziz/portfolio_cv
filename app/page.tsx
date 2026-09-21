import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WorksCarousel from "@/components/WorksCarousel";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <WorksCarousel />
        <About />
        <Services />
        <Footer />
      </main>
    </>
  );
}
