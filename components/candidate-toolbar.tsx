import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { STAGES, type Stage } from "@/lib/stages";

export type StageFilter = Stage | "All";

const FILTERS: StageFilter[] = ["All", ...STAGES];

type CandidateToolbarProps = {
  search: string;
  stageFilter: StageFilter;
  onSearchChange: (value: string) => void;
  onStageFilterChange: (filter: StageFilter) => void;
};

export function CandidateToolbar({
  search,
  stageFilter,
  onSearchChange,
  onStageFilterChange,
}: CandidateToolbarProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <div className="relative md:w-80">
        <SearchIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name"
          aria-label="Search candidates by name"
          className="bg-card pl-9"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
        {FILTERS.map((filter) => (
          <Button
            key={filter}
            size="sm"
            variant={stageFilter === filter ? "default" : "outline"}
            aria-pressed={stageFilter === filter}
            onClick={() => onStageFilterChange(filter)}
            className="rounded-full"
          >
            {filter}
          </Button>
        ))}
      </div>
    </div>
  );
}
