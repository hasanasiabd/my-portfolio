// components/documentation/what-i-know/postgresql/orm.jsx

import React from "react";

export default function ORMStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Is an ORM? Working with Databases Without Writing Every SQL Query
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg">
        <h3 className="text-lg font-bold text-indigo-300 m-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          An ORM (Object-Relational Mapper) allows developers to work with
          database records using programming-language objects and methods
          instead of manually writing every SQL query.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        The Real-World Story: The Warehouse Manager
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you run a huge warehouse.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Every time you want one product, you could personally walk into the
        warehouse, find the correct shelf, check the box, and bring it back.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        But imagine doing that 500 times a day.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Instead, you hire a smart warehouse manager.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <p className="text-indigo-300 font-semibold m-0">
          You: "Give me product #10."
        </p>

        <p className="text-slate-400 mt-3 mb-0">
          Manager: "Got it. I'll handle the warehouse details."
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        That manager is similar to an ORM.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        Without an ORM
      </h2>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`const result = await db.query(
  "SELECT * FROM products WHERE id = $1",
  [10]
);`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Here, you're directly writing SQL.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        With an ORM
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        An ORM lets you express the same idea through application-level
        code. For example, an ORM API might look conceptually like this:
      </p>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`const product = await Product.findById(10);`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The ORM translates your operation into SQL and communicates with
        the database.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`Your JavaScript / TypeScript
          ↓
         ORM
          ↓
        SQL
          ↓
     PostgreSQL
          ↓
        Data
          ↓
         ORM
          ↓
   JavaScript Object`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        Why Developers Use ORMs
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <ul className="text-slate-300 space-y-3 m-0">
          <li>⚡ Less repetitive SQL</li>
          <li>🧩 Easier application-level data modeling</li>
          <li>🛡️ Better support for parameterized queries and safer patterns</li>
          <li>🔄 Easier database operations inside large applications</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        ORM Does Not Replace SQL Knowledge
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        An ORM is a tool, not magic. Underneath the abstraction, a relational
        database still understands SQL.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Understanding SQL helps you understand what your ORM is actually
        doing and makes debugging database problems much easier.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        An ORM is like a helpful manager between your application and
        database. It makes common database operations easier, while the
        underlying database still does the real work.
      </p>

    </article>
  );
}