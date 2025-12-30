import { Briefcase, Code, Globe, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-32">
      <div className="container max-w-5xl mx-auto">
        <h2 className="mb-16 text-3xl font-bold text-center md:text-5xl">
          About <span className="text-primary text-glow"> Me</span>
        </h2>

        <div className="grid items-center grid-cols-1 gap-16 md:grid-cols-2">
          
          {/* LEFT SIDE: Text Content */}
          <div className="space-y-8 text-left">
            <h3 className="text-2xl font-bold leading-tight md:text-3xl">
              Full-Stack Web Developer <br /> 
              <span className="text-primary">Modern UI & Interaction Builder</span>
            </h3>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I’m a full-stack developer specializing in the <strong className="text-foreground">MERN stack</strong>, focused on
                building responsive, high-performance, and user-centered web applications.
              </p>
              <p>
                I enjoy creating clean interfaces, smooth interactions, and purposeful
                digital products that solve real problems. I’m passionate about exploring modern tools and
                continuously improving my craft.
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-6 sm:flex-row">
              <a href="#contact" className="text-center cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Maulik_Gandhi_Resume.pdf"
                download="Maulik_Gandhi_Resume.pdf"
                className="flex items-center justify-center px-6 py-2 font-medium transition-all duration-300 border-2 rounded-full border-primary text-primary hover:bg-primary/10 hover:scale-105 active:scale-95"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Glass Cards */}
          <div className="grid grid-cols-1 gap-6">
            
            <div className="p-6 glass-card card-hover group">
              <div className="flex items-start gap-5">
                <div className="p-3 transition-colors rounded-full bg-primary/20 group-hover:bg-primary/30">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold">Web Development</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Developing responsive, feature-rich, and high-performance web
                    applications using modern frameworks and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 glass-card card-hover group">
              <div className="flex items-start gap-5">
                <div className="p-3 transition-colors rounded-full bg-primary/20 group-hover:bg-primary/30">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold">UI/UX Design</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Designing intuitive, aesthetic, and user-friendly interfaces focused
                    on accessibility and seamless interaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 glass-card card-hover group">
              <div className="flex items-start gap-5">
                <div className="p-3 transition-colors rounded-full bg-primary/20 group-hover:bg-primary/30">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold">Project Management</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Managing projects end-to-end with agile workflows—from planning and
                    design to development, deployment, and optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};