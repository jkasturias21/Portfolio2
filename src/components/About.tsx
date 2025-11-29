import { Server, Shield, Bot, Cpu, HardDrive, Wrench } from "lucide-react";

const skills = [
  { name: "System Administration", icon: Server, items: ["Windows Server", "Active Directory", "Hyper-V", "Networking"], color: "primary" },
  { name: "IT Support", icon: Wrench, items: ["Troubleshooting", "Hardware", "Software", "Help Desk"], color: "secondary" },
  { name: "AI & Automation", icon: Bot, items: ["AI Tools", "Scripting", "Automation", "System Building"], color: "accent" },
];

const techStack = [
  { icon: Cpu, label: "Infrastructure" },
  { icon: Shield, label: "Security" },
  { icon: HardDrive, label: "Data Management" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest">// ABOUT ME</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 text-gradient">
            System.Profile
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Terminal style info */}
          <div className="cyber-card p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-primary/20">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="ml-4 text-sm text-muted-foreground font-mono">about.tsx</span>
            </div>

            <div className="space-y-4 font-mono text-sm md:text-base">
              <div>
                <span className="text-secondary">interface</span>{" "}
                <span className="text-primary">ITSpecialist</span> {"{"}
              </div>
              <div className="pl-4">
                <span className="text-muted-foreground">role:</span>{" "}
                <span className="text-accent">"IT Assistant / System Admin"</span>;
              </div>
              <div className="pl-4">
                <span className="text-muted-foreground">specialty:</span>{" "}
                <span className="text-accent">"AI-Powered System Building"</span>;
              </div>
              <div className="pl-4">
                <span className="text-muted-foreground">focus:</span>{" "}
                <span className="text-accent">"Infrastructure & Support"</span>;
              </div>
              <div className="pl-4">
                <span className="text-muted-foreground">passion:</span>{" "}
                <span className="text-accent">"Productivity Improvement & Efficiency"</span>;
              </div>
              <div>{"}"}</div>
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed">
              An IT professional with hands-on experience in system administration, 
              user support, and infrastructure management. I leverage AI tools to build 
              intelligent systems and automate workflows, making technology work smarter 
              for everyone.
            </p>

            {/* Tech principles */}
            <div className="flex flex-wrap gap-4 mt-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full"
                >
                  <tech.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Skills */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="cyber-card p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-${skill.color}/10 border border-${skill.color}/30`}>
                    <skill.icon className={`w-5 h-5 text-${skill.color}`} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {skill.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 text-sm font-mono bg-muted/50 text-muted-foreground rounded border border-border hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/50 rounded-full`}
                    style={{ width: `${90 - index * 5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
