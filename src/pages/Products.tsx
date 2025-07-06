import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Coins, Gem, Atom, ArrowRight } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      icon: Coins,
      title: "Premium Gold",
      description: "Investment-grade gold bars and coins from certified refineries worldwide.",
      image: "/lovable-uploads/1502a2c5-ab64-41a4-875c-f41f3780a06b.png",
      features: [
        "99.99% Pure Gold Bars",
        "Certified Authentication",
        "Secure Storage Options",
        "Competitive Market Pricing"
      ]
    },
    {
      icon: Gem,
      title: "Precious Stones",
      description: "Rare diamonds, emeralds, rubies, and sapphires of exceptional quality.",
      image: "/lovable-uploads/594da306-f523-49cf-8906-ad984a01b07e.png",
      features: [
        "GIA Certified Diamonds",
        "Natural Gemstones",
        "Investment Grade Quality",
        "Expert Appraisal Services"
      ]
    },
    {
      icon: Atom,
      title: "Rare Earth Materials",
      description: "Strategic metals and minerals essential for technology and industry.",
      image: "/lovable-uploads/d6a8f4d6-0930-49d2-8360-945975c58cee.png",
      features: [
        "Critical Minerals",
        "Industrial Applications",
        "Strategic Reserves",
        "Global Supply Chain"
      ]
    }
  ];

  const portfolio = [
    { name: "Gold Bullion", purity: "99.99%", origin: "Swiss Refineries" },
    { name: "Diamond Collection", grade: "VS1-FL", carat: "1-50ct" },
    { name: "Emerald Stones", origin: "Colombian", quality: "AAA Grade" },
    { name: "Rare Earth Oxides", purity: "99.5%+", application: "Technology" },
    { name: "Platinum Bars", purity: "99.95%", weight: "1oz-100oz" },
    { name: "Ruby Collection", origin: "Burmese", quality: "Pigeon Blood" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="emerald-gradient bg-clip-text text-transparent">
                Premium Products
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our carefully curated collection of the world's finest precious materials, 
              each piece selected for its exceptional quality and investment potential.
            </p>
          </div>

          <div className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-luxury">
            <img 
              src="/lovable-uploads/dbae92ac-1cb9-4ecf-a44f-d7dd629cb7a6.png"
              alt="Premium Trading"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our Product Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specializing in three core areas of precious materials trading.
            </p>
          </div>

          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 emerald-gradient rounded-xl flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground">
                    {category.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 emerald-gradient rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-luxury">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Current Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of our premium inventory available for immediate trading.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="hover:shadow-emerald transition-luxury">
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {Object.entries(item).slice(1).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-muted-foreground capitalize">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="luxury" asChild>
              <Link to="/contact">
                Request Detailed Inventory
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;