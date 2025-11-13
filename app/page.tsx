import Image from "next/image";
import { CircularNode } from "@/components/CircularNode";
import { Badge } from "@/components/ui/badge";
import { singleSData, calculateOverallAlignment, SName } from "@/data/7sData";

const nodePositions: { name: SName; className: string }[] = [
  { name: "Strategy", className: "top-[3%] left-1/2 -translate-x-1/2" },
  { name: "Structure", className: "top-[18%] right-[6%]" },
  { name: "Systems", className: "bottom-[18%] right-[6%]" },
  { name: "Staff", className: "bottom-[3%] left-1/2 -translate-x-1/2" },
  { name: "Style", className: "bottom-[18%] left-[6%]" },
  { name: "Skills", className: "top-[18%] left-[6%]" },
];

export default function Home() {
  const overallScore = calculateOverallAlignment();
  const centerS = "Shared Values";

  return (
    <main className="h-screen w-full bg-[hsl(var(--hermes-cream))]">
      <div className="mx-auto flex h-full w-full max-w-[1600px] px-4 py-1 sm:px-6 sm:py-2 lg:px-12 lg:py-3">
        <div className="flex flex-1 flex-col gap-4 min-h-0 lg:grid lg:grid-cols-[minmax(300px,420px)_1fr] lg:gap-6 xl:gap-8 lg:items-center">
          <section className="flex flex-col justify-center gap-3 lg:gap-4">
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground mb-0.5">
                  Insight Dashboard
                </p>
                <h1 className="text-xl font-serif font-bold uppercase tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                  Hermès McKinsey 7S Explorer
                </h1>
                <p className="text-[0.65rem] text-muted-foreground mt-1">
                  Created by Ollie Tuff
                </p>
              </div>
              <p className="text-[0.7rem] leading-relaxed text-muted-foreground sm:text-xs">
                Explore how each element of the McKinsey 7S framework works together
                inside Hermès. Track alignment in real time and drill into the
                relationships that keep the brand cohesive.
              </p>
            </div>
            <div className="inline-flex flex-wrap items-center gap-2.5 rounded-2xl border border-border/70 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <span className="text-[0.6rem] font-medium uppercase tracking-wide text-muted-foreground">
                Overall Alignment Score
              </span>
              <Badge className="bg-[hsl(var(--hermes-orange))] px-2.5 py-0.5 text-xs font-bold text-white hover:bg-[hsl(var(--hermes-orange))]/90">
                {overallScore}/10
              </Badge>
            </div>
          </section>

          <section className="flex-1 min-h-0 rounded-[2rem] border border-border/60 bg-white/80 p-3 shadow-xl backdrop-blur-sm sm:p-4 lg:p-6">
            <div className="relative h-full w-full flex items-center justify-center">
              <div className="relative w-full h-full max-w-[600px] max-h-[600px]" style={{ aspectRatio: '1' }}>
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full text-[hsl(var(--hermes-orange))]"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g stroke="currentColor" strokeWidth="0.35" opacity="0.45">
                    <line x1="50" y1="50" x2="50" y2="10" />
                    <line x1="50" y1="50" x2="83" y2="25" />
                    <line x1="50" y1="50" x2="83" y2="75" />
                    <line x1="50" y1="50" x2="50" y2="90" />
                    <line x1="50" y1="50" x2="17" y2="75" />
                    <line x1="50" y1="50" x2="17" y2="25" />
                    <line x1="50" y1="10" x2="83" y2="25" />
                    <line x1="83" y1="25" x2="83" y2="75" />
                    <line x1="83" y1="75" x2="50" y2="90" />
                    <line x1="50" y1="90" x2="17" y2="75" />
                    <line x1="17" y1="75" x2="17" y2="25" />
                    <line x1="17" y1="25" x2="50" y2="10" />
                    <line x1="50" y1="10" x2="50" y2="90" />
                    <line x1="17" y1="25" x2="83" y2="75" />
                    <line x1="83" y1="25" x2="17" y2="75" />
                  </g>
                </svg>

                <div className="relative h-full w-full">
                  <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                    <CircularNode
                      name={centerS}
                      score={singleSData[centerS].score}
                      isCenter
                    />
                  </div>

                  {nodePositions.map(({ name, className }) => (
                    <div key={name} className={`absolute z-10 ${className}`}>
                      <CircularNode name={name} score={singleSData[name].score} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
