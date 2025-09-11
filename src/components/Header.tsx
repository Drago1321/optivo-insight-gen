import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { 
      name: "Industries", 
      href: "#industries",
      dropdown: [
        { name: "Education", href: "/industries/education" },
        { name: "Consumer Goods", href: "/industries/consumer-goods" },
        { name: "Luxury", href: "/industries/luxury" },
        { name: "EdTech", href: "/industries/edtech" },
        { name: "FinTech", href: "/industries/fintech" },
        { name: "Food & Beverages", href: "/industries/food-beverages" },
        { name: "Content & Social Media", href: "/industries/content-social" },
      ]
    },
    { 
      name: "Services", 
      href: "#services",
      dropdown: [
        { name: "Standard Reports", href: "/services/standard-reports" },
        { name: "Mini Reports", href: "/services/mini-reports" },
        { name: "Request-Based Reports", href: "/services/request-based" },
        { name: "Product-Based Reports", href: "/services/product-based" },
        { name: "Competitor Analysis", href: "/services/competitor-analysis" },
      ]
    },
    { name: "About Us", href: "/about" },
    { name: "Client Reports", href: "/client-reports" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-heading font-bold text-primary">
              Optivo Research
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="btn-accent">
              Request a Report
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button className="btn-accent w-full">
                  Request a Report
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;