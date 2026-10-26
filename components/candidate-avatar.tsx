import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export function CandidateAvatar({ name }: { name: string }) {
  return (
    <Avatar>
      <AvatarFallback className="text-xs font-semibold">{getInitials(name)}</AvatarFallback>
    </Avatar>
  );
}
