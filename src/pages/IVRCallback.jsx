import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PhoneCall,
  CheckCircle2,
  ArrowLeft,
  Clock3,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function IVRCallback() {
  const navigate = useNavigate();
  const { t, language, setLanguage } = useLanguage();

  const [reason, setReason] = useState("retention");
  const [time, setTime] = useState("morning");
  const [submitted, setSubmitted] = useState(false);

  const languageLabels = {
    en: "English",
    hi: "हिन्दी",
    mr: "मराठी",
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="card text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center mb-5">
            <CheckCircle2 size={34} className="text-teal-500" />
          </div>

          <div className="section-title mb-2">{t("ivr.label")}</div>

          <h1 className="font-display text-3xl font-bold mb-3">
            {t("ivr.successTitle")}
          </h1>

          <p className="text-sm text-navy-400 dark:text-navy-200 max-w-md mx-auto mb-6">
            {t("ivr.successDescription")}
          </p>

          <div className="bg-navy-50 dark:bg-navy-800 rounded-xl p-4 text-left space-y-3 mb-6">
            <div className="flex justify-between gap-4 text-sm">
              <span className="text-navy-400">{t("ivr.reference")}</span>
              <span className="font-semibold">IVR-T10231-06</span>
            </div>

            <div className="flex justify-between gap-4 text-sm">
              <span className="text-navy-400">
                {t("ivr.selectedLanguage")}
              </span>
              <span className="font-semibold">
                {languageLabels[language]}
              </span>
            </div>

            <div className="flex justify-between gap-4 text-sm">
              <span className="text-navy-400">{t("ivr.selectedTime")}</span>
              <span className="font-semibold capitalize">{time}</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/trainee")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-700 text-white text-sm font-semibold"
          >
            <ArrowLeft size={16} />
            {t("ivr.backToTrainee")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/trainee")}
        className="inline-flex items-center gap-2 text-sm text-navy-500 hover:text-navy-800 dark:text-navy-200 dark:hover:text-white mb-6"
      >
        <ArrowLeft size={16} />
        {t("ivr.backToTrainee")}
      </button>

      <div className="flex items-center gap-2 mb-1">
        <PhoneCall size={18} className="text-saffron-500" />
        <span className="section-title">{t("ivr.label")}</span>
      </div>

      <h1 className="font-display text-3xl font-bold mb-2">
        {t("ivr.title")}
      </h1>

      <p className="text-sm text-navy-400 dark:text-navy-200 mb-6">
        {t("ivr.description")}
      </p>

      <div className="card space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2">
            {t("ivr.mobile")}
          </label>

          <input
            type="tel"
            defaultValue="+91 XXXXX XXXXX"
            className="w-full rounded-xl border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-900 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            {t("ivr.preferredLanguage")}
          </label>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-xl border border-navy-200 dark:border-navy-700 bg-white dark:bg-navy-900 px-4 py-3 text-sm"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="mr">मराठी</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            {t("ivr.reason")}
          </label>

          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 rounded-xl border border-navy-100 dark:border-navy-700 cursor-pointer">
              <input
                type="radio"
                name="reason"
                value="employment"
                checked={reason === "employment"}
                onChange={() => setReason("employment")}
              />
              <span className="text-sm">{t("ivr.employment")}</span>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl border border-navy-100 dark:border-navy-700 cursor-pointer">
              <input
                type="radio"
                name="reason"
                value="retention"
                checked={reason === "retention"}
                onChange={() => setReason("retention")}
              />
              <span className="text-sm">{t("ivr.retention")}</span>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl border border-navy-100 dark:border-navy-700 cursor-pointer">
              <input
                type="radio"
                name="reason"
                value="mobileChange"
                checked={reason === "mobileChange"}
                onChange={() => setReason("mobileChange")}
              />
              <span className="text-sm">{t("ivr.mobileChange")}</span>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl border border-navy-100 dark:border-navy-700 cursor-pointer">
              <input
                type="radio"
                name="reason"
                value="other"
                checked={reason === "other"}
                onChange={() => setReason("other")}
              />
              <span className="text-sm">{t("ivr.other")}</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            {t("ivr.preferredTime")}
          </label>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setTime("morning")}
              className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm ${
                time === "morning"
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                  : "border-navy-200 dark:border-navy-700"
              }`}
            >
              <Clock3 size={15} />
              {t("ivr.morning")}
            </button>

            <button
              type="button"
              onClick={() => setTime("afternoon")}
              className={`rounded-xl border px-3 py-3 text-sm ${
                time === "afternoon"
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                  : "border-navy-200 dark:border-navy-700"
              }`}
            >
              {t("ivr.afternoon")}
            </button>

            <button
              type="button"
              onClick={() => setTime("evening")}
              className={`rounded-xl border px-3 py-3 text-sm ${
                time === "evening"
                  ? "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300"
                  : "border-navy-200 dark:border-navy-700"
              }`}
            >
              {t("ivr.evening")}
            </button>
          </div>
        </div>

        <button
          onClick={() => setSubmitted(true)}
          className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold transition"
        >
          <PhoneCall size={17} />
          {t("ivr.request")}
        </button>

        <p className="text-xs text-navy-400 dark:text-navy-300 text-center">
          {t("ivr.note")}
        </p>
      </div>
    </div>
  );
}