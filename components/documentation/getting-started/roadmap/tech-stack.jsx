// components/documentation/getting-started/roadmap/tech-stack.jsx

import React from "react";

export default function TechStackStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        ⚡ Tech Stack & Ecosystem Overview
      </h1>

      <p className="text-slate-300 leading-relaxed mb-6">
        A quick breakdown of the core technologies, tools, and libraries documented across this platform.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 border border-slate-800 rounded-xl bg-slate-900/50">
          <h3 className="text-lg font-bold text-sky-400 mb-2">Front-End Stack</h3>
          <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
            <li><strong>React.js & Next.js 16:</strong> Modern UI components, Server Components, App Router.</li>
            <li><strong>Tailwind CSS:</strong> Utility-first styling for dark mode and responsive layouts.</li>
            <li><strong>JavaScript (ES6+):</strong> Closures, Promises, Dynamic Async patterns.</li>
          </ul>
        </div>

        <div className="p-5 border border-slate-800 rounded-xl bg-slate-900/50">
          <h3 className="text-lg font-bold text-emerald-400 mb-2">Back-End & Database</h3>
          <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
            <li><strong>Node.js & Express:</strong> REST API architecture and middleware.</li>
            <li><strong>MongoDB & Mongoose:</strong> NoSQL database schemas and aggregation pipelines.</li>
            <li><strong>Prisma ORM:</strong> Type-safe database queries.</li>
          </ul>
        </div>
      </div>
    </article>
  );
}