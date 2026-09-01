// src/components/documentation/what-i-know/express/middleware.jsx
// This file contains the story for the Express Middleware documentation page.

import React from "react";

export default function ExpressMiddlewareStory() {
  return (
    <article className="prose prose-invert max-w-none">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is Middleware? The Guard Standing Between a Request and a Response
      </h1>

      {/* Quick Overview */}
      <div className="bg-slate-900 border border-slate-800 border-l-4 border-l-indigo-500 p-5 rounded-xl mb-8 shadow-lg">
        <h3 className="text-lg font-bold text-indigo-300 mt-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          Middleware is a function that runs between an incoming request and
          the final response. It can inspect, modify, validate, log, or stop
          a request before it reaches the route handler.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: The Security Guard
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you work in a large office building.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Anyone can walk up to the front door, but that doesn't mean everyone
        should be allowed inside.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        A security guard stands at the entrance.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <p className="text-slate-300 m-0 leading-relaxed">
          The guard might ask:
        </p>

        <ul className="text-slate-300 mt-3 mb-0">
          <li>Who are you?</li>
          <li>Do you have an ID?</li>
          <li>Are you allowed inside?</li>
          <li>Which department are you visiting?</li>
        </ul>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Only after passing the security check does the visitor continue
        toward their destination.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Express middleware works in a very similar way.
      </p>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 mb-8">
        <p className="text-slate-300 m-0 leading-relaxed">
          Request → <strong className="text-indigo-300">Middleware</strong> →
          Route → Response
        </p>
      </div>

      {/* Basic Middleware */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Your First Middleware
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Someone entered the server!");

  next();
});

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(3000);`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The important word here is:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8">
        <code className="text-indigo-300 text-xl">
          next()
        </code>

        <p className="text-slate-400 mt-3 mb-0">
          Calling <code>next()</code> tells Express to continue processing
          the request.
        </p>
      </div>

      {/* Why Middleware */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why Do We Need Middleware?
      </h2>

      <p className="text-slate-300 leading-relaxed mb-6">
        Imagine you have 100 routes.
        If every route needs authentication, logging, or validation,
        writing the same code inside every route would be painful.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <span className="text-2xl">🔐</span>
          <h3 className="text-lg font-bold text-slate-100 mt-3">
            Authentication
          </h3>
          <p className="text-slate-400 mb-0">
            Check whether a user is logged in.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <span className="text-2xl">📝</span>
          <h3 className="text-lg font-bold text-slate-100 mt-3">
            Logging
          </h3>
          <p className="text-slate-400 mb-0">
            Record incoming requests.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <span className="text-2xl">✅</span>
          <h3 className="text-lg font-bold text-slate-100 mt-3">
            Validation
          </h3>
          <p className="text-slate-400 mb-0">
            Check whether incoming data is valid.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <span className="text-2xl">🛡️</span>
          <h3 className="text-lg font-bold text-slate-100 mt-3">
            Security
          </h3>
          <p className="text-slate-400 mb-0">
            Block requests that should not continue.
          </p>
        </div>

      </div>

      {/* Authentication Example */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Real Example: Checking Authentication
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine your dashboard should only be accessible to logged-in users.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`function checkAuth(req, res, next) {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return res.status(401).json({
      message: "Please login first"
    });
  }

  next();
}

app.get(
  "/dashboard",
  checkAuth,
  (req, res) => {
    res.send("Welcome to your dashboard!");
  }
);`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The request must pass through{" "}
        <code className="text-indigo-300">checkAuth</code> first.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        If authentication fails, the journey stops.
        If authentication succeeds, <code>next()</code> allows the request
        to continue.
      </p>

      {/* Flow */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Middleware Journey
      </h2>

      <div className="space-y-3 mb-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          🌐 Client sends request
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="bg-slate-900 border border-indigo-500/30 rounded-xl p-4">
          🛡️ Middleware checks the request
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          ✅ Passed → <code>next()</code>
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          🛣️ Route handler executes
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          📦 Response sent
        </div>

      </div>

      {/* Multiple Middleware */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Middleware Can Work Like a Security Team
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        You don't have to use only one middleware.
        Multiple middleware functions can run one after another.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`app.get(
  "/dashboard",
  checkAuth,
  logRequest,
  validateUser,
  dashboardHandler
);`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Think of it like walking through several security checkpoints:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8">
        <p className="text-slate-300 font-mono text-sm leading-loose m-0">
          Entrance → Security → ID Check → Validation → Office
        </p>
      </div>

      {/* Takeaways */}
      <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-2xl p-6 mt-10">
        <h3 className="text-xl font-bold text-indigo-300 mt-0 mb-3">
          What I Learned
        </h3>

        <p className="text-slate-300 leading-relaxed mb-0">
          Middleware is a powerful layer between the client request and the
          final route handler. It allows us to keep authentication, logging,
          validation, and other shared logic separate from our main business
          logic. The simple idea to remember is: middleware gets a chance to
          inspect or process the request before it moves forward.
        </p>
      </div>

    </article>
  );
}