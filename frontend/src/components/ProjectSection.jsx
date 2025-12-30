import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Profile Card", // More descriptive title
    description:
      "A React application that demonstrates state management and data flow by providing a live, theme-toggling profile card preview of user-typed input.",
    image: "/project1.png",
    tags: ["React", "Node.js", "Tailwind CSS"], // Cleaned up tags
    demoUrl: "https://personal-profile-card-orcin.vercel.app/",
    githubUrl: "https://github.com/Maulik80/personal-profile-card",
  },
  // You can add more projects here
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-32">
      <div className="container max-w-6xl mx-auto">
        
        {/* Section Header */}
        <h2 className="mb-6 text-3xl font-bold text-center md:text-5xl">
          Featured <span className="text-primary text-glow">Projects</span>
        </h2>

        <p className="max-w-2xl mx-auto mb-16 text-lg text-center text-muted-foreground">
          Here are some of my recent projects. Each one was crafted with attention to detail, performance, and user experience.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col overflow-hidden glass-card group"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-56 overflow-hidden border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100" />
              </div>

              <div className="flex flex-col flex-grow p-6">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
                  {project.title}
                </h3>

                <p className="flex-grow mb-6 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center justify-between pt-4 mt-auto border-t border-white/10">
                  <div className="flex gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16 text-center">
          <a
            className="flex items-center gap-2 mx-auto cosmic-button w-fit"
            target="_blank"
            href="https://github.com/Maulik80"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};