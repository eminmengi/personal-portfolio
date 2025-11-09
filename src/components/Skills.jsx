import { motion } from "framer-motion";
import { SiJavascript, SiReact, SiRedux, SiNodedotjs, SiVscodium, SiFigma } from "react-icons/si";

const skills = [
  { icon: <SiJavascript className="text-yellow-400 text-6xl" />, name: "JAVASCRIPT" },
  { icon: <SiReact className="text-sky-400 text-6xl" />, name: "REACT" },
  { icon: <SiRedux className="text-purple-500 text-6xl" />, name: "REDUX" },
  { icon: <SiNodedotjs className="text-green-500 text-6xl" />, name: "NODE" },
  { icon: <SiVscodium className="text-blue-500 text-6xl" />, name: "VS CODE" },
  { icon: <SiFigma className="text-pink-500 text-6xl" />, name: "FIGMA" },
];

const Skills = () => {
  return (
    <section className="py-24 bg-light dark:bg-dark transition-colors duration-300">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary dark:text-accent">Skills</h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 justify-items-center max-w-5xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:shadow-xl transition-shadow">
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
