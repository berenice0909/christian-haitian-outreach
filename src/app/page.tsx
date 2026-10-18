
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Mission from "@/components/Mission/Mission";
import Founder from "@/components/Founder/Founder";
import Donate from "@/components/Donate/Donate";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Mission />
      <Founder />
      <Donate />
    </main>
  );
}
