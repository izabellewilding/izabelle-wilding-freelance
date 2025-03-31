"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/react.svg", alt: "React Logo" },
  { src: "/nextjs.svg", alt: "Next.js Logo" },
  { src: "/javascript.svg", alt: "JavaScript Logo" },
  { src: "/typescript.svg", alt: "TypeScript Logo" },
  { src: "/html5.svg", alt: "HTML5 Logo" },
  { src: "/css3.svg", alt: "CSS3 Logo" },
  { src: "/tailwind.svg", alt: "Tailwind CSS Logo" },
  { src: "/material-ui.svg", alt: "Material UI Logo" },
  { src: "/redux.svg", alt: "Redux Logo" },
  { src: "/graphql.svg", alt: "GraphQL Logo" },
  { src: "/nodejs.svg", alt: "Node.js Logo" },
  { src: "/vercel.svg", alt: "Vercel Logo" },
  { src: "/github.svg", alt: "GitHub Logo" },
  { src: "/vscode.svg", alt: "VS Code Logo" },
];

export default function Logos() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-12">
      {/* Gradient Fades */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

      {/* Scrolling Container */}
      <motion.div
        className="flex space-x-16 mx-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {/* Double the logos for seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
