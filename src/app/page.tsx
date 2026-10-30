
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Mission from "@/components/Mission/Mission";
import Founder from "@/components/Founder/Founder";
import Donate from "@/components/Donate/Donate";
import GalleryPreview from "@/components/Gallery/GalleryPreview";
import Wave from "@/components/Wave/Wave";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Wave above="var(--band-white)" below="var(--band-cream)" />
      <Mission />
      <Wave above="var(--band-cream)" below="var(--band-sand)" soft />
      <Founder />
      <Wave above="var(--band-cream)" below="var(--band-sand)" soft />
      <GalleryPreview />
      <Donate />
    </main>
  );
}
