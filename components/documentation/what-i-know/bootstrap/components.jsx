// components/documentation/what-i-know/bootstrap/components.jsx

import React from "react";
import Link from "next/link";

export default function BootstrapComponentsStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Are Bootstrap Components? Working with Cards, Buttons, and Navbars
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 rounded-r-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          Bootstrap components are pre-designed UI elements such as
          buttons, cards, navigation bars, modals, alerts, and forms
          that can be used to build interfaces faster.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Box of LEGO
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you want to build a house using LEGO.
        You don't manufacture every brick yourself.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Instead, you receive different pieces:
        windows, doors, wheels, walls, roofs, and special blocks.
        Each piece has a purpose, but you can combine them to build
        something much bigger.
      </p>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 my-8">
        <p className="text-indigo-200 leading-relaxed m-0">
          Bootstrap components work in a similar way.
          Each component solves a common interface problem,
          and you combine them to create a complete application.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Bootstrap Buttons
      </h2>

      <div className="flex flex-wrap gap-3 bg-slate-950 border border-slate-800 rounded-xl p-6 my-6">

        <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium">
          Primary
        </button>

        <button className="px-4 py-2 rounded-lg bg-slate-700 text-white text-sm font-medium">
          Secondary
        </button>

        <button className="px-4 py-2 rounded-lg border border-emerald-500/40 text-emerald-400 text-sm font-medium">
          Success
        </button>

      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-8">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`<button class="btn btn-primary">
  Save Changes
</button>

<button class="btn btn-secondary">
  Cancel
</button>`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Bootstrap Cards
      </h2>

      <p className="text-slate-300 leading-relaxed mb-5">
        Cards are useful when you want to group related information
        into a single visual block.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md my-8">
        <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider">
          Project
        </span>

        <h3 className="text-xl font-bold text-slate-100 mt-2 mb-2">
          Portfolio Website
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          A modern developer portfolio built with Next.js,
          React, and a custom documentation system.
        </p>

        <Link
            href="/projects"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium"
        >
            View Project
        </Link>
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-8">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`<div class="card">
  <div class="card-body">

    <h5 class="card-title">
      Portfolio Website
    </h5>

    <p class="card-text">
      A modern developer portfolio.
    </p>

    <a href="#" class="btn btn-primary">
      View Project
    </a>

  </div>
</div>`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Navigation Bars
      </h2>

      <p className="text-slate-300 leading-relaxed mb-5">
        Navigation bars provide users with a consistent way to move
        between important sections of an application.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 my-8 flex items-center justify-between">
        <span className="font-bold text-slate-100">
          MyApp
        </span>

        <div className="hidden sm:flex gap-5 text-sm text-slate-400">
          <span>Home</span>
          <span>Projects</span>
          <span>About</span>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Bigger Picture
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Buttons, cards, navigation bars, alerts, forms, and modals
        are not complete applications by themselves.
      </p>

      <p className="text-slate-300 leading-relaxed">
        They are building blocks.
        The developer's job is to combine these blocks intelligently
        to create an interface that solves a real problem.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Bootstrap components reduce repetitive UI work.
        Instead of reinventing common interface patterns,
        I can start with reliable building blocks and customize
        them around the needs of the application.
      </p>

    </article>
  );
}