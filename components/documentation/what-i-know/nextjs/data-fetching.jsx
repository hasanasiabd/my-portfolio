// components/documentation/what-i-know/nextjs/data-fetching.jsx

import React from "react";

export default function NextDataFetchingStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        How Does Data Fetching Work in Next.js? From Database to UI
      </h1>

      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-2xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          Next.js supports data fetching in Server Components and other
          server-side environments. Depending on the architecture, data
          can come from APIs, databases, or other server-side sources.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Warehouse 📦
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you run an online store.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Thousands of products are stored inside a warehouse. Customers
        don't enter the warehouse and search through every shelf.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Your store system asks the warehouse for the products it needs,
        receives the information, and then displays those products to the
        customer.
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
            <div className="text-3xl">📦</div>
            <p className="text-indigo-400 font-bold text-sm m-0">
              Server
            </p>
          </div>

          <span className="text-indigo-400 text-2xl">→</span>

          <div className="text-center">
            <div className="text-3xl">🖥️</div>
            <p className="text-slate-400 text-sm m-0">
              UI
            </p>
          </div>

        </div>

      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Fetching Data in a Server Component
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`export default async function ProductsPage() {

  const response = await fetch(
    "https://example.com/api/products"
  );

  const products = await response.json();

  return (
    <main>
      <h1>Products</h1>

      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </article>
      ))}
    </main>
  );
}`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Because this is a Server Component, the data-fetching operation
        can happen on the server before the UI is sent to the browser.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Complete Journey
      </h2>

      <div className="space-y-3 my-6">

        {[
          ["01", "Next.js renders the Server Component."],
          ["02", "The component requests the required data."],
          ["03", "The server receives the data."],
          ["04", "The component uses that data to create UI."],
          ["05", "The resulting UI is delivered to the browser."]
        ].map(([number, text]) => (
          <div
            key={number}
            className="flex gap-4 items-start bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <span className="text-indigo-400 font-bold font-mono">
              {number}
            </span>

            <span className="text-slate-300 text-sm">
              {text}
            </span>
          </div>
        ))}

      </div>

      <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 my-8">
        <h3 className="text-amber-300 font-bold text-lg mt-0">
          Database Note
        </h3>

        <p className="text-slate-300 mb-0">
          A server-side component can use a database client or ORM when
          your architecture allows it. The important rule is to keep
          database credentials and other secrets on the server.
        </p>
      </div>

      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-indigo-300 mt-0">
          What I Learned
        </h2>

        <p className="text-slate-300 mb-0">
          Data fetching is not just about calling fetch(). The important
          question is where the request happens, where the data comes from,
          and how that data travels into the UI.
        </p>
      </div>

    </article>
  );
}