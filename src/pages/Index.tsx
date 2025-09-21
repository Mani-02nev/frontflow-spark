import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import TechToolsSection from "@/components/sections/TechToolsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DepartmentsSection />
        <TechToolsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
