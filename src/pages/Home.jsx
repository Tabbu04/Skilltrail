import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import StatCard from "../components/StatCard";
import DistrictMap from "../components/DistrictMap";
import { stateSummary } from "../data/districts";
import { wageBySector, retentionCurve } from "../data/trainees";
import { ShieldCheck, QrCode, PhoneCall, TrendingUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: QrCode,
      title: t("home.features.passport.title"),
      desc: t("home.features.passport.desc"),
    },
    {
      icon: ShieldCheck,
      title: t("home.features.fraud.title"),
      desc: t("home.features.fraud.desc"),
    },
    {
      icon: PhoneCall,
      title: t("home.features.ivr.title"),
      desc: t("home.features.ivr.desc"),
    },
    {
      icon: TrendingUp,
      title: t("home.features.ml.title"),
      desc: t("home.features.ml.desc"),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">

      {/* HERO */}
      <section className="text-center space-y-3">
        <div className="section-title">
          {t("home.gov")}
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold">
          {t("home.titleLine1")}
          <br className="hidden md:block" />
          {t("home.titleLine2")}
        </h1>

        <p className="max-w-2xl mx-auto text-navy-400 dark:text-navy-100">
          {t("home.description")}
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">

          <Link
            to="/trainee"
            className="px-4 py-2 rounded-full bg-navy-700 text-white text-sm font-semibold"
          >
            {t("nav.trainee")}
          </Link>

          <Link
            to="/employer"
            className="px-4 py-2 rounded-full bg-saffron-500 text-white text-sm font-semibold"
          >
            {t("nav.employer")}
          </Link>

          <Link
            to="/fraud"
            className="px-4 py-2 rounded-full border border-navy-300 dark:border-navy-600 text-sm font-semibold"
          >
            {t("nav.fraud")}
          </Link>

        </div>
      </section>

      {/* STATE STATISTICS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <StatCard
          label={t("home.stats.totalTrained")}
          value={stateSummary.totalTrained.toLocaleString()}
          sub={`${stateSummary.certifiedPct}% ${t("home.stats.certified")}`}
        />

        <StatCard
          label={t("home.stats.retention")}
          value={`${stateSummary.ret12}%`}
          sub={t("home.stats.verified")}
          accent="text-teal-500"
        />

        <StatCard
          label={t("home.stats.wageMultiplier")}
          value={`${stateSummary.wageMult}x`}
          sub={`₹${stateSummary.wageStart.toLocaleString()} → ₹${stateSummary.wageNow.toLocaleString()}`}
        />

        <StatCard
          label={t("home.stats.trust")}
          value={`${stateSummary.trustIndex}%`}
          sub={t("home.stats.trustSub")}
          accent="text-saffron-500"
        />

      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-4 gap-4">

        {features.map((f) => (
          <div key={f.title} className="card">

            <f.icon
              className="text-saffron-500 mb-2"
              size={24}
            />

            <div className="font-bold text-sm">
              {f.title}
            </div>

            <div className="text-xs text-navy-400 dark:text-navy-200 mt-1">
              {f.desc}
            </div>

          </div>
        ))}

      </section>

      {/* ANALYTICS */}
      <section className="grid lg:grid-cols-2 gap-6">

        <div className="card">

          <div className="font-bold mb-1">
            {t("home.charts.retentionTitle")}
          </div>

          <div className="text-xs text-navy-400 dark:text-navy-200 mb-3">
            {t("home.charts.retentionSubtitle")}
          </div>

          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={retentionCurve}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#dbe1f4"
              />

              <XAxis
                dataKey="month"
                fontSize={12}
              />

              <YAxis
                fontSize={12}
                unit="%"
              />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="retention"
                stroke="#1c7293"
                strokeWidth={3}
                dot={{ r: 4 }}
              />

            </LineChart>
          </ResponsiveContainer>

        </div>

        <div className="card">

          <div className="font-bold mb-1">
            {t("home.charts.wageTitle")}
          </div>

          <div className="text-xs text-navy-400 dark:text-navy-200 mb-3">
            {t("home.charts.wageSubtitle")}
          </div>

          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={wageBySector}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#dbe1f4"
              />

              <XAxis
                dataKey="sector"
                fontSize={10}
              />

              <YAxis fontSize={12} />

              <Tooltip />

              <Legend
                wrapperStyle={{ fontSize: 11 }}
              />

              <Bar
                dataKey="stipend"
                fill="#c9d3f0"
                name={t("home.charts.stipend")}
              />

              <Bar
                dataKey="month12"
                fill="#3d4f9e"
                name={t("home.charts.month12")}
              />

              <Bar
                dataKey="month24"
                fill="#1e2761"
                name={t("home.charts.month24")}
              />

            </BarChart>
          </ResponsiveContainer>

        </div>

      </section>

      {/* DISTRICT MAP */}
      <section>

        <div className="flex items-center justify-between mb-3">

          <div>

            <div className="font-bold">
              {t("home.map.title")}
            </div>

            <div className="text-xs text-navy-400 dark:text-navy-200">
              {t("home.map.subtitle")}
            </div>

          </div>

          <Link
            to="/districts"
            className="text-sm font-semibold text-teal-500"
          >
            {t("home.map.open")} →
          </Link>

        </div>

        <DistrictMap height={420} />

      </section>

    </div>
  );
}
