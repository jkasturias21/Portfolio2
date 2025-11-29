import { Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.249a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.622-1.249.077.077 0 00-.079-.037 19.736 19.736 0 00-4.885 1.515.07.07 0 00-.032.027C2.02 9.045 1.376 13.58 1.68 18.058a.082.082 0 00.031.056 19.9 19.9 0 004.993 2.528.078.078 0 00.084-.028c.384-.525.726-1.08 1.022-1.664a.076.076 0 00-.041-.107 13.1 13.1 0 01-1.872-.892.077.077 0 01-.008-.127c.125-.094.25-.192.369-.291a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.009c.12.099.244.198.37.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.076.076 0 00-.04.107c.3.583.643 1.138 1.02 1.663a.077.077 0 00.085.028 19.876 19.876 0 004.994-2.528.077.077 0 00.03-.055c.416-5.203-.695-9.713-2.931-13.662a.061.061 0 00-.03-.03zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z" />
  </svg>
);

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jane-karylle-asturias-125853280",
    icon: Linkedin,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/your-discord-id",
    icon: DiscordIcon,
  },
];

const contactInfo = [
  { label: "Email", value: "karyllealegrado@gmail.com", icon: Mail },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost/My-Portfolio/api/save_message.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Failed to save your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Unable to connect to the server.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-widest">
            // GET IN TOUCH
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 text-gradient">
            Contact.Init()
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have a project in mind? Let's collaborate and build something
            extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="cyber-card p-6">
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-primary/20">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="ml-2 text-sm text-muted-foreground font-mono">
                  contact-info.tsx
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-mono">
                      karyllealegrado@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-primary/10 border border-primary/30 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-mono">
                      Lobo, Batangas, Philippines
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-primary/20">
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="p-3 bg-muted/50 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/10 transition-all group"
                    >
                      <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="cyber-card p-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-accent rounded-full animate-ping" />
                </div>
                <span className="text-foreground font-mono">
                  Currently available for new projects
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-card p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-mono text-muted-foreground mb-2"
                >
                  <span className="text-primary">const</span> name{" "}
                  <span className="text-primary">=</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder='"Your Name"'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-mono text-muted-foreground mb-2"
                >
                  <span className="text-primary">const</span> email{" "}
                  <span className="text-primary">=</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder='"your@email.com"'
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-mono text-muted-foreground mb-2"
                >
                  <span className="text-primary">const</span> message{" "}
                  <span className="text-primary">=</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg font-mono text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder='"Tell me about your project..."'
                  required
                />
              </div>

              <Button type="submit" variant="neon" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
