import React from "react";

export default function MySQLDatabaseStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        How Does a MySQL Database Store Data?
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-5 mb-8 rounded-r-xl">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          A MySQL database is an organized container that holds related tables.
          Each table stores a particular type of information, allowing an
          application to keep its data structured and easy to manage.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Filing Cabinet
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine walking into an old-fashioned office. Against the wall sits a
        huge filing cabinet.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Inside that cabinet are different drawers. One drawer contains
        customer information. Another contains invoices. Another contains
        employee records.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You would never throw every document into one drawer. That would make
        the office impossible to manage.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        A MySQL database follows the same basic idea. The database is your
        filing cabinet, while tables are the organized drawers inside it.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 my-8">
        <div className="flex items-center gap-4 mb-5">
          <div className="text-4xl">🗄️</div>

          <div>
            <h3 className="text-xl font-bold text-slate-100 m-0">
              shop_database
            </h3>
            <p className="text-slate-400 text-sm m-0">
              The main container for the application
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-slate-800/60 rounded-lg p-4 text-slate-300">
            📦 products
          </div>

          <div className="bg-slate-800/60 rounded-lg p-4 text-slate-300">
            👤 customers
          </div>

          <div className="bg-slate-800/60 rounded-lg p-4 text-slate-300">
            🧾 orders
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Creating a Database
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`CREATE DATABASE shop;

USE shop;`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why Separate Data?
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Keeping related information organized into separate tables makes the
        application easier to maintain. Instead of searching through one huge
        collection of mixed information, each type of data has its own place.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        A MySQL database is like a well-organized filing cabinet. It provides
        the main home for application data, while tables keep different types
        of information separated and structured.
      </p>
    </article>
  );
}