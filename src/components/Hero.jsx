import { ArrowDown } from "lucide-react";
import React from "react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 mt-28"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Heyy, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Aatish{" "}
            </span>
            {/* <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Kore
            </span> */}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Frontend Developer skilled in ReactJS, NextJS, TailwindCSS, and
            JavaScript, passionate about intuitive web design. I build fast,
            scalable, and visually appealing interfaces that make technology
            feel effortless.
          </p>
          <div className="opacity-0 animate-fade-in-delay-4 pt-4 ">
            <a href="#projects" className="cosmic-button">
              View my work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground md-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
