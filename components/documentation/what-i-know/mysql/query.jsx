import React from "react";

export default function MySQLQueryStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is a MySQL Query? Learning How to Ask a Database for Data
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-5 mb-8 rounded-r-xl">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          A MySQL query is a command written in SQL that tells the database
          what information you want or what operation you want it to perform.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Asking a Librarian
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine entering a massive library with millions of books.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You need one specific book. You could walk through every shelf and
        inspect every book yourself, but that would take forever.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Instead, you ask the librarian: "Please find me all books written by
        this author."
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        That request is similar to a database query. You tell MySQL what you
        need, and MySQL searches the stored data and returns the result.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Simple SELECT Query
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`SELECT * FROM users;`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Here, <code>SELECT</code> tells MySQL that we want to retrieve data,
        while <code>*</code> means all columns. <code>FROM users</code> tells
        MySQL which table to search.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Asking a More Specific Question
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`SELECT name, email
FROM users
WHERE age >= 18;`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        This time, we are asking MySQL for only the name and email of users
        whose age is 18 or older.
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-indigo-400 font-bold">SELECT</code>
          <p className="text-slate-400 text-sm mt-2">
            What information do I want?
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-indigo-400 font-bold">FROM</code>
          <p className="text-slate-400 text-sm mt-2">
            Where should I look?
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-indigo-400 font-bold">WHERE</code>
          <p className="text-slate-400 text-sm mt-2">
            Which records do I want?
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        A query is simply a structured question or command for the database.
        Once you understand queries, you can start communicating with MySQL
        instead of manually searching through stored data.
      </p>
    </article>
  );
}