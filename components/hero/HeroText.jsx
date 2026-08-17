//components/hero/HeroText.jsx

"use client";

import { motion } from "framer-motion";
import { personalData } from "@/data/portfolioData";

export default function HeroText() {
  return (
    <div className="space-y-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-sm"
      >
        Welcome to my portfolio
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-6xl font-extrabold tracking-tight"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {personalData.name}
        </span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-300"
      >
        {personalData.designation}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed"
      >
        {personalData.bio}
      </motion.p>
    </div>
  );
}