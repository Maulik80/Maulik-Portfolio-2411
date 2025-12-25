import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

// --- ThemeToggle Logic Inside Navbar ---
const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage or system preference on mount
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "z-50 p-2 rounded-full transition-colors duration-300 focus:outline-none hover:bg-secondary/20",
        className
      )}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-yellow-300" />
      ) : (
        <Moon className="w-6 h-6 text-blue-900" />
      )}
    </button>
  );
};

// --- Main Navbar Component ---
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
        "fixed w-full z-20 transition-all duration-500",
        isScrolled 
          ? "py-3 bg-background/40 backdrop-blur-xl border-b border-white/10 shadow-lg" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        {/* Logo */}
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
          {/* Theme Toggle Component */}
          <ThemeToggle />
        </div>

        {/* Mobile View Toggle & Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="z-50 p-2 text-foreground focus:outline-none"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl text-center">
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