import { Briefcase, Code, User } from "lucide-react";
import { cn } from "../lib/utils";

export const AboutSection = () => {
  return (
    <section id="about" className="py-4 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              {" "}
              Hey! I'm Aatish Kore, a Full Stack Web Developer who transforms
              creativity into sleek, functional web experiences. I love weaving
              code into digital stories, fueled by a mix of curiosity and a good
              playlist. When I'm not crafting websites, you’ll find me lost in
              music or dreaming up my next project!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/assets/AatishK_CV.pdf"
                className={cn(
                  "px-6 py-2 rounded-full border border-primary",
                  "text-primary hover:bg-primary/10 transition-colors duration-300"
                )}
                download="AatishK_CV.pdf"
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left"> 
                  <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
