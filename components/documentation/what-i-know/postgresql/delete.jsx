// components/documentation/what-i-know/postgresql/delete.jsx

import React from "react";

export default function DeleteStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Does DELETE Do? Removing Data from a Database
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg">
        <h3 className="text-lg font-bold text-indigo-300 m-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          DELETE is an SQL command used to permanently remove existing
          records from a database table.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        The Real-World Story: Removing an Old Product
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine your online store has stopped selling a particular keyboard.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The product should no longer appear in your store. So you go to
        your warehouse system and remove that particular product record.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`Before
1 | Laptop
2 | Keyboard
3 | Mouse

        ↓ DELETE Keyboard

After
1 | Laptop
3 | Mouse`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        The SQL
      </h2>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`DELETE FROM products
WHERE id = 2;`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        PostgreSQL finds the product whose ID is 2 and removes that record.
      </p>

      <div className="bg-red-950/20 border border-red-500/20 rounded-xl p-5 mb-6">
        <h3 className="text-red-400 font-bold mt-0">
          ⚠️ Be Careful
        </h3>

        <pre className="text-red-300 font-mono text-sm overflow-x-auto">
{`DELETE FROM products;`}
        </pre>

        <p className="text-slate-300 mb-0">
          Without a WHERE condition, this can delete every record from the
          table.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        DELETE Through a Backend
      </h2>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`await db.query(
  "DELETE FROM products WHERE id = $1",
  [2]
);`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        DELETE removes existing data. Just like UPDATE, the WHERE clause is
        critical because it determines exactly which records should be
        removed.
      </p>

    </article>
  );
}