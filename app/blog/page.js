// app/blog/page.js

import { redirect } from "next/navigation";

export default function BlogIndexPage() {
  // সরাসরি Getting Started-এর ১ম আর্টিকেলে রিডাইরেক্ট
  redirect("/blog/getting-started/overview/welcome");
}