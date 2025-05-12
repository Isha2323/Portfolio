"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaJava,
  FaPhp,
  FaCode, // used as placeholder for C#
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Linux", icon: <FaLinux className="text-yellow-200" /> },
];

const exposureSkills = [
  { name: "C#", icon: <FaCode className="text-purple-400" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-300" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-30 bg-black text-white px-6 py-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Skills
      </motion.h2>

      {/* Core Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl"
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md transition"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-white font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Exposure To */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 text-center"
      >
        <h3 className="text-2xl font-semibold mb-4">Exposure To</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {exposureSkills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md"
            >
              <div className="text-3xl mb-1">{skill.icon}</div>
              <p className="text-white font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
