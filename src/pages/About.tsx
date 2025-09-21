import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  BookOpen, 
  Target,
  Eye,
  Heart,
  Star,
  Calendar
} from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Award, title: "NAAC A+ Accredited", desc: "National Assessment and Accreditation Council" },
    { icon: Users, title: "5000+ Alumni", desc: "Successful professionals worldwide" },
    { icon: BookOpen, title: "25+ Years", desc: "Of educational excellence" },
    { icon: Star, title: "Top Ranked", desc: "Among engineering colleges in Tamil Nadu" }
  ];

  const milestones = [
    { year: "1998", event: "SIT Trichy established", desc: "Founded with a vision for technical excellence" },
    { year: "2005", event: "NAAC Accreditation", desc: "Received first NAAC accreditation" },
    { year: "2012", event: "NBA Approval", desc: "All programs NBA accredited" },
    { year: "2020", event: "Digital Campus", desc: "Complete digital transformation" },
    { year: "2024", event: "AI Integration", desc: "Advanced AI tools implemented" }
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
                <Calendar className="w-4 h-4 mr-2" />
                Established 1998
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                About SIT Trichy
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Seshasayee Institute of Technology stands as a beacon of educational excellence, 
                nurturing innovative minds and creating tomorrow's leaders in engineering and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-0 bg-gradient-card shadow-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4">
                    <Target className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide world-class technical education that transforms students into competent 
                    engineers and responsible citizens, fostering innovation, research, and sustainable 
                    development for the betterment of society.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-card shadow-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4">
                    <Eye className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a globally recognized institution of higher learning that excels in engineering 
                    education, research, and innovation, contributing to technological advancement and 
                    societal progress.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
              <p className="text-xl text-muted-foreground">Recognition and milestones that define our excellence</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto shadow-glow">
                    <achievement.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground">Principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Integrity",
                  desc: "We uphold the highest standards of honesty, transparency, and ethical conduct in all our endeavors."
                },
                {
                  icon: Star,
                  title: "Excellence",
                  desc: "We strive for excellence in education, research, and service, continuously raising our standards."
                },
                {
                  icon: Users,
                  title: "Innovation",
                  desc: "We foster creativity and innovation, encouraging new ideas and breakthrough solutions."
                }
              ].map((value, index) => (
                <Card key={index} className="text-center border-0 bg-gradient-card shadow-card">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-r from-accent/80 to-accent rounded-xl flex items-center justify-center text-accent-foreground mx-auto mb-4">
                      <value.icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground">Key milestones in our growth story</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 mb-12 last:mb-0">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                  </div>
                  <div className="flex-shrink-0 w-4 flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    {index < milestones.length - 1 && <div className="w-0.5 h-20 bg-border mt-2"></div>}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                    <p className="text-muted-foreground">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our Legacy of Excellence
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Be part of an institution that has been shaping engineers and innovators for over 25 years. 
                Your journey towards excellence starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" className="bg-white/20 hover:bg-white/30 border-white/30">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Campus Tour
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;