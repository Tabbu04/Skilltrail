// SYNTHETIC DEMO DATA for the Fraud Detector and Verification flows.
export const verifications = [
  { id: "T-10231", name: "R. Kadam", course: "Electrician & Solar Hybrid", employer: "Sunrise Electricals", employerPhone: "+91 98xxxxxx12", status: "Verified", signals: ["EPFO match", "Employer confirmed"], risk: "Low" },
  { id: "T-10232", name: "A. Shinde", course: "Retail Banking Associate", employer: "Om Traders", employerPhone: "+91 90xxxxxx45", status: "Flagged", signals: ["Employer phone reused across 14 trainees", "No follow-up activity after day 1"], risk: "High" },
  { id: "T-10233", name: "S. Pawar", course: "CNC 5-Axis Milling", employer: "Precision Tools Pvt Ltd", employerPhone: "+91 99xxxxxx77", status: "Verified", signals: ["EPFO match", "3-month wage confirmed"], risk: "Low" },
  { id: "T-10234", name: "M. Jadhav", course: "Garment Fabrication", employer: "Om Traders", employerPhone: "+91 90xxxxxx45", status: "Flagged", signals: ["Employer phone reused across 14 trainees", "Joining-to-verification gap under 2 hours"], risk: "High" },
  { id: "T-10235", name: "P. Deshmukh", course: "Solar PV Installation", employer: "Self-employed", employerPhone: "—", status: "Peer-verified", signals: ["2 batch-mates confirmed", "Udyam registration pending"], risk: "Medium" },
];

export const wageBySector = [
  { sector: "EV / Auto", stipend: 9000, month12: 26500, month24: 31200 },
  { sector: "IT-ITeS", stipend: 8500, month12: 22800, month24: 27500 },
  { sector: "Textile", stipend: 7000, month12: 15400, month24: 17800 },
  { sector: "Healthcare", stipend: 8200, month12: 19800, month24: 23600 },
  { sector: "Construction", stipend: 7800, month12: 17200, month24: 20100 },
  { sector: "Retail", stipend: 7500, month12: 16900, month24: 19500 },
];

export const retentionCurve = [
  { month: "3M", retention: 92 },
  { month: "6M", retention: 78 },
  { month: "12M", retention: 71 },
  { month: "18M", retention: 66 },
  { month: "24M", retention: 61 },
  { month: "36M", retention: 55 },
];
