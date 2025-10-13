import { cn } from "../lib/utils";

const projects = [
  {
    id: 1,
    title: "Landing Page",
    desceiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, saepe.",
    image: "png",
    tags: ["React", "tailwindcss"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "processing Page",
    desceiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, saepe.",
    image: "png",
    tags: ["React", "tailwindcss"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "BookIT",
    desceiption:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, saepe.",
    image: "png",
    tags: ["React", "tailwindcss"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "BookIT",
    desceiption:
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
