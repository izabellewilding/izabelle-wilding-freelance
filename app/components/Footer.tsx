import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left mb-4 md:mb-0 font-body">
            © {new Date().getFullYear()} Izabelle Wilding. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/izabellewilding"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/izabellewilding"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/izabellewilding"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
