import React from "react";

export default function EcommerceDatabaseStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
          🗄️ Database Design
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          How I Designed the Database for Products, Users, and Orders
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed">
          Once the application idea was clear, I needed a place where the
          application could reliably remember everything.
        </p>
      </div>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          The database became the memory of the e-commerce application. It
          needed to keep users, products, orders, and relationships between
          them organized without creating unnecessary duplication.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Supermarket Warehouse
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Imagine walking into a huge supermarket warehouse containing
        thousands of products.
      </p>

      <p className="text-slate-300 leading-relaxed">
        If every product were thrown into one giant room without shelves,
        labels, or sections, finding a single item would be painful.
      </p>

      <p className="text-slate-300 leading-relaxed">
        A database solves this problem by giving information a structured
        home.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Main Tables
      </h2>

      <div className="grid md:grid-cols-2 gap-4 not-prose">
        {[
          ["👤", "Users", "Who is using the store?"],
          ["📦", "Products", "What is being sold?"],
          ["🛒", "Orders", "What has been purchased?"],
          ["🧾", "Order Items", "Which products belong to an order?"],
        ].map(([icon, title, description]) => (
          <div
            key={title}
            className="p-5 rounded-xl bg-slate-900 border border-slate-800"
          >
            <span className="text-2xl">{icon}</span>
            <h3 className="text-lg font-bold text-slate-100 mt-3 mb-1">
              {title}
            </h3>
            <p className="text-sm text-slate-400 m-0">{description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why Relationships Matter
      </h2>

      <p className="text-slate-300 leading-relaxed">
        A user can place many orders. An order can contain many products.
        Instead of copying the complete product information into every order,
        I can connect the records using relationships.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6 not-prose overflow-x-auto">
        <pre className="text-emerald-400 text-sm font-mono">
{`Users
  │
  └── Orders
        │
        └── Order Items
                │
                └── Products`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Lesson
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Database design is not simply about creating tables. It is about
        deciding how information should live together and how different
        pieces of information should communicate.
      </p>

      <div className="mt-8 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 not-prose">
        <p className="text-emerald-400 font-semibold m-0">
          💡 My takeaway
        </p>

        <p className="text-slate-300 mt-2 mb-0">
          A good database behaves like a well-organized warehouse: everything
          has a place, and you can find what you need without searching the
          entire building.
        </p>
      </div>
    </article>
  );
}