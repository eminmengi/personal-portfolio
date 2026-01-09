import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <section id="profile" className="py-24 bg-[#4731D3] dark:bg-[#171043] transition-colors duration-300">
      <div className="max-w-[960px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[300px_300px_300px] gap-8 items-start justify-center text-white">

        {/* Basic Info */}
        <div className="space-y-6">
          <h2 className="text-[30px] font-medium leading-[28px] text-[#CBF281]">
            {t("profile.title")}
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="font-semibold text-[#CBF281]">{t("profile.birth")}</span>
              <span className="font-normal text-white">24.03.1996</span>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="font-semibold text-[#CBF281]">{t("profile.city")}</span>
              <span className="font-normal text-white">Ankara</span>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="font-semibold text-[#CBF281]">{t("profile.education")}</span>
              <span className="font-normal text-white">{t("profile.educationDetail")}</span>
            </div>
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <span className="font-semibold text-[#CBF281]">{t("profile.role")}</span>
              <span className="font-normal text-white">{t("profile.roleDetail")}</span>
            </div>
          </div>
        </div>

        {/* Image with Frame and Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-[300px] h-[290px] mx-auto md:mx-0"
        >
          <div className="absolute inset-0 bg-white/10 rounded-[10px] transform rotate-3 scale-105"></div>
          <img
            src="/profile2.jpg"
            alt="Profile working"
            className="w-full h-full object-cover rounded-[10px] shadow-[0px_8px_28px_-6px_rgba(24,39,75,0.12),0px_18px_88px_-4px_rgba(24,39,75,0.14)] relative z-10"
          />
        </motion.div>

        {/* About Me */}
        <div className="space-y-6">
          <h3 className="text-[30px] font-medium leading-[30px] text-white">
            {t("profile.aboutTitle")}
          </h3>
          <p className="text-[18px] font-normal leading-[27px] text-white">
            {t("profile.about1")}
          </p>
          <p className="text-[18px] font-normal leading-[27px] text-white">
            {t("profile.about2")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
