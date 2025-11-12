// import { cn } from "../lib/utils";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Zoomster",
    description:
      "Zoomster is a sleek and modern car rental website template built using React.js and Tailwind CSS. With Tailwind’s utility-first styling and React’s component-driven architecture. It’s ideal for developers looking for a robust platform that’s simple to customize and extend.",
    image: "/projects/Zoomster.jpeg",
    tags: ["React", "Tailwindcss"],
    link: "#",
    github: "https://github.com/aatishkore29/CarRental",
  },
  {
    id: 2,
    title: "CricHead",
    description:
      "CricketHead is a real-time cricket score and match tracking web app built with React and RapidAPI. It displays live matches, upcoming fixtures, and detailed scoreboards with player-level statistics.Designed with modular components and a responsive UI, it ensures smooth performance and reliable data updates.",
    image: "/projects/CricHead.jpeg",
    tags: ["Rapid API", "ReactJS", "Data Normalization"],
    link: "https://cricket-head.vercel.app/",
    github: "https://github.com/aatishkore29/CricketHead",
  },
  {
    id: 3,
    title: "Snake Game - Arcade Game",
    description:
      "An interactive browser-based Snake Game that challenges players to grow the snake while avoiding collisions. Built from scratch using JavaScript, CSS Grid, and DOM manipulation. Includes a restart system, timer, and persistent high score storage.",
    image: "/projects/Snakegame.jpeg",
    tags: ["HTML", "CSS", "Vanilla JavaScript"],
    link: "https://snake-five-flame-73.vercel.app/",
    github: "https://github.com/aatishkore29/Snake",
  },
  {
    id: 4,
    title: "GTA Landing Page",
    description:
      "An interactive tribute to GTA VI — blending motion, depth, and style using React.js + GSAP. Includes an animated intro mask, character reveal, and parallax-scrolling effects. Designed for a high-impact, cinematic user experience inspired by Rockstar Games.",
    image: "/projects/GTA.jpeg",
    tags: ["GSAP Animations", "TailwindCSS", "ReactJS"],
    link: "https://gta-landingpage.vercel.app/",
    github: "https://github.com/aatishkore29/GTA-landingpage",
  },
];

export const Project = () => {
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
