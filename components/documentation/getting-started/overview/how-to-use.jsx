// components/documentation/getting-started/overview/how-to-use.jsx

import React from "react";

export default function HowToUseDocs() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        🛠️ How to Use This Documentation
      </h1>

      <p className="text-slate-300 leading-relaxed mb-6">
        This platform is designed to make web development intuitive and enjoyable. Here is how you can get the best experience while reading through the topics.
      </p>

      <div className="space-y-4 my-6">
        <div className="p-4 border border-slate-800 rounded-xl bg-slate-900/40">
          <h3 className="text-base font-bold text-indigo-300 mb-1">1. Global Category Switcher</h3>
          <p className="text-xs text-slate-400 m-0">
            Use the top section of the left sidebar to quickly switch between <strong>Getting Started</strong>, <strong>What I Know</strong>, <strong>Problem Solving</strong>, and <strong>Project Case Studies</strong>.
          </p>
        </div>

        <div className="p-4 border border-slate-800 rounded-xl bg-slate-900/40">
          <h3 className="text-base font-bold text-indigo-300 mb-1">2. Collapsible Sub-topics</h3>
          <p className="text-xs text-slate-400 m-0">
            Click on any module title (like JavaScript Fundamentals or React Deep Dive) to toggle its dropdown and view individual articles.
          </p>
        </div>

        <div className="p-4 border border-slate-800 rounded-xl bg-slate-900/40">
          <h3 className="text-base font-bold text-indigo-300 mb-1">3. Mobile Drawer Navigation</h3>
          <p className="text-xs text-slate-400 m-0">
            On mobile screens, click the <strong>"Docs Menu"</strong> button at the top left to open the slide-out navigation bar.
          </p>
        </div>
      </div>
    </article>
  );
}