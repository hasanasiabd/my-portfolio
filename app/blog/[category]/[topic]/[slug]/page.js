// app/blog/[category]/[topic]/[slug]/page.js

"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { blogCategories } from "@/data/blogData";

export default function BlogArticlePage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { category, topic, slug } = params;

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openTopics, setOpenTopics] = useState({ [topic]: true });

  const toggleTopic = (topicSlug) => {
    setOpenTopics((prev) => ({
      ...prev,
      [topicSlug]: !prev[topicSlug],
    }));
  };

  const currentCategoryData = blogCategories.find((cat) => cat.id === category);

  let ArticleComponent = null;
  try {
    ArticleComponent = dynamic(
      () => import(`@/components/documentation/${category}/${topic}/${slug}.jsx`),
      { loading: () => <div className="text-indigo-400 py-10">Loading article...</div> }
    );
  } catch (error) {
    ArticleComponent = null;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pt-16 flex flex-col">
      {/* Mobile Bar */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 sticky top-16 z-30">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center gap-2 text-sm font-medium text-slate-300 bg-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-700 transition"
        >
          <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span>Docs Menu</span>
        </button>
        <span className="text-xs font-semibold text-indigo-400 capitalize">{currentCategoryData?.title || category}</span>
      </div>

      <div className="flex-1 flex max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8 gap-8 relative">
        {isMobileOpen && (
          <div
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden"
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed md:sticky top-16 md:top-20 z-50 md:z-10 h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] w-72 bg-slate-900/90 md:bg-slate-900/40 border-r border-slate-800/80 p-5 overflow-y-auto transition-all duration-300 shrink-0 rounded-r-xl md:rounded-xl ${
            isMobileOpen ? "left-0" : "-left-80 md:left-0"
          }`}
        >
          {/* Main Category Switcher (Prisma Docs Navigation) */}
          <div className="mb-6 pb-4 border-b border-slate-800/80 space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 px-2 block mb-2">
              Documentation Hub
            </span>
            {blogCategories.map((cat) => {
              const isSelectedCategory = cat.id === category;
              // Default link for switching category
              const firstTopic = cat.topics[0];
              const firstArticle = firstTopic?.articles[0];
              const targetUrl = `/blog/${cat.id}/${firstTopic?.slug}/${firstArticle?.slug}`;

              return (
                <Link
                  key={cat.id}
                  href={targetUrl}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isSelectedCategory
                      ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.title}</span>
                </Link>
              );
            })}
          </div>

          {/* Sub-Topics Accordion */}
          <div className="space-y-4">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 px-2 block">
              In this section
            </span>
            {currentCategoryData?.topics.map((t) => {
              const isOpen = openTopics[t.slug];
              return (
                <div key={t.slug} className="space-y-1">
                  <button
                    onClick={() => toggleTopic(t.slug)}
                    className="w-full flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-indigo-300 px-2 py-1.5 rounded-md hover:bg-slate-800/50 transition-colors"
                  >
                    <span>{t.title}</span>
                    <span className="text-[10px] transition-transform duration-200">
                      {isOpen ? "▼" : "▶"}
                    </span>
                  </button>

                  {isOpen && (
                    <ul className="space-y-1 pl-3 border-l-2 border-slate-800 ml-2 mt-1">
                      {t.articles.map((art) => {
                        const isActive = topic === t.slug && slug === art.slug;
                        return (
                          <li key={art.slug}>
                            <Link
                              href={`/blog/${category}/${t.slug}/${art.slug}`}
                              onClick={() => setIsMobileOpen(false)}
                              className={`block py-1.5 px-3 rounded-md text-xs font-medium transition-all ${
                                isActive
                                  ? "bg-indigo-600/20 text-indigo-400 font-semibold border-l-2 border-indigo-500"
                                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                              }`}
                            >
                              {art.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 py-6 md:py-8 w-full min-w-0">
          <div className="bg-slate-900/30 border border-slate-800/60 rounded-2xl p-6 md:p-10 shadow-xl w-full">
            {ArticleComponent ? (
              <ArticleComponent />
            ) : (
              <div className="p-8 border border-red-500/20 rounded-xl bg-red-950/10 text-red-400">
                <h2 className="text-2xl font-bold mb-2">Article Under Construction</h2>
                <p>The story for this topic is currently being written.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}