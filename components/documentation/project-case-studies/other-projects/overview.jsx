import React from "react";

export default function OtherProjectsStory() {
  return (
    <article className="prose prose-invert max-w-none">

      {/* =========================
          HERO / INTRO
      ========================== */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
          <span>🚀</span>
          <span>Project Journey</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4 leading-tight">
          My Other Projects: From Ideas to Real-World Applications
        </h1>

        <p className="text-slate-300 text-base md:text-lg leading-relaxed m-0">
          Not every project starts with a perfect plan. Some begin with a
          simple idea, a problem I want to solve, or even a technology I want
          to understand better. These projects represent that journey —
          experimenting, breaking things, fixing them, and gradually turning
          ideas into working applications.
        </p>
      </div>

      {/* =========================
          QUICK OVERVIEW
      ========================== */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 mb-10 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xl">
            💡
          </div>

          <div>
            <h3 className="text-lg font-bold text-indigo-300 m-0">
              Quick Overview
            </h3>
            <p className="text-xs text-slate-500 m-0">
              What these projects taught me
            </p>
          </div>
        </div>

        <p className="text-slate-300 leading-relaxed m-0">
          These projects helped me move beyond tutorials and start thinking
          like a developer. Instead of only asking{" "}
          <strong className="text-slate-100">
            “How does this technology work?”
          </strong>
          , I started asking{" "}
          <strong className="text-slate-100">
            “How can I use it to build something useful?”
          </strong>
        </p>
      </div>

      {/* =========================
          THE STORY
      ========================== */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        The Real-World Story: A Workshop Full of Experiments
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine walking into a small workshop.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        There are tools everywhere. Some projects are finished and sitting on
        the shelf. Others are half-built. A few are broken. And somewhere in
        the corner, there is a box containing parts from experiments that did
        not work at all.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        That is actually a pretty good description of my development journey.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        Every project becomes an experiment. I start with an idea, choose the
        tools I think will work, build the first version, encounter problems,
        search for solutions, refactor the code, and eventually end up with
        something I can actually use or demonstrate.
      </p>

      {/* =========================
          PROJECT JOURNEY CARDS
      ========================== */}
      <div className="grid md:grid-cols-3 gap-4 my-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">💭</div>
          <h3 className="text-base font-bold text-slate-100 m-0 mb-2">
            01. The Idea
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed m-0">
            Every project starts with a question, an idea, or a problem worth
            exploring.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">🛠️</div>
          <h3 className="text-base font-bold text-slate-100 m-0 mb-2">
            02. The Build
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed m-0">
            I turn the idea into a real application using the technologies
            available to me.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">🔧</div>
          <h3 className="text-base font-bold text-slate-100 m-0 mb-2">
            03. The Lessons
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed m-0">
            Bugs, failed approaches, and improvements become part of the
            learning process.
          </p>
        </div>

      </div>

      {/* =========================
          PROJECT 1
      ========================== */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 my-8">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold m-0 mb-1">
              Project Type
            </p>

            <h3 className="text-xl font-bold text-slate-100 m-0">
              Portfolio & Personal Websites
            </h3>
          </div>

          <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xl shrink-0">
            🌐
          </div>
        </div>

        <p className="text-slate-300 leading-relaxed mb-4">
          One of the most important types of projects I worked on was my own
          portfolio and documentation website.
        </p>

        <p className="text-slate-300 leading-relaxed mb-4">
          At first, a portfolio sounds simple: create a few pages, add some
          projects, write an introduction, and publish it.
        </p>

        <p className="text-slate-300 leading-relaxed mb-0">
          But once I started building it seriously, I realized that a good
          portfolio is more than a collection of pages. It is a complete
          application involving routing, reusable components, responsive UI,
          animations, documentation, and content organization.
        </p>
      </div>

      {/* =========================
          PROJECT 2
      ========================== */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 my-8">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold m-0 mb-1">
              Project Type
            </p>

            <h3 className="text-xl font-bold text-slate-100 m-0">
              Small Full-Stack Experiments
            </h3>
          </div>

          <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl shrink-0">
            🧪
          </div>
        </div>

        <p className="text-slate-300 leading-relaxed mb-4">
          Some projects were created mainly to understand how different parts
          of a full-stack application communicate with each other.
        </p>

        <p className="text-slate-300 leading-relaxed mb-4">
          I experimented with concepts such as APIs, databases,
          authentication, frontend state, and server-side logic.
        </p>

        <p className="text-slate-300 leading-relaxed mb-0">
          These projects were like laboratory experiments. The goal was not
          always to create a production-ready product. Sometimes the real
          objective was simply to understand what happens behind the screen.
        </p>
      </div>

      {/* =========================
          PROJECT 3
      ========================== */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 my-8">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-purple-400 font-bold m-0 mb-1">
              Project Type
            </p>

            <h3 className="text-xl font-bold text-slate-100 m-0">
              UI & Frontend Experiments
            </h3>
          </div>

          <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl shrink-0">
            🎨
          </div>
        </div>

        <p className="text-slate-300 leading-relaxed mb-4">
          Not every experiment needed a database or a backend.
        </p>

        <p className="text-slate-300 leading-relaxed mb-4">
          Some projects focused entirely on creating better interfaces —
          navigation systems, responsive layouts, cards, dashboards,
          documentation pages, animations, and reusable components.
        </p>

        <p className="text-slate-300 leading-relaxed mb-0">
          These projects taught me that frontend development is not simply
          about making something look good. The interface also needs to be
          understandable, responsive, accessible, and easy to maintain.
        </p>
      </div>

      {/* =========================
          THE DEVELOPMENT LOOP
      ========================== */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        My Development Loop
      </h2>

      <p className="text-slate-300 leading-relaxed mb-6">
        Over time, I noticed that most of my projects naturally followed the
        same cycle.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 my-8 overflow-x-auto">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 min-w-[650px]">

          <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
            <div className="text-xl mb-2">💡</div>
            <p className="text-sm font-bold text-slate-200 m-0">
              Idea
            </p>
          </div>

          <div className="text-slate-600 text-center">→</div>

          <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
            <div className="text-xl mb-2">🏗️</div>
            <p className="text-sm font-bold text-slate-200 m-0">
              Build
            </p>
          </div>

          <div className="text-slate-600 text-center">→</div>

          <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
            <div className="text-xl mb-2">🐛</div>
            <p className="text-sm font-bold text-slate-200 m-0">
              Break
            </p>
          </div>

          <div className="text-slate-600 text-center">→</div>

          <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
            <div className="text-xl mb-2">🔧</div>
            <p className="text-sm font-bold text-slate-200 m-0">
              Fix
            </p>
          </div>

          <div className="text-slate-600 text-center">→</div>

          <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-4 text-center">
            <div className="text-xl mb-2">🚀</div>
            <p className="text-sm font-bold text-slate-200 m-0">
              Improve
            </p>
          </div>

        </div>
      </div>

      {/* =========================
          WHAT I LEARNED
      ========================== */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-5">
        What These Projects Taught Me
      </h2>

      <div className="grid sm:grid-cols-2 gap-4 my-8">

        <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-5">
          <h3 className="text-base font-bold text-slate-100 m-0 mb-2">
            🧠 Learn by Building
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed m-0">
            Reading documentation gives me knowledge, but building something
            forces me to actually understand it.
          </p>
        </div>

        <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-5">
          <h3 className="text-base font-bold text-slate-100 m-0 mb-2">
            🐛 Bugs Are Teachers
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed m-0">
            A broken application often teaches more than a perfectly working
            tutorial example.
          </p>
        </div>

        <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-5">
          <h3 className="text-base font-bold text-slate-100 m-0 mb-2">
            🧩 Architecture Matters
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed m-0">
            As projects grow, organization, reusable components, and clean
            structure become increasingly important.
          </p>
        </div>

        <div className="border border-slate-800 bg-slate-900/60 rounded-xl p-5">
          <h3 className="text-base font-bold text-slate-100 m-0 mb-2">
            🔄 Improvement Never Stops
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed m-0">
            The first version of a project is rarely the final version.
            Refactoring and improving are part of development.
          </p>
        </div>

      </div>

      {/* =========================
          CLOSING STORY
      ========================== */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-500/10 via-slate-900 to-slate-950 border border-indigo-500/20 rounded-2xl p-6 md:p-8 mt-10">

        <div className="absolute -top-16 -right-16 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-3">
            Final Thought
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-0 mb-4">
            The Projects Are Part of the Story
          </h2>

          <p className="text-slate-300 leading-relaxed mb-4">
            When I look at these projects individually, some may look small.
            But together, they tell a much bigger story.
          </p>

          <p className="text-slate-300 leading-relaxed mb-4">
            Each one represents a question I had, a technology I wanted to
            understand, a problem I encountered, or a skill I wanted to
            practice.
          </p>

          <p className="text-slate-200 leading-relaxed font-medium mb-0">
            The goal was never to build everything perfectly from day one.
            The goal was to keep building, keep breaking, keep fixing, and
            become a better developer with every project.
          </p>
        </div>
      </div>

      {/* =========================
          PROJECT STATUS
      ========================== */}
      <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl p-5 my-8">
        <div>
          <p className="text-xs text-slate-500 m-0">
            PROJECT COLLECTION
          </p>

          <h3 className="text-lg font-bold text-slate-100 m-0">
            More Projects Coming
          </h3>
        </div>

        <div className="px-4 py-2 rounded-lg bg-indigo-600/20 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">
          In Progress
        </div>
      </div>

    </article>
  );
}