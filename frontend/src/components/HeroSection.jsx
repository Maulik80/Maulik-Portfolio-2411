import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden"
    >
      <div className="container z-10 max-w-5xl mx-auto text-center">
        
        {/* Main Heading */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="opacity-0 text-primary text-glow animate-fade-in-delay-1">
              {" "}Maulik{" "}
            </span>
            <span className="opacity-0 text-foreground animate-fade-in-delay-2">
              Gandhi
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="max-w-3xl mx-auto mt-6 text-xl opacity-0 md:text-2xl text-muted-foreground animate-fade-in-delay-3">
          <p className="font-medium text-foreground">
            Full-Stack Web Developer | MERN | Creative UI/UX
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            I build fast, responsive, and modern web applications with clean
            architecture and pixel-perfect design.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-10 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute flex flex-col items-center transition-opacity transform -translate-x-1/2 bottom-10 left-1/2 animate-bounce hover:opacity-100 opacity-70"
      >
        <span className="mb-2 text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
        <ArrowDown className="w-6 h-6 text-primary" />
      </a>
    </section>
  );
};