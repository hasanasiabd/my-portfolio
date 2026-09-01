import React from "react";

export default function SelectStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Does SELECT Do? Finding the Data You Need from a Database
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg">
        <h3 className="text-lg font-bold text-indigo-300 m-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          SELECT is an SQL command used to retrieve data from one or more
          database tables.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        The Real-World Story: Asking a Librarian
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you walk into a library containing one million books.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You don't personally check every shelf. Instead, you ask the
        librarian:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <p className="text-indigo-300 font-semibold m-0">
          "Show me all the JavaScript books."
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        In SQL, SELECT plays the role of that request.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        Selecting Everything
      </h2>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`SELECT * FROM products;`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The <code>*</code> means "give me all columns", while
        <code> products </code> tells PostgreSQL which table to search.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        Selecting Specific Columns
      </h2>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`SELECT name, price
FROM products;`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Now we're telling PostgreSQL that we only want the product name and
        price.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        Filtering the Results
      </h2>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`SELECT *
FROM products
WHERE price > 500;`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Now PostgreSQL only returns products whose price is greater than
        500.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        SELECT doesn't change your database. It simply asks PostgreSQL to
        find and return information.
      </p>

    </article>
  );
}