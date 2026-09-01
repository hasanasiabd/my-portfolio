// components/documentation/problem-solving/authentication/jwt-error.jsx

import React from "react";

export default function JwtErrorStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
          🎫 JWT Problem
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4 leading-tight">
          I Kept Getting a JWT Error — How I Fixed the Token Problem
        </h1>

        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
          Login was successful, but protected pages kept saying that the user
          wasn't authenticated. The strange part? A JWT had already been
          created. The problem was somewhere between creating, storing,
          sending, and verifying that token.
        </p>
      </div>

      <div className="bg-slate-900/80 border border-indigo-500/30 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0 mb-3">
          ⚡ Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          A JWT is like a signed access pass. The server creates it, the client
          keeps it, and later sends it back so the server can verify who the
          user is.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🎟️ The Real-World Story: The Concert Wristband
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine going to a concert. At the entrance, you prove who you are and
        receive a special wristband.
      </p>

      <p className="text-slate-300 leading-relaxed mb-4">
        The wristband becomes your proof that you are allowed inside the VIP
        area.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        But imagine receiving the wristband and then putting it in your pocket
        instead of wearing it. When security checks you later, they don't see
        the wristband.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        The security system isn't necessarily broken. Your proof simply isn't
        being presented correctly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-8">
        {[
          ["🔑", "Create", "Server creates JWT"],
          ["💾", "Store", "Client stores token"],
          ["📨", "Send", "Token travels with request"],
          ["🛡️", "Verify", "Server validates token"],
        ].map(([icon, title, text]) => (
          <div
            key={title}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center"
          >
            <div className="text-2xl mb-2">{icon}</div>
            <h3 className="text-sm font-bold text-slate-100 m-0">{title}</h3>
            <p className="text-xs text-slate-500 mt-1 mb-0">{text}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🔥 The Error
      </h2>

      <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-5 my-6">
        <pre className="text-red-400 font-mono text-sm overflow-x-auto m-0">
{`JsonWebTokenError:
invalid signature`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-4">
        At first this looked like a complicated cryptography problem. It
        wasn't.
      </p>

      <p className="text-slate-300 leading-relaxed mb-6">
        The token and the secret used to verify it didn't match.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🔍 First Check — Where Is the Token Created?
      </h2>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`const token = jwt.sign(
  {
    userId: user.id,
  },
  process.env.JWT_SECRET
);`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        The token was being created correctly. So I moved to the next
        checkpoint.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🔐 Second Check — Is the Secret the Same?
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        JWT signing and verification must use the same secret.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`// Creating
jwt.sign(payload, process.env.JWT_SECRET);

// Verifying
jwt.verify(token, process.env.JWT_SECRET);`}
        </pre>
      </div>

      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-5 my-6">
        <p className="text-amber-200 m-0 leading-relaxed">
          If the signing secret and verification secret are different, the
          server cannot trust the token.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🧪 Third Check — Is the Token Actually Being Sent?
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Next I inspected the request sent from the browser.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6 overflow-x-auto">
        <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`fetch("/api/profile", {
  headers: {
    Authorization: \`Bearer \${token}\`,
  },
});`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">
        This was another important discovery. Creating a JWT is not enough.
        The protected request must actually present the token.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🛠️ The Fix
      </h2>

      <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 my-6">
        <h3 className="text-lg font-bold text-emerald-300 mt-0 mb-3">
          ✅ What I Changed
        </h3>

        <ul className="text-slate-300 space-y-2 mb-0">
          <li>Used one consistent JWT secret.</li>
          <li>Checked that the environment variable was loaded.</li>
          <li>Verified the token was included in protected requests.</li>
          <li>Handled invalid or expired tokens gracefully.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🧠 The Mental Model
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 my-6">
        <p className="font-mono text-sm text-slate-300 leading-8 m-0">
          User Login
          <span className="text-indigo-400"> → </span>
          JWT Created
          <span className="text-indigo-400"> → </span>
          Token Stored
          <span className="text-indigo-400"> → </span>
          Token Sent
          <span className="text-indigo-400"> → </span>
          JWT Verified
          <span className="text-indigo-400"> → </span>
          Access Granted
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        🎯 What I Learned
      </h2>

      <ul className="text-slate-300 space-y-2">
        <li>A JWT is only useful if the server can verify it.</li>
        <li>The signing and verification secrets must match.</li>
        <li>Always inspect the actual request headers.</li>
        <li>Environment variables are common sources of authentication bugs.</li>
        <li>Don't blame JWT itself before checking the complete token flow.</li>
      </ul>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 mt-10">
        <p className="text-indigo-200 m-0 leading-relaxed">
          <strong>The big lesson:</strong> Think of JWT as a security pass.
          Creating the pass, carrying the pass, presenting the pass, and
          validating the pass are four separate steps.
        </p>
      </div>
    </article>
  );
}