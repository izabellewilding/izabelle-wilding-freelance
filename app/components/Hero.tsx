"use client";

import Link from "next/link";
import { useState } from "react";

function ShimmerButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="#contact"
      className="relative overflow-hidden bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-colors font-heading 
                 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent 
                 before:translate-x-[-100%] before:transition-transform before:duration-1000 hover:before:translate-x-[100%] hover:bg-indigo-700"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Let&apos;s work together
    </Link>
  );
}

export default function Hero() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-heading">
            Beautiful Websites, Seamless Mobile Apps, and Results-Driven SEO.
          </h1>
          <p className="text-xl md:text-xl text-gray-600 mb-10 font-body">
            Hi, I&apos;m Izabelle, I craft user-centric digital experiences that
            drive growth and engagement. Whether it&apos;s a stunning website, a
            powerful mobile app, or top-tier SEO, I help businesses thrive
            online.
          </p>
          <ShimmerButton />
        </div>
        <div className="relative">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-w-md mx-auto"
          >
            <path
              fill="#8B5CF6"
              d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.2C64.8,55.2,53.8,66.6,40.2,74.7C26.6,82.7,10.3,87.3,-4.4,84.1C-19.1,80.9,-32.2,69.8,-45.6,59.6C-58.9,49.3,-72.6,39.9,-79.1,26.4C-85.6,13,-84.9,-4.5,-79.1,-19.5C-73.3,-34.4,-62.2,-46.9,-49.4,-54.9C-36.5,-62.9,-21.8,-66.5,-6.3,-70.2C9.2,-73.9,18.3,-77.7,29.8,-77.9C41.3,-78.1,55.1,-74.7,44.7,-76.4Z"
              transform="translate(100 100)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-6xl font-bold font-heading">
              IW
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
