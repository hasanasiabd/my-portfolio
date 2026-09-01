// src/components/documentation/what-i-know/express/routes.jsx
// This file contains the story for the Express Routes documentation page.

import React from "react";

export default function ExpressRoutesStory() {
  return (
    <article className="prose prose-invert max-w-none">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Are Express Routes? Deciding What Happens at Each URL
      </h1>

      {/* Quick Overview */}
      <div className="bg-slate-900 border border-slate-800 border-l-4 border-l-indigo-500 p-5 rounded-xl mb-8 shadow-lg">
        <h3 className="text-lg font-bold text-indigo-300 mt-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          An Express route defines how your server should respond when a client
          requests a specific URL using a specific HTTP method such as GET,
          POST, PUT, or DELETE.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A City Full of Roads
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you are visiting a huge city for the first time.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The city contains a hospital, a university, a shopping mall,
        a restaurant, and thousands of houses.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You tell your taxi driver:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <p className="text-indigo-300 font-semibold m-0">
          "Take me to 25 Main Street."
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The address tells the driver where you want to go.
        Without an address, the driver has no idea which building you mean.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Express routes work in a very similar way.
      </p>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 mb-8">
        <p className="text-slate-300 m-0 leading-relaxed">
          <strong className="text-indigo-300">URL</strong> = Destination
          <br />
          <strong className="text-indigo-300">HTTP Method</strong> = Type of request
          <br />
          <strong className="text-indigo-300">Route Handler</strong> = What happens there
        </p>
      </div>

      {/* Problem */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Problem: One Server, Many Requests
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine your website has all of these pages and actions:
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {[
          "View products",
          "View users",
          "Create a product",
          "Delete a product",
          "Login",
          "View profile",
        ].map((item) => (
          <div
            key={item}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-slate-300"
          >
            {item}
          </div>
        ))}
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The server needs to understand which request is asking for which
        operation.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        That's exactly what routes help us organize.
      </p>

      {/* Basic Route */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Your First Express Route
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my website!");
});

app.listen(3000);`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Here we created a route for the root URL:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8">
        <code className="text-indigo-300 text-lg">
          GET /
        </code>

        <p className="text-slate-400 mt-3 mb-0">
          When someone visits the home URL using a GET request,
          Express runs the function.
        </p>
      </div>

      {/* Multiple Routes */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Multiple Roads, Multiple Routes
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Now our application grows.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/products", (req, res) => {
  res.send("Products Page");
});

app.get("/users", (req, res) => {
  res.send("Users Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Now Express knows exactly where each request should go.
      </p>

      {/* HTTP Methods */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Route Is More Than Just a URL
      </h2>

      <p className="text-slate-300 leading-relaxed mb-6">
        The HTTP method matters too.
        The same URL can perform completely different operations.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-emerald-400">GET /products</code>
          <p className="text-slate-400 mb-0 mt-3">
            Get a list of products.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <code className="text-emerald-400">POST /products</code>
          <p className="text-slate-400 mb-0 mt-3">
            Create a new product.
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

      {/* Request Flow */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Follow One Request
      </h2>

      <div className="space-y-3 mb-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          🌐 Browser requests{" "}
          <code className="text-indigo-300">GET /products</code>
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          🛣️ Express searches for a matching route
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          ⚙️ The route handler executes
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          📦 Server sends the response
        </div>

      </div>

      {/* Route Parameters */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Dynamic Routes: When the Address Changes
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Sometimes we don't know the exact value ahead of time.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        For example, every product has a different ID.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`app.get("/products/:id", (req, res) => {
  const productId = req.params.id;

  res.json({
    message: "Product requested",
    id: productId
  });
});`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Now these URLs can all use the same route:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8">
        <p className="text-slate-300 font-mono text-sm leading-loose m-0">
          /products/10
          <br />
          /products/25
          <br />
          /products/100
        </p>
      </div>

      {/* Takeaways */}
      <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-2xl p-6 mt-10">
        <h3 className="text-xl font-bold text-indigo-300 mt-0 mb-3">
          What I Learned
        </h3>

        <p className="text-slate-300 leading-relaxed mb-0">
          Express routes act like addresses for our server. They connect a
          specific HTTP request to the code that should handle it. Once you
          understand routes, building APIs and organizing backend applications
          becomes much easier.
        </p>
      </div>

    </article>
  );
}