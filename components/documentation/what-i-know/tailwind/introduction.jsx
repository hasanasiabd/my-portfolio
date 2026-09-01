import React from "react";

export default function TailwindIntroductionStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is Tailwind CSS? Building Interfaces with Utility Classes
      </h1>

      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          Tailwind CSS is a utility-first CSS framework that lets you build
          modern interfaces by combining small, reusable utility classes
          directly in your HTML or JSX.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Box of Building Tools
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you are building a house. Instead of creating a completely
        different tool for every room, you have a toolbox containing small,
        focused tools.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        One tool handles spacing. Another handles color. Another controls
        the size of something. Another changes how objects are arranged.
        You simply pick the tools you need and combine them.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        That is the basic idea behind Tailwind CSS. Instead of writing a
        custom CSS class for every component, you compose small utility
        classes together.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Building a Simple Card
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`<div className="p-6 bg-slate-900 rounded-xl shadow-lg">
  <h2 className="text-2xl font-bold text-white">
    My Project
  </h2>

  <p className="mt-2 text-slate-400">
    A modern web application.
  </p>

  <button className="mt-4 px-4 py-2 bg-indigo-600 rounded-lg">
    View Project
  </button>
</div>`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why Tailwind Feels Different
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Traditional CSS often means creating a class first and then jumping
        between files to style it. Tailwind keeps much of that styling
        decision close to the element itself.
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-2">🧩</div>
          <h3 className="text-lg font-bold text-slate-100">Compose</h3>
          <p className="text-sm text-slate-400">
            Combine small utilities to create complete designs.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-2">⚡</div>
          <h3 className="text-lg font-bold text-slate-100">Build Fast</h3>
          <p className="text-sm text-slate-400">
            Spend less time switching between markup and CSS files.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-2">🎨</div>
          <h3 className="text-lg font-bold text-slate-100">Customize</h3>
          <p className="text-sm text-slate-400">
            Adapt the design system to match your project.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Tailwind CSS is less about memorizing hundreds of classes and more
        about learning how small utilities can be combined to create a
        complete interface.
      </p>
    </article>
  );
}