"use client";
import { Button } from "./Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden flex items-center justify-center pt-20 md:-mt-16 animate-color-shift">
      {/* Diagonal line overlay */}
      <div className="absolute inset-0 diagonal-shine z-[1]"></div>

      {/* Rest of your hero content with higher z-index */}
      <div className="container mx-auto px-16 flex items-center justify-center gap-8 text-center relative z-[2] max-w-[850px]">
        <motion.div
          className="hero-title text-4xl md:text-5xl font-manrope font-bold leading-tight tracking-tight mb-8 font-heading relative p-16 "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div className="flex flex-col items-center justify-center gap-6">
            <motion.h1
              className="text-5xl font-manrope font-bold leading-tight tracking-tighter text-[#ffffff] font-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              Creative Freelance Web Developer & UI/UX Designer
            </motion.h1>

            <motion.p
              className="text-lg md:text-lg text-[#ffffffbe] font-normal leading-relaxed tracking-wide max-w-[370px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              Cutting edge websites and applications that will make you{" "}
              <strong className="font-semibold">stand out.</strong>
            </motion.p>

            <motion.div
              className="flex gap-5 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              <Button variant="dark" text="Let's work together" />
              <Button variant="dark" outline text="See my work" />
            </motion.div>
          </motion.div>
        </motion.div>
        {/* 
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
        </motion.div> */}
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-1 left-0 w-full overflow-hidden rotate-180 transform translate-y-1">
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

      <style jsx>{`
        @keyframes colorShift {
          0%,
          16.66% {
            background-color: #76acac;
          }
          33.33% {
            background-color: #a89be4;
          }
          50% {
            background-color: #af727d;
          }
          66.66% {
            background-color: #72af8d;
          }
          83.33%,
          100% {
            background-color: #727daf;
          }
        }
        .animate-color-shift {
          animation: colorShift 30s ease-in-out forwards;
          will-change: background-color;
          transform: translateZ(0);
        }
        .metallic-sheen {
          position: relative;
          color: #001224;
        }

        .metallic-sheen::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0) 20%,
            rgba(255, 255, 255, 0.8) 30%,
            rgba(255, 255, 255, 0.9) 40%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 60%,
            transparent 100%
          );
          background-size: 300% 100%;
          mix-blend-mode: overlay;
          animation: shine 5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes shine {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        .shine-overlay {
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(255, 255, 255, 0) 20%,
            rgba(255, 255, 255, 0.4) 40%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0.4) 60%,
            rgba(255, 255, 255, 0) 80%,
            transparent 100%
          );
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          animation: shine-effect 6s ease-in-out infinite;
          pointer-events: none;
          z-index: 2;
          mix-blend-mode: soft-light;
        }

        @keyframes shine-effect {
          0% {
            transform: translate(-30%, -30%) rotate(-5deg);
          }
          100% {
            transform: translate(30%, 30%) rotate(-5deg);
          }
        }

        .static-shine {
          background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(255, 255, 255, 0) 35%,
            rgba(255, 255, 255, 0.1) 45%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.1) 55%,
            rgba(255, 255, 255, 0) 65%,
            transparent 100%
          );
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          mix-blend-mode: soft-light;
        }

        .diagonal-line {
          background: linear-gradient(
            135deg,
            transparent 0%,
            transparent 45%,
            rgba(255, 255, 255, 0.08) 49%,
            rgba(255, 255, 255, 0.15) 50%,
            rgba(255, 255, 255, 0.08) 51%,
            transparent 55%,
            transparent 100%
          );
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .diagonal-shine {
          background: linear-gradient(
            135deg,
            transparent 0%,
            transparent 45%,
            rgba(255, 255, 255, 0.05) 49%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0.05) 51%,
            transparent 55%,
            transparent 100%
          );
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          pointer-events: none;
          mix-blend-mode: overlay;
        }
      `}</style>
    </section>
  );
}
