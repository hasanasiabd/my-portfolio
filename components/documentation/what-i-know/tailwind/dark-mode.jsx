import React from "react";

export default function TailwindDarkModeStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        How Does Dark Mode Work in Tailwind CSS?
      </h1>

      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          Tailwind provides dark-mode utilities that allow components to
          change their appearance when the application is using a dark theme.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Day and Night
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a city that looks completely different during the day and
        at night.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        During the day, buildings may use bright colors and large amounts
        of natural light. At night, the same city changes its lighting so
        people can see comfortably without being overwhelmed by brightness.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        Dark mode follows the same idea. The content remains the same, but
        the visual environment changes.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Simple Dark Mode Example
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`<div className="
  bg-white
  text-slate-900
  dark:bg-slate-900
  dark:text-white
">
  <h2>My Dashboard</h2>

  <p className="text-slate-600 dark:text-slate-400">
    Welcome back!
  </p>
</div>`}
        </pre>
      </div>

      <div className="grid md:grid-cols-2 gap-5 my-8">
        <div className="bg-white text-slate-900 rounded-xl p-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Light Mode
          </span>

          <h3 className="text-xl font-bold mt-3">
            Welcome Back
          </h3>

          <p className="text-slate-600">
            The interface uses bright surfaces and darker text.
          </p>
        </div>

        <div className="bg-slate-950 text-white border border-slate-800 rounded-xl p-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Dark Mode
          </span>

          <h3 className="text-xl font-bold mt-3">
            Welcome Back
          </h3>

          <p className="text-slate-400">
            The same content adapts to a darker environment.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why Dark Mode Matters
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Dark mode is not simply about making everything black. Good dark
        themes carefully manage contrast, readability, borders, surfaces,
        and text hierarchy.
      </p>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 my-8">
        <p className="text-indigo-300 m-0">
          🌙 The goal is not just a darker interface. The goal is a
          comfortable interface.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Tailwind's dark-mode utilities make theme-aware styling predictable
        because the dark-state styles can live directly beside the normal
        styles of a component.
      </p>
    </article>
  );
}