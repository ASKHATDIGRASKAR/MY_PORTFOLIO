import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and payment processing",
      tech: ["Python", "Django", "React", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with real-time updates",
      tech: ["Python", "Flask", "D3.js", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management API",
      description: "RESTful API with authentication, authorization, and comprehensive documentation",
      tech: ["FastAPI", "PostgreSQL", "Docker", "Redis"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses and sentiment analysis",
      tech: ["Python", "WebSocket", "React", "OpenAI"],
      github: "#",
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
