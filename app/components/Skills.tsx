import Image from "next/image";

const skills = [
  {
    name: "Logos & Design",
    icon: "/bulb.svg",
    description: (
      <ul className="">
        <li>Initial branding & logo creation </li>
        <li>Brand identity </li>
      </ul>
    ),
  },
  {
    name: "Custom Websites",
    icon: "/code.svg",
    description: (
      <>
        I can make you a brand new website using Wordpress or update your
        existing website.
      </>
    ),
  },
  {
    name: "Frontend Development",
    icon: "/code.svg",
    description: <>Javascript, Typescript, CSS, HTML, ReactJS and NextJS.</>,
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
  {
    name: "AI & Chatbots",
    icon: "/speech.svg",
    description: (
      <>
        I design and build AI-powered chatbots that streamline customer service,
        boost engagement, and drive sales—helping your business provide instant,
        intelligent, and personalized interactions 24/7.
      </>
    ),
  },
  {
    name: "SEO",
    icon: "/optimise.svg",
    description: (
      <>
        I will help your business appear higher in search rankings, helping to
        get your business found.
      </>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className=" container mx-auto px-4 pb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 max-w-screen-2xl ">
          Professional help with...
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 pb-16 rounded-lg flex flex-col items-center justify-center text-center space-y-4"
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
              <h3 className="text-xl font-semibold text-gray-800">
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
