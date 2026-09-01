import React from "react";

export default function EcommerceApiStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
          🔌 API Architecture
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          How I Connected the E-Commerce Frontend, API, and Database
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed">
          The frontend could display products, but it needed a reliable way
          to communicate with the backend and database.
        </p>
      </div>

      <div className="bg-slate-900 border-l-4 border-cyan-500 p-5 mb-8">
        <h3 className="text-lg font-bold text-cyan-300 mt-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          The API became the communication layer between the frontend and
          backend. The frontend requested information, the server processed
          the request, and the database supplied or stored the data.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Restaurant Waiter
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Imagine sitting inside a busy restaurant.
      </p>

      <p className="text-slate-300 leading-relaxed">
        You do not walk into the kitchen and start searching through the
        refrigerator yourself. You tell the waiter what you want.
      </p>

      <p className="text-slate-300 leading-relaxed">
        The waiter takes your request to the kitchen, the kitchen prepares
        the food, and the waiter brings the result back to your table.
      </p>

      <p className="text-slate-300 leading-relaxed">
        An API plays a similar role.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Communication Flow
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 my-6 not-prose">
        <div className="space-y-4">
          {[
            ["🖥️", "Frontend", "Request product data"],
            ["🔌", "API", "Receive and process request"],
            ["🗄️", "Database", "Find the requested data"],
            ["🔌", "API", "Return the response"],
            ["🖥️", "Frontend", "Display products"],
          ].map(([icon, title, description], index) => (
            <div
              key={`${title}-${index}`}
              className="flex items-center gap-4"
            >
              <span className="text-xl">{icon}</span>

              <div>
                <p className="text-sm font-bold text-slate-200 m-0">
                  {title}
                </p>

                <p className="text-xs text-slate-500 m-0">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Example Request
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6 not-prose">
        <pre className="text-emerald-400 text-sm font-mono overflow-x-auto">
{`GET /api/products

Response:

{
  "products": [
    {
      "id": 1,
      "name": "Mechanical Keyboard",
      "price": 89.99
    }
  ]
}`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why I Kept the Layers Separate
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Keeping the frontend, API, and database responsibilities separate
        made the application easier to reason about.
      </p>

      <p className="text-slate-300 leading-relaxed">
        The frontend focused on presentation and interaction. The API handled
        communication and business logic. The database focused on storing
        persistent information.
      </p>

      <div className="mt-8 p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 not-prose">
        <p className="text-cyan-400 font-semibold m-0">
          💡 My takeaway
        </p>

        <p className="text-slate-300 mt-2 mb-0">
          The API is not just another folder in the project. It is the bridge
          that allows different parts of the application to communicate
          safely and predictably.
        </p>
      </div>
    </article>
  );
}