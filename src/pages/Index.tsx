import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-primary/20">
        <div className="container px-4 mx-auto text-center text-muted-foreground">
          <p>© 2024 Portfolio. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
