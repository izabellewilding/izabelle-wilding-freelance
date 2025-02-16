"use client";
import { Button } from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="overflow-hidden flex items-center justify-center pt-20 md:-mt-16">
      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-5xl font-manrope font-bold leading-none text-sky-950 mb-6 font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Freelance website designer & developer
          </motion.h1>

          <motion.p
            className="text-xl md:text-lg text-gray-600 mb-10 font-body leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            I design & develop sleek, high-performing websites for startups,
            creatives, and businesses that want to stand out.
          </motion.p>

          <motion.div
            className="flex gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <Button variant="dark" text="Request a Free Quote" />
            <Button variant="dark" outline text="See my work" />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative p-2 md:p-16 col-start-1 md:col-start-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        >
          <Image
            src="outline-graphic.svg"
            alt="Outline Graphic"
            width={600}
            height={300}
          />
        </motion.div>
      </div>
    </section>
  );
}
