// import { Code, Palette, Smartphone, Zap } from "lucide-react";
import Image from "next/image";

const skills = [
  {
    name: "Web Design & Branding",
    icon: "/bulb.svg",
    description:
      "I can help you with your initial branding concepts right through to the final design of your website. My designs are always modern and fresh. I have created logos and branding for a number of clients.",
  },
  {
    name: "Website Development",
    icon: "/code.svg",
    description:
      "The websites I create are always fully responsive (Web and Mobile friendly), super fast and SEO optimized. I use cutting edge technologies like React and NextJS to ensure that your website remains in the top tier of websites on the web. ",
  },
  {
    name: "Mobile Development",
    icon: "/bulb.svg",
    description:
      "I work alongside a React Native mobile developer to create mobile apps for both iOS and Android. I will create initial wireframes for your app and work with you to create a design that you love.",
  },
  {
    name: "Performance Optimization",
    icon: "/bulb.svg",
    description: "Lighthouse, Web Vitals, SEO",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center font-heading">
          My Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center flex-col text-center"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={50}
                height={50}
                className="h-20 w-20"
              />
              {/* <skill.icon className="w-12 h-12 text-indigo-600 mb-4" /> */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-heading">
                  {skill.name}
                </h3>
                <p className="text-gray-600 font-body">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
