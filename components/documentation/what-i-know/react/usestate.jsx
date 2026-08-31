// components/documentation/what-i-know/react/use-state.jsx

import React from "react";

export default function UseStateStory() {
  return (
    <article className="prose prose-invert max-w-none">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        How Does useState() Work? Understanding Interactive UI with a Simple Story
      </h1>

      {/* Quick Overview */}
      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8 shadow-lg">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          useState() is a React Hook that allows a component to remember
          information between renders. When the state changes, React
          re-renders the component so the UI can display the new value.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Your Personal Notebook 📓
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you are carrying a small notebook with you everywhere.
        Whenever something important happens, you write it down in the
        notebook so you don't forget it.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        One morning, you write down:
      </p>

      {/* Notebook UI */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-6 shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-xl">
            📓
          </div>

          <div>
            <h3 className="text-slate-100 font-bold m-0">
              Hasan's Notebook
            </h3>
            <p className="text-xs text-slate-500 m-0">
              Personal memory
            </p>
          </div>
        </div>

        <div className="bg-slate-950 rounded-xl p-4 border border-slate-800">
          <p className="text-slate-400 text-sm m-0">
            Counter: <span className="text-indigo-400 font-bold">0</span>
          </p>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Later, you click a button and change the value from{" "}
        <code>0</code> to <code>1</code>.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Your notebook remembers the new value. React works in a similar
        way. A state variable gives your component a place to remember
        information.
      </p>

      {/* Concept Connection */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Connecting the Story to React
      </h2>

      <div className="grid md:grid-cols-3 gap-4 my-6">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">📓</div>
          <h3 className="text-slate-100 font-bold text-lg m-0 mb-2">
            Notebook
          </h3>
          <p className="text-slate-400 text-sm m-0">
            Stores your information.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">🧠</div>
          <h3 className="text-slate-100 font-bold text-lg m-0 mb-2">
            State
          </h3>
          <p className="text-slate-400 text-sm m-0">
            Stores information for a component.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">🔄</div>
          <h3 className="text-slate-100 font-bold text-lg m-0 mb-2">
            Re-render
          </h3>
          <p className="text-slate-400 text-sm m-0">
            Updates the UI when state changes.
          </p>
        </div>

      </div>

      {/* Code */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step-by-Step Code Example
      </h2>

      <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 mb-6 overflow-hidden">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`import { useState } from "react";

export default function Counter() {

  // State variable + function to update it
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={increaseCount}>
        Increase
      </button>
    </div>
  );
}`}
        </pre>
      </div>

      {/* Breakdown */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What Is Actually Happening?
      </h2>

      <div className="space-y-3 my-6">

        <div className="flex gap-4 items-start bg-slate-900 border border-slate-800 rounded-xl p-4">
          <span className="text-indigo-400 font-bold">01</span>
          <p className="text-slate-300 m-0">
            <code>useState(0)</code> creates state with an initial value of
            <code> 0</code>.
          </p>
        </div>

        <div className="flex gap-4 items-start bg-slate-900 border border-slate-800 rounded-xl p-4">
          <span className="text-indigo-400 font-bold">02</span>
          <p className="text-slate-300 m-0">
            <code>count</code> contains the current state value.
          </p>
        </div>

        <div className="flex gap-4 items-start bg-slate-900 border border-slate-800 rounded-xl p-4">
          <span className="text-indigo-400 font-bold">03</span>
          <p className="text-slate-300 m-0">
            <code>setCount()</code> changes the state.
          </p>
        </div>

        <div className="flex gap-4 items-start bg-slate-900 border border-slate-800 rounded-xl p-4">
          <span className="text-indigo-400 font-bold">04</span>
          <p className="text-slate-300 m-0">
            React re-renders the component and displays the new value.
          </p>
        </div>

      </div>

      {/* Key Takeaway */}
      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-indigo-300 mt-0">
          What I Learned
        </h2>

        <p className="text-slate-300 mb-0">
          useState() is one of the most important tools for building
          interactive React applications. It allows components to remember
          changing information such as counters, form values, selected
          products, menus, and much more.
        </p>
      </div>

    </article>
  );
}