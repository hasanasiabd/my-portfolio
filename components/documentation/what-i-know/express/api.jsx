// src/components/documentation/what-i-know/express/api.jsx
// This file contains the story for the Express API documentation page.

import React from "react";

export default function ExpressApiStory() {
  return (
    <article className="prose prose-invert max-w-none">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        How to Build a REST API with Express.js
      </h1>

      {/* Quick Overview */}
      <div className="bg-slate-900 border border-slate-800 border-l-4 border-l-indigo-500 p-5 rounded-xl mb-8 shadow-lg">
        <h3 className="text-lg font-bold text-indigo-300 mt-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          A REST API allows different parts of an application to communicate
          through HTTP. Express.js makes it simple to create endpoints that
          receive requests, perform logic, communicate with a database, and
          return responses such as JSON.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Restaurant Waiter
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you walk into a restaurant.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You sit at your table and tell the waiter:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <p className="text-indigo-300 font-semibold m-0">
          "I'd like one chicken burger, please."
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        You don't walk directly into the kitchen and start searching for the
        burger yourself.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The waiter takes your request to the kitchen.
        The kitchen prepares the food.
        Then the waiter brings the result back to you.
      </p>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 mb-8">
        <p className="text-slate-300 m-0 leading-relaxed">
          <strong className="text-indigo-300">Customer</strong> = Frontend
          <br />
          <strong className="text-indigo-300">Waiter</strong> = API
          <br />
          <strong className="text-indigo-300">Kitchen</strong> = Backend / Database
          <br />
          <strong className="text-indigo-300">Food</strong> = Data / Response
        </p>
      </div>

      {/* What is REST */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What Does REST API Mean?
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        REST is a common architectural style for designing web APIs.
        Instead of thinking about individual screens, we think about
        resources such as products, users, orders, and posts.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        HTTP methods then describe what we want to do with those resources.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-emerald-400">GET /products</code>
          <p className="text-slate-400 mb-0 mt-3">
            Read products.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-emerald-400">POST /products</code>
          <p className="text-slate-400 mb-0 mt-3">
            Create a product.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-emerald-400">PUT /products/10</code>
          <p className="text-slate-400 mb-0 mt-3">
            Update product 10.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-emerald-400">DELETE /products/10</code>
          <p className="text-slate-400 mb-0 mt-3">
            Delete product 10.
          </p>
        </div>

      </div>

      {/* Setup */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 1: Create an Express Server
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`const express = require("express");

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("API running on port 3000");
});`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The line below is especially important when your API receives JSON:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8">
        <code className="text-indigo-300">
          app.use(express.json());
        </code>

        <p className="text-slate-400 mt-3 mb-0">
          It allows Express to parse incoming JSON request bodies.
        </p>
      </div>

      {/* GET */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 2: Create a GET Endpoint
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Let's create an endpoint that returns products.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`const products = [
  {
    id: 1,
    name: "Laptop",
    price: 900
  },
  {
    id: 2,
    name: "Phone",
    price: 600
  }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Now a client can request:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8">
        <code className="text-indigo-300 text-lg">
          GET /api/products
        </code>

        <p className="text-slate-400 mt-3 mb-0">
          And Express returns the product data as JSON.
        </p>
      </div>

      {/* POST */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 3: Create a POST Endpoint
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        What if the frontend wants to create a new product?
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        That's where POST comes in.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`app.post("/api/products", (req, res) => {
  const newProduct = req.body;

  console.log(newProduct);

  res.status(201).json({
    message: "Product created successfully",
    product: newProduct
  });
});`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The frontend can send JSON such as:
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-8">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`{
  "name": "Keyboard",
  "price": 80
}`}
        </pre>
      </div>

      {/* Database */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 4: Connect the API to a Database
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        In a real application, we usually don't keep products inside an array.
        We store them in a database such as PostgreSQL, MongoDB, or MySQL.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The API becomes the middleman between the frontend and database.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8">
        <p className="text-slate-300 font-mono text-sm leading-loose m-0">
          Frontend
          <br />
          ↓
          <br />
          GET /api/products
          <br />
          ↓
          <br />
          Express Route
          <br />
          ↓
          <br />
          Database
          <br />
          ↓
          <br />
          JSON Response
          <br />
          ↓
          <br />
          Frontend
        </p>
      </div>

      {/* Example DB */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Simple Database Example
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        For example, imagine we have a PostgreSQL database connected to our
        Express application.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`app.get("/api/products", async (req, res) => {
  const result = await db.query(
    "SELECT * FROM products"
  );

  res.json(result.rows);
});`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Now the route isn't just returning hard-coded data.
        It asks the database for the products and sends the result back to
        the client.
      </p>

      {/* Full Flow */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Complete Journey
      </h2>

      <div className="space-y-3 mb-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          🖥️ React / Next.js asks for products
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="bg-slate-900 border border-indigo-500/30 rounded-xl p-4">
          📡 GET /api/products
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          🟢 Express receives the request
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          🛣️ Express finds the matching route
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          🗄️ Database returns products
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          📦 Express sends JSON
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          🖥️ Frontend renders product cards
        </div>

      </div>

      {/* Final Analogy */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Restaurant in One Picture
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">

        <div className="grid md:grid-cols-5 gap-3 text-center items-center">

          <div className="bg-slate-800 rounded-xl p-4">
            <div className="text-2xl mb-2">🧑</div>
            <p className="text-slate-200 text-sm font-semibold m-0">
              Customer
            </p>
            <p className="text-slate-500 text-xs m-0 mt-1">
              Frontend
            </p>
          </div>

          <div className="text-slate-600 text-xl">→</div>

          <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4">
            <div className="text-2xl mb-2">🧑‍🍳</div>
            <p className="text-indigo-300 text-sm font-semibold m-0">
              Waiter
            </p>
            <p className="text-slate-500 text-xs m-0 mt-1">
              API
            </p>
          </div>

          <div className="text-slate-600 text-xl">→</div>

          <div className="bg-slate-800 rounded-xl p-4">
            <div className="text-2xl mb-2">🍳</div>
            <p className="text-slate-200 text-sm font-semibold m-0">
              Kitchen
            </p>
            <p className="text-slate-500 text-xs m-0 mt-1">
              Database
            </p>
          </div>

        </div>

      </div>

      {/* Takeaways */}
      <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-2xl p-6 mt-10">
        <h3 className="text-xl font-bold text-indigo-300 mt-0 mb-3">
          What I Learned
        </h3>

        <p className="text-slate-300 leading-relaxed mb-0">
          An API is a communication layer between different parts of an
          application. With Express.js, we can create clear endpoints for
          reading, creating, updating, and deleting resources. In a real
          full-stack application, Express can receive a request from the
          frontend, communicate with the database, and return the result as
          JSON.
        </p>
      </div>

    </article>
  );
}