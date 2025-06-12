import { Briefcase, Bug, Code, User } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 item-center bg-primary p-8 sm:p-12 md:p-16 lg:p-20 rounded-xl">
          <div className="space-y-6 text-left">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              With over 1+ years of experience in web development, I specialize
              in creating responsive and user-friendly applications.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.{" "}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className={cn(
                  "cosmic-button w-full sm:w-auto text-center",
                  "border border-white hover:bg-white/10"
                )}
              >
                Get in Touch
              </a>
              <a
                href="/myCV.docx"
                target="_blank"
                download={"myCV.docx"}
                rel="noopener noreferrer"
                className={cn(
                  "cosmic-button w-full sm:w-auto text-center",
                  "border border-white bg-secondary hover:bg-secondary/10"
                )}
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex flex-col md:flex-row md:items-start md:gap-4 items-start gap-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites with modern frameworks and
                    technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex flex-col md:flex-row md:items-start md:gap-4 items-start gap-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">User Experience</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive interfaces and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex flex-col md:flex-row md:items-start md:gap-4 items-start gap-3">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bug className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Resolving Bugs</h4>
                  <p className="text-muted-foreground">
                    With my deep understanding, I can easily remove bugs and
                    make the website perfect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
