import db from "./db";
import type { Stage } from "./stages";
import type { Candidate } from "./types";

export function getCandidates() {
  return db.prepare("SELECT id, name, role, stage FROM candidates ORDER BY id").all() as Candidate[];
}

export function updateCandidateStage(id: number, stage: Stage) {
  return db
    .prepare("UPDATE candidates SET stage = ? WHERE id = ? RETURNING id, name, role, stage")
    .get(stage, id) as Candidate | undefined;
}
