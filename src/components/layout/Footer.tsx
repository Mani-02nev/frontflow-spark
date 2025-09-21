import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Youtube, 
  Instagram,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* College Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">SIT Trichy</h3>
                <p className="text-xs opacity-90">Est. 1998</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Seshasayee Institute of Technology is a premier engineering institution 
              committed to excellence in technical education and research.
            </p>
            <div className="flex gap-3">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Youtube} />
              <SocialIcon icon={Instagram} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/departments">Departments</FooterLink>
              <FooterLink href="/admissions">Admissions</FooterLink>
              <FooterLink href="/placements">Placements</FooterLink>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-semibold mb-4">Academics</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="/departments/cse">Computer Science</FooterLink>
              <FooterLink href="/departments/civil">Civil Engineering</FooterLink>
              <FooterLink href="/departments/mech">Mechanical</FooterLink>
              <FooterLink href="/departments/ece">Electronics</FooterLink>
              <FooterLink href="/tech-tools">Tech Tools</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Seshasayee Institute of Technology, Trichy - 620 012</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 431 2407334</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@sittrichy.in</span>
              </div>
            </div>
            <Button 
              variant="cta" 
              size="sm" 
              className="mt-4 bg-white/20 hover:bg-white/30 border-white/30"
            >
              Visit Campus <ExternalLink className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm opacity-90">
          <p>&copy; 2024 Seshasayee Institute of Technology. All rights reserved. | Developed with modern technology tools</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon: Icon }: { icon: any }) => (
  <Button 
    variant="ghost" 
    size="icon" 
    className="h-8 w-8 hover:bg-white/20 text-white hover:text-white"
  >
    <Icon className="h-4 w-4" />
  </Button>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="opacity-90 hover:opacity-100 hover:text-accent transition-all"
    >
      {children}
    </a>
  </li>
);

export default Footer;