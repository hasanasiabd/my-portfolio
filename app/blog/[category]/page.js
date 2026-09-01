// app/blog/[category]/page.js

import { redirect, notFound } from "next/navigation";
import { blogCategories } from "@/data/blogData";

export default async function CategoryPage({ params }) {
  const { category } = await params;

  // Find category
  const currentCategory = blogCategories.find(
    (cat) => cat.id === category
  );

  // Category doesn't exist
  if (!currentCategory) {
    notFound();
  }

  // Find first topic
  const firstTopic = currentCategory.topics?.[0];

  if (!firstTopic) {
    notFound();
  }

  // Find first article
  const firstArticle = firstTopic.articles?.[0];

  if (!firstArticle) {
    notFound();
  }

  // Automatically open first article
  redirect(
    `/blog/${currentCategory.id}/${firstTopic.slug}/${firstArticle.slug}`
  );
}