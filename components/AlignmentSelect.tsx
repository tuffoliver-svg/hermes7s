"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SName } from "@/data/7sData";

interface AlignmentSelectProps {
  sList: readonly SName[];
  currentS: SName;
  selectedS: SName | null;
  onSelect: (s: SName) => void;
}

export function AlignmentSelect({
  sList,
  currentS,
  selectedS,
  onSelect,
}: AlignmentSelectProps) {
  return (
    <div className="space-y-3">
      <label className="text-sm font-medium text-foreground">
        Compare with another S
      </label>
      <Select
        value={selectedS || undefined}
        onValueChange={(value) => onSelect(value as SName)}
      >
        <SelectTrigger className="w-full bg-white border-border hover:border-[hsl(var(--hermes-orange))] transition-colors">
          <SelectValue placeholder="Select an S to compare..." />
        </SelectTrigger>
        <SelectContent side="bottom" align="start">
          {sList
            .filter((s) => s !== currentS)
            .map((s) => (
              <SelectItem key={s} value={s}>
                {s}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
}
