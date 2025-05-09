"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-opacity-50 backdrop-blur-sm shadow-sm bg-[#f5f5f5]">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <Link href="/" className=" text-slate-600 font-heading">
          {" "}
          <Image
            src="/logo.svg"
            alt="The logo of Izabelle Wilding, designer and developer"
            width={42}
            height={42}
            className="object-contain"
          />
        </Link>
        <nav>
          <ul className="flex space-x-10">
            <li>
              <Link
                href="#about"
                className="text-gray-900 hover:text-indigo-600 transition-colors font-body"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="text-gray-900 hover:text-indigo-600 transition-colors font-body"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="text-gray-900 hover:text-indigo-600 transition-colors font-body"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-900 hover:text-indigo-600 transition-colors font-body"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
