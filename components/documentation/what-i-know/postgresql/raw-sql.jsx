// components/documentation/what-i-know/postgresql/raw-sql.jsx

import React from "react";

export default function RawSQLStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Is Raw SQL? Understanding SELECT * FROM products
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg">
        <h3 className="text-lg font-bold text-indigo-300 m-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          Raw SQL means writing SQL commands directly instead of relying on
          an ORM to generate the SQL for you.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        The Real-World Story: Speaking Directly to the Librarian
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a library with a professional librarian.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You could tell the librarian exactly what you want:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <p className="text-indigo-300 font-semibold m-0">
          "Give me every book from the JavaScript section."
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        You are giving a direct instruction. Raw SQL works similarly.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        This Is Raw SQL
      </h2>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`SELECT * FROM products;`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Let's break it down:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <ul className="text-slate-300 space-y-3 m-0">
          <li>
            <code>SELECT</code> → retrieve data
          </li>

          <li>
            <code>*</code> → all columns
          </li>

          <li>
            <code>FROM</code> → tell PostgreSQL where to look
          </li>

          <li>
            <code>products</code> → the table we're querying
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        Raw SQL in Node.js
      </h2>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`const result = await db.query(
  "SELECT * FROM products"
);

console.log(result.rows);`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Here, the SQL string is written directly by the developer.
        The database driver sends that SQL to PostgreSQL.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`JavaScript
    ↓
db.query()
    ↓
"SELECT * FROM products"
    ↓
PostgreSQL
    ↓
Rows returned`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        Raw SQL vs ORM
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        With raw SQL, you write the SQL yourself. With an ORM, you usually
        interact with JavaScript or TypeScript objects and the ORM generates
        SQL behind the scenes.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Raw SQL gives you direct control over what PostgreSQL executes.
        That's why understanding SQL remains valuable even when using an ORM.
      </p>

    </article>
  );
}