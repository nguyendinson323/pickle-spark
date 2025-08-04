import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Users,
  Calendar,
  BarChart3,
  GraduationCap
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Federation Info */}
            <div className="space-y-4 animate-fade-in-up">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Mexico Pickleball</h3>
                  <p className="text-sm text-background/80">Federation</p>
                </div>
              </div>
              <p className="text-background/80 text-sm leading-relaxed">
                The official governing body for pickleball in Mexico, 
                promoting excellence, integrity, and growth of the sport nationwide.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors hover-bounce" />
                <Twitter className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors hover-bounce" />
                <Instagram className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors hover-bounce" />
                <Youtube className="w-5 h-5 text-background/60 hover:text-primary cursor-pointer transition-colors hover-bounce" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { name: "About Federation", id: "about" },
                  { name: "Tournament Schedule", id: "tournaments" },
                  { name: "Player Rankings", id: "rankings" },
                  { name: "Latest News", id: "news" },
                  { name: "Rules & Regulations", href: "#" },
                  { name: "Contact Us", href: "#" }
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => link.id ? scrollToSection(link.id) : null}
                    className="block text-background/80 hover:text-primary transition-colors text-sm hover-lift"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h4 className="text-lg font-semibold">Services</h4>
              <div className="space-y-2">
                {[
                  { icon: Users, name: "Player Registration" },
                  { icon: Calendar, name: "Tournament Management" },
                  { icon: BarChart3, name: "Official Rankings" },
                  { icon: GraduationCap, name: "Coach Certification" }
                ].map((service) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.name} className="flex items-center space-x-2 text-sm text-background/80 hover:text-primary transition-colors cursor-pointer hover-lift">
                      <Icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <h4 className="text-lg font-semibold">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <div className="text-background/80">
                    Av. Insurgentes Sur 1647<br />
                    Mexico City, CDMX 03920<br />
                    Mexico
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-background/80">+52 55 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-background/80">info@mexicopickleball.mx</span>
                </div>
              </div>
              <Button variant="secondary" size="sm" className="mt-4 hover-glow">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-background/60 animate-fade-in-left">
                © 2024 Mexico Pickleball Federation. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm animate-fade-in-right">
                <a href="#" className="text-background/60 hover:text-primary transition-colors hover-lift">
                  Privacy Policy
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors hover-lift">
                  Terms of Service
                </a>
                <a href="#" className="text-background/60 hover:text-primary transition-colors hover-lift">
                  Admin Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;