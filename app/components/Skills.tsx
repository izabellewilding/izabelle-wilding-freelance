import Image from "next/image";

const skills = [
  {
    name: "Web Design & Branding",
    icon: "/bulb.svg",
    description: (
      <>
        I craft modern, fresh <strong>website designs</strong>—from initial
        branding to final execution. Whether you need a <strong>logo</strong> or
        a full <strong>brand identity</strong>, I’ve helped businesses create
        standout visuals that leave a lasting impression.
      </>
    ),
  },
  {
    name: "Website Development",
    icon: "/code.svg",
    description: (
      <>
        I build <strong>fast, fully responsive</strong>, and{" "}
        <strong>SEO-optimized</strong> websites using{" "}
        <strong>cutting-edge technologies</strong> like React and
        Next.js—ensuring <strong>top-tier performance</strong> and a seamless
        user experience on any device.
      </>
    ),
  },
  {
    name: "Performance Optimization",
    icon: "/optimise.svg",
    description: (
      <>
        I optimize websites for{" "}
        <strong>speed, accessibility, and performance</strong>, running in-depth
        tests to ensure a smooth experience for users worldwide.
      </>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 max-w-screen-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 ">
          Professional help with...
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-lg flex flex-col space-y-4"
            >
              <div className="h-20 w-20 flex items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {skill.name}
              </h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
