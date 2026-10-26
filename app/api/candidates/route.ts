import { connection } from "next/server";
import { getCandidates } from "@/lib/candidates";

export async function GET() {
  await connection();
  return Response.json(getCandidates());
}
