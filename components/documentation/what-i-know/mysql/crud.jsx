import React from "react";

export default function MySQLCrudStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is CRUD in MySQL? The Four Basic Operations on Data
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-5 mb-8 rounded-r-xl">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          CRUD stands for Create, Read, Update, and Delete. These four
          operations represent the basic things most applications need to do
          with stored data.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Running a Notebook
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you keep a notebook containing information about your
        customers.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        A new customer joins your business, so you write their information
        into the notebook. That's <strong>Create</strong>.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Later, you open the notebook to check their information. That's
        <strong> Read</strong>.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The customer changes their phone number, so you correct the old number.
        That's <strong>Update</strong>.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Finally, if the customer leaves your business and their record should
        be removed, you erase it. That's <strong>Delete</strong>.
      </p>

      <div className="grid md:grid-cols-2 gap-4 my-8">
        <div className="bg-slate-900 border border-emerald-500/20 rounded-xl p-5">
          <div className="text-3xl mb-3">➕</div>
          <h3 className="text-xl font-bold text-emerald-400 mb-2">
            Create
          </h3>
          <p className="text-slate-400 text-sm">
            Add new information to the database.
          </p>
        </div>

        <div className="bg-slate-900 border border-blue-500/20 rounded-xl p-5">
          <div className="text-3xl mb-3">👀</div>
          <h3 className="text-xl font-bold text-blue-400 mb-2">
            Read
          </h3>
          <p className="text-slate-400 text-sm">
            Retrieve existing information.
          </p>
        </div>

        <div className="bg-slate-900 border border-yellow-500/20 rounded-xl p-5">
          <div className="text-3xl mb-3">✏️</div>
          <h3 className="text-xl font-bold text-yellow-400 mb-2">
            Update
          </h3>
          <p className="text-slate-400 text-sm">
            Change existing information.
          </p>
        </div>

        <div className="bg-slate-900 border border-red-500/20 rounded-xl p-5">
          <div className="text-3xl mb-3">🗑️</div>
          <h3 className="text-xl font-bold text-red-400 mb-2">
            Delete
          </h3>
          <p className="text-slate-400 text-sm">
            Remove information from the database.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        CRUD with MySQL
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`-- CREATE
INSERT INTO users (name, email)
VALUES ('Hasan', 'hasan@example.com');

-- READ
SELECT * FROM users;

-- UPDATE
UPDATE users
SET email = 'new@example.com'
WHERE id = 1;

-- DELETE
DELETE FROM users
WHERE id = 1;`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why CRUD Matters
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Almost every application performs these four operations. An e-commerce
        application creates orders, reads products, updates user information,
        and deletes records when necessary.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Understanding CRUD gives you the foundation for understanding how
        real-world applications communicate with databases.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        CRUD is the basic language of data management: create something, read
        it, update it when necessary, and delete it when it is no longer
        needed. These four operations appear everywhere in modern software.
      </p>
    </article>
  );
}