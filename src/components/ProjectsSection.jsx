import { ArrowRight, ExternalLink, Github } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Flashcard system for learning ",
    image: "/Projects/cardnest.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    demoURL: "https://cardnest-beta.vercel.app/",
    githubURL: "https://github.com/Hammad-Y002/CardNest",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Beautiful Portfolio Website",
    image: "/Projects/portfolio.png",
    tags: ["React", "Tailwind CSS"],
    demoURL: "https://portfolio-one-ivory-22.vercel.app/",
    githubURL: "https://github.com/Hammad-Y002/portfolio",
  },
  // {
  //   id: 3,
  //   title: "Project 3",
  //   description: "A simple JS Calculator ",
  //   image: "",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   demoURL: "#",
  //   githubURL: "#",
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <a href={project.demoURL} target="_blank" rel="noopener noreferrer">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm group-active:scale-110 group-active:blur-sm"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-medium">View Project</span>
                  </div>
                </div>
              </a>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
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
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Hammad-Y002"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
