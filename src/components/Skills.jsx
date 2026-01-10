import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiVscodium,
  SiFigma,
  SiPython,
  SiDjango,
  SiSpringboot,
  SiTailwindcss,
  SiPostgresql,
  SiReactquery,
  SiPhp,
  SiLaravel,
  SiCypress,
} from "react-icons/si";

const skills = [
  // Row 1
  { name: "JAVASCRIPT", icon: <SiJavascript className="text-[#F7DF1E] text-5xl" />, key: "js" },
  { name: "REACT", icon: <SiReact className="text-[#61DAFB] text-5xl" />, key: "react" },
  { name: "REDUX", icon: <SiRedux className="text-[#764ABC] text-5xl" />, key: "redux" },
  { name: "TANSTACK QUERY", icon: <SiReactquery className="text-[#FF4154] text-5xl" />, key: "query" },
  { name: "TAILWIND CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-5xl" />, key: "tailwind" },

  // Row 2
  { name: "NODE.JS", icon: <SiNodedotjs className="text-[#339933] text-5xl" />, key: "node" },
  { name: "PYTHON", icon: <SiPython className="text-[#3776AB] text-5xl" />, key: "python" },
  { name: "DJANGO", icon: <SiDjango className="text-[#092E20] text-5xl" />, key: "django" },
  { name: "PHP", icon: <SiPhp className="text-[#777BB4] text-5xl" />, key: "php" },
  { name: "LARAVEL", icon: <SiLaravel className="text-[#FF2D20] text-5xl" />, key: "laravel" },

  // Row 3
  { name: "SPRING BOOT", icon: <SiSpringboot className="text-[#6DB33F] text-5xl" />, key: "spring" },
  { name: "POSTGRESQL", icon: <SiPostgresql className="text-[#4169E1] text-5xl" />, key: "postgres" },
  { name: "CYPRESS", icon: <SiCypress className="text-[#17202C] text-5xl dark:text-white" />, key: "cypress" },
  { name: "VS CODE", icon: <SiVscodium className="text-[#007ACC] text-5xl" />, key: "vscode" },
  { name: "FIGMA", icon: <SiFigma className="text-[#F24E1E] text-5xl" />, key: "figma" },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#252128] transition-colors duration-300 relative">
      <div className="max-w-[1240px] mx-auto px-6 relative flex flex-col md:flex-row gap-8">

        {/* Title Side */}
        <div className="md:w-1/4 shrink-0">
          <h2 className="text-[48px] font-bold text-[#4832D3] dark:text-[#CBF281] leading-[58px] sticky top-24">
            {t("skills.title")}
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1, translateY: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 text-center group cursor-pointer"
            >
              <div className="w-24 h-24 shrink-0 bg-white dark:bg-[#171043] rounded-md shadow-[0px_8px_28px_-6px_rgba(24,39,75,0.12),0px_18px_88px_-4px_rgba(24,39,75,0.14)] dark:shadow-none flex items-center justify-center transition-all duration-300 group-hover:shadow-xl group-hover:border-2 group-hover:border-[#4731D3] dark:group-hover:border-[#CBF281]">
                {skill.icon}
              </div>
              <span className="text-lg font-medium text-[#777777] dark:text-gray-300 uppercase font-inter leading-tight transition-colors duration-300 group-hover:text-[#4731D3] dark:group-hover:text-[#CBF281]">
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
