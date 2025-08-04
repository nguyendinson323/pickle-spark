import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Award } from "lucide-react";
import governanceImage from "@/assets/about-governance.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Governance & Integrity",
      description: "Maintaining the highest standards of fair play and official tournament regulations"
    },
    {
      icon: Target,
      title: "Excellence & Growth",
      description: "Promoting skill development and competitive excellence at every level"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Fostering a vibrant, inclusive pickleball community across Mexico"
    },
    {
      icon: Award,
      title: "Recognition & Ranking",
      description: "Providing official rankings and certifications for players and coaches"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              About the Federation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Leading Mexico's pickleball revolution through official governance, 
              world-class tournaments, and comprehensive player development programs
            </p>
          </div>

          {/* Mission Statement with Image */}
          <div className="mb-16">
            <Card className="bg-card shadow-elegant hover-lift animate-fade-in-up overflow-hidden" style={{ animationDelay: "0.4s" }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-square">
                  <img 
                    src={governanceImage} 
                    alt="Federation governance meeting" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-lg text-card-foreground leading-relaxed">
                    To establish pickleball as Mexico's premier racquet sport by providing world-class 
                    governance, fostering competitive excellence, and building an inclusive community 
                    that welcomes players of all skill levels and backgrounds.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title} 
                  className="bg-card shadow-card hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-primary p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-card-foreground mb-2">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* What We Do */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "1.4s" }}>
              What We Do
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                "Official Tournament Sanctioning",
                "National Player Rankings",
                "Coach & Referee Certification",
                "Club Registration & Support",
                "Rules & Regulations Governance",
                "International Competition Coordination"
              ].map((item, index) => (
                <div 
                  key={item}
                  className="bg-primary/10 p-4 rounded-lg hover-lift animate-fade-in-up"
                  style={{ animationDelay: `${1.6 + index * 0.1}s` }}
                >
                  <p className="font-medium text-primary">{item}</p>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-primary hover-glow animate-bounce-in"
              style={{ animationDelay: "2.2s" }}
            >
              Learn More About Our Governance
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;