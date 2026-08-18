//app/not-found.js


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      suppressHydrationWarning
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-black text-indigo-600 dark:text-indigo-500">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold mt-4 text-gray-800 dark:text-gray-100">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md mx-auto">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/20"
        >
          <Home size={18} /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}