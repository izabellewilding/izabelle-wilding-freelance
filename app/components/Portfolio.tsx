// import Image from "next/image";
import { PortfolioCard } from "./PortfolioCard";

const projects = [
  {
    name: "Qvara - Marketing Website",
    image: "/qvara-home.png",
    description: "A custom design fully responsive website built with Next.js",
  },
  {
    name: "Pastel Pottery",
    image: "/pottery.png",
    description: "Ecommerce site build with React and Stripe",
  },
  {
    name: "Travel Blog",
    image: "/placeholder.svg?height=300&width=400",
    description: "A dynamic blog site using Gatsby and GraphQL",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-md md:text-4xl font-bold font-manrope text-gray-800 mb-24 font-heading">
          Take a look at my work...{" "}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard key={project.name} />
            /* <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-56 shadow-md "
              />
              <div className="p-6 pl-0">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-heading">
                  {project.name}
                </h3>
                <p className="text-gray-600 font-body">{project.description}</p>
              </div> */
          ))}
        </div>
      </div>
    </section>
  );
}
