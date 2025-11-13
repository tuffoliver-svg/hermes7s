"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface AlignmentResultProps {
  s1Name: string;
  s2Name: string;
  alignmentExplanation: string;
  alignmentScore: number;
  className?: string;
}

export function AlignmentResult({
  s1Name,
  s2Name,
  alignmentExplanation,
  alignmentScore,
  className,
}: AlignmentResultProps) {
  return (
    <Card
      className={cn(
        "bg-white border-[hsl(var(--hermes-orange))]/30 shadow-lg",
        className,
      )}
    >
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <CardTitle className="text-lg font-serif uppercase">
            <span className="text-[hsl(var(--hermes-orange))]">{s1Name}</span>
            <span className="mx-2 text-muted-foreground">↔</span>
            <span className="text-[hsl(var(--hermes-orange))]">{s2Name}</span>
          </CardTitle>
          <Badge className="bg-[hsl(var(--hermes-orange))] text-white hover:bg-[hsl(var(--hermes-orange))]/90 text-sm font-semibold px-3 py-1">
            {alignmentScore}/10
          </Badge>
        </div>
        <Progress value={alignmentScore * 10} className="mt-3 h-2" />
      </CardHeader>
      <Separator />
      <CardContent className="pt-6">
        <p className="text-sm text-foreground leading-relaxed">
          {alignmentExplanation}
        </p>
      </CardContent>
    </Card>
  );
}
