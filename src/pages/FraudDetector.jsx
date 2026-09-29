import { useState } from "react";
import { verifications } from "../data/trainees";
import {
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertTriangle,
  SearchCheck,
  Phone,
  Clock3,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const riskStyle = {
  Low: {
    icon: ShieldCheck,
    color: "text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-900/40",
  },

  Medium: {
    icon: ShieldQuestion,
    color: "text-saffron-500",
    bg: "bg-saffron-50 dark:bg-saffron-900/20",
    border: "border-saffron-200 dark:border-saffron-900/40",
  },

  High: {
    icon: ShieldAlert,
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-900/40",
  },
};

function getSignalMeta(signal) {
  const lower = signal.toLowerCase();

  if (lower.includes("phone reused")) {
    return {
      icon: Phone,
      title: "Employer contact reuse",
    };
  }

  if (lower.includes("follow-up")) {
    return {
      icon: MessageCircle,
      title: "Follow-up activity",
    };
  }

  if (lower.includes("joining-to-verification")) {
    return {
      icon: Clock3,
      title: "Joining-to-verification interval",
    };
  }

  if (lower.includes("epfo")) {
    return {
      icon: SearchCheck,
      title: "Independent employment signal",
    };
  }

  if (lower.includes("employer confirmed")) {
    return {
      icon: CheckCircle2,
      title: "Employer confirmation",
    };
  }

  if (lower.includes("batch-mates")) {
    return {
      icon: MessageCircle,
      title: "Peer confirmation",
    };
  }

  if (lower.includes("udyam")) {
    return {
      icon: SearchCheck,
      title: "Registration evidence",
    };
  }

  return {
    icon: SearchCheck,
    title: "Verification signal",
  };
}

export default function FraudDetector() {
  const { t } = useLanguage();

  const [expanded, setExpanded] = useState({});

  const flaggedCount = verifications.filter(
    (v) => v.risk === "High"
  ).length;

  const toggleExpanded = (id) => {
    setExpanded((current) => ({
      ...current,
      [id]: !current[id],
    }));
  };

  const rules = [
    {
      icon: Phone,
      title: t("fraud.rule1"),
      description: t("fraud.rule1Desc"),
    },
    {
      icon: MessageCircle,
      title: t("fraud.rule2"),
      description: t("fraud.rule2Desc"),
    },
    {
      icon: Clock3,
      title: t("fraud.rule3"),
      description: t("fraud.rule3Desc"),
    },
    {
      icon: SearchCheck,
      title: t("fraud.rule4"),
      description: t("fraud.rule4Desc"),
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="section-title mb-1">
        {t("fraud.label")}
      </div>

      <h1 className="font-display text-3xl font-bold mb-1">
        {t("fraud.title")}
      </h1>

      <p className="text-navy-400 dark:text-navy-200 text-sm mb-6 max-w-3xl">
        {t("fraud.description")}
      </p>

      {/* Summary */}
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div className="card">
          <div className="text-xs text-navy-400 uppercase font-semibold">
            {t("fraud.recordsScanned")}
          </div>

          <div className="text-2xl font-display font-bold">
            {verifications.length}
          </div>
        </div>

        <div className="card">
          <div className="text-xs text-navy-400 uppercase font-semibold">
            {t("fraud.flaggedHighRisk")}
          </div>

          <div className="text-2xl font-display font-bold text-red-500">
            {flaggedCount}
          </div>
        </div>

        <div className="card">
          <div className="text-xs text-navy-400 uppercase font-semibold">
            {t("fraud.detectionMethod")}
          </div>

          <div className="text-sm font-semibold mt-1">
            {t("fraud.deterministic")}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="card mb-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="section-title mb-1">
              {t("fraud.engineTitle")}
            </div>

            <h2 className="font-display text-xl font-bold">
              {t("fraud.howTitle")}
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 badge bg-teal-100 text-teal-700">
            <ShieldCheck size={14} />
            Explainable
          </div>
        </div>

        <p className="text-sm text-navy-400 dark:text-navy-200 mb-5 max-w-3xl">
          {t("fraud.howDescription")}
        </p>

        <div className="grid md:grid-cols-4 gap-3">
          {rules.map((rule, index) => {
            const Icon = rule.icon;

            return (
              <div
                key={rule.title}
                className="relative rounded-xl border border-navy-100 dark:border-navy-700 p-4"
              >
                <div className="text-[10px] uppercase font-bold text-navy-300 mb-3">
                  0{index + 1}
                </div>

                <div className="w-9 h-9 rounded-full bg-navy-50 dark:bg-navy-800 flex items-center justify-center mb-3">
                  <Icon
                    size={17}
                    className="text-navy-600 dark:text-navy-200"
                  />
                </div>

                <div className="font-bold text-sm mb-1">
                  {rule.title}
                </div>

                <p className="text-xs text-navy-400 dark:text-navy-200 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-4 rounded-xl bg-navy-50 dark:bg-navy-800 p-3 text-xs text-navy-500 dark:text-navy-200">
          <strong>{t("fraud.ruleBasedNote")}</strong>
        </div>
      </div>

      {/* Records */}
      <div className="space-y-3">
        {verifications.map((v) => {
          const style = riskStyle[v.risk];
          const Icon = style.icon;
          const isExpanded = expanded[v.id];

          return (
            <div
              key={v.id}
              className={`rounded-2xl border ${style.border} p-4 ${style.bg}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-bold text-sm">
                    {v.name}{" "}
                    <span className="font-normal text-navy-400">
                      · {v.id}
                    </span>
                  </div>

                  <div className="text-xs text-navy-400 dark:text-navy-200 mt-1">
                    {v.course} · Employer: {v.employer} ({v.employerPhone})
                  </div>
                </div>

                <div
                  className={`flex items-center gap-1.5 text-xs font-bold ${style.color} shrink-0`}
                >
                  <Icon size={16} />

                  {v.risk === "Low"
                    ? t("fraud.lowRisk")
                    : v.risk === "Medium"
                    ? t("fraud.mediumRisk")
                    : t("fraud.highRisk")}
                </div>
              </div>

              {/* Verification signals */}
              <div className="mt-4">
                <div className="text-[10px] uppercase font-bold text-navy-400 mb-2">
                  {t("fraud.verificationSignals")}
                </div>

                <div className="space-y-2">
                  {v.signals.map((signal) => {
                    const meta = getSignalMeta(signal);
                    const SignalIcon = meta.icon;

                    const isFlag =
                      v.risk === "High" ||
                      signal.toLowerCase().includes("pending");

                    return (
                      <div
                        key={signal}
                        className="flex items-center gap-3 rounded-xl bg-white/70 dark:bg-navy-900/40 border border-white/60 dark:border-navy-700 p-3"
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isFlag
                              ? "bg-red-100 text-red-500"
                              : "bg-teal-100 text-teal-600"
                          }`}
                        >
                          {isFlag ? (
                            <AlertTriangle size={15} />
                          ) : (
                            <SignalIcon size={15} />
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold">
                            {meta.title}
                          </div>

                          <div className="text-xs text-navy-500 dark:text-navy-200 mt-0.5">
                            {signal}
                          </div>
                        </div>

                        <span
                          className={`text-[10px] font-bold uppercase ${
                            isFlag
                              ? "text-red-500"
                              : "text-teal-600"
                          }`}
                        >
                          {isFlag
                            ? t("fraud.flagged")
                            : t("fraud.passed")}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Expand */}
              <button
                onClick={() => toggleExpanded(v.id)}
                className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-navy-600 dark:text-navy-100 hover:underline"
              >
                {isExpanded
                  ? t("fraud.hideChecks")
                  : t("fraud.viewChecks")}

                {isExpanded ? (
                  <ChevronUp size={14} />
                ) : (
                  <ChevronDown size={14} />
                )}
              </button>

              {isExpanded && (
                <div className="mt-3 rounded-xl bg-white/60 dark:bg-navy-900/40 border border-white/60 dark:border-navy-700 p-4">
                  <div className="text-xs font-bold mb-3">
                    Verification reasoning
                  </div>

                  <div className="space-y-3">
                    {v.signals.map((signal, index) => {
                      const meta = getSignalMeta(signal);
                      const SignalIcon = meta.icon;

                      return (
                        <div
                          key={`${v.id}-${signal}`}
                          className="flex items-start gap-3"
                        >
                          <div className="w-6 h-6 rounded-full bg-navy-100 dark:bg-navy-700 flex items-center justify-center shrink-0 text-[10px] font-bold">
                            {index + 1}
                          </div>

                          <div>
                            <div className="text-xs font-semibold">
                              {meta.title}
                            </div>

                            <div className="text-xs text-navy-400 dark:text-navy-200 mt-0.5">
                              {signal}
                            </div>
                          </div>

                          <SignalIcon
                            size={14}
                            className={`ml-auto ${
                              v.risk === "High"
                                ? "text-red-500"
                                : "text-teal-500"
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}