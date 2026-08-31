// components/documentation/what-i-know/react/use-effect.jsx

import React from "react";

export default function UseEffectStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is useEffect()? Understanding Side Effects Through a Simple Story
      </h1>

      {/* Quick Overview */}
      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8 shadow-lg">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          useEffect() lets a React component perform side effects after
          rendering. Common examples include fetching data, updating the
          document title, subscribing to events, and working with external
          systems.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Your Personal Assistant 🤖
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you have a personal assistant in your office.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You give the assistant a simple instruction:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-6">
        <div className="flex gap-4 items-start">
          <div className="text-3xl">🤖</div>

          <div>
            <p className="text-slate-400 text-sm mb-2">
              Your instruction
            </p>

            <p className="text-slate-100 font-semibold m-0">
              "Whenever the customer list changes, refresh the report."
            </p>
          </div>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        You don't manually check the customer list every second. Your
        assistant watches for the change and performs the required task.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        In React, <code>useEffect()</code> plays a similar role. It allows
        you to perform work that should happen after rendering or when
        specific values change.
      </p>

      {/* Connection */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Story → React Connection
      </h2>

      <div className="grid md:grid-cols-3 gap-4 my-6">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">👨‍💼</div>
          <h3 className="text-slate-100 font-bold m-0 mb-2">
            You
          </h3>
          <p className="text-slate-400 text-sm m-0">
            The React component.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">🤖</div>
          <h3 className="text-slate-100 font-bold m-0 mb-2">
            Assistant
          </h3>
          <p className="text-slate-400 text-sm m-0">
            The useEffect() logic.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">⚡</div>
          <h3 className="text-slate-100 font-bold m-0 mb-2">
            Task
          </h3>
          <p className="text-slate-400 text-sm m-0">
            The side effect that needs to happen.
          </p>
        </div>

      </div>

      {/* Code */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step-by-Step Code Example
      </h2>

      <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`import { useEffect, useState } from "react";

export default function UserProfile() {

  const [name, setName] = useState("Hasan");

  useEffect(() => {
    document.title = \`Profile - \${name}\`;

    console.log("Profile name changed:", name);
  }, [name]);

  return (
    <div>
      <h2>Hello, {name}</h2>

      <button onClick={() => setName("Alex")}>
        Change Name
      </button>
    </div>
  );
}`}
        </pre>
      </div>

      {/* Dependency explanation */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What Does [name] Mean?
      </h2>

      <p className="text-slate-300 leading-relaxed mb-5">
        The second argument of <code>useEffect()</code> is called the
        dependency array. It tells React when the effect should run again.
      </p>

      <div className="space-y-3">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <code className="text-indigo-400">useEffect(() =&gt; {"{}"})</code>
          <p className="text-slate-400 text-sm mt-2 mb-0">
            Runs after every render.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <code className="text-indigo-400">
            useEffect(() =&gt; {"{}"}, [])
          </code>
          <p className="text-slate-400 text-sm mt-2 mb-0">
            Runs after the initial render.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <code className="text-indigo-400">
            useEffect(() =&gt; {"{}"}, [name])
          </code>
          <p className="text-slate-400 text-sm mt-2 mb-0">
            Runs when the value of name changes.
          </p>
        </div>

      </div>

      {/* Common uses */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Where Do Developers Use useEffect()?
      </h2>

      <div className="grid sm:grid-cols-2 gap-3 my-6">

        {[
          "Fetching data from an API",
          "Updating the browser title",
          "Listening to browser events",
          "Working with timers",
          "Subscribing to external systems",
          "Cleaning up resources"
        ].map((item, index) => (
          <div
            key={item}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center gap-3"
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

      {/* Takeaway */}
      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-indigo-300 mt-0">
          What I Learned
        </h2>

        <p className="text-slate-300 mb-0">
          useEffect() is not simply a tool for "doing something after
          rendering." It is a way to synchronize a React component with
          systems outside React. Understanding when an effect runs is just
          as important as knowing how to write one.
        </p>
      </div>

    </article>
  );
}