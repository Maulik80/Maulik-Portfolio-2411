import {
  Code,
  Blocks,
  Database,
  Settings,
  GitBranch,
  Cpu,
  LayoutDashboard,
} from "lucide-react";

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative px-4 py-32">
      <div className="container max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="mb-6 text-3xl font-bold md:text-5xl">
          My <span className="text-primary text-glow">Skills</span>
        </h2>

        {/* Sub text */}
        <p className="max-w-2xl mx-auto mb-16 text-lg text-muted-foreground">
          I work with modern web technologies to build responsive UIs, scalable backends,
          and smooth user experiences. My core expertise lies in the <strong className="text-foreground">MERN stack</strong>.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">

          <SkillItem icon={<LayoutDashboard />} title="HTML & CSS" desc="Layouts & UI" />
          <SkillItem icon={<Code />} title="JavaScript" desc="ES6+ Logic" />
          <SkillItem icon={<Blocks />} title="React.js" desc="Components & Hooks" />
          <SkillItem icon={<Cpu />} title="Node.js" desc="Runtime Environment" />
          <SkillItem icon={<Settings />} title="Express.js" desc="RESTful APIs" />
          <SkillItem icon={<Database />} title="MongoDB" desc="NoSQL Database" />
          <SkillItem icon={<GitBranch />} title="Git & GitHub" desc="Version Control" />
          <SkillItem icon={<Code />} title="Tailwind CSS" desc="Modern Styling" />
          
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 cursor-default glass-card hover:-translate-y-2 hover:border-primary/50 group">
    <div className="mb-4 text-4xl transition-transform duration-300 text-primary group-hover:scale-110 group-hover:text-primary/80">
      {icon}
    </div>
    <h3 className="mb-2 text-lg font-bold">{title}</h3>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </div>
);