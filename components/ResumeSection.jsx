"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, Download } from "lucide-react";

export default function ResumeSection() {
  const education = [
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "General Education Board",
      year: "2026",
      desc: "Successfully completed with strong fundamentals in mathematics and computer science."
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Education Board",
      year: "In Progress",
      desc: "Focusing on science, technology, and advanced problem-solving skills."
    }
  ];

  const projects = [
    {
      title: "Full-Stack Portfolio Website",
      role: "Next.js & Tailwind CSS",
      year: "2026",
      desc: "Built an interactive portfolio featuring custom SVG graphics, dynamic theme toggling, and optimized page load performance."
    },
    {
      title: "E-Commerce Web Application",
      role: "MERN Stack Specialist",
      year: "2026",
      desc: "Designed dynamic data integration, modular RESTful APIs, dynamic shopping cart management, and JWT-based authentication."
    }
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Resume & Qualifications
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A summary of my educational background, featured engineering projects, and core technical skill set.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Timeline */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-xl">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
          </div>

          <div className="border-l-2 border-indigo-500/30 pl-6 space-y-8 ml-4">
            {education.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-gray-950 group-hover:scale-125 transition-transform" />
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                  {item.year}
                </span>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-2">{item.degree}</h4>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">{item.institution}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience & Projects Timeline */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-xl">
              <Briefcase size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Experience</h3>
          </div>

          <div className="border-l-2 border-purple-500/30 pl-6 space-y-8 ml-4">
            {projects.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-gray-950 group-hover:scale-125 transition-transform" />
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                  {item.year}
                </span>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-2">{item.title}</h4>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">{item.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Download Action Bar */}
      <div className="mt-16 text-center">
        <a
          href="/resume.pdf"
          download="MD_HASAN_Resume.pdf"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
        >
          <Download size={20} />
          Download Full PDF Resume
        </a>
      </div>
    </section>
  );
}