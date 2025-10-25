import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/MORTALAKSHAT" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/akshat-digraskar" },
    { icon: Mail, label: "Email", href: "mailto:akshatdigraskar58@gmail.com" },
    { icon: Twitter, label: "Phone", href: "tel:+917489259569" }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-secondary"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
              <span className="text-primary font-semibold">GET IN TOUCH</span>
            </div>
          </div>
          
          <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm shadow-glow hover:shadow-glow-sm transition-all">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl mb-4 bg-gradient-primary bg-clip-text text-transparent">Let's Connect</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Currently exploring opportunities in Python, AI, and full-stack development. Let's build something amazing together!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-2 border-primary/50 hover:border-primary hover:shadow-glow-sm hover:scale-105 transition-all backdrop-blur-sm group"
                  >
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <link.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                      {link.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
