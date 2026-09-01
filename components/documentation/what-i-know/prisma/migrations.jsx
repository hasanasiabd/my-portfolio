import React from "react";

export default function PrismaMigrationsStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <span className="inline-flex px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
        Prisma Migrations
      </span>

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mt-4 mb-4">
        What Are Prisma Migrations? Safely Changing Your Database Structure
      </h1>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          Migrations allow you to track and apply controlled changes to your
          database structure over time.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Renovating a House
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you built a house six months ago. Today you realize you need
        another room.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You wouldn't randomly knock down walls and hope everything works out.
        You would document the renovation: what changed, when it changed, and
        how the building got from version one to version two.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        Database migrations work the same way.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String
  age   Int
}`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        Later, you decide that users should also have a username.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`model User {
  id       Int    @id @default(autoincrement())
  name     String
  email    String
  username String @unique
  age      Int
}`}
        </pre>
      </div>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          The Important Idea
        </h3>

        <p className="text-slate-300 m-0">
          A migration records the journey from the old database structure to
          the new one instead of treating every database change as a completely
          new project.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Creating a Migration
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`npx prisma migrate dev --name add_username`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed">
        The migration becomes part of the project's history. This makes
        database changes easier to understand, reproduce, and manage.
      </p>
    </article>
  );
}