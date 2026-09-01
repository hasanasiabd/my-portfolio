import React from "react";

export default function DatabaseStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Is a Database? Understanding How Thousands of Records Are Organized
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg">
        <h3 className="text-lg font-bold text-indigo-300 m-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          A database is an organized system for storing, retrieving, and
          managing information.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        The Real-World Story: A Giant Library
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine walking into a massive library containing millions of books.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        If every book were thrown onto the floor randomly, finding one
        particular book would be almost impossible.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Instead, the library organizes books into sections, shelves, and
        numbered locations.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`Library
 ├── Technology
 │    ├── JavaScript
 │    ├── React
 │    └── PostgreSQL
 │
 └── Business
      ├── Marketing
      └── Finance`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        A database works in a similar way. Instead of books, it stores
        application information.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        A Database Can Contain Many Tables
      </h2>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`Database
 ├── users
 ├── products
 ├── orders
 └── payments`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        Why Do We Need a Database?
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine your e-commerce application has 100,000 customers.
        You need a system that can quickly find a specific customer,
        update their information, and connect their orders to them.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        A database gives your application that organized storage system.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        A database is essentially an organized home for application data.
        Without one, large applications quickly become impossible to manage.
      </p>

    </article>
  );
}