import React from "react";

export default function ApiNotFoundStory() {
  return (
    <article className="prose prose-invert max-w-none">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
          🔎 Problem Solving · Routing
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4 leading-tight">
          My API Was Returning 404 — How I Found the Wrong Route
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          A 404 error doesn't always mean the server is down. Sometimes the
          server is perfectly healthy — you're simply knocking on the wrong
          door.
        </p>
      </div>

      {/* Error Card */}
      <div className="bg-slate-900 border border-amber-500/20 rounded-2xl p-6 mb-8">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          Browser Response
        </p>

        <div className="mt-3 bg-slate-950 border border-slate-800 rounded-xl p-5">
          <code className="text-amber-400 text-sm">
            GET /api/users → 404 Not Found
          </code>
        </div>
      </div>

      {/* Analogy */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Looking for Apartment 404
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine walking into a huge apartment building and asking the
        receptionist:
      </p>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-5 rounded-r-xl mb-5">
        <p className="text-indigo-300 font-semibold m-0">
          "I'm looking for Apartment 404."
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The building exists. The receptionist exists. The elevators work.
        Everything is fine.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        But there is no Apartment 404.
      </p>

      <p className="text-slate-300 leading-relaxed mb-8">
        That's basically what a 404 API error means: the server received your
        request, but it couldn't find the resource at that route.
      </p>

      {/* Investigation */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 1 — I Checked the Route Definition
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        I expected the API to be available at:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <code className="text-emerald-400">
          /api/users
        </code>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        But the actual route was:
      </p>

      <div className="bg-slate-900 border border-slate-rose-500/20 rounded-xl p-5 mb-8">
        <code className="text-rose-400">
          /api/user
        </code>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        One small difference. One missing <code>s</code>. One 404.
      </p>

      {/* Comparison */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-rose-500/5 border border-rose-500/20 rounded-xl p-5">
          <span className="text-rose-400 font-bold text-sm">
            ❌ Requested
          </span>
          <p className="text-slate-200 font-mono text-sm mt-3 mb-0">
            /api/users
          </p>
        </div>

        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5">
          <span className="text-emerald-400 font-bold text-sm">
            ✅ Actual
          </span>
          <p className="text-slate-200 font-mono text-sm mt-3 mb-0">
            /api/user
          </p>
        </div>
      </div>

      {/* Fix */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 2 — I Fixed the Request
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`const response = await fetch("/api/user");

if (!response.ok) {
  throw new Error(\`Request failed: \${response.status}\`);
}

const data = await response.json();`}
        </pre>
      </div>

      {/* Better Debugging */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 3 — I Started Reading Status Codes Properly
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {[
          ["200", "Request succeeded"],
          ["400", "Bad request"],
          ["401", "Authentication required"],
          ["403", "Access denied"],
          ["404", "Resource not found"],
          ["500", "Server-side failure"],
        ].map(([code, meaning]) => (
          <div
            key={code}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <p className="text-indigo-400 font-mono font-bold text-lg mb-1">
              {code}
            </p>
            <p className="text-slate-400 text-sm m-0">
              {meaning}
            </p>
          </div>
        ))}
      </div>

      {/* Lesson */}
      <div className="bg-gradient-to-br from-amber-500/10 to-slate-900 border border-amber-500/20 rounded-2xl p-6 md:p-8">
        <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
          What I Learned
        </p>

        <h3 className="text-xl font-bold text-slate-100 mb-3">
          404 Is a Direction Problem, Not Automatically a Server Problem
        </h3>

        <p className="text-slate-300 leading-relaxed m-0">
          When I see a 404, I now check the route path first. I compare the
          frontend URL with the backend route definition character by
          character. A tiny naming mismatch can make a perfectly healthy API
          look broken.
        </p>
      </div>
    </article>
  );
}