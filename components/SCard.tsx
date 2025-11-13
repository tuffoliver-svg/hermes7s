"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SName } from "@/data/7sData";

interface SCardProps {
  name: SName;
  score: number;
  summary: string;
}

export function SCard({ name, score, summary }: SCardProps) {
  return (
    <Link href={`/s/${encodeURIComponent(name)}`} className="block group">
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-[hsl(var(--hermes-orange))] cursor-pointer bg-white">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="text-xl font-serif text-foreground group-hover:text-[hsl(var(--hermes-orange))] transition-colors">
              {name}
            </CardTitle>
            <Badge
              variant="secondary"
              className="bg-[hsl(var(--hermes-orange))] text-white hover:bg-[hsl(var(--hermes-orange))]/90 text-sm font-semibold px-3 py-1"
            >
              {score}/10
            </Badge>
          </div>
          <Progress value={score * 10} className="h-1.5 mt-3" />
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {summary}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
