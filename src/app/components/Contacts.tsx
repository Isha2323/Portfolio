"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-30 bg-black text-white px-6 py-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <p className="text-lg text-white/80">
          I’d love to connect! Reach out through any of the platforms below:
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <FaEnvelope className="text-xl" />
            isha@gmail.com
          </a>
          <a
            href="https://github.com/isha2323"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <FaGithub className="text-xl" />
            GitHub
          </a>
          {/*
          add this in import FaLinkedin 
          <a 
            href="https://linkedin.com/in/ishasitap"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
          <FaLinkedin className="text-xl" />
            LinkedIn
          </a>*/}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
