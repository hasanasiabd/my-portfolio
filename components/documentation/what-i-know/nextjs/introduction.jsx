// components/documentation/what-i-know/nextjs/introduction.jsx

import React from "react";

export default function NextIntroductionStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is Next.js? A Simple Story of Building Modern Web Applications
      </h1>

      {/* Quick Overview */}
      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-2xl p-5 mb-8 shadow-xl">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          Next.js is a React framework for building modern web applications.
          It provides tools and conventions for routing, rendering, data
          fetching, server-side logic, optimization, and more.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Building a Modern City 🏗️
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you want to build a huge modern city.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You need houses, roads, offices, hospitals, electricity, water,
        security, signs, and a proper system for moving people from one
        place to another.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You could build every single system yourself. But that would take
        an enormous amount of time.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="text-3xl mb-3">⚛️</div>
          <h3 className="text-slate-100 font-bold text-lg m-0 mb-2">
            React
          </h3>
          <p className="text-slate-400 text-sm m-0">
            Gives you the building blocks for creating user interfaces.
          </p>
        </div>

        <div className="bg-slate-900 border border-indigo-500/20 rounded-2xl p-5">
          <div className="text-3xl mb-3">🏙️</div>
          <h3 className="text-slate-100 font-bold text-lg m-0 mb-2">
            Next.js
          </h3>
          <p className="text-slate-400 text-sm m-0">
            Provides a structured framework for building the larger
            application around those UI components.
          </p>
        </div>

      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What Does Next.js Give Us?
      </h2>

      <div className="space-y-3 my-6">

        {[
          ["01", "File-based routing"],
          ["02", "Layouts and nested UI"],
          ["03", "Server and Client Components"],
          ["04", "Data fetching"],
          ["05", "Server-side functionality"],
          ["06", "Performance and optimization tools"]
        ].map(([number, text]) => (
          <div
            key={number}
            className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <span className="text-indigo-400 font-bold font-mono">
              {number}
            </span>

            <span className="text-slate-300 text-sm">
              {text}
            </span>
          </div>
        ))}

      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Simple Next.js Project
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`my-app/
├── app/
│   ├── page.jsx
│   ├── about/
│   │   └── page.jsx
│   └── layout.jsx
│
├── components/
│   └── Navbar.jsx
│
└── package.json`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Instead of manually configuring every part of the application,
        Next.js gives us conventions that help organize the project.
      </p>

      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-indigo-300 mt-0">
          What I Learned
        </h2>

        <p className="text-slate-300 mb-0">
          React gives me the tools to build UI. Next.js gives me a framework
          and conventions for building the complete application around that
          UI. It is like moving from building individual houses to planning
          an entire city.
        </p>
      </div>

    </article>
  );
}