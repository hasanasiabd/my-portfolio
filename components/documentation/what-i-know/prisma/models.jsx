import React from "react";

export default function PrismaModelsStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <span className="inline-flex px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
        Prisma Models
      </span>

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mt-4 mb-4">
        What Are Prisma Models? Turning Database Tables into Application Objects
      </h1>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          A Prisma model represents a type of data in your application and
          describes its fields, types, and relationships.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Filing Cabinet
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine an office with a huge filing cabinet. One drawer contains
        employee records. Every employee has a name, email, age, and job title.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        Instead of randomly storing information, the office follows a
        structure. Every employee record follows the same rules.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
}`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Reading the Model
      </h2>

      <div className="space-y-3">
        {[
          ["id", "Unique identifier for each user."],
          ["name", "Stores the user's name."],
          ["email", "Stores the email and must be unique."],
          ["createdAt", "Stores when the record was created."],
        ].map(([field, description]) => (
          <div
            key={field}
            className="flex flex-col sm:flex-row sm:items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <code className="text-indigo-400 font-bold">{field}</code>
            <span className="text-slate-400 hidden sm:block">→</span>
            <span className="text-slate-300">{description}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        From Model to JavaScript
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`const user = await prisma.user.create({
  data: {
    name: "Hasan",
    email: "hasan@example.com",
  },
});`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed">
        This is where Prisma becomes really convenient. The database structure
        is described through the model, and the application can work with that
        structure using JavaScript.
      </p>
    </article>
  );
}