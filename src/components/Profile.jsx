import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <section id="profile" className="py-24 bg-[#4731D3] dark:bg-[#171043] transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-6">
        <h2 className="text-[48px] font-bold leading-tight text-[#CBF281] mb-6 tracking-tight">
          {t("profile.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-white">

          {/* Basic Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 shadow-xl space-y-6 hover:border-[#CBF281]/50 transition-colors duration-300"
          >
            <h3 className="text-2xl font-bold text-[#CBF281] mb-2 font-inter">{t("profile.basicInfo")}</h3>
            <div className="space-y-4">
              <div className="group">
                <span className="block text-sm font-semibold text-[#CBF281] mb-1 opacity-80 uppercase tracking-wider">{t("profile.birth")}</span>
                <span className="block text-lg font-medium text-white group-hover:translate-x-2 transition-transform duration-300">{t("profile.birthDate")}</span>
              </div>
              <div className="group">
                <span className="block text-sm font-semibold text-[#CBF281] mb-1 opacity-80 uppercase tracking-wider">{t("profile.city")}</span>
                <span className="block text-lg font-medium text-white group-hover:translate-x-2 transition-transform duration-300">{t("profile.cityVal")}</span>
              </div>
              <div className="group">
                <span className="block text-sm font-semibold text-[#CBF281] mb-1 opacity-80 uppercase tracking-wider">{t("profile.education")}</span>
                <span className="block text-lg font-medium text-white group-hover:translate-x-2 transition-transform duration-300 whitespace-pre-line leading-tight">{t("profile.educationDetail")}</span>
              </div>
              <div className="group">
                <span className="block text-sm font-semibold text-[#CBF281] mb-1 opacity-80 uppercase tracking-wider">{t("profile.role")}</span>
                <span className="block text-lg font-medium text-white group-hover:translate-x-2 transition-transform duration-300">{t("profile.roleDetail")}</span>
              </div>
            </div>
          </motion.div>

          {/* Image Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-[320px] aspect-[4/5] mx-auto md:mx-0 flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-[#CBF281] rounded-[18px] transform rotate-6 scale-105 z-0"></div>
            <div className="absolute inset-0 bg-[#4731D3] rounded-[18px] transform -rotate-3 z-0 border-2 border-[#CBF281]/30"></div>
            <img
              src="/profile2.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-[16px] shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
            />
          </motion.div>

          {/* About Me Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 relative"
          >
            {/* Decorative Line */}
            <div className="w-16 h-1 bg-[#CBF281] rounded-full mb-6"></div>

            <h3 className="text-[32px] font-bold leading-tight text-white font-inter">
              {t("profile.aboutTitle")}
            </h3>

            <div className="space-y-4 text-white/90 text-lg leading-relaxed font-light">
              <p className="hover:text-white transition-colors duration-300">
                {t("profile.about1")}
              </p>
              <p className="hover:text-white transition-colors duration-300">
                {t("profile.about2")}
              </p>
            </div>

            {/* Optional Signature or detail */}
            <div className="pt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#CBF281]"></div>
              <span className="text-[#CBF281] font-medium tracking-wide text-sm">{t("profile.openToWork")}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
