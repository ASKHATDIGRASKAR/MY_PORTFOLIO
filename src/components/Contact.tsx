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
    <section id="contact" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl mb-4">Let's Connect</CardTitle>
              <CardDescription className="text-lg">
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
                  >
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <link.icon className="w-5 h-5" />
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
