import React from "react";

export default function PostgresConnectionErrorStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
          🛠️ Problem Solving
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mt-4 mb-4">
          PostgreSQL Wouldn't Connect — Finding the Real Cause of the Connection Error
        </h1>

        <p className="text-slate-400 text-base leading-relaxed">
          Sometimes the database is running perfectly, your code looks correct,
          and yet your application simply refuses to connect. This is the story
          of how I approached that kind of problem without randomly changing code.
        </p>
      </div>

      {/* Problem */}
      <div className="bg-red-950/20 border border-red-500/20 border-l-4 border-l-red-500 rounded-xl p-5 my-8">
        <h3 className="text-lg font-bold text-red-300 m-0 mb-2">
          🚨 The Problem
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          My application was trying to communicate with PostgreSQL, but the
          connection was failing. Instead of getting the expected database
          response, the application was throwing a connection error.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Restaurant With a Locked Kitchen
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you own a busy restaurant.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Customers are sitting in the dining area, waiters are taking orders,
        and everything looks normal from the outside.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        But there's one problem: the kitchen door is locked.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The waiter can take an order, but the order can never reach the chef.
        The restaurant isn't necessarily broken. The communication path is.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <p className="text-slate-300 m-0">
          <strong className="text-indigo-400">Application</strong> → Waiter
          <br />
          <strong className="text-indigo-400">PostgreSQL</strong> → Chef
          <br />
          <strong className="text-indigo-400">Connection</strong> → Kitchen door
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        That's exactly how I started thinking about the database connection.
        Instead of immediately blaming PostgreSQL, I checked every part of the
        communication path.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 1: Is PostgreSQL Actually Running?
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        The first question was simple:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <p className="text-yellow-300 font-mono text-sm m-0">
          "Is the database server actually available?"
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        There is no point debugging application code if the database server
        itself isn't running.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        I checked whether PostgreSQL was running and whether it was listening
        on the expected port.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 2: Check the Connection Details
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Next I looked at the database connection string.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`DATABASE_URL="postgresql://username:password@localhost:5432/my_database"`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        A connection string is basically an address. If even one part is
        incorrect, the application may be knocking on the wrong door.
      </p>

      <ul className="text-slate-300 space-y-2">
        <li>• Username — Who is trying to enter?</li>
        <li>• Password — Are they allowed inside?</li>
        <li>• Host — Which machine has the database?</li>
        <li>• Port — Which door is PostgreSQL listening on?</li>
        <li>• Database name — Which database are we trying to enter?</li>
      </ul>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 3: Stop Guessing, Start Isolating
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        One of the biggest lessons I learned was that debugging becomes much
        easier when you isolate the problem.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Instead of changing five things at once, I tested the database
        connection independently.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`// Example connection test

import { Client } from "pg";

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();

console.log("Database connected successfully!");

await client.end();`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        If this isolated test fails, the problem is probably somewhere in the
        database configuration or network connection rather than the React UI.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Fix
      </h2>

      <div className="bg-emerald-950/20 border border-emerald-500/20 border-l-4 border-l-emerald-500 rounded-xl p-5 my-6">
        <h3 className="text-lg font-bold text-emerald-300 m-0 mb-2">
          ✅ The Debugging Approach
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          I verified that PostgreSQL was running, checked the host and port,
          confirmed the database existed, and verified that the application's
          environment variable contained the correct connection information.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        A database connection error isn't always a PostgreSQL problem. It is
        often a communication problem. The fastest way to solve it is to
        investigate the communication chain one piece at a time instead of
        randomly rewriting working code.
      </p>
    </article>
  );
}