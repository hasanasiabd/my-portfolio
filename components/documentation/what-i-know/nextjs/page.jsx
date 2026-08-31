// components/documentation/what-i-know/nextjs/page.jsx

import React from "react";

export default function NextPageStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is a Page in Next.js? Understanding Pages Through a Simple Story
      </h1>

      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-2xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          In the Next.js App Router, a page.jsx file defines the UI that is
          rendered for a particular route.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Rooms in a Building 🏠
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a large apartment building.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The building has different rooms. Each room has its own purpose:
        bedroom, kitchen, office, and living room.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Next.js works with a similar idea. A route can have its own
        <code>page.jsx</code>.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-8">

        <div className="grid sm:grid-cols-3 gap-4">

          {[
            ["/", "🏠", "Home"],
            ["/about", "👤", "About"],
            ["/contact", "📩", "Contact"]
          ].map(([route, icon, name]) => (
            <div
              key={route}
              className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-center"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <p className="text-indigo-400 font-mono text-sm m-0">
                {route}
              </p>
              <p className="text-slate-300 text-sm mt-1 mb-0">
                {name} Page
              </p>
            </div>
          ))}

        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        File-Based Routing
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`app/
├── page.jsx
├── about/
│   └── page.jsx
└── contact/
    └── page.jsx`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Here the folder structure itself describes the routes.
      </p>

      <div className="space-y-3 my-6">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <code className="text-indigo-400">app/page.jsx</code>
          <p className="text-slate-400 text-sm mt-2 mb-0">
            → /
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <code className="text-indigo-400">app/about/page.jsx</code>
          <p className="text-slate-400 text-sm mt-2 mb-0">
            → /about
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <code className="text-indigo-400">app/contact/page.jsx</code>
          <p className="text-slate-400 text-sm mt-2 mb-0">
            → /contact
          </p>
        </div>

      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Simple Page
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`export default function AboutPage() {
  return (
    <main>
      <h1>About Me</h1>
      <p>
        Welcome to my portfolio.
      </p>
    </main>
  );
}`}
        </pre>
      </div>

      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-indigo-300 mt-0">
          What I Learned
        </h2>

        <p className="text-slate-300 mb-0">
          A page is simply the UI for a route. In the App Router, Next.js
          uses the folder structure and page.jsx convention to connect a
          URL with the UI that should appear there.
        </p>
      </div>

    </article>
  );
}