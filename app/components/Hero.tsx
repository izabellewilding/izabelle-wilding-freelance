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
            Cutting edge websites and applications that will make you{" "}
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

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180 transform translate-y-1">
        <svg
          className="relative block w-full h-[50px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
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
