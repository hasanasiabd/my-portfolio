import React from "react";

export default function EcommerceProblemsStory() {
  const problems = [
    {
      number: "01",
      title: "State Getting Out of Sync",
      icon: "🔄",
      problem:
        "The UI sometimes showed information that was different from the actual application state.",
      lesson:
        "I learned that shared state needs a clear source of truth.",
    },
    {
      number: "02",
      title: "API Errors",
      icon: "🔌",
      problem:
        "Requests could fail because of invalid data, server errors, or incorrect endpoints.",
      lesson:
        "I learned that every API request should be treated as something that can fail.",
    },
    {
      number: "03",
      title: "Database Relationships",
      icon: "🗄️",
      problem:
        "Products, users, and orders were connected, so changing one part could affect another.",
      lesson:
        "I learned that database design must be considered before writing complex queries.",
    },
    {
      number: "04",
      title: "Authentication Edge Cases",
      icon: "🔐",
      problem:
        "Login, logout, protected routes, and expired sessions introduced situations I had not initially considered.",
      lesson:
        "I learned that authentication is a complete system, not just a login form.",
    },
    {
      number: "05",
      title: "Small Bugs Became Big Problems",
      icon: "🐛",
      problem:
        "A small mistake in one layer could eventually appear as a completely different error somewhere else.",
      lesson:
        "I learned to trace problems from the browser through the API and finally into the database.",
    },
  ];

  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
          🐛 Development Problems
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          The Problems I Faced While Building My E-Commerce Platform
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed">
          The most valuable part of the project was not when everything
          worked. It was when everything broke and I had to figure out why.
        </p>
      </div>

      {/* Hook */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red-500/10 to-indigo-500/5 border border-red-500/20 rounded-2xl p-6 md:p-8 mb-10 not-prose">
        <div className="absolute -right-8 -top-8 text-7xl opacity-10">
          🐛
        </div>

        <p className="text-red-400 text-sm font-bold uppercase tracking-wider m-0">
          The Reality of Development
        </p>

        <p className="text-slate-200 text-lg font-semibold mt-3 mb-0 leading-relaxed">
          Writing the first version was only the beginning. The real
          development started when the application behaved differently from
          what I expected.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Running a Huge Restaurant
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Imagine running a huge restaurant with a dining room, kitchen,
        warehouse, delivery team, and cashier.
      </p>

      <p className="text-slate-300 leading-relaxed">
        A customer complains that their order is wrong. Where is the problem?
        Maybe the waiter wrote the wrong order. Maybe the kitchen prepared the
        wrong food. Maybe the warehouse gave the wrong ingredient.
      </p>

      <p className="text-slate-300 leading-relaxed">
        Software debugging is surprisingly similar. The error you see on the
        screen is not always where the actual problem started.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-6">
        The Problems That Taught Me the Most
      </h2>

      <div className="space-y-5 not-prose">
        {problems.map((item) => (
          <div
            key={item.number}
            className="group bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-xl">
                {item.icon}
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-bold text-red-400">
                    PROBLEM {item.number}
                  </span>

                  <h3 className="text-lg font-bold text-slate-100 m-0">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-wide m-0">
                    What happened?
                  </p>

                  <p className="text-sm text-slate-300 mt-2 mb-0 leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                <div className="mt-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-wide m-0">
                    What I learned
                  </p>

                  <p className="text-sm text-slate-300 mt-2 mb-0 leading-relaxed">
                    {item.lesson}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-12 mb-4">
        My Debugging Mindset Changed
      </h2>

      <p className="text-slate-300 leading-relaxed">
        In the beginning, when something broke, my first instinct was to
        search for the exact error message and copy a possible solution.
      </p>

      <p className="text-slate-300 leading-relaxed">
        As the project became larger, I realized that this approach was not
        enough. I needed to understand where the data came from, where it
        changed, and where the unexpected behavior first appeared.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 my-8 not-prose">
        <p className="text-xs uppercase tracking-widest font-bold text-slate-500 m-0">
          My debugging checklist
        </p>

        <div className="mt-5 space-y-3">
          {[
            "What did I expect to happen?",
            "What actually happened?",
            "Where does the data come from?",
            "Where does the data change?",
            "Which layer is responsible for the problem?",
          ].map((question) => (
            <div
              key={question}
              className="flex items-center gap-3 text-sm text-slate-300"
            >
              <span className="text-indigo-400">✓</span>
              {question}
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Biggest Lesson
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Every bug forced me to understand the system a little better.
      </p>

      <p className="text-slate-300 leading-relaxed">
        That is probably the most important thing I learned from building this
        project: <strong>bugs are not just obstacles; they are feedback about
        how well I understand my own system.</strong>
      </p>

      <div className="mt-8 p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 not-prose">
        <p className="text-indigo-400 font-semibold m-0">
          🚀 Final takeaway
        </p>

        <p className="text-slate-200 mt-2 mb-0 leading-relaxed">
          The project became valuable not because I managed to make everything
          work perfectly, but because every problem forced me to become a
          better developer.
        </p>
      </div>
    </article>
  );
}