export default function EnvNotWorking() {
  return (
    <article className="space-y-10">

      <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30 p-6 md:p-10">
        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
          ENVIRONMENT VARIABLES
        </span>

        <h1 className="mt-5 text-3xl md:text-5xl font-black text-white">
          My Environment Variables Worked Locally but Not After Deployment
        </h1>

        <p className="mt-5 max-w-3xl text-base md:text-lg leading-8 text-slate-400">
          Everything worked perfectly on localhost. The database connected,
          APIs responded, and the application behaved normally. Then production
          arrived — and suddenly important values were undefined.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          The Story
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          The missing key to the locked room 🔑
        </h2>

        <p className="mt-4 leading-8 text-slate-300">
          Imagine your application is a hotel. Your database is a locked room
          inside that hotel.
        </p>

        <p className="mt-4 leading-8 text-slate-300">
          On your local computer, you have the key sitting safely in your
          pocket — your <code className="text-cyan-300">.env</code> file.
        </p>

        <p className="mt-4 leading-8 text-slate-300">
          But when you move the hotel to another building, your pocket doesn't
          magically travel with it.
        </p>

        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
          <p className="font-semibold text-cyan-300">
            💡 Production needs its own environment variables.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          🔍 What I Checked
        </h2>

        <div className="mt-5 space-y-4">
          {[
            ".env.local existed on my computer",
            "The variable name was correct",
            "The application was reading process.env correctly",
            "The same variable was missing from Vercel",
            "After adding it, a new deployment was required"
          ].map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5"
            >
              <span className="text-cyan-400 font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>

              <p className="leading-7 text-slate-300">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
        <h2 className="text-xl font-bold text-white">
          Example
        </h2>

        <pre className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-black/40 p-5 text-sm text-cyan-300">
{`DATABASE_URL=your_database_connection_string`}
        </pre>

        <p className="mt-5 leading-8 text-slate-400">
          The important lesson is that the actual secret value should not be
          committed to Git. Instead, production platforms such as Vercel should
          receive the required environment variables through their environment
          configuration.
        </p>
      </section>

      <section className="rounded-3xl border border-green-500/20 bg-green-500/5 p-6 md:p-8">
        <p className="text-xs font-bold uppercase tracking-widest text-green-400">
          The Lesson
        </p>

        <h2 className="mt-3 text-2xl font-bold text-white">
          “It works locally” may simply mean your local environment is complete.
        </h2>

        <p className="mt-4 leading-8 text-slate-300">
          Whenever production behaves differently, compare the environments.
          Don't immediately rewrite your application.
        </p>
      </section>

    </article>
  );
}