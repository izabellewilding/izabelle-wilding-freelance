import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center font-heading">
          Hi! I'm Izabelle. A freelance web designer and developer currently
          working from the UK.
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 container">
          <Image
            src="/simple-life.jpg "
            alt="Simple Life"
            width={500}
            height={400}
            className="rounded-lg"
          />
          <div className=" max-w-md">
            <h1 className=" font-bold text-2xl mt-24 mb-8">
              Beautiful custom websites and mobile apps.
            </h1>
            <p className="text-lg  text-gray-800 mb-6 font-body">
              I specialise in building beautiful, SEO friendly websites that are
              fast and responsive. I have a passion for creating modern and
              intuitive user interfaces that provide a great user experience.
              After years of working in the private sector for startups, banks,
              and digital agencies, I have a great understanding of business
              needs. helped businesses create standout visuals that leave a
              lasting impression.
            </p>
            {/* <p className="text-lg text-gray-600 font-body">
              My passion is to help people level up their online presence and
              grow their businesses. I am always looking for oppotunities, no
              matter how big or small, to help people achieve their goals.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
