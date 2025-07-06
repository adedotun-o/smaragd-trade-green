import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Globe, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "$2B+", label: "Total Transactions" },
    { number: "150+", label: "Global Partners" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in every transaction and partnership."
    },
    {
      icon: Users,
      title: "Trust",
      description: "Building lasting relationships through transparency and reliability."
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "Connecting markets across continents with expert knowledge."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Leveraging cutting-edge technology for secure, efficient trading."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold">
                  <span className="emerald-gradient bg-clip-text text-transparent">
                    About Smaragd
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Founded on the principles of trust, excellence, and global connectivity, 
                  Smaragd has become a leading force in precious materials trading and 
                  trans-Atlantic commerce consulting.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground">
                  For over two decades, we have specialized in the trading of gold, 
                  precious stones, and rare earth materials, serving high-net-worth 
                  individuals and institutions worldwide. Our expertise extends beyond 
                  simple transactions to comprehensive consulting services that bridge 
                  markets across the Atlantic.
                </p>
                
                <p className="text-muted-foreground">
                  Our team of seasoned professionals brings unparalleled knowledge 
                  of global markets, regulatory landscapes, and investment strategies, 
                  ensuring our clients receive the highest quality service and optimal outcomes.
                </p>
              </div>

              <Button variant="luxury" asChild>
                <Link to="/contact">Partner With Us</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury">
                <img 
                  src="/lovable-uploads/1502a2c5-ab64-41a4-875c-f41f3780a06b.png"
                  alt="Premium Gold Bars"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl sm:text-5xl font-bold emerald-gradient bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and transaction at Smaragd.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-emerald transition-luxury group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 emerald-gradient rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-luxury">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To be the world's most trusted partner in precious materials trading, 
            providing unparalleled expertise, security, and value to our clients 
            while fostering sustainable growth in global markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;