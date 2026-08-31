// components/documentation/what-i-know/nextjs/api-route.jsx

import React from "react";

export default function NextApiRouteStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is an API Route? Building a Bridge Between the Client and Server
      </h1>

      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-2xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          In the Next.js App Router, a Route Handler can create an HTTP
          endpoint inside the app. It can receive requests, perform
          server-side work, communicate with a database or service, and
          return a response.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Bridge 🌉
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a river separating a city from a warehouse.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Customers live on one side. The warehouse is on the other side.
        Customers shouldn't have to swim into the warehouse every time
        they need a product.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        So we build a bridge.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <div className="text-center">
            <div className="text-4xl">🖥️</div>
            <p className="text-indigo-400 font-bold text-sm m-0">
              Client
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-[280px] h-1 bg-indigo-500/30 relative">
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 text-2xl">
                🌉
              </span>
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl">🗄️</div>
            <p className="text-indigo-400 font-bold text-sm m-0">
              Server / Database
            </p>
          </div>

        </div>

      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Route Handler
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        In the Next.js App Router, an endpoint can be created using a
        <code>route.js</code> file.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`app/
└── api/
    └── products/
        └── route.js`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        This can represent an endpoint such as:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-6">
        <code className="text-indigo-400">
          GET /api/products
        </code>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Example Route Handler
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`import { db } from "@/lib/db";

export async function GET() {

  const result = await db.query(
    "SELECT * FROM products"
  );

  return Response.json(result.rows);
}`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The important thing to notice is that the browser is not directly
        running the PostgreSQL query. The request reaches the server-side
        route handler, which performs the database operation and returns
        a response.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Client Calls the Bridge
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`const response = await fetch("/api/products");

const products = await response.json();

console.log(products);`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Complete Journey
      </h2>

      <div className="space-y-3 my-6">

        {[
          ["01", "React sends GET /api/products."],
          ["02", "Next.js receives the HTTP request."],
          ["03", "The route handler executes on the server."],
          ["04", "The server communicates with PostgreSQL or another data source."],
          ["05", "The route returns a JSON response."],
          ["06", "The client receives the data and renders the UI."]
        ].map(([number, text]) => (
          <div
            key={number}
            className="flex gap-4 items-start bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <span className="text-indigo-400 font-bold font-mono">
              {number}
            </span>

            <span className="text-slate-300 text-sm">
              {text}
            </span>
          </div>
        ))}

      </div>

      <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-6 my-8">
        <h3 className="text-rose-300 font-bold text-lg mt-0">
          Security Lesson
        </h3>

        <p className="text-slate-300 mb-0">
          Never expose your database connection string, password, or other
          server secrets to browser code. The route handler is one place
          where server-side operations can be kept away from the client.
        </p>
      </div>

      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-indigo-300 mt-0">
          What I Learned
        </h2>

        <p className="text-slate-300 mb-0">
          An API endpoint acts like a controlled bridge. The client asks
          for something, the server performs the appropriate work, and
          the server sends a response back. This separation keeps the
          architecture organized and helps protect server-only resources.
        </p>
      </div>

    </article>
  );
}