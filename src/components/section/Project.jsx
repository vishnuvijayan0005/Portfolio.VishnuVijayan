import { RevealOnScroll } from "../RevealOnScroll";

export const Project = () => {
  const projects = [
    {
      title: "News Application",
      description:
        "Developed a full-stack News Web Application using the MERN stack, which includes role-based authentication for admin, reporter, and user roles. It features secure JWT login and CRUD operations for articles, with integrated external news APIs for real-time updates.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "API"],
      githubLink: "https://github.com/vishnuvijayan0005/newsapp",
    },
    {
      title: "College Query Chatbot",
      description:
        "Developed a chatbot named CAMPUSQ to assist students, teachers, and guests in accessing college-related information and academic details. The project included a focus on lifecycle management and comprehensive documentation for tracking progress and fostering team collaboration.",
      techStack: ["Dialogflow", "MySQL", "Python", "API"],
      githubLink: "#",
    },
    {
      title: "Daily Wage Labour Management Application",
      description:
        "Designed an Android-based app to connect daily wage workers, customers, and contractors. The app includes job posting and worker availability features, along with multilingual support, tool renting, and a feedback system to enhance transparency and accountability.",
      techStack: ["Flutter", "Firebase", "Dart"],
      githubLink: "#",
    },
  ];

  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all "
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {project.title === "News Application" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
