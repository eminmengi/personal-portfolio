import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowRight, Copy, Check } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("eminmengi@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 bg-[#F9F9F9] dark:bg-[#252128] transition-colors duration-300 overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#4731D3] opacity-5 dark:opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-[42px] md:text-[56px] font-bold text-[#4731D3] dark:text-[#8F88FF] leading-tight mb-8">
          {t("contact.title")}
        </h2>

        <p className="text-[20px] md:text-[24px] text-[#120B39] dark:text-white mb-12 max-w-2xl mx-auto">
          {t("contact.subtitle")}
        </p>

        {/* Email & Copy Wrapper */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <a
            href="mailto:eminmengi@gmail.com"
            className="group relative inline-flex items-center gap-3 text-[24px] md:text-[32px] font-medium text-[#4731D3] dark:text-[#8F88FF] transition-colors"
          >
            <span className="relative z-10">eminmengi@gmail.com</span>
            <ArrowRight className="w-8 h-8 transform group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4731D3] dark:bg-[#8F88FF] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#4731D3]/10 dark:bg-[#8F88FF]/10 text-[#4731D3] dark:text-[#8F88FF] font-medium text-sm hover:bg-[#4731D3]/20 dark:hover:bg-[#8F88FF]/20 transition-all active:scale-95"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/eminmengi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4731D3] dark:text-[#8F88FF] hover:scale-110 transition-transform duration-300"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/eminmengi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4731D3] dark:text-[#8F88FF] hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin size={40} />
          </a>
        </div>

        {/* Footer / Copyright */}
        <div className="mt-24 pt-8 border-t border-[#4731D3]/20 dark:border-[#8F88FF]/20">
          <p className="text-sm md:text-base font-medium text-[#120B39]/60 dark:text-white/60">
            © {new Date().getFullYear()} Emin Mengi. {t("contact.footer")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
