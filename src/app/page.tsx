import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ExperienceSection from "@/components/ExperienceCard";
import FormacaoSection from "@/components/FormacaoSection";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <div className="flex flex-col gap-12 pt-8">
        <BentoGrid />
        <ExperienceSection />
        <FormacaoSection />
        <TechStack />
      </div>
      <Footer />
    </main>
  );
}
