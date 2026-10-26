import type { Candidate } from "./types";

export const seedCandidates: Omit<Candidate, "id">[] = [
  { name: "Agu Jonas", role: "Senior Software Engineer", stage: "Interview" },
  { name: "Daniel Mensah", role: "Product Designer", stage: "Screening" },
  { name: "Zainab Bello", role: "Backend Engineer", stage: "Sourced" },
  { name: "Tunde Alabi", role: "DevOps Engineer", stage: "Hired" },
  { name: "Chidi Eze", role: "Data Analyst", stage: "Screening" },
  { name: "Fatima Sule", role: "Mobile Engineer", stage: "Sourced" },
  { name: "Kwame Asante", role: "Engineering Manager", stage: "Interview" },
];
