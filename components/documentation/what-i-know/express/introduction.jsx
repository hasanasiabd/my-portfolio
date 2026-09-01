import React from "react";

export default function ExpressIntroductionStory() {
  return (
    <article className="prose prose-invert max-w-none">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        What Is Express.js? A Simple Way to Build Servers with Node.js
      </h1>

      {/* Quick Overview */}
      <div className="bg-slate-900 border border-slate-800 border-l-4 border-l-indigo-500 p-5 rounded-xl mb-8 shadow-lg">
        <h3 className="text-lg font-bold text-indigo-300 mt-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          Express.js is a lightweight web framework built on top of Node.js.
          It provides simple tools for handling HTTP requests, creating routes,
          building APIs, and sending responses to clients.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Building a Restaurant
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you decide to open a restaurant.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        At first, you have only a small kitchen. You can personally take the
        customer's order, walk into the kitchen, prepare the food, and bring it
        back to the table.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        But imagine your restaurant suddenly becomes popular.
        Now hundreds of customers are coming in every hour.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You cannot personally manage every customer, every order, every table,
        and every request.
      </p>

      <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 my-6">
        <p className="text-slate-300 m-0 leading-relaxed">
          You need a system that says:
        </p>

        <ul className="text-slate-300 mt-3 mb-0">
          <li>Who is asking for something?</li>
          <li>What do they want?</li>
          <li>Where should the request go?</li>
          <li>What response should come back?</li>
        </ul>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        This is where Express.js becomes useful in the Node.js world.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Think of{" "}
        <code className="text-indigo-300">Node.js</code> as the kitchen and
        server environment, while{" "}
        <code className="text-indigo-300">Express.js</code> gives you an
        organized system for receiving requests, deciding what should happen,
        and sending responses back.
      </p>

      {/* Problem */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Problem: Node.js Can Become Repetitive
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Node.js already gives us the ability to create a server.
        So why do developers need Express?
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You can absolutely create a server using Node's built-in{" "}
        <code className="text-indigo-300">http</code> module.
        But as your application grows, manually checking URLs,
        HTTP methods, and responses can become repetitive.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/products" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(JSON.stringify([
      { id: 1, name: "Laptop" },
      { id: 2, name: "Phone" }
    ]));
  }
});

server.listen(3000);`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        This works. But imagine having 50 routes, authentication,
        validation, logging, database operations, error handling, and more.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Your server code can quickly become difficult to manage.
      </p>

      {/* Express Solution */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Solution: Express.js
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Express gives us a cleaner way to organize all of these responsibilities.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Instead of manually checking every URL inside one giant function,
        we can define routes clearly.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
  ]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Look at the difference.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        We simply tell Express:
      </p>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 mb-6">
        <p className="text-indigo-300 font-semibold m-0">
          "When someone sends a GET request to /products, run this function."
        </p>
      </div>

      {/* Request Flow */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What Happens When a User Visits /products?
      </h2>

      <p className="text-slate-300 leading-relaxed mb-6">
        Let's follow the journey of one request.
      </p>

      <div className="space-y-3 mb-8">

        <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4">
          <span className="text-2xl">🌐</span>
          <div>
            <p className="text-slate-100 font-semibold m-0">
              1. Browser
            </p>
            <p className="text-slate-400 text-sm m-0">
              Requests /products
            </p>
          </div>
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4">
          <span className="text-2xl">🟢</span>
          <div>
            <p className="text-slate-100 font-semibold m-0">
              2. Express Server
            </p>
            <p className="text-slate-400 text-sm m-0">
              Receives the HTTP request
            </p>
          </div>
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4">
          <span className="text-2xl">🛣️</span>
          <div>
            <p className="text-slate-100 font-semibold m-0">
              3. Route
            </p>
            <p className="text-slate-400 text-sm m-0">
              Express finds the /products route
            </p>
          </div>
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4">
          <span className="text-2xl">🗄️</span>
          <div>
            <p className="text-slate-100 font-semibold m-0">
              4. Application Logic
            </p>
            <p className="text-slate-400 text-sm m-0">
              Data can come from a database or another service
            </p>
          </div>
        </div>

        <div className="text-center text-slate-600">↓</div>

        <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4">
          <span className="text-2xl">📦</span>
          <div>
            <p className="text-slate-100 font-semibold m-0">
              5. Response
            </p>
            <p className="text-slate-400 text-sm m-0">
              Express sends the result back to the browser
            </p>
          </div>
        </div>

      </div>

      {/* Core Concept */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Two Most Important Objects
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        When Express handles a request, you will constantly work with two
        important objects:
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-lg font-bold text-indigo-300 mt-0">
            req — Request
          </h3>

          <p className="text-slate-400 mb-0">
            Contains information about what the client is asking for.
            It can contain the URL, HTTP method, parameters, body, headers,
            and more.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-lg font-bold text-indigo-300 mt-0">
            res — Response
          </h3>

          <p className="text-slate-400 mb-0">
            Used by the server to send something back to the client,
            such as JSON, HTML, status codes, or other data.
          </p>
        </div>

      </div>

      {/* Real Example */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        A Small Real-World Example
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine your portfolio has a list of projects stored in PostgreSQL.
        Your frontend wants to display those projects.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The browser doesn't need to know how your database works.
        It simply asks your Express server for the data.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`app.get("/api/projects", async (req, res) => {
  const projects = await getProjectsFromDatabase();

  res.json(projects);
});`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        Now the journey becomes:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-8">
        <p className="text-slate-300 font-mono text-sm leading-loose m-0">
          Browser → Express Route → Database → Express → JSON Response → Browser
        </p>
      </div>

      {/* Important Clarification */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Does Express Replace Node.js?
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        No.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        This is an important distinction.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
        <ul className="text-slate-300 m-0">
          <li className="mb-3">
            <strong className="text-indigo-300">Node.js</strong> provides the
            runtime that allows JavaScript to run on the server.
          </li>

          <li>
            <strong className="text-indigo-300">Express.js</strong> is a
            framework that runs on Node.js and makes building web servers and
            APIs easier.
          </li>
        </ul>
      </div>

      {/* Final Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Big Picture
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Think about our restaurant one last time.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Node.js gives you the kitchen where the work can actually happen.
        Express gives you the organized restaurant system around that kitchen.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Customers place orders, routes decide where those orders go,
        middleware can check or process them, your application talks to the
        database, and finally a response is sent back to the customer.
      </p>

      <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-2xl p-6 mt-8">
        <h3 className="text-xl font-bold text-indigo-300 mt-0 mb-3">
          What I Learned
        </h3>

        <p className="text-slate-300 leading-relaxed mb-0">
          Express.js does not create a completely new server environment.
          Instead, it gives Node.js a clean and practical structure for
          handling HTTP requests, routes, middleware, APIs, and responses.
          As an application grows, this structure makes the backend much easier
          to organize and maintain.
        </p>
      </div>

    </article>
  );
}