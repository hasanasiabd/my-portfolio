// components/documentation/what-i-know/bootstrap/introduction.jsx

import React from "react";

export default function BootstrapIntroductionStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is Bootstrap? Building Interfaces with Ready-to-Use Components
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 rounded-r-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          Bootstrap is a popular front-end CSS framework that provides
          ready-to-use classes and components for building responsive,
          consistent, and mobile-friendly websites faster.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Opening a Restaurant
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you want to open a restaurant.
        You need tables, chairs, menus, buttons, navigation signs,
        alerts, cards, and many other things.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You could build every single piece from raw materials.
        You could design every chair, manufacture every table,
        paint every sign, and create every menu from scratch.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        But what if someone gave you a warehouse containing
        professionally designed furniture and tools that were
        already ready to assemble?
      </p>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 my-8">
        <p className="text-indigo-200 leading-relaxed m-0">
          <strong>That is the idea behind Bootstrap.</strong>
          Instead of creating every common UI element from scratch,
          Bootstrap gives you a collection of reusable styles and
          components that you can customize for your application.
        </p>
      </div>

      {/* Why */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why Was Bootstrap Created?
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Building interfaces manually can become repetitive.
        Developers often need the same types of elements again and again:
        buttons, forms, navigation bars, cards, alerts, containers,
        and responsive layouts.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        Bootstrap provides a consistent foundation so developers can
        spend less time rebuilding common UI patterns and more time
        focusing on the actual application.
      </p>

      {/* Code */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Simple Bootstrap Example
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-8 overflow-hidden">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`<button class="btn btn-primary">
  View Project
</button>`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Instead of manually designing the button's background,
        padding, border, typography, hover behavior, and other
        common styles, Bootstrap provides the <code>btn</code> and
        <code>btn-primary</code> classes.
      </p>

      {/* Comparison */}
      <div className="grid md:grid-cols-2 gap-5 my-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-lg font-bold text-slate-200 mb-3">
            Without a Framework
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed m-0">
            You manually create styles, spacing, colors, responsive
            behavior, and reusable UI patterns.
          </p>
        </div>

        <div className="bg-slate-900 border border-indigo-500/20 rounded-xl p-5">
          <h3 className="text-lg font-bold text-indigo-300 mb-3">
            With Bootstrap
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed m-0">
            You can start with ready-made utilities and components
            and customize them when necessary.
          </p>
        </div>

      </div>

      {/* Takeaway */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Bootstrap is not magic. It is a toolbox.
        The real advantage is having a reliable collection of
        building blocks that can help you build interfaces faster
        and keep common design patterns consistent.
      </p>

    </article>
  );
}