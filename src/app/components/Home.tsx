"use client";
import profile from "../../../public/Mikey.jpg";

import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 pt-16 gap-8"
    >
      {/* Animate Image */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-40 h-40 md:w-60 md:h-60 relative rounded-full overflow-hidden border-4 border-white shadow-lg"
      >
        <Image
          src={profile}
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Animate Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <p>Hi, I&apos;m Isha Sitap</p>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          A frontend developer who builds clean, responsive websites and
          experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default Home;
