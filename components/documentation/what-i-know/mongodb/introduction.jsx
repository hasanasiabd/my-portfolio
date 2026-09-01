import React from "react";

export default function MongoDBIntroductionStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          🍃 MongoDB Fundamentals
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mt-4 mb-4">
          What Is MongoDB? Understanding Document-Based Data Storage
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed">
          A simple story about moving from rigid spreadsheets to flexible
          digital documents.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 leading-relaxed m-0">
          MongoDB is a NoSQL database that stores data as flexible,
          JSON-like documents instead of traditional rows and columns.
          It is designed to make working with application data natural,
          flexible, and developer-friendly.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: The Digital Filing Cabinet
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you run a large company. Every customer has a profile:
        their name, email, address, phone number, and maybe their favorite
        products.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        In the beginning, you might keep all of this information inside
        traditional spreadsheets. Every row follows the same structure.
        But eventually, customers become different.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">📊</div>
          <h3 className="text-lg font-bold text-slate-100 mt-0">
            Traditional Table
          </h3>
          <p className="text-sm text-slate-400 mb-0">
            Every record follows predefined rows and columns.
          </p>
        </div>

        <div className="bg-slate-900/80 border border-emerald-500/20 rounded-xl p-5">
          <div className="text-2xl mb-3">📄</div>
          <h3 className="text-lg font-bold text-slate-100 mt-0">
            MongoDB Document
          </h3>
          <p className="text-sm text-slate-400 mb-0">
            Each record can naturally contain its own structure.
          </p>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        MongoDB is like giving every customer their own digital document.
        One customer might have two addresses, another might have a list of
        favorite products, and another might have additional profile
        information.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A MongoDB Document Looks Familiar
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden mb-8">
        <div className="px-5 py-3 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-500">
          customer.js
        </div>

        <pre className="p-5 overflow-x-auto text-sm text-emerald-400">
{`const customer = {
  name: "Hasan",
  email: "hasan@example.com",
  age: 25,
  skills: ["React", "Next.js", "Node.js"]
};`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        This looks very similar to a JavaScript object. That is one of the
        reasons MongoDB feels comfortable to many JavaScript developers.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why Developers Use MongoDB
      </h2>

      <div className="grid sm:grid-cols-2 gap-4 my-6">
        {[
          ["⚡", "Flexible Structure", "Documents can evolve as your application grows."],
          ["🧩", "Natural Data Model", "Complex data can be represented inside one document."],
          ["📈", "Scalable", "MongoDB is designed for applications that handle growing datasets."],
          ["💻", "Developer Friendly", "JSON-like documents feel natural in modern JavaScript applications."]
        ].map(([icon, title, description]) => (
          <div
            key={title}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >
            <div className="text-2xl mb-3">{icon}</div>
            <h3 className="text-base font-bold text-slate-100 mt-0">
              {title}
            </h3>
            <p className="text-sm text-slate-400 mb-0">
              {description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 mt-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          What I Learned
        </h3>

        <p className="text-slate-300 leading-relaxed mb-0">
          MongoDB changes the way we think about storing application data.
          Instead of forcing every piece of information into a rigid table,
          we can model data closer to the way the application actually uses it.
        </p>
      </div>
    </article>
  );
}