// components/documentation/what-i-know/nodejs/introduction.jsx

import React from "react";

export default function NodeIntroductionStory() {
  return (
    <article className="prose prose-invert max-w-none">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
            NODE.JS
          </span>

          <span className="text-xs text-slate-500">
            Beginner
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4 leading-tight">
          What Is Node.js? The Story of Using JavaScript on the Server
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          JavaScript started its life inside the browser. Node.js changed the
          story by giving JavaScript a place to run outside the browser.
        </p>
      </div>

      {/* Quick Overview */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 mb-10 shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center">
            💡
          </div>

          <h3 className="text-lg font-bold text-indigo-300 m-0">
            Quick Overview
          </h3>
        </div>

        <p className="text-slate-300 leading-relaxed m-0">
          Node.js is a JavaScript runtime that allows JavaScript code to run
          outside the browser. It is commonly used to build servers, APIs,
          real-time applications, command-line tools, and backend systems.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        🏪 The Real-World Story: The Restaurant Kitchen
      </h2>

      <p className="text-slate-300 leading-relaxed mb-5">
        Imagine you own a busy restaurant.
      </p>

      <p className="text-slate-300 leading-relaxed mb-5">
        Customers sit in the dining area and place their orders. The waiter
        takes those orders and sends them to the kitchen. The kitchen then
        prepares the food and sends it back to the customer.
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">👨‍💻</div>
          <h3 className="text-slate-100 font-bold mb-2">
            Client
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            The customer asking for something.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">🍳</div>
          <h3 className="text-slate-100 font-bold mb-2">
            Node.js Server
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            The kitchen processing the request.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">🍔</div>
          <h3 className="text-slate-100 font-bold mb-2">
            Response
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            The finished food sent back to the customer.
          </p>
        </div>

      </div>

      <p className="text-slate-300 leading-relaxed mb-5">
        Before Node.js, JavaScript was primarily associated with the browser.
        It was great at making buttons interactive, validating forms, changing
        HTML, and responding to user actions.
      </p>

      <p className="text-slate-300 leading-relaxed mb-5">
        But developers eventually wanted to use the same language on the
        server as well.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        That's where Node.js entered the story.
      </p>

      {/* Important Concept */}
      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6 my-8">
        <h3 className="text-indigo-300 font-bold text-lg mb-3">
          🌉 The Big Idea
        </h3>

        <p className="text-slate-300 leading-relaxed m-0">
          Node.js doesn't replace JavaScript. Instead, Node.js provides an
          environment where JavaScript can run outside the browser.
        </p>
      </div>

      {/* Code */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        Your First Node.js Program
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden mb-8">
        <div className="px-5 py-3 border-b border-slate-800 text-xs text-slate-500">
          app.js
        </div>

        <pre className="p-5 overflow-x-auto text-sm leading-relaxed">
          <code className="text-emerald-400">
{`const message = "Hello from Node.js!";

console.log(message);`}
          </code>
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-5">
        When you run this file with Node.js:
      </p>

      <div className="bg-black border border-slate-800 rounded-xl p-5 mb-8">
        <code className="text-emerald-400 text-sm">
          node app.js
        </code>

        <p className="text-slate-500 text-sm mt-3">
          Output: Hello from Node.js!
        </p>
      </div>

      {/* Takeaways */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-slate-100 mt-0">
          🎯 Key Takeaways
        </h2>

        <ul className="text-slate-300 space-y-2">
          <li>Node.js is a JavaScript runtime.</li>
          <li>It allows JavaScript to run outside the browser.</li>
          <li>Node.js is commonly used for backend development.</li>
          <li>It can be used to create servers and APIs.</li>
          <li>JavaScript can be used on both the frontend and backend.</li>
        </ul>
      </div>

    </article>
  );
}