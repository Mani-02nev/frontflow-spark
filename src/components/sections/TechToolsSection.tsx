import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Cpu, 
  ArrowRight,
  Zap,
  MonitorPlay,
  Palette
} from "lucide-react";
import techToolsImage from "@/assets/tech-tools.jpg";

const TechToolsSection = () => {
  const tools = [
    {
      icon: Brain,
      title: "AI Assistant",
      description: "Smart chatbot for student queries and academic support",
      category: "Artificial Intelligence",
      color: "from-purple-500 to-pink-500",
      features: ["24/7 Support", "Multi-language", "Smart Responses"]
    },
    {
      icon: Code,
      title: "Code Playground",
      description: "Interactive coding environment with real-time collaboration",
      category: "Development",
      color: "from-blue-500 to-cyan-500",
      features: ["Live Coding", "Multiple Languages", "Code Sharing"]
    },
    {
      icon: MonitorPlay,
      title: "Virtual Labs",
      description: "Immersive virtual laboratory experiences for practical learning",
      category: "Education",
      color: "from-green-500 to-emerald-500",
      features: ["3D Simulations", "Remote Access", "Real Experiments"]
    },
    {
      icon: Database,
      title: "Student Portal",
      description: "Comprehensive student management and academic tracking system",
      category: "Management",
      color: "from-orange-500 to-red-500",
      features: ["Grade Tracking", "Attendance", "Resources"]
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Native mobile application for campus life and academics",
      category: "Mobile",
      color: "from-indigo-500 to-purple-500",
      features: ["Push Notifications", "Offline Mode", "Campus Map"]
    },
    {
      icon: Palette,
      title: "Design Studio",
      description: "Creative tools for design and multimedia projects",
      category: "Creative",
      color: "from-pink-500 to-rose-500",
      features: ["Vector Graphics", "3D Modeling", "Animation"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Latest Technology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Modern Tech Tools
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Experience cutting-edge technology tools designed to enhance learning, 
            collaboration, and innovation in education.
          </p>
        </div>

        {/* Tech Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-0 bg-gradient-card">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tool.color} flex items-center justify-center text-white shadow-lg`}>
                    <tool.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {tool.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {tool.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
                <div className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Explore Tool
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Tool Showcase */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                🚀 Featured Tool
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold">
                Integrated Learning Platform
              </h3>
              <p className="text-xl opacity-90 leading-relaxed">
                Our comprehensive platform combines all these tools into one seamless 
                experience, making learning more engaging and effective than ever before.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="cta" size="lg" className="bg-white/20 hover:bg-white/30 border-white/30">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="lg:order-first">
              <div 
                className="aspect-video rounded-xl bg-cover bg-center shadow-2xl"
                style={{ backgroundImage: `url(${techToolsImage})` }}
              >
                <div className="w-full h-full bg-black/20 rounded-xl flex items-center justify-center">
                  <Button variant="cta" size="icon" className="w-16 h-16 rounded-full bg-white/20 hover:bg-white/30">
                    <MonitorPlay className="w-8 h-8" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechToolsSection;