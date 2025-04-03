// import Image from "next/image";
import { PortfolioCard } from "./PortfolioCard";

const projects = [
  {
    title: "Qvara",
    image: "/qvara.png",
    description: "A custom design fully responsive website built with Next.js",
  },
  {
    title: "Ecologi",
    image: "/ecologi.png",
    description: "I worked on Ecologi's component library and website in 2022.",
  },
  {
    title: "Kerve Creative",
    image: "/kerve.png",
    description: "A Bath based creative digital agency.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-md md:text-4xl text-center font-bold font-manrope text-gray-800 mb-16 font-heading">
          Companies I've worked with
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard
              title={project.title}
              image={project.image}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
