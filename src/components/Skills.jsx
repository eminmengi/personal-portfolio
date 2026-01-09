import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiVscodium,
  SiFigma,
} from "react-icons/si";

const skills = [
  { name: "JAVASCRIPT", icon: <SiJavascript className="text-[#F7DF1E] text-6xl" />, key: "js" },
  { name: "REACT", icon: <SiReact className="text-[#61DAFB] text-6xl" />, key: "react" },
  { name: "REDUX", icon: <SiRedux className="text-[#764ABC] text-6xl" />, key: "redux" },
  { name: "NODE", icon: <SiNodedotjs className="text-[#339933] text-6xl" />, key: "node" },
  { name: "VS CODE", icon: <SiVscodium className="text-[#007ACC] text-6xl" />, key: "vscode" },
  { name: "FIGMA", icon: <SiFigma className="text-[#F24E1E] text-6xl" />, key: "figma" },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#252128] transition-colors duration-300 relative">
      <div className="max-w-[960px] mx-auto px-6 relative flex flex-col md:flex-row gap-8">

        {/* Title Side */}
        <div className="md:w-1/3">
          <h2 className="text-[48px] font-bold text-[#4832D3] dark:text-[#CBF281] leading-[58px]">
            {t("skills.title")}
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="md:w-2/3 flex flex-wrap gap-x-8 gap-y-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-4 w-[45%] md:w-[45%]"
            >
              <div className="w-[120px] h-[120px] bg-white dark:bg-[#171043] rounded-md shadow-[0px_8px_28px_-6px_rgba(24,39,75,0.12),0px_18px_88px_-4px_rgba(24,39,75,0.14)] dark:shadow-none flex items-center justify-center transition-colors duration-300">
                {skill.icon}
              </div>
              <span className="text-[24px] font-medium text-[#777777] dark:text-gray-300 uppercase font-inter leading-[36px]">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
