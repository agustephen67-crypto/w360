import { updateCandidateStage } from "@/lib/candidates";
import { isStage, STAGES } from "@/lib/stages";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const candidateId = Number(id);

  if (!Number.isInteger(candidateId)) {
    return Response.json({ error: "Invalid candidate id" }, { status: 400 });
  }

  const body = await request.json().catch(() => null);

  if (!isStage(body?.stage)) {
    return Response.json({ error: `Stage must be one of: ${STAGES.join(", ")}` }, { status: 400 });
  }

  const candidate = updateCandidateStage(candidateId, body.stage);

  if (!candidate) {
    return Response.json({ error: "Candidate not found" }, { status: 404 });
  }

  return Response.json(candidate);
}
