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
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button size="icon" variant="ghost" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
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
