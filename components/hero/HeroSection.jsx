//components/hero/HeroSection.jsx

"use client";

import HeroText from "./HeroText";
import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        {/* Right Column in Desktop / Top in Mobile (Order Controlled) */}
        <div className="flex justify-center order-first lg:order-last">
          <HeroImage />
        </div>

        {/* Left Column in Desktop / Bottom in Mobile */}
        <div className="space-y-6 flex flex-col items-center lg:items-start order-last lg:order-first">
          <HeroText />
          <HeroButtons />
          <SocialLinks />
        </div>

      </div>
    </section>
  );
}