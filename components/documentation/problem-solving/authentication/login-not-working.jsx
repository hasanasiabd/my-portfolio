// components/documentation/problem-solving/authentication/login-not-working.jsx

import React from "react";

export default function LoginNotWorkingStory() {
  return (
    <article className="prose prose-invert max-w-none">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
          🔐 Authentication Problem
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4 leading-tight">
          My Login Wasn't Working — Finding the Mistake Step by Step
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          The login form looked perfect. The button worked. The API request was
          being sent. But somehow, the user still couldn't log in. This is the
          story of how I stopped guessing and started debugging the entire
          authentication flow one step at a time.
        </p>
      </div>

      {/* Quick Overview */}
      <div className="bg-slate-900/80 border border-indigo-500/30 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0 mb-3">
          ⚡ Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          A login system is not just a button. It is a chain:
          <strong> Form → API → Database → Password Check → Token/Session → Response → UI</strong>.
          If one link breaks, the entire login experience can fail.
        </p>
      </div>

      {/* Story */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🏦 The Real-World Story: A Bank Security Desk
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine walking into a bank. You tell the security desk your name and
        password. The guard checks your information, contacts the bank system,
        verifies your account, and finally gives you access.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Now imagine the guard saying:
        <strong> "Login failed."</strong>
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Where is the problem? Maybe you entered the wrong password. Maybe the
        guard couldn't reach the bank database. Maybe your account doesn't
        exist. Or maybe everything was correct, but the system forgot to give
        you your access card.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        That's exactly how debugging authentication works. You don't randomly
        change code. You inspect each checkpoint.
      </p>

      {/* Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-8">
        {[
          ["01", "Form", "Did we receive the credentials?"],
          ["02", "API", "Did the request reach the server?"],
          ["03", "Database", "Does the user exist?"],
          ["04", "Session", "Was access successfully created?"],
        ].map(([number, title, text]) => (
          <div
            key={number}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <span className="text-xs font-bold text-indigo-400">{number}</span>
            <h3 className="text-base font-bold text-slate-100 mt-2 mb-1">
              {title}
            </h3>
            <p className="text-xs text-slate-400 m-0">{text}</p>
          </div>
        ))}
      </div>

      {/* Problem */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🔎 The Problem I Faced
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        The first mistake was assuming that the problem had to be inside the
        login button.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        Instead of checking the whole flow, I immediately started changing
        frontend code. That only made the debugging process more confusing.
      </p>

      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 my-6">
        <h3 className="text-lg font-bold text-amber-300 mt-0">
          ⚠️ The debugging lesson
        </h3>

        <p className="text-slate-300 m-0">
          Never assume where the bug is. Authentication is a chain, so inspect
          the chain from the beginning.
        </p>
      </div>

      {/* Step 1 */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 1 — Check the Form
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        First I checked whether the email and password were actually reaching
        the submit handler.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`const handleLogin = async (e) => {
  e.preventDefault();

  console.log("Email:", email);
  console.log("Password received:", Boolean(password));

  // Continue with login request...
};`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        The values were correct. So the frontend form wasn't the problem.
      </p>

      {/* Step 2 */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 2 — Check the Network Request
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Next, I opened the browser's Network tab and watched the login request.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <div className="flex flex-wrap gap-2 items-center text-sm font-mono">
          <span className="px-3 py-1.5 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            POST
          </span>
          <span className="text-slate-400">/api/login</span>
          <span className="text-slate-500">→</span>
          <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            Server received request
          </span>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        The request was reaching the backend. Another suspect eliminated.
      </p>

      {/* Step 3 */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 3 — Check the Database
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Then I checked whether the email existed in the database.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`const user = await prisma.user.findUnique({
  where: {
    email,
  },
});

console.log("User found:", Boolean(user));`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        The user existed. So the database lookup was working too.
      </p>

      {/* Step 4 */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Step 4 — Check the Password
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        This is where authentication gets interesting. Passwords normally
        aren't stored as plain text. The stored password is hashed.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`const isPasswordCorrect = await bcrypt.compare(
  password,
  user.password
);

if (!isPasswordCorrect) {
  return Response.json(
    { error: "Invalid credentials" },
    { status: 401 }
  );
}`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        The password comparison revealed the real issue: the password had been
        hashed correctly during registration, but the login code was comparing
        it incorrectly.
      </p>

      {/* Fix */}
      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 my-8">
        <h3 className="text-lg font-bold text-emerald-300 mt-0 mb-2">
          ✅ The Fix
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          I fixed the password comparison and made sure the authentication
          function was using the same hashing strategy used during registration.
        </p>
      </div>

      {/* Final Flow */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🧠 The Final Authentication Flow
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <p className="text-slate-300 font-mono text-sm leading-8 m-0">
          Login Form
          <span className="text-indigo-400"> → </span>
          API Request
          <span className="text-indigo-400"> → </span>
          Find User
          <span className="text-indigo-400"> → </span>
          Compare Password
          <span className="text-indigo-400"> → </span>
          Create Session
          <span className="text-indigo-400"> → </span>
          Return User
        </p>
      </div>

      {/* Takeaways */}
      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🎯 What I Learned
      </h2>

      <ul className="text-slate-300 space-y-2">
        <li>Don't debug authentication by guessing.</li>
        <li>Follow the request from the browser to the database.</li>
        <li>Check HTTP status codes instead of only looking at the UI.</li>
        <li>Verify password hashing and comparison logic carefully.</li>
        <li>
          Authentication problems are usually easier when broken into small
          checkpoints.
        </li>
      </ul>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 mt-10">
        <p className="text-indigo-200 m-0 leading-relaxed">
          <strong>The biggest lesson:</strong> A login button rarely tells you
          where the authentication problem actually is. Follow the journey,
          checkpoint by checkpoint.
        </p>
      </div>
    </article>
  );
}