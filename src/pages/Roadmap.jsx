import { Smartphone, Bell, Wifi, Mic } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Roadmap() {
  const { t } = useLanguage();

  const screens = [
    {
      title: t("roadmap.screens.home.title"),
      lines: [
        t("roadmap.screens.home.line1"),
        t("roadmap.screens.home.line2"),
        t("roadmap.screens.home.line3"),
      ],
    },
    {
      title: t("roadmap.screens.verify.title"),
      lines: [
        t("roadmap.screens.verify.line1"),
        t("roadmap.screens.verify.line2"),
        t("roadmap.screens.verify.line3"),
      ],
    },
    {
      title: t("roadmap.screens.support.title"),
      lines: [
        t("roadmap.screens.support.line1"),
        t("roadmap.screens.support.line2"),
        t("roadmap.screens.support.line3"),
      ],
    },
  ];

  const features = [
    {
      icon: Bell,
      title: t("roadmap.features.notifications.title"),
      desc: t("roadmap.features.notifications.desc"),
    },
    {
      icon: Wifi,
      title: t("roadmap.features.offline.title"),
      desc: t("roadmap.features.offline.desc"),
    },
    {
      icon: Mic,
      title: t("roadmap.features.voice.title"),
      desc: t("roadmap.features.voice.desc"),
    },
    {
      icon: Smartphone,
      title: t("roadmap.features.biometric.title"),
      desc: t("roadmap.features.biometric.desc"),
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      <div className="section-title mb-1">
        {t("roadmap.phase")}
      </div>

      <h1 className="font-display text-3xl font-bold mb-1">
        {t("roadmap.title")}
      </h1>

      <p className="text-navy-400 dark:text-navy-200 text-sm mb-8 max-w-2xl">
        {t("roadmap.description")}
      </p>

      {/* MOBILE SCREENS */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        {screens.map((s) => (
          <div
            key={s.title}
            className="mx-auto w-48 rounded-[2rem] border-4 border-navy-800 dark:border-navy-600 bg-white dark:bg-navy-800 p-3 shadow-lg"
          >

            <div className="text-center text-xs font-bold mb-3 text-navy-400">
              {s.title}
            </div>

            <div className="space-y-2">

              {s.lines.map((line) => (
                <div
                  key={line}
                  className="text-[11px] rounded-lg bg-navy-50 dark:bg-navy-700 px-2 py-1.5"
                >
                  {line}
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

      {/* FEATURES */}
      <div className="grid sm:grid-cols-2 gap-4">

        {features.map((f) => (
          <div
            key={f.title}
            className="card flex gap-3"
          >

            <f.icon
              className="text-saffron-500 shrink-0"
              size={22}
            />

            <div>

              <div className="font-bold text-sm">
                {f.title}
              </div>

              <div className="text-xs text-navy-400 dark:text-navy-200 mt-0.5">
                {f.desc}
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}