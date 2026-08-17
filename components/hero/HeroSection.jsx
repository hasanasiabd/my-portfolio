//components/hero/HeroSection.jsx

"use client";

import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <HeroText />
        <HeroButtons />
        <SocialLinks />
      </div>
    </section>
  );
}