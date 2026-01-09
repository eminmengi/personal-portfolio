import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Github, Linkedin } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-auto min-h-[671px] flex items-center overflow-hidden">
      {/* Background Split */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-full lg:w-[calc(100%-432px)] h-full bg-[#4731D3] dark:bg-[#171043] transition-colors duration-300"></div>
        <div className="hidden lg:block w-[432px] h-full bg-[#CBF281] dark:bg-[#1A210B] transition-colors duration-300"></div>
      </div>

      <div className="max-w-[960px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between relative z-10 px-6 gap-10 mt-10">
        {/* Left Side (Text) */}
        <div className="flex flex-col gap-9 max-w-[530px]">
          <div className="space-y-4">
            <h1 className="text-[32px] md:text-[54px] font-bold leading-[1.1] text-[#CBF281]">
              I am a Frontend <br />
              <span className="text-[#CBF281]">
                <Typewriter
                  words={['Developer...']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-2xl text-white dark:text-[#E1E1E1] font-normal leading-[29px]">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="flex items-center gap-2.5 px-5 py-3 bg-white dark:bg-[#252128] border border-[#3730A3] dark:border-[#CBF281] rounded-md transition-transform hover:scale-105"
            >
              <Github size={24} className="text-[#3730A3] dark:text-[#CBF281]" />
              <span className="text-[#3730A3] dark:text-[#CBF281] text-lg font-medium tracking-wide">Github</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2.5 px-5 py-3 bg-white dark:bg-[#252128] border border-[#3730A3] dark:border-[#CBF281] rounded-md transition-transform hover:scale-105"
            >
              <Linkedin size={24} className="text-[#3730A3] dark:text-[#CBF281]" />
              <span className="text-[#3730A3] dark:text-[#CBF281] text-lg font-medium tracking-wide">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Side (Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group lg:w-[350px] lg:h-[376px] w-[300px] h-[320px] mt-8 lg:mt-0"
        >
          <div className="absolute inset-0 bg-[#CBF281] dark:bg-[#2B2733] rounded-[18px] -rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
          <img 
            src="/profile2.jpg"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-[18px] shadow-2xl relative z-10 rotate-0 group-hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
