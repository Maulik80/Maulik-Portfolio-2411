import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="container max-w-5xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Web Developer | Modern UI & Interaction Builder
            </h3>

            <p className="text-muted-foreground">
              I’m a full-stack developer specializing in the MERN stack, focused on
              building responsive, high-performance, and user-centered web applications.
              I enjoy creating clean interfaces, smooth interactions, and purposeful
              digital products that solve real problems.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about exploring modern tools, writing efficient code, and
              continuously improving my craft to stay aligned with today’s fast-moving
              web development ecosystem.
            </p>

            <p className="text-muted-foreground">
              My goal is to deliver scalable, visually refined, and meaningful
              solutions that provide an exceptional user experience across all
              platforms.
            </p>

            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <a href="#contact" className="cosmic-button">Get In Touch</a>

              <a
                href="/Maulik_Gandhi_Resume.pdf"
                download="Maulik_Gandhi_Resume.pdf"
                className="px-6 py-2 transition-colors duration-300 border rounded-full border-primary text-primary hover:bg-primary/10"
              >
                Download RESUME
              </a>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 gradient-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    Developing responsive, feature-rich, and high-performance web
                    applications using modern frameworks and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 gradient-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive, aesthetic, and user-friendly interfaces focused
                    on accessibility and seamless interaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 gradient-border card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="text-lg font-semibold">Project Management</h4>
                  <p className="text-muted-foreground"  >
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
