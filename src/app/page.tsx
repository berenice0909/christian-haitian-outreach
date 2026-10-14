
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Mission from "@/components/Mission/Mission";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Mission />
    </main>
  );
}
