//components/hero/HeroButtons.jsx

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 w-full"
    >
      {/* Internal Route Link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-lg hover:shadow-indigo-500/25 transition-all duration-200 hover:scale-105"
      >
        View Projects
        <ArrowRight size={18} />
      </Link>

      {/* Static Asset Download Link */}
      <a
        href="/MD_HASAN_Resume.pdf"
        download="MD_HASAN_Resume.pdf"
        className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-medium"
      >
        Download CV
        <Download size={18} />
      </a>
    </motion.div>
  );
}