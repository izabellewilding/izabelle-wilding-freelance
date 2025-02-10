import Image from "next/image";

const projects = [
  {
    name: "E-commerce Platform",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "A fully responsive online store built with Next.js and Stripe",
  },
  {
    name: "Task Management App",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "A React-based productivity tool with drag-and-drop functionality",
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center font-heading">
          My Portfolio
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-indigo-50 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-heading">
                  {project.name}
                </h3>
                <p className="text-gray-600 font-body">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
