import { Card } from "@/components/ui/card";
import { STAGES } from "@/lib/stages";
import type { Candidate } from "@/lib/types";
import { StageDot } from "./stage-badge";

export function StageSummary({ candidates }: { candidates: Candidate[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {STAGES.map((stage) => (
        <Card key={stage} className="gap-2 p-4 shadow-none">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <StageDot stage={stage} />
            {stage}
          </div>
          <p className="text-2xl font-bold">
            {candidates.filter((candidate) => candidate.stage === stage).length}
          </p>
        </Card>
      ))}
    </div>
  );
}
