import HeroSection from "@/components/hero/HeroSection";
import ResumeSection from "@/components/ResumeSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="relative pt-16">
      <HeroSection />
      <ResumeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}