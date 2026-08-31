import React from "react";

export default function FetchStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Is fetch()? A Simple Story of Getting Data from a Server
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6">
        <h3 className="text-lg font-bold text-indigo-300 m-0">Quick Overview</h3>
        <p className="text-slate-300 m-0">
          The <code>fetch()</code> API is a modern browser web standard for making HTTP network requests to servers to send or retrieve JSON payload data.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">The Real-World Story: The Express Courier Service</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        Think of <code>fetch()</code> as hiring an express courier. Your website writes down a delivery address (API Endpoint), attaches instructions (HTTP Method like GET or POST), and hands the parcel to the courier.
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        The courier travels across the internet highway to the backend database server, picks up the requested package, and delivers it back to your React application.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Step-by-Step Code Example</h2>
      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`// Sending a POST request with payload data
async function createNewPost(postData) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  const result = await response.json();
  return result;
}`}
        </pre>
      </div>
    </article>
  );
}