"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalData } from "@/data/portfolioData";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo & Name -> Fixed to Main Root Route "/" */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.svg"
              alt="Hasan Logo"
              width={36}
              height={36}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {personalData.name}
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {personalData.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 pt-2 pb-4 space-y-3"
        >
          {personalData.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block font-medium py-1 ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </motion.div>
      )}
    </motion.header>
  );
}