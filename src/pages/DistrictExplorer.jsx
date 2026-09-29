import { useState } from "react";
import DistrictMap from "../components/DistrictMap";
import { districts, retentionTier } from "../data/districts";
import {
  Users,
  TrendingUp,
  IndianRupee,
  BriefcaseBusiness,
  ShieldCheck,
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function MetricCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl bg-navy-50 dark:bg-navy-800 p-3">
      <div className="flex items-center gap-2 text-navy-400 dark:text-navy-300 mb-2">
        <Icon size={14} />
        <span className="text-[10px] uppercase font-semibold">
          {label}
        </span>
      </div>

      <div className="text-lg font-display font-bold">{value}</div>
    </div>
  );
}

export default function DistrictExplorer() {
  const { t } = useLanguage();

  const [selected, setSelected] = useState(null);
  const [sortKey, setSortKey] = useState("trained");

  const sorted = [...districts].sort(
    (a, b) => b[sortKey] - a[sortKey]
  );

  const tierText = (tier) => {
    const map = {
      "Tier 1": "Tier 1",
      "Tier 2": "Tier 2",
      "Tier 3": "Tier 3",
      Aspirational: "Aspirational",
    };

    return map[tier] || tier;
  };

  const getSignalText = (ret12) => {
    if (ret12 >= 75) {
      return {
        title: t("districts.highRetention"),
        description: t("districts.highRetentionDescription"),
      };
    }

    if (ret12 >= 65) {
      return {
        title: t("districts.moderateRetention"),
        description: t("districts.moderateRetentionDescription"),
      };
    }

    return {
      title: t("districts.supportNeeded"),
      description: t("districts.supportNeededDescription"),
    };
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="section-title mb-1">{t("districts.label")}</div>

      <h1 className="font-display text-3xl font-bold mb-1">
        {t("districts.title")}
      </h1>

      <p className="text-navy-400 dark:text-navy-200 text-sm mb-6">
        {t("districts.description")}
      </p>

      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <DistrictMap height={520} onSelect={setSelected} />
        </div>

        <div className="lg:col-span-2">
          {selected ? (
            <div className="rounded-2xl border border-navy-100 dark:border-navy-700 bg-white dark:bg-navy-900 overflow-hidden">
              {/* Header */}
              <div className="bg-navy-800 text-white p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-navy-200 text-xs mb-1">
                      <MapPin size={13} />
                      Maharashtra
                    </div>

                    <h2 className="font-display text-2xl font-bold">
                      {selected.name}
                    </h2>
                  </div>

                  <span className="px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold">
                    {tierText(selected.tier)}
                  </span>
                </div>
              </div>

              <div className="p-5">
                {/* Main metric */}
                <div className="mb-5">
                  <div className="text-xs uppercase font-semibold text-navy-400">
                    {t("districts.trained")}
                  </div>

                  <div className="text-3xl font-display font-bold mt-1">
                    {selected.trained.toLocaleString()}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <MetricCard
                    icon={TrendingUp}
                    label={t("districts.retention6")}
                    value={`${selected.ret6}%`}
                  />

                  <MetricCard
                    icon={TrendingUp}
                    label={t("districts.retention12")}
                    value={`${selected.ret12}%`}
                  />

                  <MetricCard
                    icon={IndianRupee}
                    label={t("districts.wageMultiplier")}
                    value={`${selected.wageMult}×`}
                  />

                  <MetricCard
                    icon={BriefcaseBusiness}
                    label={t("districts.selfEmployment")}
                    value={`${selected.selfEmp}%`}
                  />
                </div>

                {/* Retention trajectory */}
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs uppercase font-semibold text-navy-400">
                      {t("districts.retentionTrajectory")}
                    </div>

                    <div className="text-xs font-semibold">
                      {selected.ret6 >= selected.ret12 ? (
                        <span className="inline-flex items-center gap-1 text-saffron-600">
                          <ArrowDownRight size={13} />
                          {(selected.ret6 - selected.ret12).toFixed(1)} pts
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-teal-600">
                          <ArrowUpRight size={13} />
                          {(selected.ret12 - selected.ret6).toFixed(1)} pts
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-end gap-3 h-28">
                    <div className="flex-1 h-full flex flex-col justify-end">
                      <div className="text-xs font-bold mb-1">
                        {selected.ret6}%
                      </div>
                      <div
                        className="rounded-t-lg bg-teal-400 w-full"
                        style={{
                          height: `${Math.max(selected.ret6 * 0.75, 15)}%`,
                        }}
                      />
                      <div className="text-[10px] text-navy-400 mt-1">
                        6M
                      </div>
                    </div>

                    <div className="flex-1 h-full flex flex-col justify-end">
                      <div className="text-xs font-bold mb-1">
                        {selected.ret12}%
                      </div>
                      <div
                        className="rounded-t-lg bg-navy-600 w-full"
                        style={{
                          height: `${Math.max(selected.ret12 * 0.75, 15)}%`,
                        }}
                      />
                      <div className="text-[10px] text-navy-400 mt-1">
                        12M
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust index */}
                <div className="mt-5 rounded-xl bg-navy-50 dark:bg-navy-800 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-teal-500" />
                      <span className="text-xs font-semibold">
                        {t("districts.trustIndex")}
                      </span>
                    </div>

                    <span className="font-bold text-sm">
                      {selected.trust}%
                    </span>
                  </div>

                  <div className="h-2 rounded-full bg-navy-200 dark:bg-navy-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-teal-500"
                      style={{ width: `${selected.trust}%` }}
                    />
                  </div>
                </div>

                {/* Signal */}
                <div className="mt-5 border-l-4 border-teal-500 bg-teal-50 dark:bg-teal-900/20 rounded-r-xl p-4">
                  <div className="text-[10px] uppercase font-bold text-teal-700 dark:text-teal-300 mb-1">
                    {t("districts.keySignal")}
                  </div>

                  <div className="font-bold text-sm">
                    {getSignalText(selected.ret12).title}
                  </div>

                  <p className="text-xs text-navy-500 dark:text-navy-200 mt-1">
                    {getSignalText(selected.ret12).description}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="card h-full min-h-[520px] flex items-center justify-center text-center">
              <div className="max-w-xs">
                <div className="w-12 h-12 mx-auto rounded-full bg-navy-50 dark:bg-navy-800 flex items-center justify-center mb-4">
                  <MapPin size={22} className="text-navy-400" />
                </div>

                <div className="font-bold mb-1">
                  {t("districts.title")}
                </div>

                <p className="text-sm text-navy-400 dark:text-navy-200">
                  {t("districts.selectPrompt")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
          <div className="font-bold">{t("districts.performanceTable")}</div>

          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
            className="text-sm border border-navy-200 dark:border-navy-700 dark:bg-navy-800 rounded-lg px-2 py-1"
          >
            <option value="trained">{t("districts.sortTrained")}</option>
            <option value="ret12">{t("districts.sortRetention")}</option>
            <option value="wageMult">{t("districts.sortWage")}</option>
            <option value="selfEmp">{t("districts.sortSelf")}</option>
          </select>
        </div>

        <div className="overflow-x-auto card !p-0">
          <table className="w-full text-sm">
            <thead className="bg-navy-50 dark:bg-navy-800 text-navy-400 dark:text-navy-200 text-xs uppercase">
              <tr>
                <th className="text-left px-4 py-2">
                  {t("districts.district")}
                </th>
                <th className="text-left px-4 py-2">
                  {t("districts.tierHeader")}
                </th>
                <th className="text-right px-4 py-2">
                  {t("districts.trainedHeader")}
                </th>
                <th className="text-right px-4 py-2">
                  {t("districts.ret6Header")}
                </th>
                <th className="text-right px-4 py-2">
                  {t("districts.ret12Header")}
                </th>
                <th className="text-right px-4 py-2">
                  {t("districts.wageHeader")}
                </th>
                <th className="text-right px-4 py-2">
                  {t("districts.selfHeader")}
                </th>
              </tr>
            </thead>

            <tbody>
              {sorted.map((d) => {
                const tier = retentionTier(d.ret12);

                return (
                  <tr
                    key={d.name}
                    onClick={() => setSelected(d)}
                    className="border-t border-navy-100 dark:border-navy-700 cursor-pointer hover:bg-navy-50 dark:hover:bg-navy-800 transition"
                  >
                    <td className="px-4 py-2 font-medium">{d.name}</td>

                    <td className="px-4 py-2 text-navy-400">
                      {d.tier}
                    </td>

                    <td className="px-4 py-2 text-right">
                      {d.trained.toLocaleString()}
                    </td>

                    <td className="px-4 py-2 text-right">
                      {d.ret6}%
                    </td>

                    <td className="px-4 py-2 text-right">
                      {d.ret12}%
                    </td>

                    <td className="px-4 py-2 text-right">
                      {d.wageMult}x
                    </td>

                    <td className="px-4 py-2 text-right">
                      {d.selfEmp}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
