import React from "react";

export default function TailwindResponsiveStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        How Does Responsive Design Work in Tailwind CSS?
      </h1>

      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          Responsive design allows an interface to adapt to different screen
          sizes. Tailwind makes this easier through breakpoint prefixes such
          as <code>sm:</code>, <code>md:</code>, <code>lg:</code>, and
          <code>xl:</code>.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Restaurant Table
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a restaurant with tables of different sizes. During a quiet
        afternoon, a large table might be perfect for one family.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        But when the restaurant becomes crowded, the same space needs to be
        rearranged so people can move around comfortably.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        Responsive design works in a similar way. Your interface changes its
        arrangement depending on the available screen space.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Tailwind Breakpoints
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        {[
          ["sm:", "Small screens"],
          ["md:", "Medium screens"],
          ["lg:", "Large screens"],
          ["xl:", "Extra-large screens"],
        ].map(([prefix, description]) => (
          <div
            key={prefix}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >
            <code className="text-indigo-400 font-bold">{prefix}</code>
            <p className="text-sm text-slate-400 mt-2">{description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Responsive Layout
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`<div className="
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-6
">
  <Card />
  <Card />
  <Card />
</div>`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        On a small screen, the cards appear in one column. On medium screens,
        they become two columns. On large screens, they become three.
      </p>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 my-8">
        <p className="text-indigo-300 m-0">
          💡 Think of responsive utilities as instructions that say:
          <strong> "When the screen reaches this size, change the layout." </strong>
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Responsive design is not about creating completely different websites
        for mobile and desktop. It is about creating one flexible interface
        that adapts naturally to its environment.
      </p>
    </article>
  );
}