import React from "react";

export default function AdminDashboardOverviewStory() {
  return (
    <article className="prose prose-invert max-w-none">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
          🏗️ PROJECT CASE STUDY
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          How I Built an Admin Dashboard for Managing Application Data
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          An admin dashboard is more than a collection of tables and buttons.
          It is the control room of an application—the place where important
          data can be monitored, managed, and changed safely.
        </p>
      </div>

      {/* Quick Overview */}
      <div className="bg-slate-900/80 border border-slate-800 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 m-0 mb-2">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          In this project, I designed an admin dashboard that acts as a
          centralized control panel for managing application data. The goal
          was to make common administrative tasks simple, organized, and
          efficient.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: The Control Room
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine a large shopping mall.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Customers walk through the mall, visit stores, buy products, and
        interact with different services. But behind the scenes, someone needs
        to monitor everything—inventory, employees, orders, customers, and
        problems.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The mall manager cannot personally walk into every store every minute.
        Instead, they have a{" "}
        <strong className="text-indigo-300">central control room</strong>.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        That control room is the perfect analogy for an admin dashboard.
      </p>

      {/* Architecture */}
      <div className="grid md:grid-cols-3 gap-4 my-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">📊</div>
          <h3 className="text-base font-bold text-slate-100 m-0 mb-2">
            Monitor
          </h3>
          <p className="text-sm text-slate-400 m-0">
            View important application data and statistics.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">🛠️</div>
          <h3 className="text-base font-bold text-slate-100 m-0 mb-2">
            Manage
          </h3>
          <p className="text-sm text-slate-400 m-0">
            Create, update, and remove application records.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">🔐</div>
          <h3 className="text-base font-bold text-slate-100 m-0 mb-2">
            Control
          </h3>
          <p className="text-sm text-slate-400 m-0">
            Keep sensitive administrative operations protected.
          </p>
        </div>
      </div>

      {/* Planning */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 1: Planning the Dashboard
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Before writing components, I first thought about what an administrator
        actually needs to see.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`Admin Dashboard
│
├── Overview
│   ├── Total Users
│   ├── Total Orders
│   └── Revenue
│
├── Users
│   ├── View Users
│   ├── Edit User
│   └── Delete User
│
├── Products
│   ├── Add Product
│   ├── Edit Product
│   └── Remove Product
│
└── Settings
    └── Application Configuration`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        This structure gave me a clear mental model before I started building
        the UI.
      </p>

      {/* UI */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 2: Designing the Interface
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        I wanted the dashboard to feel like a professional control panel
        rather than a collection of random screens.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 my-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            ["👥", "Users", "1,248"],
            ["📦", "Orders", "856"],
            ["💰", "Revenue", "$24.8K"],
            ["🛍️", "Products", "342"],
          ].map(([icon, label, value]) => (
            <div
              key={label}
              className="bg-slate-950 border border-slate-800 rounded-xl p-4"
            >
              <div className="text-lg mb-2">{icon}</div>
              <p className="text-xs text-slate-500 m-0">{label}</p>
              <p className="text-lg font-bold text-slate-100 m-0 mt-1">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Components */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 3: Breaking the Dashboard into Components
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Instead of putting everything inside one giant component, I separated
        the interface into smaller pieces.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`<AdminDashboard>
  <Sidebar />
  <Header />

  <main>
    <StatsCards />
    <RecentUsers />
    <RecentOrders />
  </main>
</AdminDashboard>`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        Think of it like constructing the control room from separate panels.
        Each panel has one responsibility, which makes the entire system
        easier to maintain.
      </p>

      {/* Data Flow */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 4: Connecting the Dashboard to Data
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        A dashboard without real data is just a beautiful empty room.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          {[
            ["🗄️", "Database"],
            ["⚙️", "API"],
            ["⚛️", "Dashboard"],
            ["👨‍💼", "Admin"],
          ].map(([icon, label], index) => (
            <React.Fragment key={label}>
              <div className="w-full md:w-auto px-5 py-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-2xl">{icon}</div>
                <p className="text-sm font-semibold text-slate-300 m-0 mt-2">
                  {label}
                </p>
              </div>

              {index < 3 && (
                <span className="text-indigo-400 text-xl hidden md:block">
                  →
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Lessons */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        What This Project Taught Me
      </h2>

      <div className="space-y-3">
        {[
          "A dashboard should be designed around the administrator's workflow.",
          "Reusable components make large interfaces easier to maintain.",
          "Data presentation is just as important as data collection.",
          "Good navigation reduces the mental effort required to manage an application.",
          "A clean UI is useful only when the underlying architecture is organized.",
        ].map((lesson) => (
          <div
            key={lesson}
            className="flex gap-3 items-start bg-slate-900/60 border border-slate-800 rounded-xl p-4"
          >
            <span className="text-indigo-400">✓</span>
            <p className="text-slate-300 m-0">{lesson}</p>
          </div>
        ))}
      </div>

      {/* Project Card */}
      <div className="flex items-center justify-between bg-slate-900 border border-slate-800 rounded-xl p-5 my-10">
        <div>
          <p className="text-xs text-slate-500 m-0">PROJECT</p>
          <h3 className="text-lg font-bold text-slate-100 m-0">
            Admin Dashboard
          </h3>
        </div>

        <span className="px-4 py-2 rounded-lg bg-indigo-600/20 text-indigo-400 text-sm font-semibold border border-indigo-500/20">
          Case Study
        </span>
      </div>
    </article>
  );
}