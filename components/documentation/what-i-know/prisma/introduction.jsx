import React from "react";

export default function PrismaIntroductionStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
          Prisma ORM
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mt-4 mb-4">
          What Is Prisma? The Translator Between Your App and Database
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed">
          Prisma is an ORM that makes it easier for JavaScript and TypeScript
          applications to work with databases using a clean, type-safe API.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          Think of Prisma as a translator between your application and your
          database. Instead of writing SQL for every operation, you can use
          JavaScript or TypeScript to work with your data.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Restaurant Translator
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you walk into a restaurant where the chef only speaks a
        language you don't understand. You want chicken pasta, but the chef
        only understands Italian.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Fortunately, there is a waiter standing between you and the kitchen.
        You tell the waiter what you want. The waiter translates your request
        for the chef, the chef prepares it, and the waiter brings the result
        back to you.
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <p className="text-xs text-slate-500">YOU</p>
          <h3 className="text-lg font-bold text-slate-100">Application</h3>
          <p className="text-sm text-slate-400">
            JavaScript / TypeScript
          </p>
        </div>

        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5">
          <p className="text-xs text-indigo-400">TRANSLATOR</p>
          <h3 className="text-lg font-bold text-indigo-300">Prisma</h3>
          <p className="text-sm text-slate-400">
            Converts application requests into database operations.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <p className="text-xs text-slate-500">KITCHEN</p>
          <h3 className="text-lg font-bold text-slate-100">Database</h3>
          <p className="text-sm text-slate-400">
            PostgreSQL, MySQL, SQLite and more.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Without Prisma
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`const result = await db.query(
  "SELECT * FROM users WHERE email = $1",
  [email]
);`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        With Prisma
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`const user = await prisma.user.findUnique({
  where: {
    email: email,
  },
});`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The second version feels much closer to normal JavaScript. Prisma
        handles the database communication behind the scenes.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why I Would Use Prisma
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        {[
          "Cleaner database code",
          "Type-safe queries",
          "Excellent developer experience",
          "Works naturally with JavaScript and TypeScript",
        ].map((item) => (
          <div
            key={item}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <span className="text-indigo-400 mr-2">✓</span>
            <span className="text-slate-300">{item}</span>
          </div>
        ))}
      </div>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6 mt-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          My Mental Model
        </h3>

        <p className="text-slate-300 m-0">
          <strong>Application → Prisma → Database</strong>
        </p>
      </div>
    </article>
  );
}