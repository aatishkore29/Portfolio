import { cn } from "../lib/utils";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Zoomster",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, saepe.",
    image: "png",
    tags: ["React", "tailwindcss"],
    link: "#",
    github: "https://github.com/aatishkore29/CarRental",
  },
  {
    id: 2,
    title: "processing Page",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, saepe.",
    image: "png",
    tags: ["React", "tailwindcss"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "BookIT",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, saepe.",
    image: "png",
    tags: ["React", "tailwindcss"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "BookIT",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, saepe.",
    image: "png",
    tags: ["React", "tailwindcss"],
    link: "#",
    github: "#",
  },
];

export const ProjectSection = () => {
  return (
    <>
      <section id="projects" className="py-24 px-24 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
            Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
            Here are some of my projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale:110"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span className="px-2 py-1 border text-xs font-medium rounded-full bg-primary/10 text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.link}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        target="_blank"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.github}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        target="_blank"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/aatishkore29"
              target="_blank"
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
            >
              Checkout my GitHub <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
