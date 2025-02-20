"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/figma.svg", alt: "Figma Logo" },
  { src: "/react.svg", alt: "React Logo" },
  { src: "/nextjs.svg", alt: "Next.js Logo" },
  { src: "/tailwind.svg", alt: "Tailwind Logo" },
  { src: "/vercel.svg", alt: "Vercel Logo" },
];

export default function Logos() {
  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Gradient Fades */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white via-transparent to-transparent z-10 pointer-events-none" />

      {/* Scrolling Container */}
      <motion.div
        className="flex w-max space-x-12"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25, // Slower animation
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={50}
            height={50}
            className="w-16 h-16 md:w-24 md:h-24"
          />
        ))}
      </motion.div>
    </div>
  );
}
