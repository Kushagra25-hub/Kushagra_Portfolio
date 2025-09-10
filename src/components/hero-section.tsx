import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import ParticleBackground from "@/components/particle-background";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");

  const fullText = "Web Developer | B.Tech CSE Student";

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypewriterText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-bg relative overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* Animated Greeting */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-accent mr-2 animate-pulse" />
              <p className="text-accent font-medium text-lg animate-fade-in-left">
                Hello, I'm
              </p>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 font-inter">
              <span className="bg-gradient-secondary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                Kushagra
              </span>
              <br />
              <span className="text-foreground animate-fade-in-right" style={{ animationDelay: '0.5s' }}>
                Srivastava
              </span>
            </h1>
          </div>

          {/* Typewriter Title */}
          <div className="mb-8">
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium font-mono">
                {typewriterText}
                <span className="border-r-2 border-primary animate-blink ml-1"></span>
              </h2>
            </div>
          </div>

          {/* Enhanced Tagline */}
          <div className="mb-12">
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '1s' }}>
              Passionate about building{" "}
              <span className="text-primary font-semibold">modern web applications</span>{" "}
              and solving real-world problems through{" "}
              <span className="text-accent font-semibold">innovative code</span>.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group relative overflow-hidden animate-scale-in"
              style={{ animationDelay: '1.2s' }}
            >
              <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center">
                ✨ Explore My Work
              </span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="group animate-scale-in"
              style={{ animationDelay: '1.4s' }}
            >
              <span className="group-hover:scale-110 transition-transform duration-200">
                💬 Let's Connect
              </span>
            </Button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 mb-20">
            {[
              { href: "https://github.com/Kushagra25-hub", icon: Github, label: "GitHub", delay: '1.6s' },
              { href: "http://linkedin.com/in/kushagrasri25", icon: Linkedin, label: "LinkedIn", delay: '1.8s' },
              { href: "mailto:kushagrasri2004@gmail.com", icon: Mail, label: "Email", delay: '2s' }
            ].map(({ href, icon: Icon, label, delay }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group text-muted-foreground hover:text-foreground transition-all duration-300 animate-fade-in p-3 rounded-full hover:bg-muted/20 hover:shadow-glow"
                style={{ animationDelay: delay }}
                aria-label={label}
              >
                <Icon className="h-7 w-7 group-hover:scale-125 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Animated Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors duration-300 group"
            style={{ animationDelay: '2.2s' }}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium group-hover:text-primary transition-colors">Discover More</span>
              <ChevronDown className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;