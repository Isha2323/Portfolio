"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio",
    description:
      "My personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
    link: "https://isha2323.github.io/Anime/",
  },
  {
    title: "Todo App",
    description:
      "A minimal productivity app built with React and localStorage.",
    link: "https://github.com/yourusername/todo-app",
  },
  {
    title: "Anime",
    description: "This website is made using React, Tailwind CSS",
    link: "https://isha2323.github.io/Anime/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-30 bg-black text-white px-6 py-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 shadow-md hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-white/80 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:text-gray-300 transition"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
