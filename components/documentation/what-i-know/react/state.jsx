import React from "react";

export default function ReactStateStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Is State? How React Remembers and Updates Data
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6">
        <h3 className="text-lg font-bold text-indigo-300 m-0">Quick Overview</h3>
        <p className="text-slate-300 m-0">
          State is a reactive memory variable inside a React component. Whenever the state value is updated using its setter function, React automatically triggers a re-render to mirror the changes in the DOM.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">The Real-World Story: The Digital Scoreboard</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine watching an intense football match in a stadium. High up on the wall is an electronic LED scoreboard. When a player scores a goal, a referee flips a switch. The score number instantly flashes and updates from `0` to `1`.
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        Without state, web pages would be like static paper posters—unable to change unless you reload the whole page. React State is that smart electronic scoreboard, keeping track of user interactions like dark mode toggles, cart items, and open menus instantly!
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Step-by-Step Code Example</h2>
      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`"use client";
import { useState } from "react";

export default function CounterApp() {
  // Declare state variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-slate-900 text-center rounded-xl">
      <h3 className="text-2xl font-bold mb-4">Current Score: {count}</h3>
      <button 
        onClick={() => setCount(count + 1)}
        className="bg-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-500"
      >
        Increase Score
      </button>
    </div>
  );
}`}
        </pre>
      </div>
    </article>
  );
}