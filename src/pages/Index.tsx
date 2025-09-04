import { Header } from "@/components/portfolio/Header"
import { HeroSection } from "@/components/portfolio/HeroSection"
import { AboutSection } from "@/components/portfolio/AboutSection"
import { SkillsSection } from "@/components/portfolio/SkillsSection"
import { ServicesSection } from "@/components/portfolio/ServicesSection"
import { PortfolioSection } from "@/components/portfolio/PortfolioSection"
import { ContactSection } from "@/components/portfolio/ContactSection"
import { Footer } from "@/components/portfolio/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
