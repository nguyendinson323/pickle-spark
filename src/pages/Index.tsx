import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Tournaments from "@/components/Tournaments";
import Rankings from "@/components/Rankings";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Features />
      <Tournaments />
      <Rankings />
      <News />
      <Footer />
    </div>
  );
};

export default Index;