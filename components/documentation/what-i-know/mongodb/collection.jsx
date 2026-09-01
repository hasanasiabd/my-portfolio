import React from "react";

export default function MongoDBCollectionStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <span className="inline-flex px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
        📁 MongoDB Collections
      </span>

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mt-4 mb-4">
        What Is a Collection? Organizing Data in MongoDB
      </h1>

      <p className="text-slate-400 text-lg leading-relaxed mb-8">
        A simple story about organizing thousands of documents without
        turning your database into chaos.
      </p>

      <div className="bg-slate-900 border border-slate-800 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          A MongoDB collection is a group of related documents. It is
          conceptually similar to a table in a relational database, but
          MongoDB collections contain flexible documents rather than fixed
          rows and columns.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Library Shelves
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine walking into a huge library. There are thousands of books.
        Would you throw every book into one giant pile?
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Absolutely not. You would organize them into sections:
        Programming, History, Science, Fiction, and so on.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {[
          ["💻", "Programming", "JavaScript, React, Node.js"],
          ["🔬", "Science", "Physics, Chemistry, Biology"],
          ["📚", "History", "Ancient and modern history"]
        ].map(([icon, title, items]) => (
          <div
            key={title}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >
            <div className="text-3xl mb-3">{icon}</div>
            <h3 className="text-base font-bold text-slate-100 mt-0">
              {title}
            </h3>
            <p className="text-sm text-slate-400 m-0">{items}</p>
          </div>
        ))}
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        In MongoDB, these sections are like <strong>collections</strong>.
        Each individual book is like a <strong>document</strong>.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Creating a Collection
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden mb-8">
        <pre className="p-5 text-sm text-emerald-400 overflow-x-auto">
{`db.createCollection("products");`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed">
        You can also create a collection automatically by inserting your
        first document into it.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden my-6">
        <pre className="p-5 text-sm text-emerald-400 overflow-x-auto">
{`db.products.insertOne({
  name: "MacBook Pro",
  price: 1999,
  category: "Laptop"
});`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Collections vs SQL Tables
      </h2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-slate-800">
          <thead>
            <tr className="bg-slate-900">
              <th className="text-left p-3 border-b border-slate-800">
                SQL
              </th>
              <th className="text-left p-3 border-b border-slate-800">
                MongoDB
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3 border-b border-slate-800">Database</td>
              <td className="p-3 border-b border-slate-800">Database</td>
            </tr>
            <tr>
              <td className="p-3 border-b border-slate-800">Table</td>
              <td className="p-3 border-b border-slate-800">Collection</td>
            </tr>
            <tr>
              <td className="p-3">Row</td>
              <td className="p-3">Document</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 mt-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          What I Learned
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          A collection is simply MongoDB's way of grouping related
          documents. If a database is a library, collections are the
          organized shelves that keep similar information together.
        </p>
      </div>
    </article>
  );
}