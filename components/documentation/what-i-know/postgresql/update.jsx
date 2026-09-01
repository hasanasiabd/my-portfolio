// components/documentation/what-i-know/postgresql/update.jsx

import React from "react";

export default function UpdateStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Does UPDATE Do? Changing Existing Data in a Database
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg">
        <h3 className="text-lg font-bold text-indigo-300 m-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          UPDATE is an SQL command used to modify existing records inside
          a database table.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        The Real-World Story: Changing the Price Tag
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you run an online store. Yesterday, a laptop was listed
        for $900.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Today, the price changes to $850.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You don't create a second laptop just because the price changed.
        You find the existing product and update its price.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`Before
Laptop → $900

        ↓ UPDATE

After
Laptop → $850`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        The SQL
      </h2>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`UPDATE products
SET price = 850
WHERE id = 1;`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The <code>WHERE</code> clause is extremely important here.
        It tells PostgreSQL exactly which record should be changed.
      </p>

      <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-5 mb-6">
        <h3 className="text-red-400 font-bold mt-0">
          ⚠️ A Dangerous Mistake
        </h3>

        <pre className="text-red-300 font-mono text-sm overflow-x-auto">
{`UPDATE products
SET price = 850;`}
        </pre>

        <p className="text-slate-300 mb-0">
          Without a WHERE condition, this can update the price of every
          product in the table.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        UPDATE Through a Backend
      </h2>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`await db.query(
  "UPDATE products SET price = $1 WHERE id = $2",
  [850, 1]
);`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        UPDATE means changing data that already exists. The most important
        lesson is to carefully use WHERE so you modify the intended record,
        not the entire table.
      </p>

    </article>
  );
}