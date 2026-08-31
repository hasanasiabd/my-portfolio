import React from "react";

export default function AsyncAwaitStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        Async/Await Explained: Why Does JavaScript Sometimes Need to Wait?
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6">
        <h3 className="text-lg font-bold text-indigo-300 m-0">Quick Overview</h3>
        <p className="text-slate-300 m-0">
          <code>async/await</code> is syntactic sugar built on top of JavaScript Promises, allowing developers to write asynchronous non-blocking code that looks and behaves like clean synchronous code.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">The Real-World Story: Ordering at a Fast-Food Restaurant</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine walking into a restaurant. You place an order for a burger. The cashier gives you a receipt with order number #42 and says, "We will call your number when it's ready."
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        In a synchronous world, the cashier would freeze, refuse to talk to any other customer, and stand completely still for 10 minutes until your burger finished cooking. That would crash the store!
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        In JavaScript, fetching data over the network takes time. Using <code>async/await</code> allows the browser to keep running smooth animations while waiting patiently for server data to arrive.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Step-by-Step Code Example</h2>
      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`async function getGithubProfile(username) {
  try {
    console.log("1. Sending request to GitHub...");
    
    // Pause execution of THIS function until network response arrives
    const response = await fetch(\`https://api.github.com/users/\${username}\`);
    
    if (!response.ok) {
      throw new Error("User not found on GitHub");
    }

    const profileData = await response.json();
    console.log("2. Data received successfully:", profileData.name);
    return profileData;
  } catch (error) {
    console.error("3. Error captured:", error.message);
  }
}`}
        </pre>
      </div>
    </article>
  );
}