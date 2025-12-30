import { ArrowUp, Github, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  // Navigation Links (Same as Navbar)
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative pt-16 pb-8 border-t bg-card border-border">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* LEFT: Brand & Copyright */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-primary">Maulik Portfolio</span>
            <p className="mt-2 text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Maulik.co. All rights reserved.
            </p>
          </div>

          {/* CENTER: NavBar Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* RIGHT: Socials & Scroll Up */}
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex gap-3 pr-4 border-r border-border/50">
               <a href="https://github.com/Maulik80" target="_blank" rel="noreferrer" className="transition-colors text-muted-foreground hover:text-primary">
                  <Github size={18} />
               </a>
               <a href="https://www.linkedin.com/in/maulik-gandhi-70b649370/" target="_blank" rel="noreferrer" className="transition-colors text-muted-foreground hover:text-primary">
                  <Linkedin size={18} />
               </a>
               <a href="https://www.instagram.com/mr.gandhi_2411" target="_blank" rel="noreferrer" className="transition-colors text-muted-foreground hover:text-primary">
                  <Instagram size={18} />
               </a>
            </div>

            {/* Scroll To Top */}
            <a
              href="#hero"
              className="p-2 transition-all rounded-full bg-primary/10 hover:bg-primary hover:text-white text-primary"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};