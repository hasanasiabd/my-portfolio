import React from "react";

export default function Api500ErrorStory() {
  return (
    <article className="prose prose-invert max-w-none">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
          🔥 Problem Solving · Backend
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4 leading-tight">
          My API Was Returning a 500 Error — How I Found the Backend Problem
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          A 500 error is one of those moments where the browser gives you
          almost no useful information. The real story is usually hidden
          inside the backend logs.
        </p>
      </div>

      {/* Error */}
      <div className="bg-slate-900 border border-red-500/20 rounded-2xl p-6 mb-8 shadow-lg">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          What the browser showed
        </p>

        <div className="mt-3 bg-slate-950 rounded-xl border border-slate-800 p-5">
          <code className="text-red-400 font-mono text-sm">
            POST /api/orders → 500 Internal Server Error
          </code>
        </div>
      </div>

      {/* Analogy */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: The Restaurant Kitchen
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine ordering a burger from a restaurant.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The waiter takes your order successfully. The restaurant is open. The
        kitchen receives the request.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        Then something goes wrong in the kitchen.
      </p>

      <div className="bg-red-500/10 border-l-4 border-red-500 p-5 rounded-r-xl mb-8">
        <p className="text-red-300 font-semibold m-0">
          The customer doesn't need to know exactly which pan caught fire.
          They simply receive: "Sorry, your order couldn't be completed."
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-8">
        That's essentially a 500 error. The request reached the server, but
        something unexpected happened while the server was processing it.
      </p>

      {/* First wrong approach */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 1 — I Didn't Blame the Frontend
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        At first, I could have stared at the frontend code for an hour.
        Instead, I checked the server logs.
      </p>

      <div className="bg-slate-950 border border-red-500/20 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-red-400 font-mono text-sm">
{`POST /api/orders
500 Internal Server Error

Error: Cannot read properties of undefined
(reading 'id')`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        That was the real clue.
      </p>

      {/* Root cause */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 2 — I Found the Root Cause
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        The backend expected a user object to exist:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6 overflow-x-auto">
        <pre className="text-rose-400 font-mono text-sm">
{`const userId = user.id;`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        But in one request, the user wasn't authenticated properly. The
        variable was undefined.
      </p>

      <p className="text-slate-300 leading-relaxed mb-8">
        The API crashed because it assumed something existed without checking
        first.
      </p>

      {/* Fix */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 3 — I Added Validation
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`if (!user) {
  return Response.json(
    { error: "Authentication required" },
    { status: 401 }
  );
}

const userId = user.id;`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-8">
        Now an unauthenticated request no longer crashes the server. It gets a
        meaningful <code>401</code> response instead.
      </p>

      {/* Error handling */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 4 — I Added Proper Error Handling
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`try {
  const order = await createOrder(data);

  return Response.json(order, {
    status: 201,
  });
} catch (error) {
  console.error("Order creation failed:", error);

  return Response.json(
    { error: "Something went wrong" },
    { status: 500 }
  );
}`}
        </pre>
      </div>

      {/* Debug Flow */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        My 500 Error Investigation Flow
      </h2>

      <div className="space-y-3 mb-8">
        {[
          ["01", "Reproduce the error"],
          ["02", "Check the browser Network tab"],
          ["03", "Check backend/server logs"],
          ["04", "Find the exact stack trace"],
          ["05", "Identify the failing assumption"],
          ["06", "Validate the input or dependency"],
          ["07", "Handle the failure gracefully"],
        ].map(([number, text]) => (
          <div
            key={number}
            className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <span className="w-9 h-9 shrink-0 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-mono text-sm font-bold">
              {number}
            </span>

            <span className="text-slate-300 text-sm">
              {text}
            </span>
          </div>
        ))}
      </div>

      {/* Final lesson */}
      <div className="bg-gradient-to-br from-red-500/10 via-indigo-500/5 to-slate-900 border border-red-500/20 rounded-2xl p-6 md:p-8">
        <p className="text-xs uppercase tracking-widest text-red-400 font-bold mb-2">
          What I Learned
        </p>

        <h3 className="text-xl font-bold text-slate-100 mb-3">
          A 500 Error Is a Signal — Not the Diagnosis
        </h3>

        <p className="text-slate-300 leading-relaxed mb-4">
          The browser only knows that the server couldn't successfully finish
          the request. The actual reason lives in the backend.
        </p>

        <p className="text-slate-300 leading-relaxed m-0">
          So instead of randomly changing frontend code, I now follow the
          request into the backend, read the logs, find the exact failing
          operation, and then fix the underlying assumption.
        </p>
      </div>
    </article>
  );
}