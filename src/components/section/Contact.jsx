import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => "Oops!Something went wrong. Please try again.");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Feel free to reach out to me through the form below or connect with
            me on social media.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com..."
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>

          {/* Social and Email Links Section */}
          <div className="mt-8 text-center text-gray-400">
            <p className="mb-4">You can also reach me directly at:</p>
            <div className="flex justify-center items-center space-x-6">
              <a
                href="mailto:vishnuvijayan90721@gmail.com"
                className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-400 transition-colors"
                title="Send an email"
              >
                <i className="fas fa-envelope text-xl"></i>
                <span className="hidden sm:inline">✉️Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vishnu-vijayan03"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-400 hover:text-blue-500 transition-colors"
                title="Connect on LinkedIn"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
                <span className="hidden sm:inline">💼LinkedIn</span>
              </a>
              <a
                href="https://github.com/vishnuvijayan0005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                title="Follow on GitHub"
              >
                <i className="fab fa-github text-xl"></i>
                <span className="hidden sm:inline">💻GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
