import React from "react";

export default function ArraysStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Is an Array? A Simple Story of Managing Multiple Data
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6">
        <h3 className="text-lg font-bold text-indigo-300 m-0">Quick Overview</h3>
        <p className="text-slate-300 m-0">
          An Array is a zero-indexed data structure in JavaScript used to store an ordered list of items (strings, numbers, objects, or even other arrays) under a single variable name.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">The Real-World Story: The Parking Garage</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you manage a high-tech automated parking lot. When cars enter the garage, you don't build a separate building for each car. Instead, you have a single multi-level parking structure with numbered slots starting at spot <code>0</code>, spot <code>1</code>, spot <code>2</code>, and so on.
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        If a driver asks, "Where is my car?", you don't search blindly. You look up their exact index slot. That ordered collection of parking slots is exactly how an Array works in computer memory.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Step-by-Step Code Example</h2>
      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`// Creating an array of project titles
const techStack = ["React", "Next.js", "Node.js", "PostgreSQL"];

// Accessing items via 0-based index
console.log(techStack[0]); // Output: "React"
console.log(techStack[2]); // Output: "Node.js"

// Array mutations & utility methods
techStack.push("Tailwind CSS"); // Adds to the end
console.log(techStack.length);   // Output: 5`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Key Takeaways</h2>
      <p className="text-slate-300 leading-relaxed">
        Arrays are the backbone of dynamic web apps. When rendering lists of products, user messages, or portfolio cards in React, arrays are always the fundamental data container used under the hood.
      </p>
    </article>
  );
}