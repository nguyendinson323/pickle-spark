import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import tournamentImage from "@/assets/tournament-action.jpg";

const Tournaments = () => {
  const upcomingTournaments = [
    {
      name: "Mexico National Championships",
      date: "March 15-17, 2024",
      location: "Mexico City",
      participants: "150+ Players",
      prize: "$25,000",
      category: "National",
      skillLevel: "All Levels",
      registrationOpen: true
    },
    {
      name: "Guadalajara Open",
      date: "April 8-10, 2024",
      location: "Guadalajara, Jalisco",
      participants: "100+ Players",
      prize: "$15,000",
      category: "Regional",
      skillLevel: "Intermediate+",
      registrationOpen: true
    },
    {
      name: "Cancun Beach Classic",
      date: "May 20-22, 2024",
      location: "Cancun, Quintana Roo",
      participants: "80+ Players",
      prize: "$10,000",
      category: "Regional",
      skillLevel: "All Levels",
      registrationOpen: false
    },
    {
      name: "Monterrey Masters",
      date: "June 5-7, 2024",
      location: "Monterrey, Nuevo León",
      participants: "120+ Players",
      prize: "$20,000",
      category: "Masters",
      skillLevel: "Advanced",
      registrationOpen: true
    },
    {
      name: "Youth Development Cup",
      date: "July 12-14, 2024",
      location: "Puebla, Puebla",
      participants: "60+ Players",
      prize: "$5,000",
      category: "Youth",
      skillLevel: "Under 18",
      registrationOpen: true
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "National": return "bg-gradient-to-r from-yellow-500 to-yellow-600";
      case "Regional": return "bg-gradient-to-r from-blue-500 to-blue-600";
      case "Masters": return "bg-gradient-to-r from-purple-500 to-purple-600";
      case "Youth": return "bg-gradient-to-r from-green-500 to-green-600";
      default: return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  return (
    <section id="tournaments" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Hero Image */}
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto mb-8 animate-fade-in-up">
              <img 
                src={tournamentImage} 
                alt="Pickleball tournament action" 
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-elegant"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Upcoming Tournaments
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Join Mexico's premier pickleball tournaments and compete against 
              the nation's top players in official sanctioned events
            </p>
          </div>

          {/* Tournament Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {upcomingTournaments.map((tournament, index) => (
              <Card 
                key={tournament.name}
                className="bg-card shadow-card hover-lift group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge className={`${getCategoryColor(tournament.category)} text-white font-semibold`}>
                      {tournament.category}
                    </Badge>
                    {tournament.registrationOpen ? (
                      <Badge variant="outline" className="border-green-500 text-green-600">
                        Open
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="border-red-500 text-red-600">
                        Closed
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {tournament.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">{tournament.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">{tournament.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm">{tournament.participants}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Trophy className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm font-semibold text-secondary">{tournament.prize}</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground mb-3">
                      Skill Level: <span className="font-medium">{tournament.skillLevel}</span>
                    </p>
                    <Button 
                      className={`w-full ${
                        tournament.registrationOpen 
                          ? "bg-gradient-primary hover-glow" 
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                      }`}
                      disabled={!tournament.registrationOpen}
                    >
                      {tournament.registrationOpen ? "Register Now" : "Registration Closed"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tournament Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Annual Tournaments", value: "200+" },
              { label: "Total Prize Money", value: "$500K+" },
              { label: "Participating Clubs", value: "150+" },
              { label: "Tournament Players", value: "3,000+" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center bg-card p-6 rounded-lg shadow-card hover-lift animate-scale-in"
                style={{ animationDelay: `${1.4 + index * 0.1}s` }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "1.8s" }}>
              Ready to Compete?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover-glow animate-bounce-in"
                style={{ animationDelay: "2s" }}
              >
                View All Tournaments
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="hover-lift animate-bounce-in"
                style={{ animationDelay: "2.2s" }}
              >
                Tournament Rules & Guidelines
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tournaments;