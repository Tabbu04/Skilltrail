// SYNTHETIC DEMO DATA — coordinates are real district locations,
// outcome figures are illustrative placeholders for the SIH prototype.
export const districts = [
  { name: "Pune", lat: 18.5204, lng: 73.8567, trained: 28450, ret6: 84.6, ret12: 79.2, wageMult: 1.89, selfEmp: 14.2, trust: 96.4, tier: "Tier 1" },
  { name: "Mumbai City", lat: 18.9388, lng: 72.8354, trained: 22100, ret6: 83.2, ret12: 77.4, wageMult: 1.9, selfEmp: 11.5, trust: 96.1, tier: "Tier 1" },
  { name: "Nagpur", lat: 21.1458, lng: 79.0882, trained: 16400, ret6: 77.8, ret12: 70.4, wageMult: 1.75, selfEmp: 19.5, trust: 93.1, tier: "Tier 2" },
  { name: "Nashik", lat: 19.9975, lng: 73.7898, trained: 15200, ret6: 79.4, ret12: 73.8, wageMult: 1.83, selfEmp: 16.4, trust: 94.7, tier: "Tier 2" },
  { name: "Chhatrapati Sambhajinagar", lat: 19.8762, lng: 75.3433, trained: 14100, ret6: 78.1, ret12: 71.9, wageMult: 1.81, selfEmp: 18.2, trust: 92.9, tier: "Tier 2" },
  { name: "Kolhapur", lat: 16.705, lng: 74.2433, trained: 11800, ret6: 79.8, ret12: 74.2, wageMult: 1.82, selfEmp: 21.0, trust: 93.8, tier: "Tier 2" },
  { name: "Solapur", lat: 17.6599, lng: 75.9064, trained: 9600, ret6: 72.4, ret12: 65.8, wageMult: 1.71, selfEmp: 24.5, trust: 91.2, tier: "Tier 2" },
  { name: "Amravati", lat: 20.9374, lng: 77.7796, trained: 8400, ret6: 71.8, ret12: 64.2, wageMult: 1.7, selfEmp: 22.8, trust: 90.5, tier: "Tier 3" },
  { name: "Thane", lat: 19.2183, lng: 72.9781, trained: 18900, ret6: 81.5, ret12: 75.8, wageMult: 1.86, selfEmp: 13.9, trust: 95.2, tier: "Tier 1" },
  { name: "Satara", lat: 17.6805, lng: 74.0183, trained: 9200, ret6: 78.5, ret12: 72.8, wageMult: 1.79, selfEmp: 20.2, trust: 93.1, tier: "Tier 2" },
  { name: "Jalgaon", lat: 21.0077, lng: 75.5626, trained: 10500, ret6: 74.2, ret12: 67.8, wageMult: 1.79, selfEmp: 21.5, trust: 91.8, tier: "Tier 2" },
  { name: "Nanded", lat: 19.1383, lng: 77.321, trained: 7900, ret6: 70.5, ret12: 62.9, wageMult: 1.68, selfEmp: 23.4, trust: 89.8, tier: "Tier 3" },
  { name: "Ratnagiri", lat: 16.9902, lng: 73.312, trained: 5400, ret6: 69.2, ret12: 62.5, wageMult: 1.67, selfEmp: 24.8, trust: 89.5, tier: "Tier 3" },
  { name: "Gadchiroli", lat: 20.1809, lng: 80.0021, trained: 4200, ret6: 64.5, ret12: 57.8, wageMult: 1.64, selfEmp: 31.2, trust: 87.4, tier: "Aspirational" },
  { name: "Nandurbar", lat: 21.3667, lng: 74.25, trained: 3800, ret6: 63.2, ret12: 56.4, wageMult: 1.65, selfEmp: 33.0, trust: 86.9, tier: "Aspirational" },
];

export function retentionTier(ret12) {
  if (ret12 >= 75) return { label: "High retention", color: "#1c9d6b" };
  if (ret12 >= 65) return { label: "Moderate", color: "#f2872e" };
  return { label: "High churn / needs support", color: "#d64545" };
}

export const stateSummary = {
  totalTrained: 165950,
  certifiedPct: 91.0,
  ret6: 78.1,
  ret12: 71.4,
  wageStart: 14500,
  wageNow: 26800,
  wageMult: 1.85,
  trustIndex: 93.6,
  selfEmpPct: 19.8,
};
