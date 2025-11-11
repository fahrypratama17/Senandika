import HeroContainer from "@/features/home/hero-section/container/hero-container";
import AboutContainer from "@/features/home/about-section/container/about.container";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overscroll-y-contain">
      <HeroContainer />
      <AboutContainer />
    </main>
  );
}
