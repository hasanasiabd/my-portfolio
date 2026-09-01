// components/documentation/what-i-know/bootstrap/grid.jsx

import React from "react";

export default function BootstrapGridStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is the Bootstrap Grid? Building Responsive Layouts
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 rounded-r-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          The Bootstrap Grid is a layout system based on rows and columns.
          It helps developers organize content and create responsive
          layouts across different screen sizes.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Shopping Mall
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine walking into a large shopping mall.
        The entire building is one large space, but it is divided into
        different sections for different stores.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        One store might occupy half of a floor.
        Two smaller stores might share the other half.
        Another floor might contain four smaller shops.
      </p>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 my-8">
        <p className="text-indigo-200 leading-relaxed m-0">
          Think of the Bootstrap container as the mall,
          the row as a floor, and columns as individual stores.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The 12-Column Idea
      </h2>

      <p className="text-slate-300 leading-relaxed mb-5">
        Bootstrap's traditional grid divides a row into 12 columns.
        You can decide how much space each element should occupy.
      </p>

      <div className="grid grid-cols-12 gap-1 my-8">

        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="bg-indigo-500/20 border border-indigo-500/30 rounded p-2 text-center text-xs text-indigo-300"
          >
            {index + 1}
          </div>
        ))}

      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Simple Layout
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-8">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`<div class="container">
  <div class="row">

    <div class="col-md-8">
      Main Content
    </div>

    <div class="col-md-4">
      Sidebar
    </div>

  </div>
</div>`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Here the main content receives eight columns while the sidebar
        receives four. Together they use all twelve columns.
      </p>

      <div className="grid md:grid-cols-12 gap-3 my-8">

        <div className="md:col-span-8 bg-slate-900 border border-slate-800 rounded-xl p-5">
          <span className="text-xs text-indigo-400 font-bold">
            8 COLUMNS
          </span>
          <p className="text-slate-300 mt-2 mb-0">
            Main Content
          </p>
        </div>

        <div className="md:col-span-4 bg-slate-900 border border-slate-800 rounded-xl p-5">
          <span className="text-xs text-indigo-400 font-bold">
            4 COLUMNS
          </span>
          <p className="text-slate-300 mt-2 mb-0">
            Sidebar
          </p>
        </div>

      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why the Grid Is Useful
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Instead of manually calculating widths for every section,
        the grid gives you a predictable structure for arranging
        content. This becomes especially useful when building
        dashboards, landing pages, product pages, and application layouts.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        A good layout starts with structure.
        Bootstrap's grid gives that structure by dividing the page
        into predictable rows and columns that can adapt to different
        screen sizes.
      </p>

    </article>
  );
}