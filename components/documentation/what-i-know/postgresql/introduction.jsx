import React from "react";

export default function PostgreSQLIntroductionStory() {
  return (
    <article className="prose prose-invert max-w-none">

      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Is PostgreSQL? A Simple Story of Storing Application Data
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6 rounded-r-lg">
        <h3 className="text-lg font-bold text-indigo-300 m-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          PostgreSQL is an open-source relational database system used to
          store, organize, search, and manage application data reliably.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        The Real-World Story: The Supermarket Warehouse
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you own a huge online supermarket. Every day, thousands of
        customers place orders, thousands of products are added, and customer
        information keeps growing.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You cannot simply throw all this information into one giant room.
        You need a proper warehouse where everything has a specific place.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        That's where PostgreSQL comes in.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <p className="text-slate-300 m-0">
          🏪 Application → 🗄️ PostgreSQL → 📦 Organized Data
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        What Can PostgreSQL Store?
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        A real application might need to store users, products, orders,
        payments, reviews, and many other types of information.
      </p>

      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`Users
Products
Orders
Payments
Reviews`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        PostgreSQL in a Web Application
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        When a customer opens your website, the browser usually doesn't
        directly talk to PostgreSQL. Your backend acts as the middleman.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`Browser
   ↓
Next.js / Node.js Backend
   ↓
PostgreSQL
   ↓
Data
   ↓
Backend
   ↓
Browser`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        PostgreSQL is not just a place to dump data. It is a structured
        system designed to store relationships between data and retrieve
        information efficiently and safely.
      </p>

    </article>
  );
}