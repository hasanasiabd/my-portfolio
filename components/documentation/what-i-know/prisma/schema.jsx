import React from "react";

export default function PrismaSchemaStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <span className="inline-flex px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
        Prisma Schema
      </span>

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mt-4 mb-4">
        What Is a Prisma Schema? Designing the Blueprint of Your Database
      </h1>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          Quick Overview
        </h3>
        <p className="text-slate-300 m-0">
          The Prisma schema is the central place where you describe your
          database connection, models, and relationships.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Building a House
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you are building a house. Would you ask workers to start
        placing bricks without showing them a plan?
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Probably not. Before construction begins, an architect creates a
        blueprint showing rooms, doors, windows, dimensions, and connections.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        A Prisma schema works in a very similar way. It describes what your
        database should look like before Prisma turns that description into
        actual database structures.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 overflow-x-auto mb-8">
        <pre className="text-emerald-400 font-mono text-sm">
{`datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Three Important Parts
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          ["Datasource", "Tells Prisma which database you are connecting to."],
          ["Generator", "Defines the Prisma Client that your application will use."],
          ["Model", "Describes the structure of your application data."],
        ].map(([title, description]) => (
          <div
            key={title}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >
            <h3 className="text-lg font-bold text-indigo-300 mt-0">
              {title}
            </h3>
            <p className="text-sm text-slate-400 m-0">{description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        I think of the Prisma schema as the <strong>blueprint</strong> of my
        database. If the blueprint is clear, the rest of the database workflow
        becomes much easier to understand.
      </p>
    </article>
  );
}