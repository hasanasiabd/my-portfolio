// components/documentation/problem-solving/authentication/session-error.jsx

import React from "react";

export default function SessionErrorStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-4">
          🧠 Session Problem
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4 leading-tight">
          The User Session Kept Disappearing — How I Solved It
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Everything worked immediately after login. Then the user refreshed
          the page and suddenly became a guest again. No crash. No obvious
          error. Just a disappearing session.
        </p>
      </div>

      <div className="bg-slate-900/80 border border-indigo-500/30 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0 mb-3">
          ⚡ Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          A session represents the server's knowledge that a particular user is
          authenticated. If the session isn't stored or sent correctly, the
          application can forget the user between requests.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🏨 The Real-World Story: A Hotel Reception
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine checking into a hotel.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The receptionist verifies your identity and gives you a room key. For
        the next few days, the hotel knows that the key belongs to you.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        But imagine walking back to the reception five minutes later and the
        hotel system says:
        <strong> "We don't know you."</strong>
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        That's what a broken session feels like in a web application.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">🪪</div>
          <h3 className="text-base font-bold text-slate-100">Identity</h3>
          <p className="text-sm text-slate-400 mb-0">
            The server knows who the user is.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">🍪</div>
          <h3 className="text-base font-bold text-slate-100">Cookie</h3>
          <p className="text-sm text-slate-400 mb-0">
            The browser keeps the session identifier.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-2xl mb-3">🔄</div>
          <h3 className="text-base font-bold text-slate-100">Request</h3>
          <p className="text-sm text-slate-400 mb-0">
            The identifier travels back to the server.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🔥 The Strange Bug
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        The login response looked successful.
      </p>

      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 my-6">
        <p className="text-emerald-300 font-mono text-sm m-0">
          POST /api/login → 200 OK
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        But immediately after refreshing:
      </p>

      <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-5 my-6">
        <p className="text-red-400 font-mono text-sm m-0">
          GET /api/me → 401 Unauthorized
        </p>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        That was the clue. Login worked, but the next request wasn't carrying
        the authentication information correctly.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🔍 Step 1 — Check the Cookie
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        I opened the browser's Application/Storage tools and inspected the
        cookies.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        The expected authentication cookie wasn't being stored correctly.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`response.cookies.set("session", sessionId, {
  httpOnly: true,
  secure: true,
  sameSite: "lax",
  path: "/",
});`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🔐 Step 2 — Understand httpOnly
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        The <code>httpOnly</code> option means browser JavaScript cannot read
        the cookie directly.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        That's usually a good thing for authentication because it reduces the
        risk of client-side scripts stealing the session cookie.
      </p>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 my-6">
        <p className="text-indigo-200 m-0 leading-relaxed">
          <strong>Important:</strong> A cookie being invisible to
          <code>document.cookie</code> doesn't mean the browser isn't sending
          it.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🌐 Step 3 — Check Cookie Rules
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Then I checked the cookie configuration.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-base font-bold text-slate-100 mt-0">
            Secure
          </h3>
          <p className="text-sm text-slate-400 mb-0">
            Controls whether the cookie should only travel over HTTPS.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h3 className="text-base font-bold text-slate-100 mt-0">
            SameSite
          </h3>
          <p className="text-sm text-slate-400 mb-0">
            Controls how cookies behave with cross-site requests.
          </p>
        </div>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        During local development, an overly strict cookie configuration can
        make a perfectly good authentication system appear broken.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🧪 Step 4 — Check the Server Session
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Even if the browser has a session identifier, the server still needs
        to be able to find the corresponding session.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`const session = await prisma.session.findUnique({
  where: {
    id: sessionId,
  },
});

if (!session) {
  return Response.json(
    { error: "Session not found" },
    { status: 401 }
  );
}`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        This check revealed another important possibility: sometimes the
        browser still has a session ID, but the server-side session has expired
        or disappeared.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🛠️ The Fix
      </h2>

      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 my-6">
        <h3 className="text-lg font-bold text-emerald-300 mt-0 mb-3">
          ✅ What I Checked
        </h3>

        <ul className="text-slate-300 space-y-2 mb-0">
          <li>Confirmed that the session was created after login.</li>
          <li>Confirmed that the browser received the cookie.</li>
          <li>Checked cookie path and security settings.</li>
          <li>Verified that the cookie was sent on later requests.</li>
          <li>Checked that the server-side session still existed.</li>
          <li>Added expiration handling for old sessions.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🧠 The Complete Session Journey
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <div className="space-y-3 text-sm font-mono">
          <div className="text-slate-300">
            1. User logs in
          </div>
          <div className="text-indigo-400">
            ↓
          </div>
          <div className="text-slate-300">
            2. Server creates session
          </div>
          <div className="text-indigo-400">
            ↓
          </div>
          <div className="text-slate-300">
            3. Browser receives cookie
          </div>
          <div className="text-indigo-400">
            ↓
          </div>
          <div className="text-slate-300">
            4. Browser sends cookie with requests
          </div>
          <div className="text-indigo-400">
            ↓
          </div>
          <div className="text-slate-300">
            5. Server finds session
          </div>
          <div className="text-indigo-400">
            ↓
          </div>
          <div className="text-emerald-400">
            6. User remains authenticated
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🎯 What I Learned
      </h2>

      <ul className="text-slate-300 space-y-2">
        <li>A successful login does not guarantee a persistent session.</li>
        <li>Cookies are a major part of session-based authentication.</li>
        <li>Browser storage and server-side session storage are different things.</li>
        <li>Cookie configuration can silently break authentication.</li>
        <li>Always inspect the request after login—not only the login response.</li>
      </ul>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 mt-10">
        <p className="text-indigo-200 m-0 leading-relaxed">
          <strong>The big lesson:</strong> When a session disappears, don't
          immediately rewrite your authentication system. Follow the session
          from creation → cookie → request → server lookup. Somewhere along
          that journey, you'll usually find the missing piece.
        </p>
      </div>
    </article>
  );
}