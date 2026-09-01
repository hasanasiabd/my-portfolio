// components/documentation/what-i-know/postgresql/joins.jsx

import React from "react";

export default function JoinsStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Is a SQL JOIN? Bringing Data Together from Multiple Tables
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg">
        <h3 className="text-lg font-bold text-indigo-300 m-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          A SQL JOIN combines related data from multiple tables using a
          matching column, often a primary key and foreign key.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        The Real-World Story: Two Notebooks
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you're running an online store.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You keep customer information in one notebook and their orders in
        another.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-indigo-300 font-bold mt-0">
            👤 Users
          </h3>

          <pre className="text-emerald-400 font-mono text-sm">
{`id | name
---|------
1  | Hasan
2  | Rahim`}
          </pre>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-indigo-300 font-bold mt-0">
            🛒 Orders
          </h3>

          <pre className="text-emerald-400 font-mono text-sm">
{`id | user_id | product
---|---------|--------
10 | 1       | Laptop
11 | 2       | Mouse`}
          </pre>
        </div>

      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Now someone asks:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <p className="text-indigo-300 font-semibold m-0">
          "Which product did Hasan order?"
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The answer exists across two different tables. This is where
        JOIN becomes useful.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        INNER JOIN
      </h2>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`SELECT users.name, orders.product
FROM users
INNER JOIN orders
ON users.id = orders.user_id;`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        PostgreSQL looks at the matching IDs and combines the related
        records.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`name  | product
------|--------
Hasan | Laptop
Rahim | Mouse`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        Why JOINs Matter
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Large applications usually don't put everything into one giant
        table. Data is separated into logical tables and JOINs allow us to
        bring related information together when we need it.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Think of JOIN as a bridge between tables. If two tables have
        related information, JOIN can bring that information together into
        one useful result.
      </p>

    </article>
  );
}