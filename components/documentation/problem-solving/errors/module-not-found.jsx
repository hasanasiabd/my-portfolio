import React from "react";

export default function ModuleNotFoundStory() {
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
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          Module Not Found Error — The File Was There, So What Went Wrong?
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed">
          One of those errors that makes you stare at the folder and think,
          "But... the file is literally right there." 😅
        </p>
      </div>

      {/* Problem */}
      <div className="bg-red-950/20 border border-red-500/20 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-bold text-red-300 m-0 mb-3">
          🚨 The Problem
        </h2>

        <p className="text-slate-300 leading-relaxed">
          Next.js reported that it couldn't find a module:
        </p>

        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mt-4">
          <code className="text-red-400">
            Module not found: Can't resolve '@/components/Button'
          </code>
        </div>

        <p className="text-slate-400 mt-4 mb-0">
          I checked the folder. The component existed. So why was Next.js
          acting like it had never heard of it?
        </p>
      </div>

      {/* Analogy */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Finding a House
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Imagine giving someone this address:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-5">
        <code className="text-indigo-400">
          Dhaka → Road 10 → House 25
        </code>
      </div>

      <p className="text-slate-300 leading-relaxed">
        You arrive at Road 10 and discover that the house is actually named
        <strong> House-025</strong>.
      </p>

      <p className="text-slate-300 leading-relaxed">
        The building exists. But your address doesn't exactly match it.
        That's essentially what can happen with module imports.
      </p>

      {/* Investigation */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 1: I Checked the Filename
      </h2>

      <p className="text-slate-300 leading-relaxed">
        I compared the import statement with the actual filename.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-6">

        <div className="bg-slate-900 border border-red-500/20 rounded-xl p-5">
          <p className="text-xs text-slate-500 mb-2">
            IMPORT
          </p>

          <code className="text-red-400">
            @/components/Button
          </code>
        </div>

        <div className="bg-slate-900 border border-emerald-500/20 rounded-xl p-5">
          <p className="text-xs text-slate-500 mb-2">
            ACTUAL FILE
          </p>

          <code className="text-emerald-400">
            button.jsx
          </code>
        </div>

      </div>

      <p className="text-slate-300 leading-relaxed">
        On some environments, especially Linux-based production systems,
        filename casing matters.
      </p>

      {/* Path */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 2: I Checked the Path
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Then I checked whether the import path actually matched the folder
        structure.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`components/
├── ui/
│   └── Button.jsx
└── Navbar.jsx`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed">
        If the file is inside <code>ui/</code>, then importing it directly
        from <code>components/Button</code> will fail.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`import Button from "@/components/ui/Button";`}
        </pre>
      </div>

      {/* Alias */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 3: I Checked the Alias
      </h2>

      <p className="text-slate-300 leading-relaxed">
        The <code>@/</code> prefix is an alias. If that alias isn't configured
        correctly, imports can fail even though the physical file exists.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}`}
        </pre>
      </div>

      {/* Lesson */}
      <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-indigo-300 m-0 mb-3">
          What I Learned
        </h2>

        <p className="text-slate-300 leading-relaxed m-0">
          "Module not found" doesn't always mean the file is missing. It can
          mean the path, filename, casing, extension, or alias doesn't match
          what the build system expects.
        </p>
      </div>

      {/* Checklist */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Quick Debugging Checklist
      </h2>

      <div className="space-y-3 my-6">
        {[
          "Is the file actually in the expected folder?",
          "Does the filename match exactly?",
          "Is uppercase/lowercase correct?",
          "Is the import path correct?",
          "Is the @ alias configured?",
          "Did I accidentally move or rename the file?",
        ].map((item) => (
          <div
            key={item}
            className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-4 text-slate-300"
          >
            <span className="text-emerald-400 mr-3">✓</span>
            {item}
          </div>
        ))}
      </div>

    </article>
  );
}