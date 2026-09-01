import React from "react";

export default function TailwindGridStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is CSS Grid? Building a Clean Product Card Layout
      </h1>

      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          CSS Grid is a two-dimensional layout system that allows you to
          organize content into rows and columns.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Supermarket Shelf
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine walking into a supermarket. Products are not thrown randomly
        across the floor.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        They are organized into rows and columns. Similar products stay
        together, and every item has its own position.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        CSS Grid works in a similar way. You define a structure of rows and
        columns and place your content inside that structure.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Building a Product Grid
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
  <ProductCard />
  <ProductCard />
  <ProductCard />
</div>`}
        </pre>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {["Laptop", "Keyboard", "Monitor"].map((product) => (
          <div
            key={product}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >
            <div className="h-20 rounded-lg bg-slate-800 flex items-center justify-center mb-4 text-2xl">
              📦
            </div>

            <h3 className="text-lg font-bold text-slate-100 m-0">
              {product}
            </h3>

            <p className="text-sm text-slate-400">
              Product description goes here.
            </p>
          </div>
        ))}
      </div>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 my-8">
        <p className="text-indigo-300 m-0">
          🧠 Think of Grid as a map. Rows and columns create the map, and
          your content occupies the spaces inside it.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Grid vs Flexbox
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Flexbox is generally great for arranging items along one dimension,
        while Grid is designed to manage rows and columns together.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Grid is especially useful for dashboards, product galleries,
        portfolios, card collections, and other interfaces where a clear
        two-dimensional structure is needed.
      </p>
    </article>
  );
}