import { Code, Palette, Smartphone, Zap } from "lucide-react";

const skills = [
  {
    name: "Front-end Development",
    icon: Code,
    description: "HTML, CSS, JavaScript, React, Vue.js",
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    description: "Figma, Adobe XD, Responsive Design",
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    description: "React Native, Progressive Web Apps",
  },
  {
    name: "Performance Optimization",
    icon: Zap,
    description: "Lighthouse, Web Vitals, SEO",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center font-heading">
          My Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md">
              <skill.icon className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2 font-heading">
                {skill.name}
              </h3>
              <p className="text-gray-600 font-body">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
