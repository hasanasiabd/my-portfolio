// components/documentation/what-i-know/javascript/functions.jsx

import React from "react";

export default function FunctionsStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Is a Function? The Story of Writing Once and Reusing It
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6">
        <h3 className="text-lg font-bold text-indigo-300 m-0">Quick Overview</h3>
        <p className="text-slate-300 m-0">
          A function is a self-contained block of reusable code designed to perform a specific operation. It takes inputs (parameters), processes them, and returns a predictable output.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">The Real-World Story: The Gourmet Coffee Machine</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you run a busy coffee shop in the heart of the city. Every morning, hundreds of customers order custom drinks. Some want a Cappuccino with skim milk, while others want an Espresso with double sugar.
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        If you had to invent the step-by-step physical process of boiling water, grinding beans, measuring steam, and pouring milk individually for every single customer from scratch, your business would grind to a halt. 
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        Instead, you build a smart coffee machine. You pre-program a master recipe button called <code>makeCoffee()</code>. All the barista has to do is pass in two raw ingredients (Parameters: <code>milkType</code>, <code>sugarCount</code>), press the button, and out comes the perfect cup of coffee (Return Value).
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Why Functions Rule Software Architecture</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        Without functions, programming is duplicate labor. If an application calculates tax rates across 20 different checkout screens, writing manual math formulas on every page creates maintenance nightmares. With functions, if tax rules change, you change the code in <strong>one single place</strong>.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Step-by-Step Code Example</h2>
      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`// 1. Defining the reusable function recipe
function calculateInvoiceTotal(subtotal, taxRate = 0.08, discount = 0) {
  const taxAmount = subtotal * taxRate;
  const grandTotal = subtotal + taxAmount - discount;
  
  return grandTotal.toFixed(2); // Output formatted to 2 decimal places
}

// 2. Invoking (calling) the function with different arguments
const customerOrder1 = calculateInvoiceTotal(100);        // Returns "108.00"
const customerOrder2 = calculateInvoiceTotal(250, 0.1, 15); // Returns "260.00"

console.log(\`Order 1 total: \$\${customerOrder1}\`);`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">What I Learned</h2>
      <p className="text-slate-300 leading-relaxed">
        Writing good functions is about maintaining the <strong>Single Responsibility Principle (SRP)</strong>. A function should do one thing, do it exceptionally well, and have a clear, descriptive name.
      </p>
    </article>
  );
}