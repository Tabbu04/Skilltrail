import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  Circle,
  Smartphone,
  PhoneCall,
  MessageCircle,
  ExternalLink,
  X,
  Send,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useLanguage } from "../context/LanguageContext";

export default function TraineeCockpit() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const [showWhatsApp, setShowWhatsApp] = useState(false);

  const journey = [
    {
      step: t("trainee.enrolled"),
      done: true,
      date: t("trainee.dates.enrolled"),
    },
    {
      step: t("trainee.certified"),
      done: true,
      date: t("trainee.dates.certified"),
    },
    {
      step: t("trainee.placed"),
      done: true,
      date: t("trainee.dates.placed"),
    },
    {
      step: t("trainee.threeMonth"),
      done: true,
      date: t("trainee.dates.threeMonth"),
    },
    {
      step: t("trainee.sixMonth"),
      done: false,
      date: t("trainee.dates.sixMonth"),
    },
  ];

  const whatsappMessage =
    language === "mr"
      ? "नमस्कार, मला SkillTrail वरील माझ्या रोजगाराची पडताळणी WhatsApp द्वारे पूर्ण करायची आहे. Trainee ID: T-10231. नियोक्ता: Sunrise Electricals."
      : language === "hi"
      ? "नमस्ते, मैं SkillTrail पर अपने रोजगार की WhatsApp द्वारा पुष्टि करना चाहता/चाहती हूं। Trainee ID: T-10231. Employer: Sunrise Electricals."
      : "Hello, I would like to confirm my employment through WhatsApp on SkillTrail. Trainee ID: T-10231. Employer: Sunrise Electricals.";

  const openWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setShowWhatsApp(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-1">
        <Smartphone size={18} className="text-saffron-500" />
        <span className="section-title">{t("trainee.label")}</span>
      </div>

      <h1 className="font-display text-3xl font-bold mb-1">
        {t("trainee.greeting")}
      </h1>

      <p className="text-navy-400 dark:text-navy-200 text-sm mb-6">
        {t("trainee.description")}
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card flex flex-col items-center text-center">
          <div className="section-title mb-2">{t("trainee.passport")}</div>

          <div className="bg-white p-3 rounded-xl border border-navy-100">
            <QRCodeSVG
              value="skilltrail://passport/T-10231"
              size={150}
              fgColor="#1E2761"
            />
          </div>

          <div className="mt-3 text-sm font-bold">
            {t("trainee.passportId")}
          </div>

          <div className="text-xs text-navy-400 dark:text-navy-200">
            {t("trainee.passportDescription")}
          </div>
        </div>

        <div className="card">
          <div className="section-title mb-3">{t("trainee.journey")}</div>

          <ul className="space-y-3">
            {journey.map((j) => (
              <li key={j.step} className="flex items-start gap-3">
                {j.done ? (
                  <CheckCircle2
                    size={18}
                    className="text-teal-500 mt-0.5 shrink-0"
                  />
                ) : (
                  <Circle
                    size={18}
                    className="text-navy-300 mt-0.5 shrink-0"
                  />
                )}

                <div>
                  <div
                    className={`text-sm font-medium ${
                      j.done ? "" : "text-navy-400"
                    }`}
                  >
                    {j.step}
                  </div>

                  <div className="text-xs text-navy-400 dark:text-navy-300">
                    {j.date}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card mt-6">
        <div className="section-title mb-2">
          {t("trainee.callbackTitle")}
        </div>

        <p className="text-sm text-navy-400 dark:text-navy-200 mb-4">
          {t("trainee.callbackDescription")}
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => navigate("/ivr-callback")}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold transition"
          >
            <PhoneCall size={16} />
            {t("trainee.ivr")}
          </button>

          <button
            onClick={() => setShowWhatsApp(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-navy-300 dark:border-navy-600 text-sm font-semibold hover:bg-navy-50 dark:hover:bg-navy-800 transition"
          >
            <MessageCircle size={16} />
            {t("trainee.whatsapp")}
          </button>
        </div>
      </div>

      {showWhatsApp && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md bg-white dark:bg-navy-900 rounded-2xl border border-navy-100 dark:border-navy-700 shadow-2xl p-6">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <div className="section-title mb-1">
                  WhatsApp Verification
                </div>
                <h2 className="font-display text-xl font-bold">
                  {t("trainee.whatsapp")}
                </h2>
              </div>

              <button
                onClick={() => setShowWhatsApp(false)}
                className="p-2 rounded-full hover:bg-navy-50 dark:hover:bg-navy-800"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="rounded-xl bg-navy-50 dark:bg-navy-800 p-4 mb-5">
              <div className="text-sm font-bold">Sunrise Electricals</div>
              <div className="text-xs text-navy-400 dark:text-navy-200 mt-1">
                Trainee ID: T-10231
              </div>

              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-teal-500" />
                  Employment status
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-teal-500" />
                  Current role
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-teal-500" />
                  Retention confirmation
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={openWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 transition"
              >
                <Send size={16} />
                Open WhatsApp
                <ExternalLink size={14} />
              </button>

              <button
                onClick={() => setShowWhatsApp(false)}
                className="px-4 py-2.5 rounded-xl border border-navy-200 dark:border-navy-700 text-sm font-semibold"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}