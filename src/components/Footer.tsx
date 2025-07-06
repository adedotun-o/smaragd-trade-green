import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/771ea6f2-ec6d-44b7-91bd-dd63fdeeebe8.png" 
                alt="Smaragd Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold emerald-gradient bg-clip-text text-transparent">
                SMARAGD
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Premium trading in precious materials. Specializing in gold, precious stones, and rare earth materials with expert trans-Atlantic trade consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-luxury">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-luxury">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-luxury">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-luxury">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Trading Excellence</li>
              <li>Global Markets</li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-luxury">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 Smaragd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-luxury">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-luxury">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;