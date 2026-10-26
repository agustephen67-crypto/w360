"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { fetchCandidates, saveStage } from "@/lib/api";
import type { Stage } from "@/lib/stages";
import type { Candidate } from "@/lib/types";
import { CandidateCards } from "./candidate-cards";
import { CandidateTable } from "./candidate-table";
import { CandidateToolbar, type StageFilter } from "./candidate-toolbar";
import { EmptyState, ErrorState, LoadingState } from "./list-states";
import { StageSummary } from "./stage-summary";

type Status = "loading" | "error" | "ready";

export function CandidateDashboard() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [search, setSearch] = useState("");
  const [stageFilter, setStageFilter] = useState<StageFilter>("All");
  const [savingId, setSavingId] = useState<number | null>(null);

  const loadCandidates = useCallback(() => {
    fetchCandidates()
      .then((data) => {
        setCandidates(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  useEffect(() => {
    loadCandidates();
  }, [loadCandidates]);

  function handleRetry() {
    setStatus("loading");
    loadCandidates();
  }

  async function handleStageChange(id: number, stage: Stage) {
    setSavingId(id);
    try {
      const updated = await saveStage(id, stage);
      setCandidates((current) => current.map((c) => (c.id === id ? updated : c)));
      toast.success(`${updated.name} moved to ${updated.stage}`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to update stage");
    } finally {
      setSavingId(null);
    }
  }

  const query = search.trim().toLowerCase();
  const visibleCandidates = candidates.filter((candidate) => {
    const matchesStage = stageFilter === "All" || candidate.stage === stageFilter;
    const matchesName = candidate.name.toLowerCase().includes(query);
    return matchesStage && matchesName;
  });

  function renderResults() {
    if (status === "loading") return <LoadingState />;
    if (status === "error") return <ErrorState onRetry={handleRetry} />;
    if (candidates.length === 0) {
      return <EmptyState title="No candidates yet" description="There are no candidates in the pipeline yet." />;
    }
    if (visibleCandidates.length === 0) {
      return <EmptyState title="No matches" description="No candidates match your search." />;
    }

    return (
      <>
        <div className="hidden md:block">
          <CandidateTable candidates={visibleCandidates} savingId={savingId} onStageChange={handleStageChange} />
        </div>
        <div className="md:hidden">
          <CandidateCards candidates={visibleCandidates} savingId={savingId} onStageChange={handleStageChange} />
        </div>
        <p className="text-sm text-muted-foreground">
          Showing {visibleCandidates.length} of {candidates.length} candidates
        </p>
      </>
    );
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-6 md:py-10">
      <header>
        <h1 className="text-2xl font-bold tracking-tight">Talent Pipeline</h1>
        <p className="text-sm text-muted-foreground">Track candidates through the hiring pipeline.</p>
      </header>

      {status === "ready" && <StageSummary candidates={candidates} />}

      <CandidateToolbar
        search={search}
        stageFilter={stageFilter}
        onSearchChange={setSearch}
        onStageFilterChange={setStageFilter}
      />

      {renderResults()}
    </div>
  );
}
