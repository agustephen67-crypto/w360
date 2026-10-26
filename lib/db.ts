import Database from "better-sqlite3";
import path from "node:path";
import { seedCandidates } from "./seed";

const db = new Database(path.join(process.cwd(), "data.db"));

db.exec(`
  CREATE TABLE IF NOT EXISTS candidates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    role TEXT NOT NULL,
    stage TEXT NOT NULL CHECK (stage IN ('Sourced', 'Screening', 'Interview', 'Hired'))
  )
`);

const { count } = db.prepare("SELECT COUNT(*) AS count FROM candidates").get() as { count: number };

if (count === 0) {
  const insert = db.prepare("INSERT INTO candidates (name, role, stage) VALUES (?, ?, ?)");
  for (const candidate of seedCandidates) {
    insert.run(candidate.name, candidate.role, candidate.stage);
  }
}

export default db;
