//components/hero/HeroImage.jsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative flex justify-center items-center w-full"
    >
      {/* Background Soft Glow Effect */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl -z-10" />

      {/* Styled Image Frame */}
    <div className="relative w-72 sm:w-80 lg:w-[420px] rounded-3xl p-2 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-gray-200 dark:border-gray-800 shadow-2xl backdrop-blur-sm">
    <Image
        src="/hasan.png"
        alt="MD. HASAN"
        width={450}
        height={450}
        priority
        className="w-full h-auto object-cover rounded-2xl drop-shadow-xl scale-105" // scale-105 যোগ করা হয়েছে
    />
    </div>
    </motion.div>
  );
}