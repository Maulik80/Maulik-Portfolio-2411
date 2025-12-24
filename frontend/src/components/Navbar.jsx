import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle"; // Import the toggle

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled 
          ? "py-3 bg-background/40 backdrop-blur-xl border-b border-white/10 shadow-lg" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a className="flex items-center text-xl font-bold text-primary" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Maulik </span>
            Portfolio
          </span>
        </a>

        {/* Desktop Nav & Toggle */}
        <div className="items-center hidden space-x-8 md:flex">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="transition-colors duration-300 text-foreground/80 hover:text-primary"
            >
              {item.name}
            </a>
          ))}
          {/* Added Toggle to Desktop View 
          <ThemeToggle className="relative top-0 right-0 p-0" />*/}
        </div>

        {/* Mobile View Toggle & Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Added Toggle next to Menu button for Mobile */}
          <ThemeToggle className="relative top-0 right-0 p-0" />
          
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="z-50 p-2 text-foreground"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="transition-colors duration-300 text-foreground/80 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};