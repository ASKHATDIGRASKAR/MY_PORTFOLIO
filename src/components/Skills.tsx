import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "C", "C++", "HTML", "CSS"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Django", "React", "OpenCV", "TensorFlow", "NumPy", "Pandas", "MediaPipe"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Figma", "Canva", "REST APIs"]
    },
    {
      category: "Specializations",
      skills: ["Computer Vision", "AI/ML", "Automation", "Web Development", "Backend Development"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="text-primary font-semibold">TECH STACK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow-sm group">
              <h3 className="text-xl font-semibold text-primary group-hover:scale-105 transition-transform">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-all cursor-default hover:scale-110 backdrop-blur-sm border border-primary/20"
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
