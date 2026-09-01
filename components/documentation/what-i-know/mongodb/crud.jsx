import React from "react";

export default function MongoDBCrudStory() {
  return (
    <article className="prose prose-invert max-w-none">
      <span className="inline-flex px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
        🛠️ MongoDB CRUD
      </span>

      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mt-4 mb-4">
        What Is CRUD in MongoDB? Creating, Reading, Updating, and Deleting Data
      </h1>

      <p className="text-slate-400 text-lg leading-relaxed mb-8">
        The story of how a real application manages information from start
        to finish.
      </p>

      <div className="bg-slate-900 border border-slate-800 border-l-4 border-l-indigo-500 rounded-xl p-5 mb-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          Quick Overview
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          CRUD stands for Create, Read, Update, and Delete. These four
          operations represent the basic things an application does with
          stored data.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Real-World Story: Running an Online Store
      </h2>

      <p className="text-slate-300 leading-relaxed mb-4">
        Imagine you run an online store. Every day, customers interact
        with your products.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 my-8">
        {[
          ["➕", "Create", "A new product is added to the store."],
          ["🔍", "Read", "The application finds products to display."],
          ["✏️", "Update", "A product's price or stock is changed."],
          ["🗑️", "Delete", "An old product is removed from the store."]
        ].map(([icon, title, description]) => (
          <div
            key={title}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5"
          >
            <div className="text-3xl mb-3">{icon}</div>

            <h3 className="text-lg font-bold text-slate-100 mt-0">
              {title}
            </h3>

            <p className="text-sm text-slate-400 m-0">
              {description}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        1. Create — Adding Data
      </h2>

      <p className="text-slate-300 leading-relaxed">
        When a new product arrives, we need to store it in MongoDB.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden my-6">
        <pre className="p-5 text-sm text-emerald-400 overflow-x-auto">
{`db.products.insertOne({
  name: "Mechanical Keyboard",
  price: 120,
  stock: 25
});`}
        </pre>
      </div>

      <p className="text-slate-400 text-sm">
        <strong>insertOne()</strong> adds one document to the collection.
      </p>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        2. Read — Finding Data
      </h2>

      <p className="text-slate-300 leading-relaxed">
        A customer opens your website and wants to see all products.
        MongoDB can retrieve them using <strong>find()</strong>.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden my-6">
        <pre className="p-5 text-sm text-emerald-400 overflow-x-auto">
{`db.products.find();`}
        </pre>
      </div>

      <p className="text-slate-300 leading-relaxed">
        You can also search for a specific product.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden my-6">
        <pre className="p-5 text-sm text-emerald-400 overflow-x-auto">
{`db.products.find({
  name: "Mechanical Keyboard"
});`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        3. Update — Changing Data
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Suppose the keyboard price changes from $120 to $100. We don't
        want to delete the product and create it again. We simply update it.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden my-6">
        <pre className="p-5 text-sm text-emerald-400 overflow-x-auto">
{`db.products.updateOne(
  { name: "Mechanical Keyboard" },
  {
    $set: {
      price: 100
    }
  }
);`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        4. Delete — Removing Data
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Finally, if the product is permanently discontinued, we can remove
        it from the collection.
      </p>

      <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden my-6">
        <pre className="p-5 text-sm text-emerald-400 overflow-x-auto">
{`db.products.deleteOne({
  name: "Mechanical Keyboard"
});`}
        </pre>
      </div>

      <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">
        The Complete CRUD Cycle
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-3 my-8">
        {["Create", "Read", "Update", "Delete"].map((item, index) => (
          <React.Fragment key={item}>
            <div className="px-5 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm font-bold text-slate-200">
              {item}
            </div>

            {index < 3 && (
              <span className="text-indigo-400 font-bold">→</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 mt-8">
        <h3 className="text-lg font-bold text-indigo-300 mt-0">
          What I Learned
        </h3>

        <p className="text-slate-300 m-0 leading-relaxed">
          CRUD is the foundation of almost every data-driven application.
          Whether you are building an e-commerce store, task manager,
          dashboard, or social platform, your application will constantly
          create, read, update, and delete data.
        </p>
      </div>
    </article>
  );
}