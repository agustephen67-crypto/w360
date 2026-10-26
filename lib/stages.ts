export const STAGES = ["Sourced", "Screening", "Interview", "Hired"] as const;

export type Stage = (typeof STAGES)[number];

export function isStage(value: unknown): value is Stage {
  return STAGES.includes(value as Stage);
}
