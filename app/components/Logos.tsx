"use client";
import Image from "next/image";

export default function Logos() {
  return (
    <div className="w-full md:max-w-screen-lg m-auto py-4 px-6 flex flex-col md:flex-row items-center justify-between">
      <Image
        src="/logo.svg"
        alt="Qvara Logo"
        width={50}
        height={50}
        className="w-12 h-12 md:w-16 md:h-16"
      />
      <Image
        src="/logo.svg"
        alt="Qvara Logo"
        width={50}
        height={50}
        className="w-12 h-12 md:w-16 md:h-16"
      />
      <Image
        src="/logo.svg"
        alt="Qvara Logo"
        width={50}
        height={50}
        className="w-12 h-12 md:w-16 md:h-16"
      />
    </div>
  );
}
