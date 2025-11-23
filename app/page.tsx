import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { FloatingNavbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-background">
      <Hero />
      <About />
      <Testimonials />
      <Projects />
      <Contact />
      <FloatingNavbar />
    </main>
  );
}
