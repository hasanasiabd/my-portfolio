import React from "react";

export default function MongoDBDocumentStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <span className="inline-flex px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
        📄 MongoDB Documents
      </span>

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mt-4 mb-4">
        What Is a MongoDB Document? Understanding JSON-Like Data
      </h1>

      <p className="text-slate-400 text-lg leading-relaxed mb-8">
        The story of how MongoDB stores one complete piece of information.
      </p>

      <div className="bg-slate-900 border border-slate-800 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          A MongoDB document is an individual record stored inside a
          collection. Documents contain fields and values and are stored
          internally as BSON, a binary representation of JSON-like data.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Customer Profile
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a receptionist at a company. Whenever a new customer
        arrives, the receptionist creates a profile containing everything
        important about that person.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center text-2xl">
            👨‍💻
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-100 m-0">
              Hasan
            </h3>
            <p className="text-sm text-slate-500 m-0">
              Full Stack Developer
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-950 rounded-lg p-3">
            <span className="text-xs text-slate-500">Email</span>
            <p className="text-sm text-slate-300 m-0">
              hasan@example.com
            </p>
          </div>

          <div className="bg-slate-950 rounded-lg p-3">
            <span className="text-xs text-slate-500">Experience</span>
            <p className="text-sm text-slate-300 m-0">
              3 Years
            </p>
          </div>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed">
        That entire profile can be represented as one MongoDB document.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden my-8">
        <div className="px-5 py-3 border-b border-slate-800 text-xs text-slate-500 font-bold">
          user document
        </div>

        <pre className="p-5 text-sm text-emerald-400 overflow-x-auto">
{`{
  name: "Hasan",
  email: "hasan@example.com",
  role: "Full Stack Developer",
  experience: 3,
  skills: [
    "JavaScript",
    "React",
    "Node.js"
  ]
}`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Documents Can Contain Nested Data
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        One of MongoDB's powerful features is that a document can contain
        arrays and nested objects.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
        <pre className="p-5 text-sm text-emerald-400 overflow-x-auto">
{`{
  name: "Hasan",

  address: {
    city: "Dhaka",
    country: "Bangladesh"
  },

  skills: [
    "React",
    "Next.js",
    "Node.js"
  ]
}`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mt-6">
        Instead of splitting this information into several tables, MongoDB
        can keep related information together when that matches the way
        your application works with the data.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Automatic `_id`
      </h2>

      <p className="text-slate-300 leading-relaxed">
        MongoDB normally gives every document a unique <code>_id</code>
        field. This identifier helps MongoDB distinguish one document from
        another.
      </p>

      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 mt-8">
        <h3 className="text-lg font-bold text-amber-300 mt-0">
          What I Learned
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          A MongoDB document is like a complete digital profile card.
          Instead of thinking about rows, think about self-contained
          documents containing the information your application needs.
        </p>
      </div>
    </article>
  );
}