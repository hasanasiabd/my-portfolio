// components/documentation/what-i-know/nextjs/dynamic-route.jsx

import React from "react";

export default function DynamicRouteStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Are Dynamic Routes? Creating Pages That Change Based on Data
      </h1>

      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-2xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          Dynamic routes allow a route segment to represent changing data,
          such as a product ID, username, blog slug, or project ID.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: The Smart Address 🏷️
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a hotel with 500 rooms.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You don't build 500 completely different navigation systems.
        Instead, the hotel uses a simple room-number system.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 my-8">

        {["101", "205", "408"].map((room) => (
          <div
            key={room}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center"
          >
            <div className="text-3xl mb-2">🚪</div>

            <code className="text-indigo-400">
              /rooms/{room}
            </code>

            <p className="text-slate-500 text-xs mt-2 mb-0">
              Different room, same structure
            </p>
          </div>
        ))}

      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Dynamic routes work in a similar way. Instead of creating a separate
        file for every product, we create one dynamic route.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Folder Structure
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`app/
└── products/
    └── [slug]/
        └── page.jsx`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mt-6 mb-4">
        The square brackets tell Next.js that this part of the URL is
        dynamic.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        One Page, Many Products
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`app/products/[slug]/page.jsx

/products/iphone
/products/macbook
/products/keyboard
/products/mouse`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Reading the Dynamic Value
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`export default async function ProductPage({ params }) {

  const { slug } = await params;

  return (
    <main>
      <h1>Product: {slug}</h1>
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
          Dynamic routes solve a very common problem: I need many URLs with
          the same page structure but different data. Instead of creating
          hundreds of files, I create one dynamic route and use the URL
          parameter to determine which data should be displayed.
        </p>
      </div>

    </article>
  );
}