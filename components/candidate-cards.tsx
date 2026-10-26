import { Card } from "@/components/ui/card";
import type { Stage } from "@/lib/stages";
import type { Candidate } from "@/lib/types";
import { CandidateAvatar } from "./candidate-avatar";
import { StageBadge } from "./stage-badge";
import { StageSelect } from "./stage-select";

type CandidateCardsProps = {
  candidates: Candidate[];
  savingId: number | null;
  onStageChange: (id: number, stage: Stage) => void;
};

export function CandidateCards({ candidates, savingId, onStageChange }: CandidateCardsProps) {
  return (
    <div className="flex flex-col gap-3">
      {candidates.map((candidate) => (
        <Card key={candidate.id} className="gap-3 p-4 shadow-none">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <CandidateAvatar name={candidate.name} />
              <div className="min-w-0">
                <p className="truncate font-semibold">{candidate.name}</p>
                <p className="truncate text-sm text-muted-foreground">{candidate.role}</p>
              </div>
            </div>
            <StageBadge stage={candidate.stage} />
          </div>
          <StageSelect
            value={candidate.stage}
            label={`Change stage for ${candidate.name}`}
            disabled={savingId === candidate.id}
            onChange={(stage) => onStageChange(candidate.id, stage)}
            className="w-full"
          />
        </Card>
      ))}
    </div>
  );
}
