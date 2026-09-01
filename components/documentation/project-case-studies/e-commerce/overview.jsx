import React from "react";

export default function EcommerceOverviewStory() {
  return (
    <article className="prose prose-invert max-w-none">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
          🏗️ Project Case Study
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          How I Planned and Built an E-Commerce Platform from Scratch
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed">
          Building an e-commerce application is not just about creating a
          beautiful product page. It is about connecting users, products,
          carts, orders, payments, databases, and APIs into one reliable
          system.
        </p>
      </div>

      {/* Quick Overview */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10 shadow-xl">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          I approached the project as a complete system rather than a
          collection of individual pages. First I planned the architecture,
          then designed the database, implemented authentication, connected
          the API, and finally worked through the problems that appeared
          during development.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Opening a Physical Store
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Imagine that I want to open a large physical store in a busy city.
        Before putting products on shelves, I cannot simply rent a building
        and start selling.
      </p>

      <p className="text-slate-300 leading-relaxed">
        I need shelves for products, a customer registration system, a
        warehouse, a checkout counter, receipts, staff permissions, and a way
        to keep track of every order.
      </p>

      <p className="text-slate-300 leading-relaxed">
        An e-commerce application works in almost exactly the same way. The
        difference is that the store exists inside software instead of a
        physical building.
      </p>

      {/* Architecture */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Thinking About the Application as a System
      </h2>

      <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
        {[
          ["👤", "Users", "Customers and account information"],
          ["📦", "Products", "Product information and inventory"],
          ["🛒", "Orders", "Cart, checkout, and order history"],
        ].map(([icon, title, description]) => (
          <div
            key={title}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >
            <div className="text-2xl mb-3">{icon}</div>
            <h3 className="text-base font-bold text-slate-100 m-0">
              {title}
            </h3>
            <p className="text-sm text-slate-400 mt-2 mb-0">
              {description}
            </p>
          </div>
        ))}
      </div>

      {/* Development Journey */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        My Development Journey
      </h2>

      <div className="space-y-4 not-prose">
        {[
          [
            "01",
            "Plan",
            "I first decided what the application needed to accomplish before writing the actual code.",
          ],
          [
            "02",
            "Design",
            "I designed the database and thought about how different parts of the system would communicate.",
          ],
          [
            "03",
            "Build",
            "I implemented the frontend, backend, authentication, database operations, and APIs.",
          ],
          [
            "04",
            "Connect",
            "The individual pieces were connected into one complete application.",
          ],
          [
            "05",
            "Debug",
            "Real development problems appeared, and solving them became part of the project itself.",
          ],
        ].map(([number, title, description]) => (
          <div
            key={number}
            className="flex gap-4 bg-slate-900/70 border border-slate-800 rounded-xl p-5"
          >
            <div className="shrink-0 w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
              {number}
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-100 m-0">
                {title}
              </h3>
              <p className="text-sm text-slate-400 mt-1 mb-0 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture Mental Model */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Mental Model I Used
      </h2>

      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 not-prose">
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          {["User", "Frontend", "API", "Database"].map((item, index) => (
            <React.Fragment key={item}>
              <span className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-semibold">
                {item}
              </span>

              {index < 3 && (
                <span className="text-indigo-400 text-lg">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Lessons */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What This Project Taught Me
      </h2>

      <p className="text-slate-300 leading-relaxed">
        The biggest lesson was that a real application is not one big piece
        of code. It is a collection of smaller systems that must communicate
        correctly.
      </p>

      <p className="text-slate-300 leading-relaxed">
        A beautiful interface means very little if the database is poorly
        designed. A perfect database is not enough if authentication is
        insecure. And a working backend is not enough if the frontend cannot
        communicate with it properly.
      </p>

      <div className="mt-8 p-6 rounded-2xl bg-slate-900 border border-slate-800 not-prose">
        <p className="text-indigo-300 font-semibold m-0">
          💡 My takeaway
        </p>
        <p className="text-slate-300 mt-2 mb-0 leading-relaxed">
          I stopped thinking of an e-commerce project as a website and started
          thinking of it as a complete software system.
        </p>
      </div>
    </article>
  );
}