// components/documentation/what-i-know/react/api-fetch.jsx

import React from "react";

export default function ApiFetchStory() {
  return (
    <article className="prose prose-invert max-w-none">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
        How to Fetch API Data in React and Display It on the Screen
      </h1>

      {/* Quick Overview */}
      <div className="bg-slate-900/80 border border-indigo-500/20 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8 shadow-lg">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          React can communicate with a backend API using tools such as
          fetch(). The API can retrieve data from a database and return it
          to React, where the data can be displayed as UI.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: The Restaurant Waiter 🍽️
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you are sitting inside a restaurant.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        You want to order a burger. But you don't walk into the kitchen,
        open the refrigerator, and start searching for ingredients yourself.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Instead, you tell the waiter:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-6">
        <div className="flex gap-4 items-start">
          <div className="text-3xl">🙋</div>

          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">
              Customer
            </p>

            <p className="text-slate-100 font-semibold m-0">
              "Please bring me the burger."
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 my-5" />

        <div className="flex gap-4 items-start">
          <div className="text-3xl">🧑‍🍳</div>

          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">
              Restaurant
            </p>

            <p className="text-slate-100 font-semibold m-0">
              Kitchen prepares the order.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 my-5" />

        <div className="flex gap-4 items-start">
          <div className="text-3xl">🍔</div>

          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">
              Response
            </p>

            <p className="text-slate-100 font-semibold m-0">
              The waiter brings the burger back to you.
            </p>
          </div>
        </div>
      </div>

      {/* Connection */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Now Replace the Restaurant with a Web Application
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 my-6 overflow-x-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">

          <div className="min-w-[120px]">
            <div className="text-3xl mb-2">🖥️</div>
            <p className="text-indigo-400 font-bold text-sm m-0">
              React
            </p>
            <p className="text-slate-500 text-xs m-0">
              Client
            </p>
          </div>

          <div className="text-slate-600 hidden md:block">
            →
          </div>

          <div className="min-w-[120px]">
            <div className="text-3xl mb-2">📨</div>
            <p className="text-indigo-400 font-bold text-sm m-0">
              fetch()
            </p>
            <p className="text-slate-500 text-xs m-0">
              Request
            </p>
          </div>

          <div className="text-slate-600 hidden md:block">
            →
          </div>

          <div className="min-w-[120px]">
            <div className="text-3xl mb-2">⚙️</div>
            <p className="text-indigo-400 font-bold text-sm m-0">
              API
            </p>
            <p className="text-slate-500 text-xs m-0">
              Backend
            </p>
          </div>

          <div className="text-slate-600 hidden md:block">
            →
          </div>

          <div className="min-w-[120px]">
            <div className="text-3xl mb-2">🗄️</div>
            <p className="text-indigo-400 font-bold text-sm m-0">
              Database
            </p>
            <p className="text-slate-500 text-xs m-0">
              Data
            </p>
          </div>

        </div>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        The important idea is that the React client normally does not
        directly connect to your PostgreSQL or MongoDB database. It talks
        to a backend API, and the backend communicates with the database.
      </p>

      {/* Code */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step-by-Step Code Example
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Suppose our API provides a list of products from:
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-6">
        <code className="text-indigo-400">
          /api/products
        </code>
      </div>

      <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto leading-relaxed">
{`import { useEffect, useState } from "react";

export default function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function getProducts() {

      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);

      } catch (error) {
        console.error(error);

      } finally {
        setLoading(false);
      }
    }

    getProducts();

  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>\${product.price}</p>
        </div>
      ))}
    </div>
  );
}`}
        </pre>
      </div>

      {/* Flow */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What Happens Behind the Scenes?
      </h2>

      <div className="space-y-3 my-6">

        {[
          ["01", "React renders the Products component."],
          ["02", "useEffect() runs after the component renders."],
          ["03", "fetch() sends a request to /api/products."],
          ["04", "The backend receives the request."],
          ["05", "The backend gets products from the database."],
          ["06", "The API sends JSON data back to React."],
          ["07", "setProducts() stores the received data in state."],
          ["08", "React re-renders and displays the products."]
        ].map(([number, text]) => (
          <div
            key={number}
            className="flex gap-4 items-start bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <span className="text-indigo-400 font-bold font-mono">
              {number}
            </span>

            <span className="text-slate-300 text-sm">
              {text}
            </span>
          </div>
        ))}

      </div>

      {/* Big Flow */}
      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 my-8">

        <h3 className="text-indigo-300 font-bold text-lg mb-5">
          The Complete Journey
        </h3>

        <div className="flex flex-wrap items-center gap-2 text-sm font-mono">
          <span className="bg-slate-900 px-3 py-2 rounded-lg text-slate-300">
            React
          </span>

          <span className="text-indigo-400">→</span>

          <span className="bg-slate-900 px-3 py-2 rounded-lg text-slate-300">
            fetch()
          </span>

          <span className="text-indigo-400">→</span>

          <span className="bg-slate-900 px-3 py-2 rounded-lg text-slate-300">
            API
          </span>

          <span className="text-indigo-400">→</span>

          <span className="bg-slate-900 px-3 py-2 rounded-lg text-slate-300">
            Database
          </span>

          <span className="text-indigo-400">→</span>

          <span className="bg-slate-900 px-3 py-2 rounded-lg text-slate-300">
            JSON
          </span>

          <span className="text-indigo-400">→</span>

          <span className="bg-slate-900 px-3 py-2 rounded-lg text-slate-300">
            React UI
          </span>
        </div>

      </div>

      {/* Important Note */}
      <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 my-8">
        <h3 className="text-amber-300 font-bold text-lg mt-0">
          An Important Thing to Remember
        </h3>

        <p className="text-slate-300 mb-0">
          fetch() itself does not magically connect React directly to
          PostgreSQL or MongoDB. It sends an HTTP request to an endpoint.
          Your backend API is responsible for communicating with the
          database and returning the data.
        </p>
      </div>

      {/* Takeaway */}
      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 mt-10">
        <h2 className="text-xl font-bold text-indigo-300 mt-0">
          What I Learned
        </h2>

        <p className="text-slate-300 mb-0">
          Fetching data is a complete journey rather than a single
          function call. React requests data, the API handles the request,
          the backend communicates with the database, and the response
          finally comes back to React where it becomes part of the UI.
        </p>
      </div>

    </article>
  );
}