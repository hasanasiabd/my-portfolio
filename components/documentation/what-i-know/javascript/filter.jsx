import React from "react";

export default function FilterStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-extrabold text-indigo-400 mb-4">
        How Does filter() Work? Finding the Products You Actually Need
      </h1>

      <div className="bg-slate-900 border-l-4 border-indigo-500 p-4 mb-6">
        <h3 className="text-lg font-bold text-indigo-300 m-0">Quick Overview</h3>
        <p className="text-slate-300 m-0">
          The <code>.filter()</code> method evaluates every element in an array against a boolean test condition. It returns a new array containing only the elements that evaluate to <code>true</code>.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">The Real-World Story: The Security Guard at VIP Club</h2>
      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a line of 100 people waiting to enter a VIP tech lounge. The security guard at the door has a specific rule: "Only people wearing a VIP wristband AND over age 18 can enter."
      </p>
      <p className="text-slate-300 leading-relaxed mb-4">
        The guard inspects each person one by one. If they meet both criteria, they step into the lounge (New Array). If they don't, they are filtered out. The original crowd outside remains unaffected. That is <code>.filter()</code> in action.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Step-by-Step Code Example</h2>
      <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 mb-6">
        <pre className="text-emerald-400 font-mono text-sm overflow-x-auto">
{`const courses = [
  { id: 1, title: "JavaScript Fundamentals", category: "JS", isPublished: true },
  { id: 2, title: "Advanced Python", category: "Python", isPublished: true },
  { id: 3, title: "Draft Draft Course", category: "JS", isPublished: false }
];

// Filtering published JavaScript courses only
const visibleJsCourses = courses.filter(
  (course) => course.category === "JS" && course.isPublished === true
);

console.log(visibleJsCourses); 
// Returns Array with only 1 item: "JavaScript Fundamentals"`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">What I Learned</h2>
      <p className="text-slate-300 leading-relaxed">
        Combining <code>.filter()</code> followed by <code>.map()</code> is one of the most common power patterns in frontend development for building instant search bars and category filters!
      </p>
    </article>
  );
}