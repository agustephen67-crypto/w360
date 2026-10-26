import { TriangleAlertIcon, UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function LoadingState() {
  return (
    <div className="rounded-xl border bg-card" aria-busy="true" aria-label="Loading candidates">
      {[1, 2, 3, 4].map((row) => (
        <div key={row} className="flex items-center gap-4 border-b px-5 py-4 last:border-b-0">
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-3 w-32" />
          <Skeleton className="hidden h-3 w-40 md:block" />
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="ml-auto hidden h-8 w-36 md:block" />
        </div>
      ))}
    </div>
  );
}

export function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border bg-card px-5 py-10 text-center">
      <div className="mb-1 flex size-11 items-center justify-center rounded-full bg-red-100 text-red-700">
        <TriangleAlertIcon className="size-5" />
      </div>
      <p className="font-semibold">Couldn&apos;t load candidates</p>
      <p className="max-w-sm text-sm text-muted-foreground">
        Something went wrong reaching the server. Check your connection and try again.
      </p>
      <Button variant="outline" className="mt-2" onClick={onRetry}>
        Retry
      </Button>
    </div>
  );
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border bg-card px-5 py-10 text-center">
      <div className="mb-1 flex size-11 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <UsersIcon className="size-5" />
      </div>
      <p className="font-semibold">{title}</p>
      <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
