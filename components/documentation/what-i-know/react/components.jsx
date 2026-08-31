import React from "react";

export default function ReactComponentsStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Is a React Component? Building a Website with Reusable Pieces
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6">
        <h3 className="text-lg font-bold text-indigo-300 m-0">Quick Overview</h3>
        <p className="text-slate-300 m-0">
          A React component is an isolated, reusable JavaScript function that returns React Elements (JSX) to describe how a piece of the UI should look and behave.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">The Real-World Story: Building with LEGO Bricks</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine building a custom toy castle using LEGO bricks. Instead of molding one giant, rigid plastic block that can never be modified, you construct individual specialized blocks: roof bricks, door panels, and wall units.
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        In web development, traditional HTML forced developers to write thousands of lines of repeating markup in a single giant file. React Components revolutionized this by letting us build self-contained UI bricks <code>&lt;Navbar /&gt;</code>, <code>&lt;BlogCard /&gt;</code>, <code>&lt;Footer /&gt;</code> and snap them together seamlessly.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Step-by-Step Code Example</h2>
      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`// 1. Defining a reusable component
function StatusBadge({ status }) {
  const isOnline = status === "online";

  return (
    <span className={\`px-3 py-1 rounded-full text-xs font-semibold \${
      isOnline ? "bg-emerald-500/20 text-emerald-400" : "bg-slate-700 text-slate-400"
    }\`}>
      {status}
    </span>
  );
}

// 2. Combining components in a parent page
export default function UserProfile() {
  return (
    <div className="p-4 bg-slate-900 rounded-xl">
      <h2>Hasan Profile</h2>
      <StatusBadge status="online" />
    </div>
  );
}`}
        </pre>
      </div>
    </article>
  );
}