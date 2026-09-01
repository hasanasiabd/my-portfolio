export default function ReactRerenderArticle() {
  return (
    <article className="prose prose-invert max-w-none">
      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300">
          Problem Solving · React
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white">
          My React Component Kept Re-rendering — What Was Actually Causing It?
        </h1>

        <p className="mt-4 text-lg leading-8 text-slate-400">
          Sometimes the hardest React bugs are not caused by a broken component.
          They are caused by something perfectly normal happening over and over again.
        </p>
      </header>

      {/* Story */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white">
          🏪 The Story: A Shopkeeper Who Couldn’t Stop Rearranging the Store
        </h2>

        <p>Imagine you own a small shop.</p>

        <p>
          Every time a customer walks through the door, you immediately rearrange
          every product on every shelf.
        </p>

        <p>The customer looks around and says:</p>

        <blockquote className="border-l-4 border-indigo-500 pl-5 italic text-slate-300">
          “Wait… I only came inside. Why are you rearranging the entire shop?”
        </blockquote>

        <p>You answer:</p>

        <blockquote className="border-l-4 border-indigo-500 pl-5 italic text-slate-300">
          “Because something changed.”
        </blockquote>

        <p>
          But nothing important actually changed. The customer simply walked in.
        </p>

        <p>That is surprisingly similar to what can happen in React.</p>
      </section>

      {/* Problem */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white">
          🔥 The Problem
        </h2>

        <p>
          I had a component that seemed to render again and again. So I added a simple log:
        </p>

        <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5">
          <code>{`function ProductList() {
  console.log("ProductList rendered");

  return <div>Products</div>;
}`}</code>
        </pre>

        <p>And the console started filling up.</p>

        <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5">
          <code>{`ProductList rendered
ProductList rendered
ProductList rendered
ProductList rendered`}</code>
        </pre>

        <p>My first thought was:</p>

        <blockquote className="border-l-4 border-rose-500 pl-5 italic text-slate-300">
          “React is broken. Why is this component rendering so many times?”
        </blockquote>

        <p>That was my first mistake.</p>
      </section>

      {/* First lesson */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white">
          🧠 First Question: Is Re-rendering Actually a Problem?
        </h2>

        <p>React re-rendering is not automatically a bug.</p>

        <p>
          When state or props change, React may run the component again to figure
          out what the UI should look like.
        </p>

        <p>Think about the shop again.</p>

        <p>
          If the shop's product list changes, the shopkeeper may need to look at
          the shelves again. That is normal.
        </p>

        <p>The real problem is not:</p>

        <div className="my-5 rounded-xl border border-slate-700 bg-slate-900/50 p-5">
          <p className="m-0 text-slate-200">
            “Why did React render?”
          </p>
        </div>

        <p>The better question is:</p>

        <div className="my-5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 p-5">
          <p className="m-0 font-semibold text-indigo-300">
            “What is causing React to render again, and is that happening more
            often than necessary?”
          </p>
        </div>
      </section>

      {/* Real bug */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white">
          🕵️ The Real Bug
        </h2>

        <p>Eventually I found something like this:</p>

        <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5">
          <code>{`function App() {
  const [count, setCount] = useState(0);

  const options = {
    limit: 10,
  };

  return (
    <ProductList options={options} />
  );
}`}</code>
        </pre>

        <p>At first glance, this looked completely harmless.</p>

        <p>But there was a hidden detail.</p>

        <p>
          Every time <code>App</code> renders, this object is created again:
        </p>

        <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5">
          <code>{`const options = {
  limit: 10,
};`}</code>
        </pre>

        <p>The values look identical, but the object reference is different.</p>

        <p>So if the child is doing something like:</p>

        <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5">
          <code>{`useEffect(() => {
  fetchProducts(options);
}, [options]);`}</code>
        </pre>

        <p>React sees a new <code>options</code> reference and says:</p>

        <blockquote className="border-l-4 border-amber-500 pl-5 italic text-slate-300">
          “This dependency changed. Run the effect again.”
        </blockquote>
      </section>

      {/* Analogy */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white">
          🎫 The Ticket Analogy
        </h2>

        <p>Imagine a security guard checking tickets.</p>

        <p>You give him a ticket that says:</p>

        <div className="my-5 rounded-xl bg-slate-900 p-5 text-center">
          <p className="m-0 text-xl font-bold text-white">
            “VIP — Seat 10”
          </p>
        </div>

        <p>
          Then five minutes later, you print another ticket with exactly the same text.
        </p>

        <p>
          The guard does not care that the text is identical. It is a different physical ticket.
        </p>

        <p>
          JavaScript objects can behave similarly when React compares references.
        </p>
      </section>

      {/* Fix */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white">
          🔧 The Fix
        </h2>

        <p>
          If the object does not need to be recreated on every render, we can
          stabilize its reference:
        </p>

        <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5">
          <code>{`const options = useMemo(() => ({
  limit: 10,
}), []);`}</code>
        </pre>

        <p>Or, when appropriate, move a constant outside the component:</p>

        <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5">
          <code>{`const OPTIONS = {
  limit: 10,
};

function App() {
  return <ProductList options={OPTIONS} />;
}`}</code>
        </pre>

        <p>But there is an important warning:</p>

        <div className="my-5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
          <p className="m-0 text-amber-200">
            Do not throw <code>useMemo</code> or <code>useCallback</code> at every
            re-render just because you saw a render in the console.
          </p>
        </div>

        <p>
          First understand why the render is happening. Then decide whether anything actually needs optimization.
        </p>
      </section>

      {/* Debugging method */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-white">
          🧪 My Debugging Process
        </h2>

        <ol className="list-decimal space-y-3 pl-5 text-slate-300">
          <li>
            <strong>Put a log inside the component.</strong>
            <br />
            Confirm that it is actually rendering again.
          </li>
          <li>
            <strong>Check state updates.</strong>
            <br />
            Look for <code>setState</code> calls that may be happening repeatedly.
          </li>
          <li>
            <strong>Check the parent.</strong>
            <br />
            A child can render because its parent rendered.
          </li>
          <li>
            <strong>Check props.</strong>
            <br />
            Especially objects, arrays, and functions created during render.
          </li>
          <li>
            <strong>Check effects.</strong>
            <br />
            An effect that updates state can accidentally create a render loop.
          </li>
          <li>
            <strong>Only then optimize.</strong>
            <br />
            First find the cause. Then fix the cause.
          </li>
        </ol>
      </section>

      {/* Final lesson */}
      <section>
        <h2 className="text-2xl font-bold text-white">
          💡 What I Learned
        </h2>

        <p>The biggest lesson was not a React trick.</p>

        <p>It was a debugging mindset.</p>

        <blockquote className="border-l-4 border-emerald-500 pl-5 text-slate-300">
          Don't fight the symptom before understanding the cause.
        </blockquote>

        <p>
          React was not randomly rendering my component. Something in my component tree was giving React a reason to do its job.
        </p>

        <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
          <p className="m-0 font-semibold text-emerald-300">
            When React renders again, don't immediately ask “How do I stop it?” Ask “Why did it render?”
          </p>
        </div>
      </section>
    </article>
  );
}