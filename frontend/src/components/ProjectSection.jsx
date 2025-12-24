import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "🎯 Project One-Line Summary",
    description: "A React application that demonstrates state management and data flow by providing a live, theme-toggling profile card preview of user-typed input.",
    image: "\project1.png",
    tags: ["JavaScript", "CSS", "HTML"],
    demoUrl: "https://personal-profile-card-orcin.vercel.app/",
    githubUrl: "https://github.com/Maulik80/personal-profile-card",
  },
 
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container max-w-5xl mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="max-w-2xl mx-auto mb-12 text-center text-muted-foreground">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, key) => (
            <div
              key={key}
              className="overflow-hidden rounded-lg shadow-xs group bg-card card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="mb-1 text-xl font-semibold"> {project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="transition-colors duration-300 text-foreground/80 hover:text-primary"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="transition-colors duration-300 text-foreground/80 hover:text-primary"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
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
