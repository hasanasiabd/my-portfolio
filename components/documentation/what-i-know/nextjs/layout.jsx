// components/documentation/what-i-know/nextjs/layout.jsx

import React from "react";

export default function NextLayoutStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is a Layout? Sharing a Common Structure Across Pages
      </h1>

      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-2xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          A layout in Next.js provides shared UI around pages. Common
          elements such as navigation, sidebars, and footers can live in
          a layout and remain visible while the page content changes.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Shopping Mall 🏢
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine entering a huge shopping mall.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You visit the electronics section, then the clothing section,
        then the food court.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The shops change, but the mall itself does not disappear every time
        you enter a different shop.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-8">

        <div className="border border-indigo-500/30 rounded-xl overflow-hidden">

          <div className="bg-indigo-500/10 p-4 border-b border-indigo-500/20 text-center">
            <span className="text-indigo-300 font-bold">
              🧭 Navbar
            </span>
          </div>

          <div className="p-8 text-center">
            <span className="text-slate-300 font-semibold">
              📄 Page Content
            </span>
          </div>

          <div className="bg-slate-950 p-4 border-t border-slate-800 text-center">
            <span className="text-slate-400 font-bold">
              Footer
            </span>
          </div>

        </div>

      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Next.js Structure
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`app/
├── layout.jsx
├── page.jsx
├── about/
│   └── page.jsx
└── contact/
    └── page.jsx`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Simple Layout
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mt-6 mb-4">
        The special <code>children</code> prop represents the page or
        nested content that belongs inside the layout.
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-8">

        {[
          ["🧭", "Navbar", "Shared navigation"],
          ["📄", "children", "Current page"],
          ["👣", "Footer", "Shared footer"]
        ].map(([icon, title, description]) => (
          <div
            key={title}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >
            <div className="text-2xl mb-3">{icon}</div>
            <h3 className="text-slate-100 font-bold m-0 mb-2">
              {title}
            </h3>
            <p className="text-slate-400 text-sm m-0">
              {description}
            </p>
          </div>
        ))}

      </div>

      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-indigo-300 mt-0">
          What I Learned
        </h2>

        <p className="text-slate-300 mb-0">
          Layouts are useful when multiple pages share the same structure.
          Instead of repeating the Navbar, Footer, or other shared UI on
          every page, I can define it once in a layout.
        </p>
      </div>

    </article>
  );
}