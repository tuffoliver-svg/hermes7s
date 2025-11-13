"use client";

import Link from "next/link";
import { SName } from "@/data/7sData";

interface CircularNodeProps {
  name: SName;
  score: number;
  isCenter?: boolean;
}

export function CircularNode({ name, score, isCenter = false }: CircularNodeProps) {
  const sizeClass = isCenter
    ? "w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
    : "w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28";

  const textSizeClass = isCenter
    ? "text-[0.65rem] md:text-xs lg:text-sm"
    : "text-[0.55rem] md:text-[0.65rem] lg:text-xs";

  return (
    <Link href={`/s/${encodeURIComponent(name)}`}>
      <div
        className={`${sizeClass} rounded-full bg-[hsl(var(--hermes-orange))] text-white
        flex flex-col items-center justify-center cursor-pointer
        transition-all duration-300 hover:scale-110 hover:shadow-2xl
        border-4 border-white shadow-lg`}
      >
        <div className="text-center px-1.5 md:px-2 w-full overflow-hidden">
          <div className={`font-serif font-bold ${textSizeClass} mb-0.5 leading-tight uppercase break-words`}>
            {name}
          </div>
          <div className="text-[0.6rem] md:text-xs opacity-90 font-semibold">
            {score}/10
          </div>
        </div>
      </div>
    </Link>
  );
}
