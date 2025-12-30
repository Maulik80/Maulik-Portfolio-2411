import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

// --- ThemeToggle Component ---
const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
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
        "p-2 rounded-full transition-all duration-300 hover:bg-primary/20 hover:scale-110",
        className
      )}
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-300" />
      ) : (
        <Moon className="w-5 h-5 text-primary" />
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
  const [activeSection, setActiveSection] = useState("hero");

  // Handle Scroll Effect (Glassmorphism trigger)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Active Section Spy (Highlights menu item on scroll)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "py-3 bg-background/60 backdrop-blur-md border-white/10 shadow-lg"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
        
        {/* Logo */}
        <a className="flex items-center gap-1 text-xl font-bold tracking-wide" href="#hero">
           <span className="text-primary text-glow">Maulik</span>
           <span className="text-foreground">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <div className="items-center hidden space-x-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:text-primary",
                activeSection === item.href.substring(1)
                  ? "text-primary bg-primary/10" // Active State Style
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </a>
          ))}

          <div className="pl-4 ml-4 border-l border-border">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle Button (Updated with z-50 fix) */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 p-2 text-foreground focus:outline-none" // Fix: z-50 keeps button above menu
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Full Screen Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden",
            isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl font-semibold text-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-colors duration-300 hover:text-primary",
                  activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Socials for Mobile */}
          <div className="absolute flex gap-6 bottom-10">
             <a href="https://github.com/Maulik80" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><Github size={24} /></a>
             <a href="https://linkedin.com/in/maulik-gandhi-70b649370/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin size={24} /></a>
             <a href="https://instagram.com/mr.gandhi_2411" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary"><Instagram size={24} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};