import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Face Recognition",
      description: "Live face recognition system using Python, OpenCV, and TensorFlow achieving 95% accuracy in detection and recognition",
      tech: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
      github: "https://github.com/MORTALAKSHAT",
      demo: "#"
    },
    {
      title: "Voice Assistant",
      description: "Speech-enabled personal assistant using SpeechRecognition and pyttsx3 for Wikipedia search, time updates, and interactive commands",
      tech: ["Python", "SpeechRecognition", "pyttsx3", "Automation"],
      github: "https://github.com/MORTALAKSHAT",
      demo: "#"
    },
    {
      title: "Freelance World",
      description: "Django-based freelancing platform with API integration and user authentication system for connecting local freelancers",
      tech: ["Django", "Python", "REST APIs", "Authentication", "Web Development"],
      github: "https://github.com/MORTALAKSHAT",
      demo: "#"
    },
    {
      title: "AI-Driven Projects",
      description: "Exploring AI features, computer vision applications, and RESTful web services with modern frameworks",
      tech: ["Python", "AI/ML", "Computer Vision", "REST APIs"],
      github: "https://github.com/MORTALAKSHAT",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-secondary"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="text-primary font-semibold">MY WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my expertise in software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow group hover:scale-[1.02] overflow-hidden relative"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
              
              <CardHeader className="relative">
                <CardTitle className="flex items-center justify-between text-foreground">
                  <span className="group-hover:text-primary transition-colors">{project.title}</span>
                  <div className="flex gap-2">
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      asChild
                      className="hover:bg-primary/20 hover:text-primary transition-all hover:scale-110"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button 
                      size="icon" 
                      variant="ghost" 
                      asChild
                      className="hover:bg-primary/20 hover:text-primary transition-all hover:scale-110"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-all hover:scale-105 cursor-default backdrop-blur-sm border border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
