"use client";
import { Button } from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex items-center justify-center pt-20 md:-mt-16 bg-[#fffcf9]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r animate-gradient" />

      <div className="container mx-auto px-16 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-manrope font-bold leading-tight tracking-tight text-[#001224] mb-8 font-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            Freelance Web Designer & Developer
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-[#001224] mb-10 font-body leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            Sleek, performant websites that will make you{" "}
            <strong className="font-semibold">stand out.</strong>
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
          className="relative p-2 md:p-12 mb-24 col-start-1 md:col-start-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        >
          <Image
            src="outline-graphic.svg"
            alt="Outline Graphic"
            width={700}
            height={420}
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Tailwind animation (CSS Keyframes) */}
      <style jsx>{`
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradientBG 8s ease infinite;
        }
      `}</style>
    </section>
  );
}
