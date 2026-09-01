import React from "react";

export default function FetchFailedStory() {
  return (
    <article className="prose prose-invert max-w-none">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold mb-4">
          🛠️ Problem Solving · API
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4 leading-tight">
          fetch() Failed Even Though the API Was Working — What Went Wrong?
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Sometimes the backend is perfectly healthy, the endpoint exists, and
          the browser still says{" "}
          <code className="text-rose-400">fetch failed</code>. This is the story
          of how I learned that an API can be working perfectly while the
          request reaching it is completely wrong.
        </p>
      </div>

      {/* Quick Diagnosis */}
      <div className="bg-slate-900 border border-rose-500/20 rounded-2xl p-5 md:p-6 mb-8 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-xl">
            🚨
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 m-0">
              The Symptom
            </p>
            <h3 className="text-lg font-bold text-slate-100 m-0">
              The API looked healthy, but fetch() still failed
            </h3>
          </div>
        </div>

        <div className="bg-slate-950 rounded-xl p-4 border border-slate-800">
          <code className="text-rose-400 text-sm">
            TypeError: Failed to fetch
          </code>
        </div>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: The Restaurant That Was Open
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you want to order food from a restaurant. You check Google
        Maps. The restaurant is open. You call them. Someone answers the phone.
        Everything looks perfectly fine.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        But instead of giving the delivery driver the restaurant's address,
        you accidentally give them an incomplete address.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        The restaurant didn't fail. The delivery request failed.
      </p>

      <div className="bg-indigo-500/10 border-l-4 border-indigo-500 rounded-r-xl p-5 mb-8">
        <p className="text-indigo-200 font-semibold m-0">
          💡 The same thing can happen with APIs: the server may be running,
          while the request itself is incorrect.
        </p>
      </div>

      {/* Investigation */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 1 — I Checked the API Directly
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        My first mistake would have been assuming the backend was broken.
        Instead, I opened the endpoint directly.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`GET /api/products

Response:
200 OK`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        That immediately changed the investigation. The API was alive. So the
        problem had to be somewhere between my frontend and that endpoint.
      </p>

      {/* Wrong URL */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 2 — I Inspected the fetch() Request
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Then I looked at the actual request being sent from the browser.
      </p>

      <div className="bg-slate-900 border border-rose-500/20 rounded-xl p-5 mb-6 overflow-x-auto">
        <pre className="text-rose-400 font-mono text-sm">
{`const response = await fetch("/api/product");`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        And there it was.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        The backend endpoint was <code>/api/products</code>, but the frontend
        was requesting <code>/api/product</code>.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-rose-500/5 border border-rose-500/20 rounded-xl p-5">
          <p className="text-xs uppercase tracking-widest text-rose-400 font-bold">
            ❌ Frontend
          </p>
          <code className="text-slate-200">
            /api/product
          </code>
        </div>

        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-5">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
            ✅ Backend
          </p>
          <code className="text-slate-200">
            /api/products
          </code>
        </div>
      </div>

      {/* Fix */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 3 — The Fix
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`const response = await fetch("/api/products");

if (!response.ok) {
  throw new Error("Failed to fetch products");
}

const data = await response.json();

console.log(data);`}
        </pre>
      </div>

      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 mb-8">
        <p className="text-emerald-400 font-bold mb-2">
          ✅ Result
        </p>

        <p className="text-slate-300 m-0">
          The request reached the correct endpoint and the data appeared in
          the UI normally.
        </p>
      </div>

      {/* Checklist */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        My Debugging Checklist
      </h2>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          "Is the API server running?",
          "Is the URL correct?",
          "Is the HTTP method correct?",
          "Is the endpoint path correct?",
          "Is the request being blocked?",
          "Is the response actually successful?",
        ].map((item) => (
          <div
            key={item}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-3"
          >
            <span className="text-indigo-400">✓</span>
            <span className="text-slate-300 text-sm">{item}</span>
          </div>
        ))}
      </div>

      {/* Lesson */}
      <div className="bg-gradient-to-br from-indigo-500/10 to-slate-900 border border-indigo-500/20 rounded-2xl p-6 md:p-8">
        <p className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-2">
          What I Learned
        </p>

        <h3 className="text-xl font-bold text-slate-100 mb-3">
          Don't Debug the Server Before Checking the Request
        </h3>

        <p className="text-slate-300 leading-relaxed m-0">
          When fetch() fails, I don't immediately assume that the backend is
          broken. I first verify the URL, method, request payload, browser
          Network tab, response status, and server logs. Debugging became much
          easier once I stopped guessing and started following the request from
          beginning to end.
        </p>
      </div>
    </article>
  );
}