// components/documentation/what-i-know/nextjs/routing.jsx

import React from "react";

export default function NextRoutingStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        How Does Routing Work in Next.js? A Simple Journey from One Page to Another
      </h1>

      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-2xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          Next.js App Router uses folders and files to define routes.
          A folder represents a URL segment, while page.jsx defines the
          UI for that route.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Roads in a City 🛣️
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a city with thousands of buildings.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Without roads, people would have no organized way to move from one
        building to another.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        A web application has a similar problem. Users need a predictable
        way to move between pages.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="text-center">
            <div className="text-3xl">🏠</div>
            <p className="text-indigo-400 font-mono text-sm m-0">
              /
            </p>
            <p className="text-slate-500 text-xs">
              Home
            </p>
          </div>

          <span className="text-indigo-400 text-2xl">→</span>

          <div className="text-center">
            <div className="text-3xl">👤</div>
            <p className="text-indigo-400 font-mono text-sm m-0">
              /about
            </p>
            <p className="text-slate-500 text-xs">
              About
            </p>
          </div>

          <span className="text-indigo-400 text-2xl">→</span>

          <div className="text-center">
            <div className="text-3xl">📩</div>
            <p className="text-indigo-400 font-mono text-sm m-0">
              /contact
            </p>
            <p className="text-slate-500 text-xs">
              Contact
            </p>
          </div>

        </div>

      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Folder → Route
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`app/
├── page.jsx
├── about/
│   └── page.jsx
├── contact/
│   └── page.jsx
└── products/
    └── page.jsx`}
        </pre>
      </div>

      <div className="space-y-3 my-8">

        {[
          ["app/page.jsx", "/"],
          ["app/about/page.jsx", "/about"],
          ["app/contact/page.jsx", "/contact"],
          ["app/products/page.jsx", "/products"]
        ].map(([file, route]) => (
          <div
            key={file}
            className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <code className="text-slate-300 text-sm">
              {file}
            </code>

            <code className="text-indigo-400 text-sm">
              {route}
            </code>
          </div>
        ))}

      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Navigating Between Pages
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}`}
        </pre>
      </div>

      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-indigo-300 mt-0">
          What I Learned
        </h2>

        <p className="text-slate-300 mb-0">
          Routing is the road system of a web application. In Next.js,
          the App Router uses the project structure to define these roads,
          making the relationship between files and URLs easy to understand.
        </p>
      </div>

    </article>
  );
}