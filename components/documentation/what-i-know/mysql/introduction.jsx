import React from "react";

export default function MySQLIntroductionStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is MySQL? Understanding Relational Databases
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-5 mb-8 rounded-r-xl">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          MySQL is a popular relational database management system used to
          store, organize, retrieve, and manage structured application data.
          It stores information inside tables made of rows and columns and
          uses SQL to communicate with that data.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Supermarket Inventory
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you own a large supermarket. Every day, thousands of products
        arrive, customers purchase items, prices change, and new products are
        added.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You could throw every product record into one giant notebook, but
        finding anything would quickly become a nightmare. Instead, you
        organize everything into structured sections: products, customers,
        orders, payments, and suppliers.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        MySQL works in a very similar way. Your application has data, and
        MySQL gives that data an organized home where it can be stored and
        retrieved efficiently.
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-2">🗄️</div>
          <h3 className="text-lg font-bold text-slate-100 mb-2">
            Database
          </h3>
          <p className="text-slate-400 text-sm">
            The organized container that holds your application data.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-2">📋</div>
          <h3 className="text-lg font-bold text-slate-100 mb-2">
            Tables
          </h3>
          <p className="text-slate-400 text-sm">
            Structured collections of related information.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-2">🔎</div>
          <h3 className="text-lg font-bold text-slate-100 mb-2">
            SQL
          </h3>
          <p className="text-slate-400 text-sm">
            The language used to communicate with the database.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why Developers Use MySQL
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        MySQL is widely used because it provides a structured way to work with
        large amounts of application data. Websites can use it for users,
        products, orders, payments, posts, comments, and many other types of
        information.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Simple Example
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm">
{`CREATE DATABASE shop;

USE shop;

CREATE TABLE products (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10, 2)
);`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What I Learned
      </h2>

      <p className="text-slate-300 leading-relaxed">
        MySQL is not just a place where data sits. It is an organized system
        that helps applications safely store, find, change, and manage data.
        Once the idea of databases and tables becomes clear, working with SQL
        becomes much easier.
      </p>
    </article>
  );
}