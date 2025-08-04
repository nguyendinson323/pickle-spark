import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Trophy, 
  MapPin, 
  CreditCard, 
  Building2, 
  GraduationCap, 
  ShoppingCart,
  BarChart3 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "National Player Registry",
      description: "Official player registration with digital credentials and skill level verification",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Live Rankings System",
      description: "Real-time national and regional rankings updated after every tournament",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Trophy,
      title: "Tournament Management",
      description: "Comprehensive tournament organization, registration, and results tracking",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MapPin,
      title: "Court Reservation Tools",
      description: "Find and book courts at partner facilities across Mexico",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Building2,
      title: "Club Management",
      description: "Complete club administration, membership management, and event coordination",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: GraduationCap,
      title: "Coach Certification",
      description: "Official coaching programs and referee certification courses",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: CreditCard,
      title: "Digital Credentials",
      description: "Secure digital player cards, certifications, and achievement badges",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: ShoppingCart,
      title: "Official Store",
      description: "Authentic pickleball equipment, apparel, and federation merchandise",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Comprehensive Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Everything you need to play, compete, and excel in pickleball - 
              all in one integrated platform
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className="bg-card shadow-card hover-lift group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-card-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Player Benefits */}
            <Card className="bg-gradient-card shadow-elegant hover-lift animate-fade-in-left" style={{ animationDelay: "1.2s" }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">For Players</h3>
                <ul className="space-y-4 text-card-foreground">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Official rankings and tournament history</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Find players and coaches in your area</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Book courts at partner facilities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Digital achievement tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Club Benefits */}
            <Card className="bg-gradient-card shadow-elegant hover-lift animate-fade-in-right" style={{ animationDelay: "1.4s" }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">For Clubs</h3>
                <ul className="space-y-4 text-card-foreground">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Tournament hosting and management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Member registration and tracking</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Court scheduling and reservations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Official federation recognition</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover-glow px-8 animate-bounce-in"
              style={{ animationDelay: "1.6s" }}
            >
              Explore All Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;