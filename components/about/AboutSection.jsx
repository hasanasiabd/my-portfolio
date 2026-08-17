"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Rocket, Code2 } from "lucide-react";
import { personalData } from "@/data/portfolioData";

export default function AboutSection() {
  const { about } = personalData;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-16 h-1 bg-indigo-500 mx-auto mt-2 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Card Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 shadow-sm text-center">
            <Award className="w-10 h-10 text-indigo-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold">{about.experienceYears} Years</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Experience</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 shadow-sm text-center">
            <Rocket className="w-10 h-10 text-purple-500 mx-auto mb-2" />
            <h3 className="text-2xl font-bold">Scalable</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Web Apps</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 shadow-sm text-center col-span-2">
            <Code2 className="w-10 h-10 text-pink-500 mx-auto mb-2" />
            <h3 className="text-xl font-bold">Clean & High Performance UI</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Modern Tech Stack</p>
          </div>
        </motion.div>

        {/* Text Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {about.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {about.description}
          </p>

          <div className="space-y-3 pt-2">
            {about.highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}