import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIChat from "@/components/tools/AIChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Code, 
  Database, 
  Smartphone, 
  Monitor,
  Palette,
  Zap,
  Cpu,
  Globe,
  Calculator,
  FileText,
  BarChart3
} from "lucide-react";

const TechTools = () => {
  const toolCategories = [
    {
      id: "ai",
      name: "AI Tools",
      icon: Brain,
      tools: [
        { name: "K-gen AI Assistant", desc: "Smart chatbot for student queries", status: "Live" },
        { name: "Code Reviewer", desc: "AI-powered code analysis", status: "Beta" },
        { name: "Research Helper", desc: "Academic research assistant", status: "Coming Soon" }
      ]
    },
    {
      id: "development",
      name: "Development",
      icon: Code,
      tools: [
        { name: "Code Playground", desc: "Online IDE with collaboration", status: "Live" },
        { name: "Git Integration", desc: "Version control system", status: "Live" },
        { name: "API Testing Tool", desc: "Test and debug APIs", status: "Beta" }
      ]
    },
    {
      id: "design",
      name: "Design & Media",
      icon: Palette,
      tools: [
        { name: "Design Studio", desc: "Vector graphics and UI design", status: "Live" },
        { name: "3D Modeling", desc: "CAD and 3D design tools", status: "Beta" },
        { name: "Video Editor", desc: "Online video editing suite", status: "Coming Soon" }
      ]
    },
    {
      id: "productivity",
      name: "Productivity",
      icon: BarChart3,
      tools: [
        { name: "Project Manager", desc: "Task and project management", status: "Live" },
        { name: "Time Tracker", desc: "Track study and work hours", status: "Live" },
        { name: "Note Taking", desc: "Smart note-taking with sync", status: "Beta" }
      ]
    }
  ];

  const featuredApps = [
    {
      icon: Calculator,
      name: "Engineering Calculator",
      desc: "Advanced calculator for engineering calculations",
      category: "Utility",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: FileText,
      name: "Document Scanner",
      desc: "Scan and digitize documents with OCR",
      category: "Productivity", 
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      name: "Virtual Campus Tour",
      desc: "360° virtual tour of campus facilities",
      category: "Experience",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      name: "Student Portal",
      desc: "Academic records and course management",
      category: "Academic",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Technology Innovation
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Advanced Tech Tools
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our comprehensive suite of modern technology tools designed to enhance learning, 
                productivity, and innovation in engineering education.
              </p>
            </div>
          </div>
        </section>

        {/* AI Assistant Demo */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Try Our AI Assistant</h2>
              <p className="text-xl text-muted-foreground">
                Get instant answers about SIT Trichy - admissions, courses, campus life, and more!
              </p>
            </div>
            
            <AIChat />
          </div>
        </section>

        {/* Tool Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tool Categories</h2>
              <p className="text-xl text-muted-foreground">
                Organized by function to help you find what you need
              </p>
            </div>

            <Tabs defaultValue="ai" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                {toolCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    <category.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {toolCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid md:grid-cols-3 gap-6">
                    {category.tools.map((tool, index) => (
                      <Card key={index} className="border-0 bg-gradient-card shadow-card hover:shadow-glow transition-all">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{tool.name}</CardTitle>
                            <Badge variant={
                              tool.status === 'Live' ? 'default' :
                              tool.status === 'Beta' ? 'secondary' : 'outline'
                            }>
                              {tool.status}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{tool.desc}</p>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            disabled={tool.status === 'Coming Soon'}
                          >
                            {tool.status === 'Coming Soon' ? 'Coming Soon' : 'Launch Tool'}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Featured Apps */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Applications</h2>
              <p className="text-xl text-muted-foreground">
                Popular tools used by our students and faculty
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredApps.map((app, index) => (
                <Card key={index} className="group hover:shadow-glow transition-all border-0 bg-gradient-card">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${app.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <app.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg">{app.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {app.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">{app.desc}</p>
                    <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      Open App
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Cpu className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Integrated Learning Platform
                </h2>
                <p className="text-xl opacity-90 leading-relaxed">
                  All tools seamlessly integrated into one platform. Access everything from your 
                  student dashboard with single sign-on and unified experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta" size="lg" className="bg-white/20 hover:bg-white/30 border-white/30">
                    Access Platform
                  </Button>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TechTools;