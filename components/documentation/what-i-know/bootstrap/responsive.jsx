// components/documentation/what-i-know/bootstrap/responsive.jsx

import React from "react";

export default function BootstrapResponsiveStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        How Does Responsive Design Work with Bootstrap?
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 rounded-r-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          Responsive design allows a website's layout to adapt to
          different screen sizes such as mobile phones, tablets,
          laptops, and large desktop screens.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Flexible Restaurant
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a restaurant that has a different amount of space
        depending on the situation.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        During a quiet afternoon, there may be enough space for
        large tables with comfortable chairs.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        But imagine the same restaurant moving into a tiny location.
        The owner cannot simply keep the exact same arrangement.
      </p>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 my-8">
        <p className="text-indigo-200 leading-relaxed m-0">
          The furniture needs to rearrange itself according to
          the available space.
          <strong> Responsive design works the same way.</strong>
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Bootstrap Breakpoints
      </h2>

      <p className="text-slate-300 leading-relaxed mb-6">
        Bootstrap provides breakpoint classes that allow developers
        to control how elements behave at different viewport sizes.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <span className="text-xs text-indigo-400 font-bold">
            SMALL SCREEN
          </span>

          <div className="mt-4 space-y-2">
            <div className="h-10 bg-slate-800 rounded-lg flex items-center px-3 text-sm text-slate-400">
              Product
            </div>

            <div className="h-10 bg-slate-800 rounded-lg flex items-center px-3 text-sm text-slate-400">
              Product
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <span className="text-xs text-indigo-400 font-bold">
            LARGE SCREEN
          </span>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="h-10 bg-slate-800 rounded-lg flex items-center px-3 text-sm text-slate-400">
              Product
            </div>

            <div className="h-10 bg-slate-800 rounded-lg flex items-center px-3 text-sm text-slate-400">
              Product
            </div>
          </div>
        </div>

      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Simple Bootstrap Example
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-8">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`<div class="row">

  <div class="col-12 col-md-6 col-lg-4">
    Product Card
  </div>

  <div class="col-12 col-md-6 col-lg-4">
    Product Card
  </div>

  <div class="col-12 col-md-6 col-lg-4">
    Product Card
  </div>

</div>`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-5">
        The important idea here is that the same component can
        occupy different amounts of space depending on the screen.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-8">

        <div className="space-y-4">

          <div>
            <span className="text-xs text-slate-500">
              MOBILE
            </span>

            <p className="text-slate-300 text-sm mt-1 mb-0">
              1 card per row
            </p>
          </div>

          <div>
            <span className="text-xs text-slate-500">
              TABLET
            </span>

            <p className="text-slate-300 text-sm mt-1 mb-0">
              2 cards per row
            </p>
          </div>

          <div>
            <span className="text-xs text-slate-500">
              DESKTOP
            </span>

            <p className="text-slate-300 text-sm mt-1 mb-0">
              3 cards per row
            </p>
          </div>

        </div>

      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why Responsive Design Matters
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Users do not visit websites from identical devices.
        Someone might open an application from a phone while another
        person opens the exact same page from a large desktop monitor.
      </p>

      <p className="text-slate-300 leading-relaxed">
        Responsive design makes sure the experience remains usable
        instead of forcing users to zoom, scroll horizontally,
        or fight with a broken layout.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Responsive design is not about creating separate websites
        for every device. It is about creating one flexible layout
        that adapts intelligently to the space available.
      </p>

    </article>
  );
}