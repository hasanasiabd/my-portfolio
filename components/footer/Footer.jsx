//components/footer/Footer.jsx

import { personalData } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md text-center text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        <p className="text-xs text-gray-500 dark:text-gray-500">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}