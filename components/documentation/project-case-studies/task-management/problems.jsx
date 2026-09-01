import React from "react";

export default function TaskManagementProblemsStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
          PROJECT PROBLEMS
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4 leading-tight">
          The Problems I Faced While Building My Task Management App
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          The clean final version hides the messy middle. This is the story
          of the bugs, unexpected behavior, and decisions that happened while
          building the application.
        </p>
      </div>

      <div className="bg-slate-900/80 border border-slate-800 border-l-4 border-l-amber-500 rounded-xl p-5 mb-10 not-prose">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
          The Reality of Building
        </p>

        <p className="text-slate-300 leading-relaxed m-0">
          A project rarely works perfectly on the first attempt. The useful
          part of development is often not writing the first version — it is
          understanding why that version failed and improving it.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Building a House
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine building a house.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You create the foundation, build the walls, install the doors, and
        finally paint everything.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        But during construction, you discover that one door doesn't close
        properly. A pipe is in the wrong place. An electrical connection
        doesn't work.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        You don't throw away the entire house. You find the faulty part,
        understand why it happened, fix it, and continue.
      </p>

      <p className="text-slate-300 leading-relaxed mb-8">
        Software development works the same way.
      </p>

      {/* Problem 1 */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6 not-prose">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-500/10 text-red-400 text-sm font-bold">
            01
          </span>

          <h3 className="text-lg font-bold text-slate-100">
            Tasks Were Not Appearing After Creation
          </h3>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          The API successfully created the task, but the UI still showed the
          old task list.
        </p>

        <div className="bg-slate-950 rounded-lg p-4 mb-4">
          <p className="text-xs text-red-400 font-bold uppercase mb-2">
            What was happening?
          </p>

          <p className="text-sm text-slate-400 m-0">
            The database had the new task, but the frontend was still using
            previously fetched state.
          </p>
        </div>

        <div className="bg-slate-950 rounded-lg p-4">
          <p className="text-xs text-emerald-400 font-bold uppercase mb-2">
            The lesson
          </p>

          <p className="text-sm text-slate-400 m-0">
            A successful backend operation does not automatically update
            frontend state. The UI needs to be synchronized with the new data.
          </p>
        </div>
      </div>

      {/* Problem 2 */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6 not-prose">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-500/10 text-red-400 text-sm font-bold">
            02
          </span>

          <h3 className="text-lg font-bold text-slate-100">
            Users Could See Data They Shouldn't Own
          </h3>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          A task management system needs more than authentication. It also
          needs authorization.
        </p>

        <div className="bg-slate-950 rounded-lg p-4">
          <p className="text-sm text-slate-400 leading-relaxed m-0">
            Knowing who the user is answers <strong>“Who are you?”</strong>.
            Authorization answers <strong>“Are you allowed to access this?”</strong>.
          </p>
        </div>
      </div>

      {/* Problem 3 */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-6 not-prose">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-500/10 text-red-400 text-sm font-bold">
            03
          </span>

          <h3 className="text-lg font-bold text-slate-100">
            Updating Tasks Created Unexpected State
          </h3>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          Editing one task sometimes affected what the UI displayed for
          another task.
        </p>

        <p className="text-sm text-slate-400 leading-relaxed m-0">
          This forced me to think more carefully about immutable state updates,
          unique task IDs, and how list rendering works in React.
        </p>
      </div>

      {/* Problem 4 */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8 not-prose">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-500/10 text-red-400 text-sm font-bold">
            04
          </span>

          <h3 className="text-lg font-bold text-slate-100">
            Error Handling Was Easy to Ignore
          </h3>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          It is easy to build the happy path:
        </p>

        <div className="bg-slate-950 rounded-lg p-4 mb-4">
          <code className="text-emerald-400 text-sm">
            User clicks → API works → Task appears
          </code>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed m-0">
          Real applications also need to handle failed requests, invalid
          input, missing data, unauthorized actions, and database errors.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Debugging Mindset
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        One of the biggest lessons from this project was learning not to
        panic when something breaks.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        Instead of randomly changing code, I started following a simple
        process:
      </p>

      <div className="grid md:grid-cols-2 gap-4 not-prose mb-8">
        {[
          ["Observe", "What exactly is going wrong?"],
          ["Reproduce", "Can I make the problem happen consistently?"],
          ["Trace", "Where does the incorrect behavior begin?"],
          ["Fix", "What is the smallest reliable change?"],
        ].map(([title, description]) => (
          <div
            key={title}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >
            <h3 className="text-base font-bold text-indigo-300 mb-2">
              {title}
            </h3>

            <p className="text-sm text-slate-400 m-0 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Final */}
      <div className="bg-gradient-to-br from-indigo-500/10 to-slate-900 border border-indigo-500/20 rounded-2xl p-6 md:p-8 mt-10 not-prose">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
          Final Takeaway
        </p>

        <h3 className="text-xl font-bold text-slate-100 mb-3">
          The bugs were part of the project — not a failure of the project.
        </h3>

        <p className="text-slate-400 leading-relaxed m-0">
          Every unexpected behavior forced me to understand the application
          more deeply. The finished task manager was useful, but the debugging
          process was what actually improved my development skills.
        </p>
      </div>
    </article>
  );
}