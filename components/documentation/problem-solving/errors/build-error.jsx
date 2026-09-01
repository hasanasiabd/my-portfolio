import React from "react";

export default function BuildErrorStory() {
  return (
    <article className="prose prose-invert max-w-none">

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
            Problem Solving
          </span>

          <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            Next.js
          </span>

          <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-semibold">
            Build
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          My Next.js Project Wouldn't Build — How I Tracked Down the Error
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed">
          Everything looked fine in development. Then I ran the production
          build—and suddenly the project refused to cooperate.
        </p>
      </div>

      {/* Problem */}
      <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-red-300 m-0 mb-3">
          💥 The Moment Everything Stopped
        </h2>

        <p className="text-slate-300 leading-relaxed">
          I ran:
        </p>

        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 my-4">
          <code className="text-emerald-400">
            npm run build
          </code>
        </div>

        <p className="text-slate-300 leading-relaxed">
          Instead of a successful production build, the terminal showed an
          error.
        </p>
      </div>

      {/* Analogy */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: The Final Inspection
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Imagine you're constructing a house.
      </p>

      <p className="text-slate-300 leading-relaxed">
        During construction, you can walk from room to room and fix things as
        you go. But before handing the house over to the owner, an inspector
        comes in and checks everything.
      </p>

      <p className="text-slate-300 leading-relaxed">
        A production build is similar. Development mode lets you work quickly,
        while the build process performs a more serious final inspection.
      </p>

      <div className="bg-slate-900 border-l-4 border-indigo-500 rounded-r-xl p-5 my-6">
        <p className="text-slate-300 m-0">
          <strong className="text-indigo-300">
            Development working ≠ Production build guaranteed.
          </strong>
        </p>
      </div>

      {/* First Investigation */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 1: I Read the Last Error First
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Build logs can be huge. My first instinct was to read everything from
        the top. That only created more confusion.
      </p>

      <p className="text-slate-300 leading-relaxed">
        Instead, I looked for the actual error message near the end of the
        build output.
      </p>

      <div className="bg-slate-950 border border-red-500/20 rounded-xl p-5 my-6">
        <pre className="text-red-400 font-mono text-sm overflow-x-auto">
{`Failed to compile.

./app/dashboard/page.jsx
Module not found: Can't resolve '@/components/StatsCard'`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed">
        Now I had something concrete to investigate.
      </p>

      {/* Investigation */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 2: I Followed the Error Back to the File
      </h2>

      <p className="text-slate-300 leading-relaxed">
        I opened the file mentioned in the build output:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`import StatsCard from "@/components/StatsCard";`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed">
        Then I inspected the actual folder structure.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-slate-300 font-mono text-sm overflow-x-auto">
{`components/
└── dashboard/
    └── StatsCard.jsx`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed">
        There it was. The file existed—but the import path was wrong.
      </p>

      {/* Fix */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 3: I Corrected the Path
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">

        <div className="bg-slate-900 border border-red-500/20 rounded-xl p-5">
          <p className="text-xs text-slate-500 mb-2">
            ❌ WRONG
          </p>

          <code className="text-red-400">
            @/components/StatsCard
          </code>
        </div>

        <div className="bg-slate-900 border border-emerald-500/20 rounded-xl p-5">
          <p className="text-xs text-slate-500 mb-2">
            ✓ CORRECT
          </p>

          <code className="text-emerald-400">
            @/components/dashboard/StatsCard
          </code>
        </div>

      </div>

      {/* Rebuild */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 4: I Ran the Build Again
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`npm run build

✓ Compiled successfully
✓ Finished TypeScript
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization`}
        </pre>
      </div>

      <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-6 my-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">🎉</span>

          <h3 className="text-lg font-bold text-emerald-300 m-0">
            Build Successful
          </h3>
        </div>

        <p className="text-slate-300 m-0">
          The project finally passed the production inspection.
        </p>
      </div>

      {/* Debugging Method */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        My Build Error Method
      </h2>

      <div className="grid md:grid-cols-3 gap-4 my-6">

        {[
          {
            number: "01",
            title: "Read",
            text: "Find the actual error message."
          },
          {
            number: "02",
            title: "Locate",
            text: "Open the exact file mentioned."
          },
          {
            number: "03",
            title: "Verify",
            text: "Check imports, paths, syntax, and configuration."
          },
        ].map((step) => (
          <div
            key={step.number}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >
            <span className="text-indigo-400 text-sm font-bold">
              {step.number}
            </span>

            <h3 className="text-lg font-bold text-slate-100 mt-2 mb-2">
              {step.title}
            </h3>

            <p className="text-sm text-slate-400 m-0">
              {step.text}
            </p>
          </div>
        ))}

      </div>

      {/* Final Lesson */}
      <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-indigo-300 m-0 mb-3">
          What I Learned
        </h2>

        <p className="text-slate-300 leading-relaxed m-0">
          A build error looks scary when you see hundreds of terminal lines.
          But you don't need to understand everything at once. Find the first
          meaningful error, follow it to the source, fix one thing, and build
          again. Debugging becomes much easier when you treat the error like a
          trail instead of a wall.
        </p>
      </div>

    </article>
  );
}