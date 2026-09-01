import React from "react";

export default function WrongDatabaseUrlStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
          🔍 Debugging Story
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mt-4 mb-4">
          My DATABASE_URL Was Wrong — How I Found and Fixed the Connection Problem
        </h1>

        <p className="text-slate-400 leading-relaxed">
          The application was running. PostgreSQL was running. The code looked
          fine. So why couldn't the application reach the database?
        </p>
      </div>

      <div className="bg-orange-950/20 border border-orange-500/20 border-l-4 border-l-orange-500 rounded-xl p-5 my-8">
        <h3 className="text-lg font-bold text-orange-300 m-0 mb-2">
          ⚠️ The Strange Part
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          Everything looked healthy individually, but the application still
          couldn't establish the expected database connection.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: The Wrong Address
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine sending a package to your friend.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The package is perfectly packed. The delivery driver is working. The
        road is open.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        But you accidentally wrote the wrong house number.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6 text-center">
        <p className="text-slate-400 m-0">
          Working application + Working database + <strong className="text-red-400">Wrong address</strong>
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The package will never arrive.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        A DATABASE_URL works exactly like that address.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What a DATABASE_URL Actually Contains
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`postgresql://username:password@host:5432/database_name`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        I started checking every section instead of assuming the entire string
        was correct.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        {[
          ["Username", "Database account"],
          ["Password", "Authentication credential"],
          ["Host", "Database server location"],
          ["Port", "PostgreSQL communication port"],
          ["Database", "Target database name"],
        ].map(([label, description]) => (
          <div
            key={label}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <p className="text-indigo-400 font-bold text-sm m-0">{label}</p>
            <p className="text-slate-400 text-sm mt-1 mb-0">{description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Investigation
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        I compared the application's DATABASE_URL with the actual PostgreSQL
        configuration.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`# .env

DATABASE_URL="postgresql://user:password@localhost:5432/shop_db"`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The important part was not simply checking whether DATABASE_URL existed.
        I had to verify that its value actually matched the database I intended
        to use.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why This Bug Is So Easy to Miss
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Environment variables are invisible from the UI.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The frontend can look perfect while the backend is trying to connect to
        a database that doesn't exist, a different port, or the wrong host.
      </p>

      <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-xl p-5 my-8">
        <p className="text-indigo-300 font-semibold m-0">
          💡 Debugging Lesson
        </p>

        <p className="text-slate-300 mt-2 mb-0">
          Never assume that an environment variable is correct just because it
          exists. Its value matters just as much as its presence.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Fix
      </h2>

      <div className="bg-emerald-950/20 border border-emerald-500/20 border-l-4 border-l-emerald-500 rounded-xl p-5 my-6">
        <h3 className="text-lg font-bold text-emerald-300 m-0 mb-2">
          ✅ Verify → Correct → Restart
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          I corrected the DATABASE_URL, restarted the development server so the
          environment variable was loaded again, and tested the connection.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        One wrong character in a database connection string can break an entire
        application. The lesson wasn't just "fix the URL." The bigger lesson
        was to treat configuration as part of the application's architecture,
        not as an afterthought.
      </p>
    </article>
  );
}