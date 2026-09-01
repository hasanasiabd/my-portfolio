import React from "react";

export default function TaskManagementDatabaseStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-10">
        <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
          PROJECT CASE STUDY
        </span>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4 leading-tight">
          How I Designed the Database for My Task Management App
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Designing the database was about deciding how users, tasks, and
          relationships should live together without creating a mess.
        </p>
      </div>

      <div className="bg-slate-900/80 border border-slate-800 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-10 not-prose">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
          Quick Overview
        </p>

        <p className="text-slate-300 leading-relaxed m-0">
          The database needed to answer three basic questions: who owns a
          task, what information does the task contain, and how can that
          information be retrieved safely and efficiently?
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Filing Cabinet
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine an office with thousands of documents but no filing system.
        Every employee puts papers wherever they want.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Finding one document would become painful.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        A database solves that problem. It is like a carefully organized
        filing cabinet where every piece of information has a predictable
        location.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Main Tables
      </h2>

      <div className="grid md:grid-cols-2 gap-4 not-prose mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-lg font-bold text-slate-100 mb-2">
            Users
          </h3>
          <p className="text-sm text-slate-400 mb-3">
            Stores information about people using the application.
          </p>

          <code className="text-emerald-400 text-sm">
            id, name, email, password
          </code>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-lg font-bold text-slate-100 mb-2">
            Tasks
          </h3>
          <p className="text-sm text-slate-400 mb-3">
            Stores the actual work that needs to be completed.
          </p>

          <code className="text-emerald-400 text-sm">
            id, title, status, priority, userId
          </code>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Connecting Users and Tasks
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        One user can have many tasks. That means the relationship is
        <strong> one-to-many</strong>.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 not-prose mb-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <div className="px-6 py-4 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-bold">
            User
          </div>

          <div className="text-indigo-400 font-bold">
            1 ───────── ∞
          </div>

          <div className="px-6 py-4 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-bold">
            Tasks
          </div>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        The <code>userId</code> inside the task acts like a reference telling
        the database which user owns that task.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Example Schema
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8 not-prose">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  status VARCHAR(30) DEFAULT 'pending',
  priority VARCHAR(30) DEFAULT 'medium',
  user_id INTEGER REFERENCES users(id)
);`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why Structure Matters
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        A poorly designed database can make a simple application painful.
        Data becomes duplicated, queries become complicated, and future
        changes become dangerous.
      </p>

      <p className="text-slate-300 leading-relaxed">
        I learned that database design is not just about storing information.
        It is about deciding how information should relate to everything else.
      </p>

      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-6 mt-10 not-prose">
        <h3 className="text-lg font-bold text-indigo-300 mb-3">
          Key Lesson
        </h3>

        <p className="text-slate-300 leading-relaxed m-0">
          Before writing APIs or building beautiful UI, I need to know exactly
          what data the application owns and how that data is connected.
        </p>
      </div>
    </article>
  );
}