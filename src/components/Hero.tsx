import { Button } from "@/components/ui/button";
import { Play, UserPlus, Building2, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-pickleball.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(46, 125, 50, 0.9), rgba(255, 152, 0, 0.8)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Mexico Pickleball
            <span className="block text-secondary animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Federation
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            The Official Platform for Pickleball Excellence in Mexico
          </p>
          
          {/* Description */}
          <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Join thousands of players, compete in official tournaments, and be part of Mexico's fastest-growing sport
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-4 text-lg hover-lift animate-bounce-in"
              style={{ animationDelay: "0.8s" }}
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Register as Player
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg hover-lift animate-bounce-in"
              style={{ animationDelay: "1s" }}
              onClick={() => scrollToSection("tournaments")}
            >
              <Calendar className="w-5 h-5 mr-2" />
              View Tournaments
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg hover-lift animate-bounce-in"
              style={{ animationDelay: "1.2s" }}
            >
              <Building2 className="w-5 h-5 mr-2" />
              Join as Club
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-left" style={{ animationDelay: "1.4s" }}>
              <div className="text-4xl font-bold text-secondary mb-2">5,000+</div>
              <div className="text-white/80">Registered Players</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "1.6s" }}>
              <div className="text-4xl font-bold text-secondary mb-2">150+</div>
              <div className="text-white/80">Partner Clubs</div>
            </div>
            <div className="animate-fade-in-right" style={{ animationDelay: "1.8s" }}>
              <div className="text-4xl font-bold text-secondary mb-2">200+</div>
              <div className="text-white/80">Annual Tournaments</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;