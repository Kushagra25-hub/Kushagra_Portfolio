import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Code, Heart, Target, Zap, Trophy } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillProgress, setSkillProgress] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill progress bars
          setTimeout(() => {
            setSkillProgress({
              "React.js": 90,
              "JavaScript": 85,
              "HTML/CSS": 95,
              "Tailwind CSS": 88,
              "Git/GitHub": 82,
              "Problem Solving": 87
            });
          }, 500);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "JavaScript", level: 85, icon: "🚀" },
    { name: "HTML/CSS", level: 95, icon: "🎨" },
    { name: "Tailwind CSS", level: 88, icon: "💨" },
    { name: "Git/GitHub", level: 82, icon: "📚" },
    { name: "Problem Solving", level: 87, icon: "🧩" }
  ];

  const interests = [
    { icon: Code, title: "Web Development", description: "Building responsive and interactive applications", color: "text-blue-500" },
    { icon: Target, title: "Problem Solving", description: "Tackling complex challenges with creative solutions", color: "text-green-500" },
    { icon: Heart, title: "Full-Stack Projects", description: "End-to-end development experience", color: "text-red-500" },
    { icon: Zap, title: "Performance Optimization", description: "Creating fast and efficient applications", color: "text-yellow-500" },
    { icon: Trophy, title: "Continuous Learning", description: "Always exploring new technologies and frameworks", color: "text-purple-500" }
  ];

  const stats = [
    { number: "2+", label: "Years Learning", icon: "📚" },
    { number: "10+", label: "Projects Built", icon: "🚀" },
    { number: "5+", label: "Technologies", icon: "⚡" },
    { number: "100%", label: "Passion", icon: "❤️" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 font-inter">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover my journey, skills, and passion for creating digital experiences
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className={`p-6 text-center bg-card border-border hover:border-primary/30 transition-all duration-500 group hover:shadow-lg ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Introduction & Story */}
          <div
            className={`space-y-8 transition-all duration-700 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <Card className="p-8 shadow-lg hover:shadow-xl transition-all duration-500 bg-card border-border group hover:border-primary/30">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <GraduationCap className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
              </div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I'm currently in my <span className="text-primary font-semibold">3rd year of B.Tech Computer Science</span>, 
                  where every day brings new discoveries in the world of technology and programming.
                </p>
                
                <p>
                  My journey into web development began with curiosity about how websites work, 
                  and it has evolved into a <span className="text-accent font-semibold">genuine passion</span> for 
                  creating digital experiences that solve real problems and make a difference.
                </p>
                
                <p>
                  I'm actively seeking <span className="text-primary font-semibold">internship opportunities</span> 
                  where I can apply my skills, learn from experienced developers, and contribute to meaningful projects 
                  that impact users' lives.
                </p>
              </div>
            </Card>

            {/* Interests Grid */}
            <div className="grid gap-4">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <Card
                    key={interest.title}
                    className={`p-6 shadow-md hover:shadow-lg transition-all duration-500 bg-card border-border hover:border-primary/20 group ${
                      isVisible ? "animate-fade-in-left" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-primary/10 rounded-xl group-hover:bg-gradient-primary/20 transition-all duration-300">
                        <Icon className={`h-6 w-6 ${interest.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {interest.title}
                        </h4>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Skills Section */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <Card className="p-8 shadow-lg hover:shadow-xl transition-all duration-500 bg-card border-border group hover:border-primary/30">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-accent/10 rounded-xl mr-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <Zap className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Technical Skills</h3>
              </div>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transition-all duration-500 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-semibold text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-primary font-bold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skillProgress[skill.name] || 0} 
                      className="h-3 bg-muted"
                    />
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-6 rounded-xl border border-primary/20">
                <div className="text-center">
                  <h4 className="font-bold text-foreground mb-2">Ready to Collaborate?</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm always excited about new opportunities and challenges
                  </p>
                  <div className="flex justify-center">
                    <Badge variant="secondary" className="font-medium">
                      🚀 Available for Internships
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;