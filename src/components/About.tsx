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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-secondary"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="text-primary font-semibold">WHO I AM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Enthusiastic and self-motivated Python & Web Developer currently pursuing B.Tech in AI & ML at RGPV, Bhopal. 
            I build practical projects using Python, Django, REST APIs, and modern frontend tools, with a passion for 
            solving real-world problems through clean, efficient code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow group hover:scale-105"
            >
              <CardContent className="pt-6 text-center">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl animate-glow-pulse"></div>
                  <div className="relative w-full h-full bg-background rounded-2xl flex items-center justify-center group-hover:bg-gradient-primary transition-all">
                    <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
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
