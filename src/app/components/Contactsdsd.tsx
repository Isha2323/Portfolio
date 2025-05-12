"use client";

import { motion } from "framer-motion";

const Contadfct = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Contact Me
      </motion.h2>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert(
            "This form doesn't actually send messages — connect it to Formspree, EmailJS, etc."
          );
        }}
      >
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            required
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
            placeholder="Your Name"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            required
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
            placeholder="you@example.com"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1">Message</label>
          <textarea
            required
            rows={5}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contadfct;
