import React from "react";

export default function AdminDashboardDatabaseStory() {
  return (
    <article className="prose prose-invert max-w-none">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
          🗄️ DATABASE CASE STUDY
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          How I Designed the Database Behind My Admin Dashboard
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          A dashboard can look impressive on the outside, but its real
          strength comes from the data structure underneath it.
        </p>
      </div>

      {/* Overview */}
      <div className="bg-slate-900/80 border border-slate-800 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          I designed the database around the actual entities the dashboard
          needs to manage: users, products, orders, and order items. The goal
          was to keep relationships clear and avoid unnecessary duplication.
        </p>
      </div>

      {/* Analogy */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Well-Organized Warehouse
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine running a massive warehouse.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You have thousands of products, hundreds of customers, and countless
        orders. If everything is thrown into one giant room without labels,
        finding anything becomes painful.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        A database works the same way. Tables act like organized sections of
        the warehouse. Each table has a specific responsibility.
      </p>

      {/* Structure */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 1: Identifying the Main Entities
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        {[
          ["👤", "Users", "Stores administrator and customer information."],
          ["📦", "Products", "Stores products managed by the application."],
          ["🧾", "Orders", "Stores customer purchase records."],
          ["🛒", "Order Items", "Connects products with individual orders."],
        ].map(([icon, title, description]) => (
          <div
            key={title}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >
            <div className="text-2xl mb-3">{icon}</div>
            <h3 className="text-lg font-bold text-slate-100 m-0 mb-2">
              {title}
            </h3>
            <p className="text-sm text-slate-400 m-0">{description}</p>
          </div>
        ))}
      </div>

      {/* Schema */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 2: Designing the Relationships
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`Users
  │
  │ 1
  │
  └──────────< Orders
                 │
                 │ 1
                 │
                 └──────────< OrderItems >────────── Products`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        One user can have many orders. One order can contain many order items.
        Each order item points to a product.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        This relationship structure keeps the data connected without storing
        the same information repeatedly.
      </p>

      {/* SQL */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 3: Creating the Tables
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock INTEGER DEFAULT 0
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  total DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`}
        </pre>
      </div>

      {/* Why */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why I Didn't Put Everything into One Table
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine writing a customer's full name and email address on every
        single order receipt.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        If that customer changes their email address, you would have to update
        dozens or hundreds of receipts. That is exactly the kind of problem
        database normalization helps prevent.
      </p>

      {/* Admin operations */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 4: Designing for Admin Operations
      </h2>

      <div className="grid sm:grid-cols-2 gap-3 my-6">
        {[
          ["CREATE", "Add new products or users"],
          ["READ", "View users, products, and orders"],
          ["UPDATE", "Change product or user information"],
          ["DELETE", "Remove records when appropriate"],
        ].map(([operation, description]) => (
          <div
            key={operation}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <span className="text-indigo-400 font-mono font-bold text-sm">
              {operation}
            </span>
            <p className="text-sm text-slate-400 m-0 mt-2">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Lesson */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        The biggest lesson was that database design should happen before the
        dashboard becomes complicated.
      </p>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 my-6">
        <p className="text-indigo-200 m-0 leading-relaxed">
          <strong>My rule:</strong> If I cannot clearly explain how two pieces
          of data are related, I probably haven't designed the database clearly
          enough yet.
        </p>
      </div>

      {/* Final */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mt-10">
        <p className="text-xs text-slate-500 m-0">DATABASE FOUNDATION</p>
        <h3 className="text-lg font-bold text-slate-100 m-0 mt-1">
          Organized Data → Reliable Dashboard
        </h3>
      </div>
    </article>
  );
}