import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      title: "Mexico Hosts International Pickleball Championship 2024",
      excerpt: "Mexico City will host the biggest international pickleball tournament in Latin America this summer, featuring players from over 20 countries.",
      date: "March 2, 2024",
      readTime: "3 min read",
      author: "Federation Media",
      category: "Tournament",
      featured: true
    },
    {
      title: "New Coaching Certification Program Launches",
      excerpt: "The federation announces a comprehensive coaching certification program to develop world-class instructors across Mexico.",
      date: "February 28, 2024",
      readTime: "2 min read",
      author: "Education Committee",
      category: "Education",
      featured: false
    },
    {
      title: "Partnership with Major Sports Retailers Announced",
      excerpt: "Official federation equipment will now be available at leading sports retailers nationwide, making quality gear more accessible.",
      date: "February 25, 2024",
      readTime: "2 min read",
      author: "Commercial Department",
      category: "Partnership",
      featured: false
    },
    {
      title: "Youth Development Program Expands to 50 Schools",
      excerpt: "The federation's youth development initiative now reaches 50 schools across Mexico, introducing pickleball to the next generation.",
      date: "February 22, 2024",
      readTime: "4 min read",
      author: "Youth Development",
      category: "Youth",
      featured: false
    },
    {
      title: "New Rules Update for 2024 Season",
      excerpt: "Important rule changes and clarifications take effect for all official tournaments starting April 1, 2024.",
      date: "February 20, 2024",
      readTime: "5 min read",
      author: "Rules Committee",
      category: "Rules",
      featured: false
    },
    {
      title: "Record-Breaking Registration Numbers",
      excerpt: "The federation celebrates reaching 5,000 registered players, marking a milestone in Mexican pickleball growth.",
      date: "February 18, 2024",
      readTime: "2 min read",
      author: "Registration Team",
      category: "Milestone",
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Tournament": return "bg-gradient-to-r from-purple-500 to-purple-600";
      case "Education": return "bg-gradient-to-r from-blue-500 to-blue-600";
      case "Partnership": return "bg-gradient-to-r from-green-500 to-green-600";
      case "Youth": return "bg-gradient-to-r from-orange-500 to-orange-600";
      case "Rules": return "bg-gradient-to-r from-red-500 to-red-600";
      case "Milestone": return "bg-gradient-to-r from-yellow-500 to-yellow-600";
      default: return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <section id="news" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
              Latest News & Updates
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Stay informed with the latest developments, rule changes, 
              and exciting news from the Mexico Pickleball Federation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            {featuredNews && (
              <div className="lg:col-span-2">
                <Card className="bg-card shadow-elegant hover-lift group cursor-pointer animate-fade-in-left" style={{ animationDelay: "0.4s" }}>
                  <div className="aspect-video bg-gradient-primary rounded-t-lg flex items-center justify-center">
                    <div className="text-center text-primary-foreground p-8">
                      <Badge className="mb-4 bg-secondary text-secondary-foreground">
                        Featured
                      </Badge>
                      <h3 className="text-2xl font-bold mb-4">{featuredNews.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge className={`${getCategoryColor(featuredNews.category)} text-white`}>
                        {featuredNews.category}
                      </Badge>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredNews.date}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredNews.readTime}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {featuredNews.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="w-4 h-4 mr-1" />
                        {featuredNews.author}
                      </div>
                      <Button className="bg-gradient-primary hover-glow group-hover:scale-105 transition-transform">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Recent Articles */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground animate-fade-in-right" style={{ animationDelay: "0.6s" }}>
                Recent Updates
              </h3>
              {regularNews.slice(0, 5).map((article, index) => (
                <Card 
                  key={article.title}
                  className="bg-card shadow-card hover-lift group cursor-pointer animate-fade-in-right"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        className={`${getCategoryColor(article.category)} text-white text-xs`}
                        style={{ fontSize: "0.7rem" }}
                      >
                        {article.category}
                      </Badge>
                      <div className="text-xs text-muted-foreground">
                        {article.date}
                      </div>
                    </div>
                    <h4 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs hover:text-primary">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-16 bg-gradient-primary text-primary-foreground shadow-glow animate-bounce-in" style={{ animationDelay: "1.4s" }}>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6 text-primary-foreground/90">
                Subscribe to our newsletter for the latest news, tournament updates, and exclusive content
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-foreground bg-background border border-border focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <Button variant="secondary" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* View All News */}
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="hover-lift animate-bounce-in"
              style={{ animationDelay: "1.6s" }}
            >
              View All News & Announcements
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;