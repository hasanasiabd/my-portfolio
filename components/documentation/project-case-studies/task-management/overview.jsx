import React from "react";

export default function TaskManagementOverviewStory() {
  return (
    <article className="prose prose-invert max-w-none">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            PROJECT CASE STUDY
          </span>
          <span className="text-xs text-slate-500">Task Management</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4 leading-tight">
          How I Built a Task Management Application from Scratch
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          A practical story of turning a simple idea — “I need a better way
          to manage my tasks” — into a structured full-stack application.
        </p>
      </div>

      {/* Quick Overview */}
      <div className="bg-slate-900/80 border border-slate-800 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-10 not-prose">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
          Quick Overview
        </p>

        <p className="text-slate-300 leading-relaxed m-0">
          The goal was to build a task management system where users could
          create tasks, update them, mark them as completed, and delete them.
          Instead of treating the project as one giant application, I broke
          it into smaller pieces: UI, API, database, and authentication.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Running a Busy To-Do Desk
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you are running a busy office. Every morning, people hand you
        small pieces of paper containing things that need to be done.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        One paper says, “Finish homepage.” Another says, “Fix login bug.”
        Another says, “Call the client.” By lunchtime, your desk is covered
        with papers.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Eventually you realize that the problem isn't the number of tasks.
        The problem is <strong>organization</strong>.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        So you build a task board. Every task gets a proper place, a status,
        an owner, and an identifier. Now you can answer simple questions:
        What needs to be done? What's already finished? And what's still
        waiting?
      </p>

      {/* Architecture */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Turning the Idea into an Application
      </h2>

      <p className="text-slate-300 leading-relaxed mb-6">
        I approached the application in layers. Each layer had one clear
        responsibility.
      </p>

      <div className="grid md:grid-cols-2 gap-4 not-prose mb-8">
        {[
          ["01", "Frontend", "Where users create and manage their tasks."],
          ["02", "API", "The communication layer between UI and database."],
          ["03", "Database", "Where tasks and users are permanently stored."],
          ["04", "Authentication", "Controls who can access which tasks."],
        ].map(([number, title, description]) => (
          <div
            key={number}
            className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/30 transition"
          >
            <span className="text-xs font-bold text-indigo-400">
              {number}
            </span>

            <h3 className="text-lg font-bold text-slate-100 mt-2 mb-2">
              {title}
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed m-0">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* User Flow */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Journey of a Task
      </h2>

      <p className="text-slate-300 leading-relaxed mb-5">
        A task may look like a simple object on the screen, but behind that
        button click is a complete journey.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-8 not-prose overflow-x-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm min-w-[600px]">
          {[
            "User",
            "React UI",
            "API",
            "Database",
            "Updated UI",
          ].map((item, index) => (
            <React.Fragment key={item}>
              <div className="px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-semibold">
                {item}
              </div>

              {index < 4 && (
                <span className="text-indigo-400 text-lg">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        When a user clicks <code>Create Task</code>, the frontend sends the
        task information to the API. The API validates the request and stores
        it in the database. Once the operation succeeds, the interface
        updates so the user can immediately see the new task.
      </p>

      {/* Example */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Task Is More Than Just a Title
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        I represented a task as structured data rather than treating it as
        plain text.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8 not-prose">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`const task = {
  title: "Build authentication",
  description: "Add login and registration",
  status: "pending",
  priority: "high",
  userId: 42,
};`}
        </pre>
      </div>

      {/* Development */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Building It Step by Step
      </h2>

      <ol className="text-slate-300 leading-relaxed space-y-3 mb-6">
        <li>
          <strong>1. Plan the data:</strong> Decide what information a task
          needs.
        </li>
        <li>
          <strong>2. Design the database:</strong> Create the required tables
          and relationships.
        </li>
        <li>
          <strong>3. Build the API:</strong> Create endpoints for task
          operations.
        </li>
        <li>
          <strong>4. Build the UI:</strong> Create forms, lists, filters, and
          task cards.
        </li>
        <li>
          <strong>5. Connect everything:</strong> Let the frontend communicate
          with the backend.
        </li>
        <li>
          <strong>6. Test the workflow:</strong> Verify creation, editing,
          completion, and deletion.
        </li>
      </ol>

      {/* Lessons */}
      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-6 mt-10 not-prose">
        <h3 className="text-lg font-bold text-indigo-300 mb-3">
          What This Project Taught Me
        </h3>

        <p className="text-slate-300 leading-relaxed m-0">
          The biggest lesson was that a full-stack application becomes much
          easier to understand when it is divided into responsibilities.
          The frontend should not behave like the database, and the database
          should not be responsible for UI decisions. Each layer has a job.
        </p>
      </div>
    </article>
  );
}