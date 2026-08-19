//components/hero/HeroText.jsx

"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { personalData } from "@/data/portfolioData";

export default function HeroText() {
  const titles = [
    personalData.name,
    "Full-Stack Web Developer",
    "PERN Stack Specialist",
    "Next.js & PostgreSQL Expert",
    "React.js Enthusiast",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = titles[textIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000); // লেখার পর ২ সেকেন্ড থামবে
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="space-y-4 text-center lg:text-left">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase text-sm"
      >
        Welcome to my portfolio
      </motion.p>

      {/* Dynamic Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight min-h-[72px]"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {displayText}
        </span>
        <span className="animate-pulse text-indigo-500">|</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-gray-300"
      >
        {personalData.designation}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed mx-auto lg:mx-0"
      >
        {personalData.bio}
      </motion.p>
    </div>
  );
}