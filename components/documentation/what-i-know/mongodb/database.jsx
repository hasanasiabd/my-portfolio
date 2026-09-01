import React from "react";

export default function MongoDBDatabaseStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <span className="inline-flex px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
        🍃 MongoDB Fundamentals
      </span>

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mt-4 mb-4">
        How Does a MongoDB Database Work?
      </h1>

      <p className="text-slate-400 text-lg leading-relaxed mb-8">
        A simple story about understanding where MongoDB keeps all your
        application data.
      </p>

      <div className="bg-slate-900 border border-slate-800 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          A MongoDB database is a container that holds collections, and
          collections contain documents. Think of it as a digital warehouse
          where related information is organized into separate sections.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Huge Warehouse
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you own a huge warehouse for an online shopping company.
        Inside that warehouse, you have different sections.
      </p>

      <div className="my-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div className="text-center text-4xl mb-4">🏭</div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">📦</div>
            <p className="text-sm font-bold text-slate-200 m-0">
              Products
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">👤</div>
            <p className="text-sm font-bold text-slate-200 m-0">
              Users
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-4 text-center">
            <div className="text-2xl mb-2">🧾</div>
            <p className="text-sm font-bold text-slate-200 m-0">
              Orders
            </p>
          </div>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The entire warehouse represents the <strong>database</strong>.
        Each section represents a <strong>collection</strong>, and the
        individual boxes inside each section represent
        <strong> documents</strong>.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The MongoDB Hierarchy
      </h2>

      <div className="space-y-3 my-6">
        {[
          ["🍃", "Database", "The main container for related application data."],
          ["📁", "Collection", "A group of related documents."],
          ["📄", "Document", "One individual record stored as BSON/JSON-like data."]
        ].map(([icon, title, description], index) => (
          <div
            key={title}
            className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <div className="text-2xl">{icon}</div>
            <div>
              <div className="text-xs text-indigo-400 font-bold uppercase">
                Level {index + 1}
              </div>
              <h3 className="text-base font-bold text-slate-100 m-0">
                {title}
              </h3>
              <p className="text-sm text-slate-400 m-0">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Creating a Database
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-800 text-xs text-slate-500 font-bold">
          MongoDB Shell
        </div>

        <pre className="p-5 text-sm text-emerald-400 overflow-x-auto">
{`use portfolioDB

db.users.insertOne({
  name: "Hasan",
  role: "Full Stack Developer"
});`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mt-6">
        The database itself is simply the place where related collections
        live. MongoDB then gives you tools to create, read, update, and
        delete the documents stored inside those collections.
      </p>

      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 mt-8">
        <h3 className="text-lg font-bold text-emerald-300 mt-0">
          What I Learned
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          The easiest way to remember MongoDB is:
          <strong> Database → Collection → Document.</strong>
          Once this hierarchy becomes clear, the rest of MongoDB becomes
          much easier to understand.
        </p>
      </div>
    </article>
  );
}