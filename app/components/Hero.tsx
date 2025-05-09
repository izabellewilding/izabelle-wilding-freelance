"use client";
import { motion } from "framer-motion";
import { Button } from "./Button";

const headingPhrases = [
  "Hi, I’m Izabelle —",
  "A Creative Web Developer &",
  "UI/UX Designer for Startups and Next-Gen Brands.",
];

export default function Hero() {
  return (
    <section className="bg-[#f5f5f5] min-h-screen flex md:items-center justify-center pt-16 px-6 md:px-20 md:py-20">
      <div className="max-w-5xl">
        <div className="mb-8">
          {headingPhrases.map((text, index) => (
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.5, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-black leading-tight tracking-tight"
            >
              {text}
            </motion.h1>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: headingPhrases.length * 0.5, duration: 0.8 }}
          className="text-lg text-gray-800  w-full flex justify-end mb-10"
        >
          <p className="max-w-xl">
            I bring over six years of experience in web design & development,
            improving performance, UX, and building innovative products.
            {/* across startups and mid-sized digital agencies to design and build
            polished, accessible user interfaces. At Qvara, I led frontend
            efforts on key projects like an option calculator, support site, and
            user onboarding flows — shaping both UX and UI. Known for my
            attention to detail, creativity, and collaborative mindset, I
            consistently bring new ideas to the table. */}
          </p>
        </motion.div>

        <div className="flex gap-4">
          {/* <Button variant="primary" text="Work with me" />
          <Button variant="ghost" text="See my work" /> */}
        </div>
      </div>
    </section>
  );
}
