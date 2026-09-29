import { NavLink } from "react-router-dom";
import { Moon, Sun, Globe, GraduationCap, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Header({ dark, setDark }) {
  const { language, setLanguage, languageOptions, t } = useLanguage();

  const links = [
    { to: "/", label: t("nav.overview") },
    { to: "/trainee", label: t("nav.trainee") },
    { to: "/employer", label: t("nav.employer") },
    { to: "/districts", label: t("nav.districts") },
    { to: "/fraud", label: t("nav.fraud") },
    { to: "/roadmap", label: t("nav.roadmap") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-navy-900/95 backdrop-blur border-b border-navy-100 dark:border-navy-700">
      <div className="bg-navy-800 text-white text-xs px-4 py-1 flex justify-between">
        <span>{t("government")}</span>
        <span className="hidden sm:inline">SIH 2026 · PS 26135</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-navy-700 flex items-center justify-center">
            <GraduationCap size={20} className="text-saffron-400" />
          </div>

          <div>
            <div className="font-display font-bold text-lg leading-none">
              SkillTrail
            </div>
            <div className="text-[10px] text-navy-400 dark:text-navy-100 italic">
              {t("tagline")}
            </div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-sm font-medium transition ${
                  isActive
                    ? "bg-navy-700 text-white"
                    : "text-navy-700 dark:text-navy-100 hover:bg-navy-50 dark:hover:bg-navy-800"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <div className="relative">
            <Globe
              size={14}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-navy-500 pointer-events-none"
            />

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label={t("language")}
              title={t("language")}
              className="appearance-none pl-8 pr-7 py-1.5 rounded-full border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-900 text-xs font-semibold text-navy-700 dark:text-white cursor-pointer"
            >
              {languageOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.native}
                </option>
              ))}
            </select>

            <ChevronDown
              size={13}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-navy-500 pointer-events-none"
            />
          </div>

          <button
            onClick={() => setDark(!dark)}
            className="p-1.5 rounded-full border border-navy-200 dark:border-navy-700"
            title={t("darkMode")}
            aria-label={t("darkMode")}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>

      <nav className="lg:hidden flex overflow-x-auto gap-1 px-4 pb-2">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              `whitespace-nowrap px-3 py-1 rounded-full text-xs font-medium ${
                isActive
                  ? "bg-navy-700 text-white"
                  : "bg-navy-50 dark:bg-navy-800 text-navy-700 dark:text-navy-100"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}