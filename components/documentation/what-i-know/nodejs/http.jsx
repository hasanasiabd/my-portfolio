// components/documentation/what-i-know/nodejs/http.jsx

import React from "react";

export default function HttpStory() {
  return (
    <article className="prose prose-invert max-w-none">

      {/* Header */}
      <div className="mb-10">

        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
            NODE.JS
          </span>

          <span className="text-xs text-slate-500">
            Web Fundamentals
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          What Is HTTP?
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed">
          How browsers and servers communicate using requests and responses.
        </p>

      </div>

      {/* Overview */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          💡 Quick Overview
        </h3>

        <p className="text-slate-300 leading-relaxed mb-0">
          HTTP stands for HyperText Transfer Protocol. It defines the rules
          that clients and servers use to communicate over the web.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        🍽️ The Real-World Story: Ordering Food
      </h2>

      <p className="text-slate-300 leading-relaxed mb-5">
        Imagine you walk into a restaurant.
      </p>

      <p className="text-slate-300 leading-relaxed mb-5">
        You sit down and tell the waiter:
      </p>

      <div className="bg-indigo-500/10 border-l-4 border-indigo-500 rounded-r-xl p-5 mb-6">
        <p className="text-indigo-300 font-semibold m-0">
          "I want one chicken burger."
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-5">
        The waiter takes your order to the kitchen. The kitchen prepares the
        burger and the waiter brings it back to you.
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
          <div className="text-3xl mb-3">🧑</div>
          <h3 className="font-bold text-slate-100">
            Client
          </h3>
          <p className="text-slate-500 text-sm">
            Makes a request
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
          <div className="text-3xl mb-3">📝</div>
          <h3 className="font-bold text-slate-100">
            HTTP Request
          </h3>
          <p className="text-slate-500 text-sm">
            Carries the order
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-center">
          <div className="text-3xl mb-3">👨‍🍳</div>
          <h3 className="font-bold text-slate-100">
            Server
          </h3>
          <p className="text-slate-500 text-sm">
            Processes the request
          </p>
        </div>

      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        The web works in almost the same way.
      </p>

      {/* HTTP Flow */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        🔄 HTTP Request → Response
      </h2>

      <div className="space-y-4 mb-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <span className="text-indigo-400 font-bold">
            01 — Request
          </span>

          <p className="text-slate-300 mt-2 mb-0">
            The browser asks the server for something.
          </p>
        </div>

        <div className="text-center text-indigo-400 text-xl">
          ↓
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <span className="text-indigo-400 font-bold">
            02 — Processing
          </span>

          <p className="text-slate-300 mt-2 mb-0">
            The server processes the request.
          </p>
        </div>

        <div className="text-center text-indigo-400 text-xl">
          ↓
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <span className="text-indigo-400 font-bold">
            03 — Response
          </span>

          <p className="text-slate-300 mt-2 mb-0">
            The server sends data back to the browser.
          </p>
        </div>

      </div>

      {/* Methods */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        🛠️ Common HTTP Methods
      </h2>

      <div className="grid md:grid-cols-2 gap-4 mb-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-emerald-400 font-bold">
            GET
          </code>

          <p className="text-slate-400 text-sm mt-2">
            Ask the server to send data.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-yellow-400 font-bold">
            POST
          </code>

          <p className="text-slate-400 text-sm mt-2">
            Send new data to the server.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-blue-400 font-bold">
            PUT / PATCH
          </code>

          <p className="text-slate-400 text-sm mt-2">
            Update existing data.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-red-400 font-bold">
            DELETE
          </code>

          <p className="text-slate-400 text-sm mt-2">
            Remove existing data.
          </p>
        </div>

      </div>

      {/* Node Example */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        💻 HTTP with Node.js
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden mb-8">

        <div className="px-5 py-3 border-b border-slate-800 text-xs text-slate-500">
          server.js
        </div>

        <pre className="p-5 overflow-x-auto text-sm leading-relaxed">
          <code className="text-emerald-400">
{`const http = require("http");

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/products") {

    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify([
        { id: 1, name: "Laptop" },
        { id: 2, name: "Phone" }
      ])
    );
  }
});

server.listen(3000, () => {
  console.log("Server running...");
});`}
          </code>
        </pre>

      </div>

      {/* Connection */}
      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6 mt-8">

        <h3 className="text-indigo-300 font-bold mt-0">
          🧠 Connecting the Story
        </h3>

        <p className="text-slate-300 leading-relaxed mb-3">
          When the browser requests:
        </p>

        <div className="bg-black rounded-lg p-4 mb-4">
          <code className="text-emerald-400">
            GET /products
          </code>
        </div>

        <p className="text-slate-300 leading-relaxed mb-0">
          Node.js receives that request, finds the products, and sends the
          product data back as the response.
        </p>

      </div>

      {/* Takeaways */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-10">

        <h2 className="text-xl font-bold text-slate-100 mt-0">
          🎯 Key Takeaways
        </h2>

        <ul className="text-slate-300 space-y-2">
          <li>HTTP is a communication protocol for the web.</li>
          <li>The client sends an HTTP request.</li>
          <li>The server processes the request.</li>
          <li>The server sends an HTTP response.</li>
          <li>GET, POST, PUT, PATCH, and DELETE are common HTTP methods.</li>
        </ul>

      </div>

    </article>
  );
}