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
];

export const ProjectSection = () => {
  return (
    <>
      <section id="projects" className="py-24 px-24 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            Featured <span className="text-primary"> Projects</span>
          </h2>
        </div>
      </section>
    </>
  );
};
