"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-30 bg-black text-white px-6 py-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl text-center text-white/80 text-lg space-y-6"
      >
        <p>
          I have graduated with a{" "}
          <strong>Bachelor’s degree in Information Technology</strong>, where I
          built a strong foundation in programming, web development, and
          computer systems. I’ve maintained a CGPA of <strong>8.30</strong>.
        </p>
        <p>
          During my studies, I have started a front-end development internship
          at <strong>Vitto Creation</strong>, where I worked on building
          responsive and modern user interfaces using{" "}
          <strong>Html, CSS, and JavaScript</strong>. It provided me valuable
          real-world experience in frontend development.
        </p>
        <p>
          I’m passionate about crafting user-friendly web applications and
          continuously improving my design and development skills.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
