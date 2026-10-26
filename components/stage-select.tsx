import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { STAGES, type Stage } from "@/lib/stages";

type StageSelectProps = {
  value: Stage;
  label: string;
  disabled?: boolean;
  className?: string;
  onChange: (stage: Stage) => void;
};

export function StageSelect({ value, label, disabled, className, onChange }: StageSelectProps) {
  return (
    <Select value={value} disabled={disabled} onValueChange={(stage) => onChange(stage as Stage)}>
      <SelectTrigger size="sm" aria-label={label} className={className}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {STAGES.map((stage) => (
          <SelectItem key={stage} value={stage}>
            {stage}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
