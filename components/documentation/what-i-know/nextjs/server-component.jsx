// components/documentation/what-i-know/nextjs/server-component.jsx

import React from "react";

export default function ServerComponentStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is a Server Component? Letting the Server Do the Heavy Work
      </h1>

      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-2xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          In the Next.js App Router, components are Server Components by
          default unless you explicitly opt into client-side interactivity
          with the "use client" directive.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: The Factory 🏭
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a factory producing products for customers.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Customers don't need to enter the factory to watch every machine
        operate. The factory performs the heavy work behind the scenes and
        sends the finished product out.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <div className="text-center">
            <div className="text-3xl">🗄️</div>
            <p className="text-slate-400 text-sm m-0">
              Database
            </p>
          </div>

          <span className="text-indigo-400 text-2xl">→</span>

          <div className="text-center">
            <div className="text-3xl">🏭</div>
            <p className="text-indigo-400 font-bold text-sm m-0">
              Server
            </p>
          </div>

          <span className="text-indigo-400 text-2xl">→</span>

          <div className="text-center">
            <div className="text-3xl">🖥️</div>
            <p className="text-slate-400 text-sm m-0">
              Browser
            </p>
          </div>

        </div>

      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Server Component Can Look Like This
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`export default async function ProductsPage() {

  const products = await db.query(
    "SELECT * FROM products"
  );

  return (
    <div>
      {products.rows.map((product) => (
        <div key={product.id}>
          {product.name}
        </div>
      ))}
    </div>
  );
}`}
        </pre>
      </div>

      <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 my-8">
        <h3 className="text-amber-300 font-bold text-lg mt-0">
          Important
        </h3>

        <p className="text-slate-300 mb-0">
          Server Components are not the same thing as "the server itself."
          They are React components that Next.js can render on the server.
          Keep secrets and private credentials on the server rather than
          exposing them to browser JavaScript.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why Is This Useful?
      </h2>

      <div className="grid sm:grid-cols-2 gap-4 my-6">

        {[
          ["🔐", "Keep server-only credentials private"],
          ["🗄️", "Access server-side resources when appropriate"],
          ["📦", "Reduce unnecessary client-side JavaScript"],
          ["⚡", "Render content on the server"]
        ].map(([icon, text]) => (
          <div
            key={text}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >
            <div className="text-2xl mb-3">{icon}</div>
            <p className="text-slate-300 text-sm m-0">
              {text}
            </p>
          </div>
        ))}

      </div>

      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-indigo-300 mt-0">
          What I Learned
        </h2>

        <p className="text-slate-300 mb-0">
          Not every piece of UI needs to run in the browser. Server
          Components allow Next.js to perform suitable work on the server
          and send the resulting UI to the client.
        </p>
      </div>

    </article>
  );
}