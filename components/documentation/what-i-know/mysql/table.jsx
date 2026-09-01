import React from "react";

export default function MySQLTableStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is a MySQL Table? Organizing Data with Rows and Columns
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-5 mb-8 rounded-r-xl">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          A MySQL table stores related data in rows and columns. Columns define
          what information is stored, while rows represent individual records.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A School Register
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine an old-school classroom where the teacher keeps a student
        register.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Across the top of the register are columns such as Student ID, Name,
        Age, and Grade. Each student gets one complete row.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        MySQL tables work almost exactly like that register.
      </p>

      <div className="overflow-x-auto bg-slate-900 border border-slate-800 rounded-xl my-8">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-800 text-indigo-300">
            <tr>
              <th className="px-5 py-4">id</th>
              <th className="px-5 py-4">name</th>
              <th className="px-5 py-4">email</th>
              <th className="px-5 py-4">age</th>
            </tr>
          </thead>

          <tbody className="text-slate-300">
            <tr className="border-t border-slate-800">
              <td className="px-5 py-4">1</td>
              <td className="px-5 py-4">Hasan</td>
              <td className="px-5 py-4">hasan@example.com</td>
              <td className="px-5 py-4">24</td>
            </tr>

            <tr className="border-t border-slate-800">
              <td className="px-5 py-4">2</td>
              <td className="px-5 py-4">Rahim</td>
              <td className="px-5 py-4">rahim@example.com</td>
              <td className="px-5 py-4">26</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Columns Define the Structure
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        A column describes a specific type of information. For example,
        <code>name</code> stores names and <code>email</code> stores email
        addresses.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150),
  age INT
);`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Rows Represent Records
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Every row represents one complete record. If your application has
        10,000 users, the users table may contain 10,000 rows.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Think of a MySQL table as a digital register. Columns describe the
        information, while rows contain the actual records.
      </p>
    </article>
  );
}