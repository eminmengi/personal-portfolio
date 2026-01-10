import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        id: 1,
        image: "/p1.png",
        github: "https://github.com/eminmengi/e-ticaret",
        site: "https://e-ticaret.vercel.app/",
        tech: ["React", "JavaScript", "Redux", "Axios", "Tailwind CSS"],
        titleKey: "p1.title",
        descKey: "p1.desc",
    },
    {
        id: 2,
        image: "/p2.png",
        github: "https://github.com/eminmengi/fsweb-s8-challenge-pizza",
        site: "https://fsweb-s8-challenge-pizza-beryl.vercel.app/",
        tech: ["React", "React Router", "Axios", "Cypress", "Toastify"],
        titleKey: "p2.title",
        descKey: "p2.desc",
    },
    {
        id: 3,
        image: "/p3.png",
        github: "https://github.com/eminmengi/twitter-clone-frontend",
        githubBackend: "https://github.com/eminmengi/twitter-clone-backend",
        site: "https://twitter-clone-frontend-one.vercel.app/",
        tech: ["Java", "Spring Boot", "OOP", "React", "PostgreSQL"],
        titleKey: "p3.title",
        descKey: "p3.desc",
    },
];

const Projects = () => {
    const { t } = useTranslation();

    return (
        <section id="projects" className="py-24 bg-[#CBF281] dark:bg-[#1A210B] transition-colors duration-300 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] -left-[5%] w-[300px] h-[300px] bg-white opacity-20 dark:opacity-5 rounded-full blur-3xl" />
                <div className="absolute bottom-[10%] -right-[5%] w-[400px] h-[400px] bg-[#4731D3] opacity-10 dark:opacity-20 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="flex flex-col gap-4 mb-20">
                    <h2 className="text-[48px] font-bold text-[#4731D3] dark:text-[#CBF281] leading-tight">
                        {t("projects.title")}
                    </h2>
                    <div className="w-24 h-1.5 bg-[#4731D3] dark:bg-[#CBF281] rounded-full" />
                </div>

                <div className="flex flex-col gap-12">
                    {projects.map((p, index) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col lg:flex-row gap-12 items-center p-8 rounded-3xl bg-white dark:bg-[#2B2733] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Section */}
                            <div className="w-full lg:w-1/2 group">
                                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <div className="absolute inset-0 bg-[#4731D3]/0 group-hover:bg-[#4731D3]/10 transition-colors duration-500 z-10" />
                                    <img
                                        src={p.image}
                                        alt={t(`projects.${p.titleKey}`)}
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                                <h3 className="text-[32px] md:text-[40px] font-bold text-[#4731D3] dark:text-white leading-[1.1]">
                                    {t(`projects.${p.titleKey}`)}
                                </h3>

                                <p className="text-[18px] leading-relaxed text-[#120B39]/80 dark:text-white/80 font-medium">
                                    {t(`projects.${p.descKey}`)}
                                </p>

                                <div className="flex flex-wrap gap-3 my-2">
                                    {p.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-1.5 bg-[#4731D3] text-white dark:bg-[#CBF281] dark:text-[#120B39] rounded-full text-sm font-semibold shadow-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4 mt-4">
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-[#4731D3] text-white rounded-lg font-bold hover:bg-[#3525a5] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                                    >
                                        <FaGithub size={20} />
                                        {p.githubBackend ? "Frontend" : t("projects.github")}
                                    </a>

                                    {p.githubBackend && (
                                        <a
                                            href={p.githubBackend}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-[#4731D3] text-white rounded-lg font-bold hover:bg-[#3525a5] hover:-translate-y-1 transition-all duration-300 shadow-lg"
                                        >
                                            <FaGithub size={20} />
                                            Backend
                                        </a>
                                    )}

                                    {p.site && (
                                        <a
                                            href={p.site}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-white text-[#4731D3] border-2 border-[#4731D3] rounded-lg font-bold hover:bg-[#4731D3] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-lg"
                                        >
                                            <FaExternalLinkAlt size={18} />
                                            {t("projects.view")}
                                        </a>
                                    )}
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
