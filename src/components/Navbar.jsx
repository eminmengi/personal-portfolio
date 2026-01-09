import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "tr" : "en");
  };

  return (
    <header className="absolute top-0 w-full bg-transparent z-50 pt-8">
      <div className="max-w-[960px] mx-auto flex justify-between items-center px-6">
        <h1 className="text-[32px] font-bold text-[#CBF281]"></h1>

        <nav className="flex items-center gap-8 text-sm font-medium text-white">
          <button
            onClick={toggleLang}
            className="text-[#CBF281] font-bold text-[15px] tracking-widest uppercase hover:opacity-80 transition-opacity"
          >
            {i18n.language === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
          </button>

          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 group"
          >
            <div className={`w-12 h-6 rounded-full p-1 transition-colors ${dark ? 'bg-black' : 'bg-secondary'}`}>
              <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${dark ? 'translate-x-0' : 'translate-x-6'}`} />
            </div>
            <span className="text-white group-hover:text-secondary transition-colors">
              {dark ? 'DARK MODE' : 'LIGHT MODE'}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
