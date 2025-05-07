"use client";
import { Button } from "./Button";

export default function Hero() {
  return (
    <section className="bg-[#f5f5f5] min-h-screen flex items-center px-6 md:px-20 py-20">
      <div className="max-w-5xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight tracking-tight mb-8">
          Hi, I'm Izabelle —<br />
          Creative Web Developer
          <br />& UI/UX Designer for startups and next-gen brands.
        </h1>

        <p className="text-lg text-gray-800 max-w-xl mb-10">
          {/* I recently led design at{" "}
          <span className="bg-black text-white px-2 py-1 rounded">Rivian</span>{" "} */}
          With six years of experience as a frontend developer, I’ve worked
          across startups and mid-sized digital agencies to design and build
          polished, accessible user interfaces. At Qvara, I led frontend efforts
          on key projects like an option calculator, support site, and user
          onboarding flows — shaping both UX and UI. Known for my attention to
          detail, creativity, and collaborative mindset, I consistently bring
          new ideas to the table.
          {/*           
           Now deepening my design expertise through a UX
          course, I’m focused on bridging development and design to craft
          standout digital experiences. */}
        </p>

        <div className="flex gap-4">
          {/* <Button variant="primary" text="Work with me" />
          <Button variant="ghost" text="See my work" /> */}
        </div>
      </div>
    </section>
  );
}
