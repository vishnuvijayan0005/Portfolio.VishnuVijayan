import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React.js",
    "TailwindCSS",
    "Bootstrap",
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
  ];
  const backendSkills = [
    "Node.js",
    "Python",
    "MongoDB",
    "Express.js",
    "REST API Development",
    "MySQL",
    "Firebase",
    "C",
    "SQL",
    "Dialogflow",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* About Card */}
          <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all">
            <p className="text-gray-300 leading-relaxed tracking-wide text-lg mb-8 text-justify">
              I’m{" "}
              <span className="font-semibold text-white">Vishnu Vijayan</span>,
              a Full Stack Developer passionate about building scalable and
              user-friendly applications. Skilled in{" "}
              <span className="text-cyan-300">
                React, Tailwind CSS, Node.js, Express.js, and MongoDB
              </span>
              , I enjoy creating clean, efficient, and responsive solutions. My
              work includes a MERN-based news platform with role-based
              authentication, a chatbot to assist students and faculty, and a
              mobile app connecting daily wage workers with customers. I thrive
              on problem-solving, continuous learning, and contributing to
              projects that bring real-world impact.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl p-6 bg-black/40 border border-white/10 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold mb-4 text-cyan-300">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-cyan-500/10 text-cyan-300 py-1.5 px-4 rounded-full text-sm font-medium hover:bg-cyan-500/20 hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 bg-black/40 border border-white/10 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold mb-4 text-blue-400">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1.5 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="grid place-items-center mt-10 ">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:shadow-xl hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-teal-300">
                Education
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">
                    B.Tech in Computer Science & Engineering
                  </strong>
                  <br />
                  MDIT Engineering College (2021 – 2025) | CGPA: 7.21
                </li>
                <li>
                  <strong className="text-white">
                    Higher Secondary (Science)
                  </strong>
                  <br />
                  SGM GHSS Kolathure (2019 – 2021) | 86%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
