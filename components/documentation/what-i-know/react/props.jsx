import React from "react";

export default function ReactPropsStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        What Are Props? Passing Data from Parent to Child
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6">
        <h3 className="text-lg font-bold text-indigo-300 m-0">Quick Overview</h3>
        <p className="text-slate-300 m-0">
          Props (short for properties) are read-only input values passed from a parent React component to a child component, enabling components to be dynamic and customizable.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">The Real-World Story: Custom Postcard Printing</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        Think of a React component as an unprinted blank wooden frame. By itself, the frame is empty. 
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        When you slide a photo inside, you give it personality. **Props are that photo.** You pass custom titles, images, and prices into the exact same component frame, allowing one single code layout to display 10,000 completely different products!
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Step-by-Step Code Example</h2>
      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`// Child Component accepting props
function ProjectCard({ title, category, stars }) {
  return (
    <div className="border border-slate-800 p-4 rounded-lg">
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="text-slate-400">{category}</p>
      <span className="text-amber-400">★ {stars}</span>
    </div>
  );
}

// Parent Component passing props down
export default function PortfolioSection() {
  return (
    <ProjectCard 
      title="TaskMaster App" 
      category="Full-Stack Web App" 
      stars={142} 
    />
  );
}`}
        </pre>
      </div>
    </article>
  );
}