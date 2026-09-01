import React from "react";

export default function InsertStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Does INSERT Do? Adding New Data to a Database
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg">
        <h3 className="text-lg font-bold text-indigo-300 m-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          INSERT is an SQL command used to add new records to a database
          table.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        The Real-World Story: A New Product Arrives
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you manage an online store warehouse.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        One morning, a new product arrives:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`Product
Name: Mechanical Keyboard
Price: 120`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Someone has to record this product in the warehouse system.
        In PostgreSQL, INSERT performs that job.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        Adding a Product
      </h2>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`INSERT INTO products (name, price)
VALUES ('Mechanical Keyboard', 120);`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Here we're telling PostgreSQL:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <ul className="text-slate-300 space-y-2 m-0">
          <li>📦 Put this data into the products table.</li>
          <li>🏷️ The name is Mechanical Keyboard.</li>
          <li>💰 The price is 120.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        INSERT Through a Backend
      </h2>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`const result = await db.query(
  "INSERT INTO products (name, price) VALUES ($1, $2)",
  ["Mechanical Keyboard", 120]
);`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        In a real application, the backend usually receives data from a
        form or API request and then sends an INSERT query to PostgreSQL.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`User
 ↓
Form
 ↓
API / Backend
 ↓
INSERT
 ↓
PostgreSQL
 ↓
New Product Stored`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        INSERT is basically PostgreSQL's "put this new record into the
        system" command. Whenever your application creates new data,
        INSERT is often part of the journey.
      </p>

    </article>
  );
}