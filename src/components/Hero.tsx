import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-md"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block p-1 rounded-2xl bg-gradient-primary mb-4 animate-glow-pulse">
            <div className="bg-background px-6 py-2 rounded-xl">
              <p className="text-sm text-primary font-semibold">🚀 AVAILABLE FOR OPPORTUNITIES</p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-float">
            Akshat Digraskar
          </h1>
          
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Python & Web Developer
            </h2>
            <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-xl -z-10"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building practical solutions with <span className="text-primary font-semibold">Python</span>, <span className="text-primary font-semibold">Django</span>, and modern web technologies. 
            Passionate about <span className="text-primary font-semibold">AI</span>, computer vision, and automation.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="shadow-glow hover:scale-105 transition-transform"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary/50 hover:border-primary hover:shadow-glow-sm animate-border-flow backdrop-blur-sm"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-3 justify-center pt-8 text-sm">
            {['Python', 'Django', 'React', 'AI/ML', 'REST APIs'].map((tech, i) => (
              <div key={i} className="px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 hover:border-primary/60 transition-colors cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={() => scrollToSection('about')}
        >
          <div className="p-2 rounded-full border-2 border-primary/50 bg-card/30 backdrop-blur-sm">
            <ArrowDown className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
