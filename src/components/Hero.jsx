import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const { t } = useTranslation();
  const { greeting, intro, typewriterWords, cta } = t("hero", { returnObjects: true });

  return (
    <section className="relative w-full overflow-hidden bg-[#4731D3] dark:bg-[#171043] transition-colors duration-300 pt-32 pb-12 md:pt-40 md:pb-24 lg:min-h-[700px] flex items-center">

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[30%] h-full bg-[#CBF281] dark:bg-[#1A210B] opacity-10 skew-x-12 translate-x-1/2 pointer-events-none transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">

        {/* Left Side (Text) */}
        <div className="flex flex-col gap-6 md:w-3/5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col">
              <span className="text-[#CBF281] font-bold text-lg md:text-2xl mb-2 tracking-wider">
                {greeting}
              </span>

              <h1 className="text-[32px] md:text-[52px] lg:text-[54px] font-bold text-white leading-[1.1] mb-2">
                {intro}
              </h1>

              <div className="text-[32px] md:text-[52px] lg:text-[54px] font-bold text-[#CBF281] leading-[1.1] min-h-[80px] md:min-h-[120px]">
                <Typewriter
                  words={typewriterWords}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            </div>

            <p className="text-white/80 text-lg md:text-xl font-normal mt-6 max-w-[540px] leading-relaxed">
              {cta}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3 mt-4 sm:flex-nowrap"
          >
            <a
              href="https://github.com/eminmengi"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#4731D3] dark:text-[#171043] rounded-lg font-semibold text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              <FaGithub className="text-lg" />
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/eminmengi/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-5 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-base hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              <FaLinkedin className="text-lg" />
              <span>LinkedIn</span>
            </a>
            <a
              href="/Emin_Mengi_CV.pdf"
              download="Emin_Mengi_CV.pdf"
              className="group flex items-center justify-center gap-2 px-5 py-3 bg-[#CBF281] text-[#4731D3] border-2 border-[#CBF281] rounded-lg font-semibold text-base hover:bg-transparent hover:text-[#CBF281] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-nowrap"
            >
              <FaDownload className="text-lg" />
              <span>{t("hero.downloadCv")}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side (Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative md:w-2/5 shrink-0"
        >
          <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
            {/* Abstract Background for Image */}
            <div className="absolute inset-0 bg-[#CBF281] dark:bg-[#2B2733] rounded-[24px] rotate-6 opacity-30 scale-105"></div>
            <div className="absolute inset-0 bg-[#CBF281] dark:bg-[#1A210B] rounded-[24px] -rotate-6"></div>

            {/* Main Image */}
            <img
              src="/hero.png"
              alt="Hero Profile"
              className="relative w-full h-full object-cover rounded-[24px] shadow-2xl z-10 hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
