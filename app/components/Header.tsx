import Link from "next/link";
import { ShimmerButton } from "./Hero";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-600 font-heading"
        >
          IW
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="#about"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-body"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-body"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-body"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-body"
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
