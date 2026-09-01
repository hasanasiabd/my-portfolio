import React from "react";

export default function TaskManagementApiStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
          PROJECT CASE STUDY
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4 leading-tight">
          How I Built APIs for Creating, Updating, and Deleting Tasks
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          The API became the communication bridge between my task management
          interface and the database.
        </p>
      </div>

      <div className="bg-slate-900/80 border border-slate-800 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-10 not-prose">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
          Quick Overview
        </p>

        <p className="text-slate-300 leading-relaxed m-0">
          I created clear API operations for the core task lifecycle:
          creating a task, reading tasks, updating existing tasks, and
          deleting tasks.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Restaurant Waiter
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine sitting in a restaurant.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You don't walk into the kitchen and start cooking your own food.
        Instead, you tell the waiter what you want.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The waiter takes your request to the kitchen, the kitchen prepares
        it, and the waiter brings the result back to you.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        An API works in a very similar way. The frontend is the customer,
        the API is the waiter, and the database is the kitchen.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 not-prose mb-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="px-5 py-4 rounded-xl bg-slate-900 border border-slate-700">
            <p className="text-xs text-slate-500 mb-1">CUSTOMER</p>
            <strong className="text-slate-200">Frontend</strong>
          </div>

          <span className="text-indigo-400 text-xl">→</span>

          <div className="px-5 py-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30">
            <p className="text-xs text-indigo-400 mb-1">WAITER</p>
            <strong className="text-indigo-300">API</strong>
          </div>

          <span className="text-indigo-400 text-xl">→</span>

          <div className="px-5 py-4 rounded-xl bg-slate-900 border border-slate-700">
            <p className="text-xs text-slate-500 mb-1">KITCHEN</p>
            <strong className="text-slate-200">Database</strong>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Core Endpoints
      </h2>

      <div className="space-y-3 not-prose mb-8">
        {[
          ["POST", "/api/tasks", "Create a new task"],
          ["GET", "/api/tasks", "Retrieve tasks"],
          ["PUT", "/api/tasks/:id", "Update an existing task"],
          ["DELETE", "/api/tasks/:id", "Remove a task"],
        ].map(([method, endpoint, description]) => (
          <div
            key={endpoint}
            className="flex flex-col sm:flex-row sm:items-center gap-3 bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <span className="w-fit px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-bold">
              {method}
            </span>

            <code className="text-slate-200 text-sm">
              {endpoint}
            </code>

            <span className="text-slate-500 text-sm sm:ml-auto">
              {description}
            </span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Creating a Task
      </h2>

      <p className="text-slate-300 leading-relaxed mb-5">
        When the user submits a task form, the frontend sends structured data
        to the API.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8 not-prose">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`const response = await fetch("/api/tasks", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Finish portfolio",
    priority: "high",
  }),
});`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Updating a Task
      </h2>

      <p className="text-slate-300 leading-relaxed mb-5">
        Updating is useful when a task changes state. For example, a pending
        task can become completed.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8 not-prose">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`await fetch("/api/tasks/42", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    status: "completed",
  }),
});`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Deleting a Task
      </h2>

      <p className="text-slate-300 leading-relaxed mb-5">
        When a task is no longer needed, the frontend can request its removal.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8 not-prose">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`await fetch("/api/tasks/42", {
  method: "DELETE",
});`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What the API Taught Me
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        The important lesson wasn't memorizing HTTP methods. It was learning
        to design predictable communication between different parts of an
        application.
      </p>

      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-6 mt-10 not-prose">
        <h3 className="text-lg font-bold text-indigo-300 mb-3">
          Key Lesson
        </h3>

        <p className="text-slate-300 leading-relaxed m-0">
          A good API should make the application's intentions obvious. When
          another developer sees <code>POST /api/tasks</code>, they should
          immediately understand what that endpoint is responsible for.
        </p>
      </div>
    </article>
  );
}