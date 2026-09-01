import React from "react";
import Link from "next/link";

export default function TailwindFlexStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is Flexbox? A Simple Story of Arranging UI Elements
      </h1>

      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          Flexbox is a CSS layout system designed to arrange elements along
          a flexible row or column while controlling alignment, spacing,
          and distribution.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Team Lineup
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a football team preparing for a match. The players cannot
        simply stand randomly across the field.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The coach decides whether players should stand in a row, how much
        space should exist between them, and where everyone should be
        positioned.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        Flexbox plays the role of that coach. It controls how elements are
        arranged inside a container.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Creating a Flex Layout
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`<div className="flex items-center justify-between">
  <h2>My Projects</h2>

  <button>
    View All
  </button>
</div>`}
        </pre>
      </div>

      <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl p-5 my-8">
        <div>
          <p className="text-xs text-slate-500 m-0">PROJECT</p>
          <h3 className="text-lg font-bold text-slate-100 m-0">
            Portfolio
          </h3>
        </div>

        <Link
          href="/projects"
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-500 transition"
        >
          View
        </Link>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Three Important Ideas
      </h2>

      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-indigo-400">flex</code>
          <p className="text-sm text-slate-400 mt-2">
            Turns the container into a flex layout.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-indigo-400">items-center</code>
          <p className="text-sm text-slate-400 mt-2">
            Controls alignment across the cross axis.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-indigo-400">justify-between</code>
          <p className="text-sm text-slate-400 mt-2">
            Pushes children apart along the main axis.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Flexbox becomes much easier when you stop thinking about individual
        CSS properties and start thinking about the relationship between a
        parent container and its children.
      </p>
    </article>
  );
}