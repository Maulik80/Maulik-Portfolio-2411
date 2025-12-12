import {
  Code,
  PenTool,
  Palette,
  Blocks,
  Database,
  Settings,
  GitBranch,
  Cpu,
  LayoutDashboard,
} from "lucide-react";

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="container max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Sub text */}
        <p className="max-w-2xl mx-auto mb-12 text-muted-foreground">
          I work with modern web technologies to build responsive UIs, scalable backends,
          and smooth user experiences. My core expertise lies in MERN stack development,
           and JavaScript-based workflow.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-6 mt-8 sm:grid-cols-3 md:grid-cols-4">

          <SkillItem icon={<LayoutDashboard />} title="HTML & CSS" desc="Building layouts & UI structure" />
          <SkillItem icon={<Code />} title="JavaScript" desc="Dynamic functionality & logic" />
          <SkillItem icon={<Blocks />} title="React.js" desc="Interactive UI components" />
          <SkillItem icon={<Cpu />} title="Node.js" desc="Backend development" />
          <SkillItem icon={<Settings />} title="Express.js" desc="API & server logic" />
          <SkillItem icon={<Database />} title="MongoDB" desc="Database modeling" />
          {/* <SkillItem icon={<Palette />} title="UI/UX Design" desc="Clean and user-focused designs" />
          <SkillItem icon={<PenTool />} title="Figma" desc="Wireframes & prototypes" /> */}
          <SkillItem icon={<GitBranch />} title="Git & GitHub" desc="Version control & collaboration" />
          
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ icon, title, desc }) => (
  <div className="p-6 text-center transition-transform rounded-lg gradient-border card-hover hover:scale-105">
    <div className="flex justify-center mb-3 text-4xl text-primary">{icon}</div>
    <h3 className="mb-1 text-lg font-semibold">{title}</h3>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </div>
);
