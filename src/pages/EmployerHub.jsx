import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Building2,
  ShieldCheck,
  ClipboardCheck,
  Users,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const requests = [
  {
    id: "T-10231",
    name: "R. Kadam",
    role: "Junior Electrician",
    since: "02 May 2026",
  },
  {
    id: "T-10240",
    name: "V. More",
    role: "Solar Installer Trainee",
    since: "18 Jun 2026",
  },
];

export default function EmployerHub() {
  const { t } = useLanguage();
  const [answered, setAnswered] = useState({});

  const confirmedCount = Object.values(answered).filter(
    (value) => value === "yes"
  ).length;

  const pendingCount = requests.length - Object.keys(answered).length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-1">
        <Building2 size={18} className="text-saffron-500" />
        <span className="section-title">{t("employer.label")}</span>
      </div>

      <h1 className="font-display text-3xl font-bold mb-1">
        {t("employer.title")}
      </h1>

      <p className="text-navy-400 dark:text-navy-200 text-sm mb-6 max-w-3xl">
        {t("employer.subtitle")}
      </p>

      {/* Employer identity panel */}
      <div className="rounded-2xl border border-navy-100 dark:border-navy-700 bg-white dark:bg-navy-800 p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-navy-700 flex items-center justify-center shrink-0">
              <Building2 size={27} className="text-saffron-400" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-display text-xl font-bold">
                  Sunrise Electricals
                </h2>

                <span className="badge bg-teal-100 text-teal-700">
                  <ShieldCheck size={13} />
                  {t("employer.verifiedEmployer")}
                </span>
              </div>

              <p className="text-sm text-navy-400 dark:text-navy-200 mt-1">
                {t("employer.location")}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="badge bg-navy-50 dark:bg-navy-700 text-navy-600 dark:text-navy-100">
                  Employer identity
                </span>

                <span className="badge bg-navy-50 dark:bg-navy-700 text-navy-600 dark:text-navy-100">
                  Placement verification
                </span>

                <span className="badge bg-navy-50 dark:bg-navy-700 text-navy-600 dark:text-navy-100">
                  Follow-up enabled
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 min-w-[260px]">
            <div className="rounded-xl bg-navy-50 dark:bg-navy-700 p-3 text-center">
              <div className="text-xl font-display font-bold">
                {requests.length}
              </div>
              <div className="text-[10px] uppercase font-semibold text-navy-400">
                {t("employer.verificationRequests")}
              </div>
            </div>

            <div className="rounded-xl bg-teal-50 dark:bg-teal-900/20 p-3 text-center">
              <div className="text-xl font-display font-bold text-teal-600">
                {confirmedCount}
              </div>
              <div className="text-[10px] uppercase font-semibold text-teal-700">
                {t("employer.confirmed")}
              </div>
            </div>

            <div className="rounded-xl bg-saffron-50 dark:bg-saffron-900/20 p-3 text-center">
              <div className="text-xl font-display font-bold text-saffron-600">
                {pendingCount}
              </div>
              <div className="text-[10px] uppercase font-semibold text-saffron-700">
                {t("employer.pending")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verification workflow */}
      <div className="card mb-6">
        <div className="section-title mb-3">
          {t("employer.verificationWorkflow")}
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          <div className="rounded-xl border border-navy-100 dark:border-navy-700 p-4">
            <div className="w-9 h-9 rounded-full bg-navy-50 dark:bg-navy-700 flex items-center justify-center mb-3">
              <Building2 size={17} />
            </div>
            <div className="font-bold text-sm">{t("employer.step1")}</div>
            <p className="text-xs text-navy-400 dark:text-navy-200 mt-1">
              {t("employer.step1Desc")}
            </p>
          </div>

          <div className="rounded-xl border border-navy-100 dark:border-navy-700 p-4">
            <div className="w-9 h-9 rounded-full bg-navy-50 dark:bg-navy-700 flex items-center justify-center mb-3">
              <ClipboardCheck size={17} />
            </div>
            <div className="font-bold text-sm">{t("employer.step2")}</div>
            <p className="text-xs text-navy-400 dark:text-navy-200 mt-1">
              {t("employer.step2Desc")}
            </p>
          </div>

          <div className="rounded-xl border border-navy-100 dark:border-navy-700 p-4">
            <div className="w-9 h-9 rounded-full bg-navy-50 dark:bg-navy-700 flex items-center justify-center mb-3">
              <Users size={17} />
            </div>
            <div className="font-bold text-sm">{t("employer.step3")}</div>
            <p className="text-xs text-navy-400 dark:text-navy-200 mt-1">
              {t("employer.step3Desc")}
            </p>
          </div>
        </div>
      </div>

      {/* Verification requests */}
      <div className="space-y-4">
        {requests.map((r) => (
          <div
            key={r.id}
            className="card flex flex-wrap items-center justify-between gap-4"
          >
            <div>
              <div className="font-bold">
                {r.name}{" "}
                <span className="text-xs font-normal text-navy-400">
                  · {r.id}
                </span>
              </div>

              <div className="text-sm text-navy-400 dark:text-navy-200">
                {r.role} · joined {r.since}
              </div>
            </div>

            {answered[r.id] ? (
              <span
                className={`badge ${
                  answered[r.id] === "yes"
                    ? "bg-teal-100 text-teal-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {answered[r.id] === "yes"
                  ? t("employer.confirmedEmployed")
                  : t("employer.markedNotEmployed")}
              </span>
            ) : (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() =>
                    setAnswered((a) => ({ ...a, [r.id]: "yes" }))
                  }
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold transition"
                >
                  <CheckCircle2 size={16} />
                  {t("employer.confirmYes")}
                </button>

                <button
                  onClick={() =>
                    setAnswered((a) => ({ ...a, [r.id]: "no" }))
                  }
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-navy-300 dark:border-navy-600 text-sm font-semibold"
                >
                  <XCircle size={16} />
                  {t("employer.confirmNo")}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Why this matters */}
      <div className="card mt-6">
        <div className="section-title mb-2">{t("employer.whyTitle")}</div>

        <p className="text-sm text-navy-400 dark:text-navy-200 mb-5">
          {t("employer.whyDescription")}
        </p>

        <div className="grid sm:grid-cols-4 gap-2">
          <div className="rounded-xl bg-navy-50 dark:bg-navy-700 p-3 text-center text-xs font-semibold">
            {t("employer.verificationPath")}
          </div>

          <div className="hidden sm:flex items-center justify-center text-navy-300">
            <ArrowRight size={16} />
          </div>

          <div className="rounded-xl bg-navy-50 dark:bg-navy-700 p-3 text-center text-xs font-semibold">
            {t("employer.verificationArrow1")}
          </div>

          <div className="rounded-xl bg-teal-50 dark:bg-teal-900/20 p-3 text-center text-xs font-semibold text-teal-700">
            {t("employer.verificationFinal")}
          </div>
        </div>
      </div>
    </div>
  );
}
