import Image from "next/image";

const skills = [
  {
    name: "Brand Identity",
    icon: "/bulb.svg",
    description: (
      <ul className="">
        <li>Initial branding & logo creation </li>
        <li>Brand identity </li>
      </ul>
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
    <section id="skills" className="py-20 bg-[#faf9f5]">
      <div className="bg-[#faf9f5] container mx-auto px-4 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 max-w-screen-2xl text-center">
          I can help you with
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className=" p-6 pb-16 rounded-lg flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="h-20 w-20 flex items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {skill.name}
              </h3>
              <p className="text-gray-600 flex-grow text-lg tracking-wide">
                {skill.description}
              </p>
              {/* <p className="text-gray-800 font-semibold pt-8">Learn more</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
