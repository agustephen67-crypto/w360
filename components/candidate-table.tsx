import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Stage } from "@/lib/stages";
import type { Candidate } from "@/lib/types";
import { CandidateAvatar } from "./candidate-avatar";
import { StageBadge } from "./stage-badge";
import { StageSelect } from "./stage-select";

type CandidateTableProps = {
  candidates: Candidate[];
  savingId: number | null;
  onStageChange: (id: number, stage: Stage) => void;
};

export function CandidateTable({ candidates, savingId, onStageChange }: CandidateTableProps) {
  return (
    <div className="rounded-xl border bg-card">
      <Table>
        <TableHeader>
          <TableRow className="text-xs uppercase">
            <TableHead className="px-5">Candidate</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Stage</TableHead>
            <TableHead>Update stage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {candidates.map((candidate) => (
            <TableRow key={candidate.id}>
              <TableCell className="px-5 py-3">
                <div className="flex items-center gap-3">
                  <CandidateAvatar name={candidate.name} />
                  <span className="font-medium">{candidate.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">{candidate.role}</TableCell>
              <TableCell>
                <StageBadge stage={candidate.stage} />
              </TableCell>
              <TableCell>
                <StageSelect
                  value={candidate.stage}
                  label={`Change stage for ${candidate.name}`}
                  disabled={savingId === candidate.id}
                  onChange={(stage) => onStageChange(candidate.id, stage)}
                  className="w-36"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
