import { ArrowDown } from "lucide-react";



export const HeroSection = ()=>{
    return(
       <section 
       id="hero" 
       className="relative flex flex-col items-center justify-center min-h-screen px-4">

        <div className="container z-10 max-w-4xl mx-auto text-center ">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight md:text-6xl ">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="opacity-0 text-primary animate-fade-in-delay-1">
                       {" "} Maulik{" "}</span>
                    <span className="ml-2 opacity-0 text-gradient animate-fade-in-delay-2">
                        Gandhi</span>
                </h1>
            </div>
             <div className="pt-2 m-2 mx-auto text-lg opacity-0 md:text-xl text-muted-foreground max-2-2xl animate-fade-in-delay-1">
               <p>
                     {"Full-Stack Web Developer | MERN | Creative UI/UX | Problem Solver"}
            </p><p>
                      {"I build fast, responsive, and modern web applications with clean architecture and pixel-perfect design."}
               </p>
            </div>
             <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                <a href="#project" className="cosmic-button">
                      Viwe My Work
                  </a>
          </div>
        </div> 

       <a
       href="#about" 
       className="absolute flex flex-col items-center transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <span className="mb-2 text-sm text-muted-foreground" > Scroll </span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </a>

       </section>
    );
};