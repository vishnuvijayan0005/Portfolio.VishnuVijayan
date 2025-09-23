import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left z-10 px-4 max-w-6xl mx-auto py-20 gap-y-12 md:gap-x-16 lg:gap-x-24">
          <div className="md:w-4/5">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Hi, I'm Vishnu Vijayan
            </h1>
            <h2 className="text-gray-300 text-lg md:text-2xl mt-3 font-medium">
              Full-Stack Developer | MERN Stack | Python Enthusiast
            </h2>
            <blockquote className="text-gray-400 text-lg my-6 max-w-lg mx-auto md:mx-0">
              "I design and build modern, responsive web applications with a
              focus on clean code and performance. My goal is to deliver
              scalable and efficient solutions that create real value for users
              and businesses."
            </blockquote>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#project"
                className="bg-blue-500 text-white py-3 px-8 rounded-full font-medium transition-all duration-300 relative overflow-hidden hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-500 text-blue-500 py-3 px-8 rounded-full font-medium transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Photo Container - NOW NARROWER */}
          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="relative w-56 h-56 md:w-64 md:h-64 group">
              <img
                src="./Img1.png"
                alt="Vishnu Vijayan"
                className="object-cover w-full h-full rounded-full shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/40"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
