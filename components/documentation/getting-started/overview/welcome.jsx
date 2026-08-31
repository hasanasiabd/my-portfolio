// components/documentation/getting-started/overview/welcome.jsx

import React from "react";

export default function WelcomeStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        🚀 Welcome to My Knowledge Hub
      </h1>
      
      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg">
        <h3 className="text-lg font-bold text-indigo-300 m-0">Quick Overview</h3>
        <p className="text-slate-300 m-0 text-sm">
          This documentation platform is a curated space where complex web development concepts—from basic HTML/CSS to advanced React and Full-stack patterns—are explained using simple real-world stories and practical code.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Why This Hub Exists</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        Traditional documentations are often filled with dry terminology. Here, every concept is broken down into two parts: a real-world analogy to build intuition, followed by clean, production-ready code examples.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="p-4 border border-slate-800 rounded-xl bg-slate-900/50">
          <h4 className="text-indigo-400 font-bold mb-1">📖 Story-Driven Learning</h4>
          <p className="text-xs text-slate-400 m-0">
            Understand complex concepts like Closures, Async/Await, and React Hooks through interactive analogies.
          </p>
        </div>
        <div className="p-4 border border-slate-800 rounded-xl bg-slate-900/50">
          <h4 className="text-emerald-400 font-bold mb-1">💻 Real-World Code</h4>
          <p className="text-xs text-slate-400 m-0">
            Copy and paste practical code snippets directly into your Next.js and React projects.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Where to Go Next?</h2>
      <p className="text-slate-300 leading-relaxed">
        Select any topic from the sidebar on the left or head over to <strong>What I Know</strong> to explore JavaScript and React deep dives!
      </p>
    </article>
  );
}