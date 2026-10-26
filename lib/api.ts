import type { Stage } from "./stages";
import type { Candidate } from "./types";

export async function fetchCandidates(): Promise<Candidate[]> {
  const res = await fetch("/api/candidates");
  if (!res.ok) {
    throw new Error("Failed to load candidates");
  }
  return res.json();
}

export async function saveStage(id: number, stage: Stage): Promise<Candidate> {
  const res = await fetch(`/api/candidates/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ stage }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.error ?? "Failed to update stage");
  }
  return res.json();
}
