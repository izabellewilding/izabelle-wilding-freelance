"use client";
import Image from "next/image";

export default function Logos() {
  return (
    <div className="w-full">
      <div className="w-full md:max-w-screen-xl m-auto py-6 px-6 flex flex-col md:flex-row items-center justify-between">
        <Image
          src="/figma.svg"
          alt="Figma Logo"
          width={50}
          height={50}
          className="w-12 h-12 md:w-24 md:h-24"
        />

        <Image
          src="/react.svg"
          alt="React Logo"
          width={50}
          height={50}
          className="w-12 h-12 md:w-24 md:h-24"
        />
        <Image
          src="/figma.svg"
          alt="Figma Logo"
          width={50}
          height={50}
          className="w-12 h-12 md:w-24 md:h-24"
        />
        <Image
          src="/react.svg"
          alt="React Logo"
          width={50}
          height={50}
          className="w-12 h-12 md:w-24 md:h-24"
        />

        <Image
          src="/figma.svg"
          alt="Figma Logo"
          width={50}
          height={50}
          className="w-12 h-12 md:w-24 md:h-24"
        />
      </div>
    </div>
  );
}
