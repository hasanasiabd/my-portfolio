import React from "react";

export default function DatabaseTableStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Is a Database Table? Understanding Rows and Columns
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg">
        <h3 className="text-lg font-bold text-indigo-300 m-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          A table is a structured collection of related data organized into
          rows and columns.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        The Real-World Story: A Hotel
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a large hotel.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The hotel itself is like a database. Inside the hotel there are
        different rooms, and each room has a specific purpose.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`Database
   ↓
products table
users table
orders table`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        Columns Are the Categories
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Suppose we create a products table.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm text-left border border-slate-800">
          <thead className="bg-slate-900 text-indigo-300">
            <tr>
              <th className="p-3 border border-slate-800">id</th>
              <th className="p-3 border border-slate-800">name</th>
              <th className="p-3 border border-slate-800">price</th>
            </tr>
          </thead>

          <tbody className="text-slate-300">
            <tr>
              <td className="p-3 border border-slate-800">1</td>
              <td className="p-3 border border-slate-800">Laptop</td>
              <td className="p-3 border border-slate-800">$900</td>
            </tr>

            <tr>
              <td className="p-3 border border-slate-800">2</td>
              <td className="p-3 border border-slate-800">Keyboard</td>
              <td className="p-3 border border-slate-800">$80</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Here, <code>id</code>, <code>name</code>, and <code>price</code> are
        columns.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        Rows Are Individual Records
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Each horizontal record represents one product.
      </p>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`1 | Laptop  | 900
2 | Keyboard | 80`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Think of a table as a spreadsheet designed for a database.
        Columns describe what information we store, while rows represent
        individual records.
      </p>

    </article>
  );
}