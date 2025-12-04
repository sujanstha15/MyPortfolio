import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl text-center z-10">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-12 opacity-0 animate-fade-in">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE - Intro Text */}
          <div className="space-y-6 text-left md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold opacity-0 animate-fade-in-delay-1">
              Aspiring Backend Engineer & AI Enthusiast
            </h3>

            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-2">
              Hi, I'm <span className="font-semibold">Sujan Shrestha</span>, a senior Computer Science student at the University of Louisiana Monroe.  
              I focus on building real-world, scalable applications with <span className="font-semibold">Spring Boot, React, and MySQL</span>.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
              Currently, I am working on full-stack projects like a memory-sharing app and a calorie tracker, implementing industry-level concepts such as authentication, REST APIs, Docker, and Kubernetes.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-4">
              I love building solutions that are reliable, user-friendly, and elegant. I also actively practice DSA and prepare for backend engineering interviews to strengthen my problem-solving skills.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center opacity-0 animate-fade-in-delay-5">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - Skills / Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover opacity-0 animate-fade-in-delay-2">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg md:text-xl">Full-Stack Development</h4>
                  <p className="text-muted-foreground text-base md:text-lg">
                    Building responsive and scalable applications using Spring Boot, React (Vite), and MySQL.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover opacity-0 animate-fade-in-delay-3">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg md:text-xl">Learning & Problem Solving</h4>
                  <p className="text-muted-foreground text-base md:text-lg">
                    Practicing DSA, building intuition from basics, and preparing for backend engineering interviews.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover opacity-0 animate-fade-in-delay-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg md:text-xl">Project Experience</h4>
                  <p className="text-muted-foreground text-base md:text-lg">
                    From personal portfolio to real-world apps—focusing on clean architecture, API design, authentication, Dockerization, and deployment workflows.
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
