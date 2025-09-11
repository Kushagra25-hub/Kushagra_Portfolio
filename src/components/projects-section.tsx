import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Plus } from "lucide-react";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Task Manager App",
      description: "Responsive task management application with full CRUD operations, task filtering by status, and persistent data storage. Features a clean, intuitive interface for organizing daily tasks.",
      tech: ["React.js", "Tailwind CSS", "LocalStorage"],
      liveDemo: "https://task-manager-gold-psi.vercel.app/",
      github: "https://github.com/Kushagra25-hub/task-manager",
      status: "Featured"
    },
    {
      title: "Real-Time Chat Application",
      description: "A real-time chat application built with modern web technologies, featuring secure authentication, instant messaging, and a clean responsive UI. Supports private chats, message persistence, and seamless user experience across devices.",
      tech: ["React.js", "Node.js", "Express.js","Socket.io"],
      liveDemo: "https://chat-app-delta-six-39.vercel.app/",
      github: "https://github.com/Kushagra25-hub/Chat-App.git",
      status: "Live"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application that provides current conditions and forecasts. Features location-based weather data and beautiful visualizations.",
      tech: ["JavaScript", "Weather API", "Chart.js"],
      liveDemo: "https://weather-apps-lovat-nu.vercel.app/",
      github: "https://github.com/Kushagra25-hub/weather-apps.git",
      status: "Live"
    },
    {
      title: "E-Commerce Website",
      description: "An e-commerce website with product listings, cart, checkout, and secure user authentication, built for a seamless shopping experience.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      liveDemo: "#",
      github: "#",
      status: "Upcomming"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Featured": return "bg-accent text-accent-foreground";
      case "Live": return "bg-success text-white";
      case "In Progress": return "bg-warning text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform bg-card border-border hover:border-primary/30 relative ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Animated Background Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              {/* Floating Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className={`${getStatusColor(project.status)} text-xs shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {project.status}
                </Badge>
              </div>

              {/* Project Content */}
              <div className="p-8 relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className={`text-xs font-mono transition-all duration-300 hover:scale-105 hover:shadow-sm group-hover:bg-primary/10 group-hover:text-primary ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                      }`}
                      style={{ transitionDelay: `${(index * 150) + (techIndex * 50)}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex space-x-4">
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="flex-1 group/btn relative overflow-hidden"
                    disabled={project.liveDemo === "#"}
                  >
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={project.liveDemo === "#" ? "pointer-events-none opacity-50" : ""}
                    >
                      <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <ExternalLink className="h-4 w-4 mr-2 relative z-10 group-hover/btn:scale-110 transition-transform duration-200" />
                      <span className="relative z-10">
                        {project.liveDemo === "#" ? "Coming Soon" : "Live Demo"}
                      </span>
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    disabled={project.github === "#"}
                    className="group/btn hover:bg-muted-hover hover:border-primary/50"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={project.github === "#" ? "pointer-events-none opacity-50" : ""}
                    >
                      <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-200" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-lg blur transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group"
          >
            <a
              href="https://github.com/Kushagra25-hub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Plus className="h-5 w-5 mr-2 group-hover:rotate-90 transition-smooth" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;