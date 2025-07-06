import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Stay Informed About Market Trends
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Get exclusive insights on precious metals, market analysis, and trading
              opportunities delivered directly to your inbox.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
            />
            <Button variant="gold" className="px-8">
              Subscribe
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-white/80">
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-accent-gold" />
              <span>Weekly market insights</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-accent-gold" />
              <span>Exclusive trading opportunities</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-accent-gold" />
              <span>Expert analysis & reports</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-accent-gold" />
              <span>No spam, unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-primary-dark/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Smaragd Team */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">SMARAGD TEAM</h3>
              <p className="text-white/80 leading-relaxed">
                Leading experts in precious metals and stones trading, offering
                comprehensive consultation services for transnational high-
                value goods commerce.
              </p>
              <div className="flex items-center gap-2 text-white/80">
                <Star className="w-5 h-5 text-accent-gold" />
                <span>Premium Quality • Global Reach • Trusted Excellence</span>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Services</h3>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link to="/services" className="hover:text-accent-gold transition-luxury">
                    Gold Trading
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-accent-gold transition-luxury">
                    Precious Stones
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-accent-gold transition-luxury">
                    Supply Chain Management
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-accent-gold transition-luxury">
                    Trade Consultation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Contact</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <span>✉</span>
                  <span>contact@smaragd.team</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🌍</span>
                  <span>Global Operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-primary-dark py-4 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60 text-sm">
            © 2025 Smaragd Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;