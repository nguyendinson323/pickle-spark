import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, TrendingUp, TrendingDown, Minus, Medal, Star } from "lucide-react";
import rankingsImage from "@/assets/rankings-champion.jpg";

const Rankings = () => {
  const topPlayers = [
    {
      rank: 1,
      name: "Carlos Rodriguez",
      points: 2850,
      change: "+2",
      trend: "up",
      location: "Mexico City",
      tournaments: 15,
      winRate: "78%",
      avatar: "/placeholder.svg"
    },
    {
      rank: 2,
      name: "Maria Gonzalez",
      points: 2720,
      change: "0",
      trend: "same",
      location: "Guadalajara",
      tournaments: 18,
      winRate: "74%",
      avatar: "/placeholder.svg"
    },
    {
      rank: 3,
      name: "Diego Morales",
      points: 2680,
      change: "+1",
      trend: "up",
      location: "Monterrey",
      tournaments: 12,
      winRate: "81%",
      avatar: "/placeholder.svg"
    },
    {
      rank: 4,
      name: "Ana Martinez",
      points: 2640,
      change: "-2",
      trend: "down",
      location: "Cancun",
      tournaments: 16,
      winRate: "72%",
      avatar: "/placeholder.svg"
    },
    {
      rank: 5,
      name: "Luis Hernandez",
      points: 2590,
      change: "+3",
      trend: "up",
      location: "Puebla",
      tournaments: 14,
      winRate: "76%",
      avatar: "/placeholder.svg"
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="w-4 h-4 text-green-500" />;
      case "down": return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Medal className="w-6 h-6 text-amber-600" />;
      default: return <Star className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="rankings" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Champion Image */}
          <div className="text-center mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
              <div className="lg:w-1/3">
                <img 
                  src={rankingsImage} 
                  alt="Championship trophy winner" 
                  className="w-full max-w-sm mx-auto h-auto rounded-lg shadow-elegant animate-fade-in-left"
                />
              </div>
              <div className="lg:w-2/3 text-left lg:text-left animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  National Rankings
                </h2>
                <p className="text-xl text-muted-foreground">
                  Official rankings updated in real-time after every tournament. 
                  See where you stand among Mexico's best pickleball players
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Top Players List */}
            <div className="lg:col-span-2">
              <Card className="bg-card shadow-elegant animate-fade-in-left" style={{ animationDelay: "0.4s" }}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-card-foreground flex items-center">
                    <Trophy className="w-6 h-6 text-primary mr-2" />
                    Top 5 Players
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topPlayers.map((player, index) => (
                    <div 
                      key={player.rank}
                      className="flex items-center justify-between p-4 bg-gradient-card rounded-lg hover-lift animate-fade-in-up"
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          {getRankIcon(player.rank)}
                          <span className="text-2xl font-bold text-foreground">#{player.rank}</span>
                        </div>
                        
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={player.avatar} alt={player.name} />
                          <AvatarFallback>{player.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <h4 className="font-semibold text-card-foreground">{player.name}</h4>
                          <p className="text-sm text-muted-foreground">{player.location}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-lg font-bold text-primary">{player.points}</span>
                          <Badge variant="outline" className="flex items-center space-x-1">
                            {getTrendIcon(player.trend)}
                            <span className="text-xs">{player.change}</span>
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {player.tournaments} tournaments • {player.winRate} win rate
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Rankings Info */}
            <div className="space-y-6">
              {/* Ranking System */}
              <Card className="bg-card shadow-card hover-lift animate-fade-in-right" style={{ animationDelay: "0.6s" }}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-card-foreground">
                    Ranking System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tournament Win:</span>
                      <span className="font-semibold text-primary">+100-200 pts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Final:</span>
                      <span className="font-semibold text-primary">+50-100 pts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Semifinal:</span>
                      <span className="font-semibold text-primary">+25-50 pts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Early Loss:</span>
                      <span className="font-semibold text-red-500">-10-25 pts</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="bg-card shadow-card hover-lift animate-fade-in-right" style={{ animationDelay: "0.8s" }}>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-card-foreground">
                    Ranking Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { category: "Men's Singles", players: "1,200+" },
                      { category: "Women's Singles", players: "950+" },
                      { category: "Men's Doubles", players: "800+" },
                      { category: "Women's Doubles", players: "600+" },
                      { category: "Mixed Doubles", players: "1,100+" }
                    ].map((cat, index) => (
                      <div key={cat.category} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{cat.category}:</span>
                        <span className="font-semibold text-card-foreground">{cat.players}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Find Your Ranking */}
              <Card className="bg-gradient-primary text-primary-foreground shadow-glow hover-glow animate-bounce-in" style={{ animationDelay: "1s" }}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-3">Find Your Ranking</h3>
                  <p className="text-sm mb-4 text-primary-foreground/90">
                    Register to see your official ranking and tournament history
                  </p>
                  <Button variant="secondary" className="w-full">
                    Check My Ranking
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="hover-lift animate-bounce-in"
              style={{ animationDelay: "1.2s" }}
            >
              View Complete Rankings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rankings;