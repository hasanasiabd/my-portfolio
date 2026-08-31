import React from "react";

export default function MapStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        How Does map() Work? Creating 1,000 Product Cards from One Component
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6">
        <h3 className="text-lg font-bold text-indigo-300 m-0">Quick Overview</h3>
        <p className="text-slate-300 m-0">
          The <code>.map()</code> method iterates over an array, transforms each item using a callback function, and returns a brand-new array without modifying the original array.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">The Real-World Story: The Smart Factory Assembly Line</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        Picture an automated toy factory. On one end of the conveyor belt, you have raw wooden blocks (Raw Data). As each block moves down the belt, a high-tech laser engraves a design on it, paints it red, and packages it into a finished toy.
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        Crucially, the raw wooden block supply remains untouched in your inventory records—you are creating a brand new collection of finished toys. In modern web development, <code>.map()</code> is that exact assembly line, taking raw database objects and transforming them into interactive React HTML cards.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Step-by-Step Code Example</h2>
      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`const rawProducts = [
  { id: 101, title: "Wireless Keyboard", price: 49 },
  { id: 102, title: "Gaming Mouse", price: 29 }
];

// Transforming raw JSON data into styled JSX UI cards
const ProductList = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {rawProducts.map((product) => (
        <div key={product.id} className="p-4 bg-slate-800 rounded-lg">
          <h3 className="text-lg font-bold text-white">{product.title}</h3>
          <p className="text-indigo-400">\${product.price}</p>
        </div>
      ))}
    </div>
  );
};`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Golden Rule in React</h2>
      <p className="text-slate-300 leading-relaxed">
        Always provide a unique <code>key</code> prop (like <code>key={'{product.id}'}</code>) when mapping elements in React. This allows React’s Virtual DOM to track item updates efficiently without re-rendering the whole list.
      </p>
    </article>
  );
}