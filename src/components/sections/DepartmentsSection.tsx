import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Building, 
  Cog, 
  Zap, 
  Cpu, 
  Car,
  GraduationCap,
  Users,
  ArrowRight
} from "lucide-react";

const DepartmentsSection = () => {
  const departments = [
    {
      icon: Monitor,
      name: "Computer Science & Engineering",
      code: "CSE",
      description: "Cutting-edge computing education with AI, ML, and software development focus",
      students: "800+",
      faculty: "45",
      labs: "12",
      color: "from-blue-500 to-cyan-500",
      highlights: ["AI & ML Lab", "Software Engineering", "Cyber Security", "Cloud Computing"]
    },
    {
      icon: Building,
      name: "Civil Engineering",
      code: "CE",
      description: "Infrastructure development and sustainable construction technologies",
      students: "600+",
      faculty: "35",
      labs: "8",
      color: "from-green-500 to-emerald-500",
      highlights: ["Structural Engineering", "Environmental Tech", "Smart Cities", "Sustainable Design"]
    },
    {
      icon: Cog,
      name: "Mechanical Engineering",
      code: "ME",
      description: "Advanced manufacturing, robotics, and automation systems",
      students: "700+",
      faculty: "40",
      labs: "10",
      color: "from-orange-500 to-red-500",
      highlights: ["Robotics Lab", "CAD/CAM", "Automation", "Thermal Systems"]
    },
    {
      icon: Zap,
      name: "Electrical & Electronics",
      code: "EEE",
      description: "Power systems, renewable energy, and smart grid technologies",
      students: "550+",
      faculty: "32",
      labs: "9",
      color: "from-yellow-500 to-orange-500",
      highlights: ["Power Systems", "Renewable Energy", "Smart Grids", "Electric Vehicles"]
    },
    {
      icon: Cpu,
      name: "Electronics & Communication",
      code: "ECE",
      description: "Communication systems, IoT, and embedded system design",
      students: "650+",
      faculty: "38",
      labs: "11",
      color: "from-purple-500 to-pink-500",
      highlights: ["IoT Lab", "VLSI Design", "Wireless Systems", "Embedded Tech"]
    },
    {
      icon: Car,
      name: "Automobile Engineering",
      code: "AE",
      description: "Next-generation automotive technologies and electric vehicles",
      students: "400+",
      faculty: "25",
      labs: "6",
      color: "from-indigo-500 to-purple-500",
      highlights: ["EV Technology", "Autonomous Systems", "Design Studio", "Testing Lab"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />
            Academic Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Departments
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover world-class engineering programs designed to shape the future leaders 
            in technology and innovation.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-0 bg-gradient-card overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${dept.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <dept.icon className="w-7 h-7" />
                  </div>
                  <Badge variant="secondary" className="text-xs font-semibold">
                    {dept.code}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                  {dept.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {dept.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border/50">
                  <div className="text-center">
                    <div className="font-bold text-primary">{dept.students}</div>
                    <div className="text-xs text-muted-foreground">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{dept.faculty}</div>
                    <div className="text-xs text-muted-foreground">Faculty</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{dept.labs}</div>
                    <div className="text-xs text-muted-foreground">Labs</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-foreground">Key Areas:</div>
                  <div className="flex flex-wrap gap-2">
                    {dept.highlights.slice(0, 2).map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all mt-4">
                  Explore Department
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                Ready to Start Your Engineering Journey?
              </h3>
              <p className="text-xl opacity-90 leading-relaxed">
                Join thousands of students who have transformed their careers with our 
                world-class engineering programs and cutting-edge facilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" className="bg-white/20 hover:bg-white/30 border-white/30">
                  Apply for Admission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;