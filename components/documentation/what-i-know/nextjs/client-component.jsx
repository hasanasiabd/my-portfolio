// components/documentation/what-i-know/nextjs/client-component.jsx

import React from "react";

export default function ClientComponentStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is a Client Component? Making a Web Page Interactive
      </h1>

      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-2xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          A Client Component is a component that opts into client-side
          capabilities by using the "use client" directive. It is useful
          for state, event handlers, effects, and browser APIs.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: The Interactive Room 🎮
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a hotel room.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The room itself can simply exist. But now imagine a smart room
        where you can press buttons to turn lights on and off, change the
        temperature, or open the curtains.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Those interactions require something that responds to the person.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="text-3xl mb-3">🏠</div>
          <h3 className="text-slate-100 font-bold m-0 mb-2">
            Server Component
          </h3>
          <p className="text-slate-400 text-sm m-0">
            Great for rendering content and server-side work.
          </p>
        </div>

        <div className="bg-slate-900 border border-indigo-500/20 rounded-2xl p-5">
          <div className="text-3xl mb-3">🎮</div>
          <h3 className="text-slate-100 font-bold m-0 mb-2">
            Client Component
          </h3>
          <p className="text-slate-400 text-sm m-0">
            Enables browser-side interaction and state.
          </p>
        </div>

      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The "use client" Directive
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`"use client";

import { useState } from "react";

export default function Counter() {

  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        When Do I Need It?
      </h2>

      <div className="space-y-3 my-6">

        {[
          "useState()",
          "useEffect()",
          "onClick and other event handlers",
          "Browser APIs such as localStorage",
          "Interactive UI"
        ].map((item, index) => (
          <div
            key={item}
            className="flex gap-4 items-center bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <span className="text-indigo-400 font-bold">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="text-slate-300 text-sm">
              {item}
            </span>
          </div>
        ))}

      </div>

      <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 my-8">
        <h3 className="text-amber-300 font-bold text-lg mt-0">
          A Common Mistake
        </h3>

        <p className="text-slate-300 mb-0">
          Don't add "use client" to everything automatically. Start with
          Server Components and use Client Components when the component
          actually needs client-side interactivity.
        </p>
      </div>

      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-indigo-300 mt-0">
          What I Learned
        </h2>

        <p className="text-slate-300 mb-0">
          Client Components are for interaction. Whenever a component needs
          state, effects, event handlers, or browser-specific APIs, I can
          opt into client-side behavior with "use client".
        </p>
      </div>

    </article>
  );
}