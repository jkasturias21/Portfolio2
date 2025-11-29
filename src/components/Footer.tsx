import { Heart, Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-display text-lg font-bold text-foreground">
              <span className="text-primary">{"<"}</span>
              DEV
              <span className="text-primary">{"/>"}</span>
            </span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono flex items-center gap-1">
            <span className="text-primary">{"/*"}</span>
            Built with
            <Heart className="w-4 h-4 text-destructive inline mx-1" />
            © {new Date().getFullYear()}
            <span className="text-primary">{"*/"}</span>
          </p>

          {/* Version */}
          <div className="flex items-center gap-2 text-sm font-mono">
            <span className="text-muted-foreground">v1.0.0</span>
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent">online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
