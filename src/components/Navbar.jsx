import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="flex items-center space-x-3 transition duration-300 opacity-90 hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
          >
            <img
              src="./Chat.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-mono text-xl font-bold text-white">
              Vishnu Vijayan
            </span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#project"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="./vishnu_vijayan___fullstack"
              download="VishnuVijayan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 text-blue-500 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
