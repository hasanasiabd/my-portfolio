import React from "react";

export default function NextApi500ErrorStory() {
  return (
    <article className="prose prose-invert max-w-none">

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
            Problem Solving
          </span>

          <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            Next.js
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          My Next.js API Was Returning a 500 Error — How I Found and Fixed It
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed">
          A 500 error can feel like the server simply decided to stop talking.
          But the real problem is usually hiding somewhere behind the response.
        </p>
      </div>

      {/* The Problem */}
      <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-6 mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">🚨</span>
          <h2 className="text-xl font-bold text-red-300 m-0">
            The Problem
          </h2>
        </div>

        <p className="text-slate-300 leading-relaxed m-0">
          I was calling a Next.js API endpoint from the frontend, expecting
          some useful JSON data back. Instead, the browser kept returning:
        </p>

        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mt-4">
          <code className="text-red-400">
            500 Internal Server Error
          </code>
        </div>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Restaurant Kitchen
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Imagine a restaurant. A customer places an order with the waiter.
        The waiter takes that order into the kitchen.
      </p>

      <p className="text-slate-300 leading-relaxed">
        The customer doesn't see what happens inside the kitchen. They only
        expect one thing: their food should eventually arrive.
      </p>

      <p className="text-slate-300 leading-relaxed">
        A <strong>500 error</strong> is similar. The browser successfully
        reached the server, but something inside the kitchen went wrong while
        preparing the response.
      </p>

      <div className="bg-slate-900 border-l-4 border-indigo-500 rounded-r-xl p-5 my-6">
        <p className="text-slate-300 m-0">
          <strong className="text-indigo-300">Important:</strong>{" "}
          A 500 error doesn't necessarily mean the URL is wrong. It usually
          means the server encountered an unexpected problem while processing
          the request.
        </p>
      </div>

      {/* Investigation */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 1: I Stopped Guessing
      </h2>

      <p className="text-slate-300 leading-relaxed">
        My first mistake would have been changing random pieces of code.
        Instead, I went directly to the API route and checked what the server
        was actually doing.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`export async function GET() {
  const users = await db.user.findMany();

  return Response.json(users);
}`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed">
        The suspicious part was the database request. If the database
        connection failed, the entire API could crash before sending a
        response.
      </p>

      {/* Debugging */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 2: I Checked the Server Console
      </h2>

      <p className="text-slate-300 leading-relaxed">
        The browser only showed me <code>500</code>. The server console gave
        me the actual story.
      </p>

      <div className="bg-slate-950 border border-red-500/20 rounded-xl p-5 my-6">
        <pre className="text-red-400 font-mono text-sm overflow-x-auto">
{`Error: Database connection failed
    at GET (...)
    at async ...`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed">
        That changed everything. The API route wasn't necessarily the real
        problem. The database connection was.
      </p>

      {/* Fix */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 3: I Fixed the Root Cause
      </h2>

      <p className="text-slate-300 leading-relaxed">
        I checked the database connection, environment variables, and server
        configuration. After correcting the connection details, the same API
        request started returning the expected data.
      </p>

      <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-6 my-8">
        <h3 className="text-lg font-bold text-emerald-300 m-0 mb-3">
          The Result
        </h3>

        <p className="text-slate-300 m-0">
          The frontend didn't need a complicated change. Once the server-side
          problem was fixed, the API returned a successful response normally.
        </p>
      </div>

      {/* Debug Checklist */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        My 500 Error Checklist
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        {[
          "Check the server terminal",
          "Check the API route",
          "Check environment variables",
          "Check database connection",
          "Check request data",
          "Check server-side exceptions",
        ].map((item, index) => (
          <div
            key={item}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex gap-3"
          >
            <span className="text-indigo-400 font-bold">
              {index + 1}.
            </span>
            <span className="text-slate-300">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Lesson */}
      <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-indigo-300 m-0 mb-3">
          What I Learned
        </h2>

        <p className="text-slate-300 leading-relaxed m-0">
          When an API returns 500, don't immediately blame the frontend.
          Follow the request into the server, inspect the logs, and find the
          first real failure. The error message is usually the breadcrumb that
          leads to the actual problem.
        </p>
      </div>

    </article>
  );
}