import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, Download, Send, MessageCircle, Sparkles, Zap } from "lucide-react";

const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Kushagra_Resume.pdf"; // Place the PDF in your public/ folder
    link.download = "Kushagra_Resume.pdf";
    link.click();
  };



const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent! 🚀",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "kushagrasri2004@gmail.com",
      href: "mailto:kushagrasri2004@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn", 
      value: "Connect with me",
      href: "http://linkedin.com/in/kushagrasri25"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "View my code",
      href: "https://github.com/Kushagra25-hub"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className={`space-y-6 transition-all duration-700 transform ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}>
            <Card className="p-8 shadow-md bg-card border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h3>
              
              <div className="space-y-4 mb-8">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.title}
                      href={method.href}
                      target={method.href.startsWith('http') ? "_blank" : undefined}
                      rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-muted-hover transition-smooth group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{method.title}</h4>
                        <p className="text-sm text-muted-foreground">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-border">
                <Button
      variant="gradient"
      size="lg"
      className="w-full"
      onClick={handleDownload}
    >
      <Download className="h-5 w-5 mr-2" />
      Download Resume
    </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 transform ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}>
            <Card className="p-8 shadow-md bg-card border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary-foreground border-t-transparent mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;