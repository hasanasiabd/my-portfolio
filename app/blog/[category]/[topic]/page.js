// app/blog/[category]/[topic]/page.js

import { redirect, notFound } from "next/navigation";
import { blogCategories } from "@/data/blogData";

export default async function TopicPage({ params }) {
  const { category, topic } = await params;

  // Find category
  const currentCategory = blogCategories.find(
    (cat) => cat.id === category
  );

  if (!currentCategory) {
    notFound();
  }

  // Find topic
  const currentTopic = currentCategory.topics?.find(
    (item) => item.slug === topic
  );

  if (!currentTopic) {
    notFound();
  }

  // Find first article
  const firstArticle = currentTopic.articles?.[0];

  if (!firstArticle) {
    notFound();
  }

  // Automatically open first article
  redirect(
    `/blog/${currentCategory.id}/${currentTopic.slug}/${firstArticle.slug}`
  );
}