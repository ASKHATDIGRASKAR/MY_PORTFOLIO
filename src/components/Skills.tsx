import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Django", "Flask", "FastAPI", "Express"]
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "Docker", "PostgreSQL", "MongoDB", "Redis", "AWS"]
    },
    {
      category: "Skills",
      skills: ["REST APIs", "Microservices", "CI/CD", "Testing", "Agile"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
