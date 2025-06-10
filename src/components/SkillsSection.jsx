import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  //FrontEnd Skills
  {
    name: "HTML5",
    level: 95,
    category: "frontend",
  },
  {
    name: "CSS3",
    level: 90,
    category: "frontend",
  },
  {
    name: "JavaScript (ES6+)",
    level: 70,
    category: "frontend",
  },

  {
    name: "React",
    level: 70,
    category: "frontend",
  },

  {
    name: "Redux",
    level: 60,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    level: 80,
    category: "frontend",
  },
  //Backend Skills
  {
    name: "Firebase",
    level: 80,
    category: "backend",
  },
  //Tools
  {
    name: "Git",
    level: 80,
    category: "tools",
  },
  {
    name: "GitHub",
    level: 85,
    category: "tools",
  },
  {
    name: "VS Code",
    level: 85,
    category: "tools",
  },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl md:text-4xl font-bold text-center">
          My <span className="text-primary">Skills </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transitions-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] "
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-muted-foreground text-sm">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
