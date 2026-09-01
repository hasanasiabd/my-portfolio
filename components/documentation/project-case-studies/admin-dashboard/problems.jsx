import React from "react";

export default function AdminDashboardProblemsStory() {
  return (
    <article className="prose prose-invert max-w-none">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold mb-4">
          🧩 PROBLEMS & LESSONS
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          The Problems I Faced While Building My Admin Dashboard
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          The dashboard looked simple from the outside. Building it was a
          different story. Every real project eventually produces problems,
          and this project was no exception.
        </p>
      </div>

      {/* Intro */}
      <div className="bg-slate-900/80 border border-slate-800 border-l-4 border-l-rose-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-rose-300 m-0 mb-2">
          The Reality of Building Software
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          A project is rarely built in a straight line. You build something,
          discover a problem, investigate it, fix it, and then improve the
          architecture so the same problem is less likely to happen again.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Running a Control Room During a Storm
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you're responsible for a city's control room.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Normally, every screen shows green lights. Then suddenly one screen
        stops updating. Another shows the wrong number. A third becomes
        completely unresponsive.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        Your job isn't to panic. Your job is to find out{" "}
        <strong className="text-indigo-300">why</strong>.
      </p>

      <p className="text-slate-300 leading-relaxed mb-8">
        That's basically what debugging an admin dashboard feels like.
      </p>

      {/* Problem 1 */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 shrink-0 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 font-bold">
            01
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-100 m-0 mb-2">
              The Dashboard Was Showing Stale Data
            </h2>

            <p className="text-slate-400 m-0 mb-4">
              After changing a record, the database was updated but the
              dashboard still displayed the old information.
            </p>

            <div className="bg-slate-950 rounded-xl border border-slate-800 p-4">
              <p className="text-xs text-slate-500 m-0 mb-2">THE PROBLEM</p>
              <pre className="text-rose-400 font-mono text-sm overflow-x-auto">
{`Database → Updated
Dashboard → Old data`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-100 mt-6 mb-3">
        How I Solved It
      </h3>

      <p className="text-slate-300 leading-relaxed mb-4">
        I treated the database as the source of truth and made sure the UI
        refreshed or revalidated its data after mutations.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`async function updateProduct(id, data) {
  await updateProductInDatabase(id, data);

  // Refresh / revalidate dashboard data
  await refreshDashboard();
}`}
        </pre>
      </div>

      {/* Problem 2 */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 shrink-0 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold">
            02
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-100 m-0 mb-2">
              Too Much Data Made the Page Heavy
            </h2>

            <p className="text-slate-400 m-0">
              At first, loading every record at once seemed convenient. As the
              dataset grew, it became inefficient.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-100 mt-6 mb-3">
        The Fix: Pagination
      </h3>

      <p className="text-slate-300 leading-relaxed mb-4">
        Instead of bringing thousands of records to the browser, I started
        loading a manageable number at a time.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`const page = 1;
const limit = 20;

const offset = (page - 1) * limit;

// Only fetch the records needed
const users = await getUsers({
  limit,
  offset,
});`}
        </pre>
      </div>

      {/* Problem 3 */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 shrink-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
            03
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-100 m-0 mb-2">
              Repeated UI Logic Started Growing
            </h2>

            <p className="text-slate-400 m-0">
              Different pages started needing similar tables, buttons, loading
              states, and confirmation messages.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-100 mt-6 mb-3">
        The Fix: Reusable Components
      </h3>

      <p className="text-slate-300 leading-relaxed mb-4">
        Instead of copying the same UI again and again, I extracted reusable
        pieces.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`<DataTable
  columns={userColumns}
  data={users}
/>

<ConfirmDialog
  title="Delete User?"
  onConfirm={handleDelete}
/>`}
        </pre>
      </div>

      {/* Problem 4 */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-8">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 shrink-0 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-bold">
            04
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-100 m-0 mb-2">
              Destructive Actions Needed Protection
            </h2>

            <p className="text-slate-400 m-0">
              Deleting users or important records is not an action that should
              happen accidentally.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-bold text-slate-100 mt-6 mb-3">
        The Fix: Confirmation + Validation
      </h3>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 my-6">
        <ul className="text-slate-300 m-0 space-y-2">
          <li>✓ Ask for confirmation before destructive actions.</li>
          <li>✓ Validate the request on the server.</li>
          <li>✓ Never trust client-side checks alone.</li>
          <li>✓ Restrict sensitive operations to authorized users.</li>
        </ul>
      </div>

      {/* Debugging mindset */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        My Debugging Process
      </h2>

      <div className="grid md:grid-cols-4 gap-3 my-6">
        {[
          ["1", "Reproduce", "Make the problem happen again."],
          ["2", "Inspect", "Find where the behavior changes."],
          ["3", "Fix", "Change the smallest responsible piece."],
          ["4", "Verify", "Make sure the fix didn't break something else."],
        ].map(([number, title, description]) => (
          <div
            key={number}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <span className="text-indigo-400 font-bold text-sm">
              STEP {number}
            </span>

            <h3 className="text-base font-bold text-slate-100 m-0 mt-2">
              {title}
            </h3>

            <p className="text-xs text-slate-500 m-0 mt-2">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Biggest lesson */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Biggest Lesson
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        The biggest lesson wasn't a specific React trick, database query, or
        CSS technique.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        It was learning to stop guessing.
      </p>

      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-6 my-8">
        <p className="text-xl font-bold text-slate-100 m-0 mb-3">
          "Don't ask: What should I change?"
        </p>

        <p className="text-indigo-300 text-lg font-semibold m-0">
          Ask: Where does the behavior actually go wrong?
        </p>
      </div>

      {/* Final */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mt-10">
        <p className="text-xs text-slate-500 m-0">FINAL TAKEAWAY</p>

        <h3 className="text-lg font-bold text-slate-100 m-0 mt-1">
          Problems Are Part of the Project
        </h3>

        <p className="text-slate-400 text-sm mt-2 mb-0">
          Every bug became an opportunity to understand the system better and
          make the architecture stronger.
        </p>
      </div>
    </article>
  );
}