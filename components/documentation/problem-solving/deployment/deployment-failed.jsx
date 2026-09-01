export default function VercelBuildError() {
  return (
    <article className="space-y-10">

      {/* Hero */}
      <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 p-6 md:p-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
            PROBLEM SOLVING
          </span>

          <span className="text-xs text-slate-500">
            Deployment
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white">
          It Worked Locally but Failed on Vercel — What Was Different?
        </h1>

        <p className="mt-5 max-w-3xl text-base md:text-lg leading-8 text-slate-400">
          One of the most confusing moments in web development is when your
          application works perfectly on your computer, but the moment you
          deploy it, the build suddenly breaks.
        </p>
      </section>

      {/* Story */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-400">
          The Story
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          “But it works on my machine!”
        </h2>

        <p className="mt-4 leading-8 text-slate-300">
          Imagine building a house in your hometown. You have all the tools,
          materials, electricity, and measurements exactly where you need them.
          The house looks perfect.
        </p>

        <p className="mt-4 leading-8 text-slate-300">
          Then someone takes your blueprint and tries to build the same house
          somewhere else. Suddenly, one material is missing. One measurement
          is different. One tool isn't available.
        </p>

        <p className="mt-4 leading-8 text-slate-300">
          Your blueprint wasn't necessarily wrong. The environment was
          different.
        </p>

        <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
          <p className="font-semibold text-amber-300">
            💡 This is exactly what can happen between local development and
            Vercel.
          </p>
        </div>
      </section>

      {/* Symptoms */}
      <section>
        <h2 className="text-2xl font-bold text-white">
          🔎 The Symptoms
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[
            "npm run dev worked",
            "The application looked perfect locally",
            "Vercel failed during build"
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >
              <span className="text-red-400">✕</span>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Investigation */}
      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white">
          🕵️ The Investigation
        </h2>

        <p className="mt-4 leading-8 text-slate-300">
          Instead of randomly changing code, I started treating the deployment
          like a debugging investigation.
        </p>

        <div className="mt-6 space-y-4">
          {[
            ["1", "Read the Vercel build log"],
            ["2", "Found the first real error instead of the last error"],
            ["3", "Checked file names and import paths"],
            ["4", "Checked environment variables"],
            ["5", "Compared local and production configuration"]
          ].map(([number, text]) => (
            <div
              key={number}
              className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-bold text-indigo-400">
                {number}
              </span>

              <p className="text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common causes */}
      <section>
        <h2 className="text-2xl font-bold text-white">
          ⚠️ What Was Actually Different?
        </h2>

        <div className="mt-5 space-y-4">
          {[
            "A file existed locally but wasn't committed to Git.",
            "An import path used different capitalization than the real file name.",
            "An environment variable existed locally but not on Vercel.",
            "A package existed locally but wasn't correctly listed in package.json.",
            "Production used a different build environment."
          ].map((cause) => (
            <div
              key={cause}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <p className="text-sm leading-7 text-slate-300">
                <span className="mr-2 text-indigo-400">→</span>
                {cause}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lesson */}
      <section className="rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-6 md:p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-400">
          The Lesson
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          Local success does not guarantee production success.
        </h2>

        <p className="mt-4 leading-8 text-slate-300">
          A deployment is not simply “uploading the project.” It is asking
          another computer to install the project, understand the code,
          provide the required environment, build everything, and finally
          serve the result.
        </p>
      </section>

    </article>
  );
}