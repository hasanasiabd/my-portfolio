import React from "react";

export default function EcommerceAuthenticationStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
          🔐 Authentication
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-4">
          How I Built Authentication for My E-Commerce Platform
        </h1>

        <p className="text-lg text-slate-400 leading-relaxed">
          A store needs to know who its customers are. Authentication became
          the system responsible for answering that question.
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0">
          I designed authentication around registration, login, secure
          credential handling, token-based identity, and protected
          application features.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: A Private Club
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Imagine entering an exclusive shopping club.
      </p>

      <p className="text-slate-300 leading-relaxed">
        At the entrance, a security guard asks for your membership
        information. The guard does not need to know your entire life story.
        They only need a reliable way to verify that you are actually a
        member.
      </p>

      <p className="text-slate-300 leading-relaxed">
        Authentication works in a similar way.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Registration
      </h2>

      <p className="text-slate-300 leading-relaxed">
        During registration, the user provides account information. The
        application validates it and securely stores the necessary data.
      </p>

      <div className="grid md:grid-cols-3 gap-4 my-6 not-prose">
        {[
          ["1", "Register", "Create an account"],
          ["2", "Login", "Verify credentials"],
          ["3", "Authenticate", "Recognize the user"],
        ].map(([number, title, description]) => (
          <div
            key={number}
            className="text-center p-5 rounded-xl bg-slate-900 border border-slate-800"
          >
            <div className="mx-auto w-9 h-9 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
              {number}
            </div>

            <h3 className="text-base font-bold text-slate-100 mt-3 mb-1">
              {title}
            </h3>

            <p className="text-sm text-slate-400 m-0">{description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Token as a Membership Card
      </h2>

      <p className="text-slate-300 leading-relaxed">
        After successful login, the application needs a way to remember the
        user's authenticated identity across requests.
      </p>

      <p className="text-slate-300 leading-relaxed">
        In a token-based system, I can think of the token as a temporary
        membership card. The user presents it when requesting protected
        resources, and the server verifies it.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 my-6 not-prose">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span className="px-4 py-2 bg-slate-900 rounded-lg border border-slate-700">
            👤 User
          </span>

          <span className="text-indigo-400">→</span>

          <span className="px-4 py-2 bg-slate-900 rounded-lg border border-slate-700">
            🔐 Token
          </span>

          <span className="text-indigo-400">→</span>

          <span className="px-4 py-2 bg-slate-900 rounded-lg border border-slate-700">
            🛡️ Protected Resource
          </span>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        Why Authentication Matters
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Without authentication, any visitor could potentially access another
        user's account information or order history.
      </p>

      <p className="text-slate-300 leading-relaxed">
        Authentication therefore became more than a login screen. It became
        part of the application's security boundary.
      </p>

      <div className="mt-8 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 not-prose">
        <p className="text-amber-400 font-semibold m-0">
          💡 My takeaway
        </p>

        <p className="text-slate-300 mt-2 mb-0">
          Authentication answers one fundamental question: "Who are you?"
          Authorization answers the next one: "What are you allowed to do?"
        </p>
      </div>
    </article>
  );
}