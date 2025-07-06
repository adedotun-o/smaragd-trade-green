import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  TrendingUp, 
  Shield, 
  Globe, 
  Users, 
  FileText, 
  Search,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Precious Materials Trading",
      description: "Complete trading solutions for gold, precious stones, and rare earth materials.",
      features: [
        "Real-time market analysis",
        "Secure transaction processing",
        "Global inventory access",
        "Competitive pricing strategies"
      ]
    },
    {
      icon: Globe,
      title: "Trans-Atlantic Trade Consulting",
      description: "Expert guidance for international trade across Atlantic markets.",
      features: [
        "Regulatory compliance guidance",
        "Market entry strategies",
        "Risk assessment and mitigation",
        "Cross-border logistics support"
      ]
    },
    {
      icon: Users,
      title: "High Net-Worth Investment Advisory",
      description: "Personalized investment strategies for sophisticated investors.",
      features: [
        "Portfolio diversification",
        "Alternative asset allocation",
        "Tax-efficient structuring",
        "Wealth preservation strategies"
      ]
    },
    {
      icon: Shield,
      title: "Secure Storage & Insurance",
      description: "Protected storage solutions with comprehensive insurance coverage.",
      features: [
        "Vault storage facilities",
        "Full insurance coverage",
        "Regular auditing",
        "24/7 security monitoring"
      ]
    },
    {
      icon: FileText,
      title: "Authentication & Certification",
      description: "Professional verification and documentation services.",
      features: [
        "Material authenticity verification",
        "Certification documentation",
        "Quality assurance testing",
        "Provenance tracking"
      ]
    },
    {
      icon: Search,
      title: "Market Research & Analysis",
      description: "Comprehensive market intelligence and trend analysis.",
      features: [
        "Market trend forecasting",
        "Price analysis reports",
        "Economic impact studies",
        "Investment opportunity identification"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Understanding your investment goals and requirements through detailed discussion."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Creating customized strategies based on market analysis and your objectives."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Executing transactions and strategies with precision and security."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Continuous monitoring and support to ensure optimal performance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="emerald-gradient bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for precious materials trading, international commerce, 
              and high-net-worth investment management.
            </p>
          </div>

          <Button variant="luxury" asChild>
            <Link to="/contact">
              Schedule Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end solutions designed for discerning clients and institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-emerald transition-luxury group">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 emerald-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-luxury">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven approach to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 emerald-gradient rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -z-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground">
            Our team of experts is ready to help you achieve your investment and trading objectives. 
            Contact us today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="luxury" size="lg" asChild>
              <Link to="/contact">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;