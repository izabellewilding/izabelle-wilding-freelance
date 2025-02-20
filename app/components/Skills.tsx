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
    name: "AI & Chatbots",
    icon: "/speech.svg",
    description: (
      <>
        I design and build AI-powered chatbots that streamline customer service,
        boost engagement.
      </>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className=" container mx-auto px-4 ">
        {/* <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-12 max-w-screen-2xl ">
          Professional web development services including:
        </h2> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 flex flex-col space-y-4 border-t-2 border-slate-200 border-solid
              "
            >
              <div className="h-8 w-8 flex">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
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
