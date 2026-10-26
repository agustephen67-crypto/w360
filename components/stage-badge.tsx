import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Stage } from "@/lib/stages";

export const stageColors: Record<Stage, { badge: string; dot: string }> = {
  Sourced: { badge: "bg-slate-100 text-slate-700", dot: "bg-slate-500" },
  Screening: { badge: "bg-amber-100 text-amber-800", dot: "bg-amber-500" },
  Interview: { badge: "bg-blue-100 text-blue-800", dot: "bg-blue-600" },
  Hired: { badge: "bg-green-100 text-green-800", dot: "bg-green-600" },
};

export function StageBadge({ stage }: { stage: Stage }) {
  return <Badge className={stageColors[stage].badge}>{stage}</Badge>;
}

export function StageDot({ stage }: { stage: Stage }) {
  return <span className={cn("size-2 rounded-full", stageColors[stage].dot)} />;
}
