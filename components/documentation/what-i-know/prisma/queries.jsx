import React from "react";

export default function PrismaQueriesStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <span className="inline-flex px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
        Prisma Queries
      </span>

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mt-4 mb-4">
        How Do Prisma Queries Work? Talking to Your Database with JavaScript
      </h1>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          Prisma queries let your application create, read, update, and delete
          database records using a JavaScript-friendly API.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Asking a Librarian
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a giant library containing millions of books. You walk in and
        ask the librarian:
      </p>

      <div className="bg-slate-900 border-l-4 border-indigo-500 rounded-r-xl p-5 my-6">
        <p className="text-slate-200 italic m-0">
          "Please find me every JavaScript book written by this author."
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        You don't walk through every shelf yourself. You describe what you
        need, and the librarian handles the complicated search.
      </p>

      <p className="text-slate-300 leading-relaxed mb-8">
        Prisma queries play a similar role between your application and
        database.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Reading Data
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`const users = await prisma.user.findMany();`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Finding One User
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`const user = await prisma.user.findUnique({
  where: {
    email: "hasan@example.com",
  },
});`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Creating Data
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`const user = await prisma.user.create({
  data: {
    name: "Hasan",
    email: "hasan@example.com",
  },
});`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Updating Data
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`const user = await prisma.user.update({
  where: {
    id: 1,
  },
  data: {
    name: "MD Hasan",
  },
});`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The CRUD Connection
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
        {[
          ["Create", "create()"],
          ["Read", "findMany()"],
          ["Update", "update()"],
          ["Delete", "delete()"],
        ].map(([title, method]) => (
          <div
            key={title}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center"
          >
            <p className="text-xs text-slate-500 m-0">{title}</p>
            <code className="text-indigo-400 text-sm">{method}</code>
          </div>
        ))}
      </div>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6 mt-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          My Mental Model
        </h3>

        <p className="text-slate-300 m-0">
          <strong>
            I describe what data I want → Prisma handles the database work.
          </strong>
        </p>
      </div>
    </article>
  );
}