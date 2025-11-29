import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Terminal } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "IT.ASSISTANT/ SYSTEM ADMIN";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanline">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
        {/* Scan line effect */}
        <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/50 animate-pulse-glow mt-10">
                <img
                  src={profileAvatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-accent rounded-full border-2 border-background flex items-center justify-center">
                <span className="w-3 h-3 bg-accent rounded-full animate-ping absolute" />
                <span className="w-2 h-2 bg-accent rounded-full" />
              </div>
            </div>
          </div>

          {/* Terminal header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 border border-primary/30 rounded-full mb-6 backdrop-blur-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">~/portfolio</span>
            <span className="text-accent">$</span>
            <span className="text-foreground">whoami</span>
          </div>

          {/* Main heading with typing effect */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">{"<"}</span>
            <span className="text-gradient">{displayText}</span>
            <span
              className={`text-primary ${showCursor ? "opacity-100" : "opacity-0"}`}
            >
              _
            </span>
            <span className="text-foreground">{"/>"}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-mono">
            <span className="text-accent">const</span>{" "}
            <span className="text-foreground">role</span>{" "}
            <span className="text-primary">=</span>{" "}
            <span className="text-secondary">"IT Assistant & System Admin"</span>
          </p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Managing infrastructure, supporting users, and building intelligent systems with AI.
            Passionate about technology and creating efficient IT solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="neon" size="xl" onClick={scrollToAbout}>
              Learn More
            </Button>

            {/* Download CV Button */}
            <a
              href="/Jane Asturias Resume.pdf"
              download
              className="w-fit"
            >
              <Button variant="outline" size="xl" className="w-full">
                Download CV
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto">
            {[
              { value: "AI", label: "Powered Systems" },
              { value: "24/7", label: "System Support" },
              { value: "100%", label: "Uptime Focus" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary glow-text">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
