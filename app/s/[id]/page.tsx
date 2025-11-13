"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { AlignmentSelect } from "@/components/AlignmentSelect";
import { AlignmentResult } from "@/components/AlignmentResult";
import { sList, singleSData, getAlignment, type SName } from "@/data/7sData";

function getScoreMeta(score: number) {
  if (score >= 9) {
    return {
      label: "Iconic Strength",
      tone: "Heritage advantage is compounding. Protect scarcity and ritual.",
      focus: "Preserve craftsmanship edge",
      confidence: "Very high",
      momentum: "Accelerating",
    };
  }
  if (score >= 8) {
    return {
      label: "High Alignment",
      tone: "Strong cohesion with light modernization needs.",
      focus: "Sustain momentum",
      confidence: "High",
      momentum: "Stable",
    };
  }
  if (score >= 7) {
    return {
      label: "Balanced",
      tone: "Healthy core with emerging friction to unblock.",
      focus: "Targeted improvements",
      confidence: "Moderate",
      momentum: "Steady",
    };
  }
  return {
    label: "Needs Attention",
    tone: "Misalignments are visible. Direct investment required.",
    focus: "Stabilize foundations",
    confidence: "Low",
    momentum: "Fragile",
  };
}

export default function SPage() {
  const params = useParams();
  const sName = decodeURIComponent(params.id as string) as SName;
  const [selectedS, setSelectedS] = useState<SName | null>(null);

  if (!sList.includes(sName)) {
    return (
      <div className="min-h-screen bg-[hsl(var(--hermes-cream))] flex items-center justify-center px-6 text-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-muted-foreground mb-2">
            Hermès 7S
          </p>
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4 uppercase">
            S not found
          </h1>
          <Link
            href="/"
            className="text-[hsl(var(--hermes-orange))] font-medium hover:underline"
          >
            Return to the dashboard
          </Link>
        </div>
      </div>
    );
  }

  const data = singleSData[sName];
  const alignment = selectedS ? getAlignment(sName, selectedS) : null;
  const scoreMeta = getScoreMeta(data.score);
  const healthSignals = [
    { label: "Health State", value: scoreMeta.label },
    { label: "Confidence", value: scoreMeta.confidence },
    { label: "Focus", value: scoreMeta.focus },
  ];

  return (
    <main className="min-h-screen bg-[hsl(var(--hermes-cream))]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 lg:px-0">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[hsl(var(--hermes-orange))] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to overview
        </Link>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          <section className="relative overflow-hidden rounded-[2.5rem] border border-border/70 bg-white/90 p-8 shadow-xl">
            <span className="absolute right-8 top-8 block h-32 w-32 rounded-full bg-[hsl(var(--hermes-orange))]/20 blur-3xl" />
            <span className="absolute -left-12 -bottom-12 block h-40 w-40 rounded-full bg-[hsl(var(--hermes-orange))]/15 blur-3xl" />

            <div className="relative flex h-full flex-col items-center justify-between py-4">
              <div className="space-y-2 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                  Hermès 7S
                </p>
                <h1 className="text-4xl font-serif font-bold uppercase leading-tight text-foreground">
                  {sName}
                </h1>
              </div>

              <p className="text-base text-center text-muted-foreground leading-relaxed max-w-[280px]">
                {scoreMeta.tone}
              </p>

              <div className="flex aspect-square w-32 flex-col items-center justify-center rounded-full border-4 border-white bg-[hsl(var(--hermes-orange))] text-white shadow-2xl p-2">
                <span className="text-[0.6rem] uppercase tracking-[0.2em] opacity-80">
                  Score
                </span>
                <span className="text-3xl font-serif font-bold leading-tight">
                  {data.score}
                </span>
                <span className="text-xs font-semibold opacity-80">/10</span>
              </div>
            </div>
          </section>

          <Card className="rounded-[2rem] border-border/70 bg-white/95 shadow-lg overflow-hidden flex flex-col max-h-[600px]">
            <CardHeader className="space-y-4 flex-shrink-0">
              <CardTitle className="text-3xl font-serif font-bold text-foreground uppercase">
                Narrative
              </CardTitle>
              <Separator />
            </CardHeader>
            <CardContent className="space-y-6 overflow-y-auto flex-1">
              <p className="text-base leading-relaxed text-foreground">
                {data.description}
              </p>
            </CardContent>
          </Card>
        </div>

        <section className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="rounded-[2rem] border border-border/70 bg-white/95 p-6 shadow-lg">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                Cross-element view
              </p>
              <h2 className="text-2xl font-serif font-semibold uppercase text-foreground">
                Alignment Analysis
              </h2>
              <p className="text-sm text-muted-foreground">
                Select another S to understand how {sName.toLowerCase()} interacts across
                the operating model.
              </p>
            </div>

            <div className="mt-6">
              <AlignmentSelect
                sList={sList}
                currentS={sName}
                selectedS={selectedS}
                onSelect={setSelectedS}
              />
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-[hsl(var(--hermes-orange))]/40 bg-[hsl(var(--hermes-orange))]/5 p-4 text-sm leading-relaxed text-foreground">
              {scoreMeta.tone}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-white/95 shadow-lg min-h-[400px] max-h-[800px] overflow-hidden flex flex-col">
            {alignment && selectedS ? (
              <div className="h-full overflow-y-auto p-4">
                <AlignmentResult
                  s1Name={sName}
                  s2Name={selectedS}
                  alignmentExplanation={alignment.alignmentExplanation}
                  alignmentScore={alignment.alignmentScore}
                  className="border-none bg-transparent shadow-none"
                />
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-sm text-muted-foreground p-4">
                <span className="text-4xl">↔</span>
                <p className="max-w-sm text-base font-medium text-foreground">
                  Choose another element to see the interplay narrative for {sName}.
                </p>
                <p>We will display score and context once you select a comparison.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
