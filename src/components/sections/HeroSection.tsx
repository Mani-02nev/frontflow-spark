import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Award, BookOpen, Cpu } from "lucide-react";
import heroImage from "@/assets/hero-college.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm px-4 py-2">
            🏆 Ranked Among Top Engineering Colleges
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Shaping Tomorrow's
            <span className="block bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              Tech Leaders
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Seshasayee Institute of Technology - Where innovation meets education. 
            Join us in building the future with cutting-edge technology and excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="xl" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
              Apply for Admission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
              Explore Departments
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
            <StatItem icon={Users} number="5000+" label="Students" />
            <StatItem icon={Award} number="25+" label="Years Legacy" />
            <StatItem icon={BookOpen} number="8" label="Departments" />
            <StatItem icon={Cpu} number="100%" label="Tech-Enabled" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ icon: Icon, number, label }: { icon: any; number: string; label: string }) => (
  <div className="text-center space-y-2">
    <Icon className="h-8 w-8 mx-auto text-accent" />
    <div className="text-2xl md:text-3xl font-bold">{number}</div>
    <div className="text-sm opacity-80">{label}</div>
  </div>
);

export default HeroSection;