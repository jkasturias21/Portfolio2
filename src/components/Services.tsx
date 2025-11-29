import { Server, Shield, Bot, Wrench, Network, HardDrive } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "System Administration",
    description: "Managing servers, networks, and infrastructure to ensure smooth operations and optimal performance.",
    color: "primary",
  },
  {
    icon: Wrench,
    title: "IT Support",
    description: "Providing technical assistance and troubleshooting for hardware, software, and network issues.",
    color: "secondary",
  },
  {
    icon: Bot,
    title: "AI System Building",
    description: "Leveraging AI tools and technologies to create intelligent automated systems and workflows.",
    color: "accent",
  },
  {
    icon: Shield,
    title: "Security Management",
    description: "Implementing security measures to protect systems, data, and users from threats.",
    color: "primary",
  },
  {
    icon: Network,
    title: "Network Administration",
    description: "Configuring and maintaining network infrastructure for reliable connectivity.",
    color: "secondary",
  },
  {
    icon: HardDrive,
    title: "Data Management",
    description: "Organizing, backing up, and ensuring the integrity of critical data systems.",
    color: "accent",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest">// WHAT I DO</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 text-gradient">
            Services.Render()
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Comprehensive IT solutions powered by modern technology and AI automation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cyber-card p-6 hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg bg-${service.color}/10 border border-${service.color}/30 mb-4 group-hover:shadow-[0_0_20px_hsl(var(--${service.color})/0.3)] transition-shadow`}>
                <service.icon className={`w-6 h-6 text-${service.color}`} />
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Decorative line */}
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-border to-transparent group-hover:via-primary/50 transition-colors" />
            </div>
          ))}
        </div>

        {/* AI Highlight */}
        <div className="mt-16 cyber-card p-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
            <Bot className="w-5 h-5 text-accent" />
            <span className="text-sm font-mono text-accent">AI-Powered Solutions</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Building Systems with Artificial Intelligence
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in leveraging AI tools to create intelligent systems that automate 
            repetitive tasks, enhance productivity, and solve complex IT challenges. From 
            chatbots to automated workflows, AI is transforming how we approach IT solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
