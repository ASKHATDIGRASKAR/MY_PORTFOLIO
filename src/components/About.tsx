import { Code2, Laptop, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing efficient, scalable, and maintainable solutions"
    },
    {
      icon: Laptop,
      title: "AI & Automation",
      description: "Computer vision, machine learning, and intelligent automation"
    },
    {
      icon: Zap,
      title: "Full Stack",
      description: "Django backends with modern frontend technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enthusiastic and self-motivated Python & Web Developer currently pursuing B.Tech in AI & ML at RGPV, Bhopal. 
            I build practical projects using Python, Django, REST APIs, and modern frontend tools, with a passion for 
            solving real-world problems through clean, efficient code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
