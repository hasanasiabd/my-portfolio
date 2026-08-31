// components/documentation/what-i-know/nodejs/modules.jsx

import React from "react";

export default function NodeModulesStory() {
  return (
    <article className="prose prose-invert max-w-none">

      {/* Header */}
      <div className="mb-10">

        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
            NODE.JS
          </span>

          <span className="text-xs text-slate-500">
            Architecture
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          What Are Node.js Modules?
        </h1>

        <p className="text-slate-400 text-lg leading-relaxed">
          Breaking a large application into smaller, reusable pieces.
        </p>

      </div>

      {/* Overview */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          💡 Quick Overview
        </h3>

        <p className="text-slate-300 leading-relaxed mb-0">
          A module is a reusable piece of code that can be imported and used
          in another part of an application. Modules help developers organize
          large applications into smaller and more manageable pieces.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        🏢 The Real-World Story: A Large Company
      </h2>

      <p className="text-slate-300 leading-relaxed mb-5">
        Imagine you run a huge company with hundreds of employees.
      </p>

      <p className="text-slate-300 leading-relaxed mb-5">
        Would you ask one person to handle accounting, marketing, customer
        support, security, hiring, and sales at the same time?
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        Obviously not.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">💰</div>
          <h3 className="font-bold text-slate-100">
            Finance Department
          </h3>
          <p className="text-slate-400 text-sm mt-2">
            Handles money and accounting.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">📣</div>
          <h3 className="font-bold text-slate-100">
            Marketing Department
          </h3>
          <p className="text-slate-400 text-sm mt-2">
            Handles marketing campaigns.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">🛡️</div>
          <h3 className="font-bold text-slate-100">
            Security Department
          </h3>
          <p className="text-slate-400 text-sm mt-2">
            Protects the company.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">🤝</div>
          <h3 className="font-bold text-slate-100">
            Support Department
          </h3>
          <p className="text-slate-400 text-sm mt-2">
            Helps customers.
          </p>
        </div>

      </div>

      <p className="text-slate-300 leading-relaxed mb-5">
        Node.js modules work in a similar way.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        Instead of putting your entire application into one giant file, you
        separate responsibilities into individual modules.
      </p>

      {/* File Structure */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        📁 A Simple Project Structure
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 mb-8">
        <pre className="text-sm overflow-x-auto leading-relaxed">
          <code className="text-emerald-400">
{`project/
│
├── server.js
├── math.js
├── user.js
└── database.js`}
          </code>
        </pre>
      </div>

      {/* Export */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        📤 Exporting a Module
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden mb-6">
        <div className="px-5 py-3 border-b border-slate-800 text-xs text-slate-500">
          math.js
        </div>

        <pre className="p-5 overflow-x-auto text-sm">
          <code className="text-emerald-400">
{`function add(a, b) {
  return a + b;
}

module.exports = {
  add
};`}
          </code>
        </pre>
      </div>

      {/* Import */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        📥 Using the Module
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden mb-8">
        <div className="px-5 py-3 border-b border-slate-800 text-xs text-slate-500">
          server.js
        </div>

        <pre className="p-5 overflow-x-auto text-sm">
          <code className="text-emerald-400">
{`const { add } = require("./math");

const result = add(10, 20);

console.log(result); // 30`}
          </code>
        </pre>
      </div>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6 mb-8">
        <h3 className="text-indigo-300 font-bold mt-0">
          🧠 Think About It Like This
        </h3>

        <p className="text-slate-300 leading-relaxed mb-0">
          <code>math.js</code> is a department that knows how to perform
          calculations. <code>server.js</code> doesn't need to know how the
          calculation works internally. It simply asks the department to do
          the job.
        </p>
      </div>

      {/* Takeaways */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-slate-100 mt-0">
          🎯 Key Takeaways
        </h2>

        <ul className="text-slate-300 space-y-2">
          <li>Modules divide large applications into smaller pieces.</li>
          <li>Each module can have a specific responsibility.</li>
          <li>Modules can export functionality.</li>
          <li>Other files can import and reuse that functionality.</li>
          <li>Modular code is easier to maintain and scale.</li>
        </ul>
      </div>

    </article>
  );
}