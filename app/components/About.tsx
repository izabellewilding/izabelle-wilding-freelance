"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#F9FCFF]">
      <div className="gap-16 h-full  py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        {/* Images with animation */}
        <motion.div
          className=" gap-4 mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            className="w-full rounded-lg"
            src="/screen.jpg"
            alt="office content 1"
            width={1000}
            height={600}
            quality={100}
            priority
          />
          {/* <motion.img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          /> */}
        </motion.div>

        {/* Text Content with Animation */}
        <motion.div
          className="font-light text-gray-500 sm:text-lg dark:text-gray-400 max-w-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <motion.h2
            className="mb-6 text-5xl tracking-tight font-extrabold font-manrope text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            Websites for the modern day
          </motion.h2>

          <motion.p
            className="mb-8 text-md text-slate-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          >
            utting-edge websites that stay ahead of the curve and bring your
            business the results it deserves.
          </motion.p>

          {/* Animated List */}
          <motion.div
            className="grid grid-cols-2 gap-2 flex-initial text-slate-700 font-atkinson"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.ul className="list-disc pl-5">
              <motion.li
                className="flex items-center mb-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#009bab] mr-2">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l4 4L19 7"
                    />
                  </svg>
                </div>
                UX/UI design
              </motion.li>
              <motion.li
                className="flex items-center mb-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#009bab] mr-2">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l4 4L19 7"
                    />
                  </svg>
                </div>
                UX/UI design
              </motion.li>
              <motion.li
                className="flex items-center mb-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#009bab] mr-2">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l4 4L19 7"
                    />
                  </svg>
                </div>
                Copywriting
              </motion.li>
              <motion.li
                className="flex items-center mb-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#009bab] mr-2">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l4 4L19 7"
                    />
                  </svg>
                </div>
                SEO
              </motion.li>
            </motion.ul>
            <motion.ul className="list-disc">
              <motion.li
                className="flex items-center mb-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#009bab] mr-2">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l4 4L19 7"
                    />
                  </svg>
                </div>
                Web Development
              </motion.li>
              <motion.li
                className="flex items-center mb-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#009bab] mr-2">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l4 4L19 7"
                    />
                  </svg>
                </div>
                A/B Testing
              </motion.li>
              <motion.li
                className="flex items-center mb-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#009bab] mr-2">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l4 4L19 7"
                    />
                  </svg>
                </div>
                CMS Development
              </motion.li>
              <motion.li
                className="flex items-center mb-2"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#009bab] mr-2">
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12l4 4L19 7"
                    />
                  </svg>
                </div>
                UX/UI design
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
