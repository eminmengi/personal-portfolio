import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const projects = [
    {
        id: 1,
        image: "/project1.png",
        github: "#",
        site: "#",
        tech: ["React", "Redux", "Vercel"],
        titleKey: "p1.title",
        descKey: "p1.desc",
    },
    {
        id: 2,
        image: "/project2.png",
        github: "#",
        site: "#",
        tech: ["React", "Redux", "Vercel"],
        titleKey: "p2.title",
        descKey: "p2.desc",
    },
];

const Projects = () => {
    const { t } = useTranslation();

    return (
        <section id="projects" className="py-24 bg-[#CBF281] dark:bg-[#1A210B] transition-colors duration-300">
            <div className="max-w-[960px] mx-auto px-6">
                <h2 className="text-[48px] font-bold text-[#4731D3] dark:text-[#CBF281] mb-12">
                    {t("projects.title")}
                </h2>

                <div className="flex flex-col gap-16">
                    {projects.map((p) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="group flex flex-col md:flex-row bg-white rounded-[12px] shadow-[0px_8px_28px_-6px_rgba(24,39,75,0.12),0px_18px_88px_-4px_rgba(24,39,75,0.14)] overflow-hidden min-h-[360px]"
                        >
                            {/* Image */}
                            <div className="w-full md:w-[360px] h-[360px] bg-gray-100 flex-shrink-0 relative overflow-hidden">
                                <img
                                    src={p.image}
                                    alt={p.titleKey}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col justify-center p-8 md:px-12 gap-6 w-full">
                                <h3 className="text-[32px] font-bold text-[#4338CA] leading-none">
                                    {t(`projects.${p.titleKey}`)}
                                </h3>

                                <p className="text-[16px] leading-[20px] text-[#383838]">
                                    {t(`projects.${p.descKey}`)}
                                </p>

                                <div className="flex flex-wrap gap-2.5">
                                    {p.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-[18px] py-[8px] bg-[#4731D3] text-white rounded-[23px] text-[14px] font-medium leading-none"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6 mt-2">
                                    <a
                                        href={p.github}
                                        className="text-[#120B39] text-[16px] font-medium underline underline-offset-4"
                                    >
                                        {t("projects.github")}
                                    </a>
                                    <a
                                        href={p.site}
                                        className="text-[#120B39] text-[16px] font-medium underline underline-offset-4"
                                    >
                                        {t("projects.view")}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
