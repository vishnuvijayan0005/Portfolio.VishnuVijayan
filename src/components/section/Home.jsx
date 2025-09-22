export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ading-right">
          Hi I am Vishnu vijayan
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto ">
          some para
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#project"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Project
          </a>
          <a
            href="#contact"
            className="border border-blue-500/50 py-3 px-6 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/50"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
