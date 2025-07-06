import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Trophy, Users } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Trading",
      description: "Secure transactions with verified precious materials and complete transparency."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Trans-Atlantic trade expertise connecting markets worldwide."
    },
    {
      icon: Trophy,
      title: "Premium Quality",
      description: "Only the finest gold, precious stones, and rare earth materials."
    },
    {
      icon: Users,
      title: "Expert Consulting",
      description: "Professional guidance for high-net-worth investment decisions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="emerald-gradient bg-clip-text text-transparent">
                    Premium Trading
                  </span>
                  <br />
                  <span className="text-foreground">
                    in Precious Materials
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Smaragd specializes in trading gold, precious stones, and rare earth materials. 
                  We provide expert consulting for trans-Atlantic trade and high-net-worth investments.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" asChild>
                  <Link to="/products">
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-luxury">
                <img 
                  src="/lovable-uploads/dbae92ac-1cb9-4ecf-a44f-d7dd629cb7a6.png"
                  alt="Premium Trading Partnership"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-gold/20 rounded-2xl blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Why Choose Smaragd
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Decades of expertise in precious materials trading with unmatched service quality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-emerald transition-luxury group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 emerald-gradient rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-luxury">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join the world's most trusted precious materials trading platform. 
            Our experts are ready to guide your investment journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;