import React from "react";

export default function SlowQueryStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-semibold">
          ⚡ Performance Problem
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mt-4 mb-4">
          My Database Query Was Too Slow — How I Improved Its Performance
        </h1>

        <p className="text-slate-400 leading-relaxed">
          Everything worked correctly, but correctness wasn't enough. The
          application became noticeably slower as the amount of data increased.
        </p>
      </div>

      <div className="bg-yellow-950/20 border border-yellow-500/20 border-l-4 border-l-yellow-500 rounded-xl p-5 my-8">
        <h3 className="text-lg font-bold text-yellow-300 m-0 mb-2">
          🐌 The Problem
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          A database query that seemed perfectly fine with a small amount of
          data became slow when the table contained many more records.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Finding One Book in a Warehouse
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a warehouse containing one million books.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Someone walks in and asks:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <p className="text-yellow-300 text-lg font-semibold m-0 text-center">
          "Find me the book called JavaScript Patterns."
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        If every book is sitting randomly on the floor, the worker might have
        to inspect thousands or millions of books.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        But if the warehouse has a well-organized index, the worker can find
        the exact location almost immediately.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-5">
          <p className="text-red-400 font-bold m-0">❌ No Index</p>
          <p className="text-slate-400 text-sm mt-2 mb-0">
            Search through a huge amount of data.
          </p>
        </div>

        <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-5">
          <p className="text-emerald-400 font-bold m-0">✅ Proper Index</p>
          <p className="text-slate-400 text-sm mt-2 mb-0">
            Quickly locate the required records.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Query Looked Innocent
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`SELECT *
FROM products
WHERE category = 'electronics';`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        There is nothing obviously wrong with this query.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        But the important question is:
      </p>

      <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-5 my-6">
        <p className="text-indigo-300 font-semibold m-0">
          "How does the database find these rows?"
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 1: Measure Before Changing Anything
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        The first mistake would be optimizing blindly.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Instead, I looked at how PostgreSQL was executing the query.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`EXPLAIN ANALYZE
SELECT *
FROM products
WHERE category = 'electronics';`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        This gives insight into the execution plan and helps identify where the
        database is spending its time.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 2: Think About the Search Column
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        The query repeatedly searched by <code>category</code>.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        That made it a good candidate for an index.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`CREATE INDEX idx_products_category
ON products(category);`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Now PostgreSQL has an additional structure that can help it locate
        matching records more efficiently.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 3: Don't Fetch Data You Don't Need
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Another performance lesson was avoiding unnecessary data.
      </p>

      <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-5 my-6">
        <p className="text-red-300 font-mono text-sm m-0">
          SELECT * FROM products;
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        If the UI only needs the product name and price, fetching every column
        is unnecessary.
      </p>

      <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-5 my-6">
        <p className="text-emerald-300 font-mono text-sm m-0">
          SELECT name, price FROM products;
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Small decisions like this become important when applications grow.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Bigger Lesson: Scale Changes Everything
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        A query that takes almost no time with 100 records might behave very
        differently with 1,000,000 records.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center">
            <p className="text-slate-500 text-xs font-bold m-0">
              SMALL DATASET
            </p>
            <p className="text-2xl font-bold text-emerald-400 mt-1 mb-0">
              100 rows
            </p>
          </div>

          <div className="text-indigo-400 text-2xl">→</div>

          <div className="text-center">
            <p className="text-slate-500 text-xs font-bold m-0">
              GROWING DATASET
            </p>
            <p className="text-2xl font-bold text-yellow-400 mt-1 mb-0">
              100K+ rows
            </p>
          </div>

          <div className="text-indigo-400 text-2xl">→</div>

          <div className="text-center">
            <p className="text-slate-500 text-xs font-bold m-0">
              REAL SCALE
            </p>
            <p className="text-2xl font-bold text-red-400 mt-1 mb-0">
              Millions
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Database performance isn't about making every query complicated. It's
        about understanding how the database searches, how much data it reads,
        and whether the database has the right structures to find that data.
      </p>

      <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-5 my-8">
        <p className="text-indigo-300 font-bold m-0">
          ⚡ My Performance Checklist
        </p>

        <ul className="text-slate-300 mt-3 mb-0 space-y-2">
          <li>✓ Measure the query before optimizing it.</li>
          <li>✓ Use EXPLAIN ANALYZE to understand execution.</li>
          <li>✓ Add indexes where they actually help.</li>
          <li>✓ Avoid SELECT * when unnecessary.</li>
          <li>✓ Think about how the query behaves as data grows.</li>
        </ul>
      </div>
    </article>
  );
}