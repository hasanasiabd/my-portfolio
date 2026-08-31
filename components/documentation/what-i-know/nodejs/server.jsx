// components/documentation/what-i-know/nodejs/server.jsx

import React from "react";

export default function NodeServerStory() {
  return (
    <article className="prose prose-invert max-w-none">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
            NODE.JS
          </span>

          <span className="text-xs text-slate-500">
            Backend
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          How Does a Node.js Server Work?
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed">
          Understanding how a client sends a request and how a Node.js server
          receives and responds to it.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          💡 Quick Overview
        </h3>

        <p className="text-slate-300 leading-relaxed mb-0">
          A Node.js server listens for incoming requests, processes them, and
          sends responses back to clients such as browsers, mobile apps, or
          other servers.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        📮 The Real-World Story: A Post Office
      </h2>

      <p className="text-slate-300 leading-relaxed mb-5">
        Imagine a post office.
      </p>

      <p className="text-slate-300 leading-relaxed mb-5">
        You want to send a package to your friend. You don't walk directly
        into your friend's house and place the package on their table.
        Instead, you give it to the post office.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">

          <div>
            <div className="text-4xl mb-2">💻</div>
            <strong className="text-slate-100">Client</strong>
            <p className="text-slate-500 text-sm">
              Sends request
            </p>
          </div>

          <div className="text-indigo-400 text-2xl">
            →
          </div>

          <div>
            <div className="text-4xl mb-2">📮</div>
            <strong className="text-slate-100">Node.js Server</strong>
            <p className="text-slate-500 text-sm">
              Receives & processes
            </p>
          </div>

          <div className="text-indigo-400 text-2xl">
            →
          </div>

          <div>
            <div className="text-4xl mb-2">📦</div>
            <strong className="text-slate-100">Response</strong>
            <p className="text-slate-500 text-sm">
              Sends result
            </p>
          </div>

        </div>
      </div>

      <p className="text-slate-300 leading-relaxed mb-5">
        A web application works in a similar way.
      </p>

      <p className="text-slate-300 leading-relaxed mb-5">
        When you visit a website, your browser sends a request to a server.
        The Node.js server receives that request and decides what should
        happen next.
      </p>

      {/* Code */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        Creating a Simple Node.js Server
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden mb-6">
        <div className="px-5 py-3 border-b border-slate-800 text-xs text-slate-500">
          server.js
        </div>

        <pre className="p-5 overflow-x-auto text-sm">
          <code className="text-emerald-400">
{`const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end("Hello from my Node.js server!");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});`}
          </code>
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-5">
        Now start the server:
      </p>

      <div className="bg-black border border-slate-800 rounded-xl p-5 mb-8">
        <code className="text-emerald-400">
          node server.js
        </code>
      </div>

      <p className="text-slate-300 leading-relaxed mb-5">
        When you open <code>http://localhost:3000</code> in your browser,
        the browser sends a request to your Node.js server.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        The server responds with:
      </p>

      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5">
        <p className="text-emerald-400 font-mono m-0">
          Hello from my Node.js server!
        </p>
      </div>

      {/* Flow */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        🔄 The Request → Response Flow
      </h2>

      <div className="space-y-3">
        {[
          "Browser sends a request.",
          "Node.js server receives the request.",
          "The server runs the required logic.",
          "The server creates a response.",
          "Browser receives and displays the response.",
        ].map((step, index) => (
          <div
            key={step}
            className="flex gap-4 items-center bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <span className="w-8 h-8 shrink-0 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-sm">
              {index + 1}
            </span>

            <p className="text-slate-300 m-0">
              {step}
            </p>
          </div>
        ))}
      </div>

      {/* Takeaways */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-slate-100 mt-0">
          🎯 Key Takeaways
        </h2>

        <ul className="text-slate-300 space-y-2">
          <li>A server waits for incoming requests.</li>
          <li>The client sends a request to the server.</li>
          <li>Node.js can process that request.</li>
          <li>The server sends a response back.</li>
          <li>This request-response cycle powers the web.</li>
        </ul>
      </div>

    </article>
  );
}