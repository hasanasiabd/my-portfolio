import React from "react";

export default function VariablesStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Are Variables? A Simple Story About Storing Data
      </h1>
      
      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6">
        <h3 className="text-lg font-bold text-indigo-300 m-0">Quick Overview</h3>
        <p className="text-slate-300 m-0">
          In JavaScript, a variable is a named storage container in the computer's memory that allows developers to retain, transform, and reuse dynamic data throughout an application's lifecycle.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">The Real-World Scenario</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you are moving into a brand-new warehouse to build an e-commerce fulfillment business. Every single minute, hundreds of items—like shoes, watches, and laptops—are being brought into the building. 
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        If you leave all these items scattered randomly across the warehouse floor without labels, chaos is guaranteed. When a customer orders a blue watch, your staff will have to search every inch of the warehouse. To solve this, you set up dedicated boxes with strict labels: <code>customer_name</code>, <code>total_order_price</code>, and <code>is_paid</code>.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">The Evolution: The Story of Three Label Makers</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        In the early days of JavaScript (before ES6 in 2015), developers used a single tool to label their storage boxes called <strong><code>var</code></strong>. However, <code>var</code> had a dangerous design flaw: it ignored boundary walls (function-level scoping rather than block-level scoping). If two workers labeled two different boxes with the exact same name, the old data would silently get overwritten, leading to subtle and catastrophic bugs in production.
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        To bring order and reliability to codebases, modern JavaScript introduced two precise label tools: <strong><code>let</code></strong> and <strong><code>const</code></strong>.
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
          <h4 className="text-indigo-400 font-bold m-0 mb-1">1. const (Constant Reference)</h4>
          <p className="text-slate-300 text-sm m-0">
            Think of <code>const</code> as engraving a label directly into a steel box. Once you put something inside, you are locked from reassigning the variable pointer to a whole new value.
          </p>
        </div>
        <div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
          <h4 className="text-indigo-400 font-bold m-0 mb-1">2. let (Reassignable Variable)</h4>
          <p className="text-slate-300 text-sm m-0">
            Think of <code>let</code> as a whiteboard label. It allows you to update or overwrite the contained data whenever state changes occur during app execution.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Step-by-Step Code Example</h2>
      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`// 1. Using const for permanent configurations
const API_BASE_URL = "https://api.myportfolio.com/v1";
const maxLoginAttempts = 5;

// API_BASE_URL = "https://api.another.com"; 
// ❌ Uncaught TypeError: Assignment to constant variable.

// 2. Using let for changing state values
let userCartTotal = 0;
let isUserLoggedIn = false;

// When the user adds an item to their shopping cart:
userCartTotal = userCartTotal + 49.99; // ✅ Valid assignment
isUserLoggedIn = true; // ✅ Valid state transition`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Best Practices & Developer Mindset</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-300">
        <li><strong>Default to <code>const</code>:</strong> Always write variables using <code>const</code> first. This signals to other developers that the reference will never change.</li>
        <li><strong>Reach for <code>let</code> intentionally:</strong> Switch to <code>let</code> only when you know a loop, counter, or conditional reassignment demands it.</li>
        <li><strong>Eliminate <code>var</code>:</strong> Completely avoid <code>var</code> in modern React and Next.js modern codebases to prevent scope leaks and unpredictable hoisting behavior.</li>
      </ul>
    </article>
  );
}