import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-opacity-90 backdrop-blur-sm shadow-sm">
      <div className="container px-16 mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-xl text-slate-600 font-heading">
          Izabelle Wilding
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
