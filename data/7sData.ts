export const sList = [
  "Strategy",
  "Structure",
  "Systems",
  "Shared Values",
  "Style",
  "Staff",
  "Skills",
] as const;

export type SName = (typeof sList)[number];

export const singleSData: Record<
  SName,
  {
    description: string;
    score: number;
  }
> = {
  Strategy: {
    description:
      "Hermès pursues a luxury differentiation strategy built on scarcity, craftsmanship, and cultural brand heritage rather than scale efficiency or trend-following. The strategic focus emphasizes timelessness and controlled growth, protecting brand equity over market expansion.",
    score: 9,
  },
  Structure: {
    description:
      "Hermès maintains a decentralized production structure with independent artisan ateliers, but strategic decisions are centralized. This hybrid model preserves creative integrity and consistent quality while enabling organizational agility.",
    score: 8,
  },
  Systems: {
    description:
      "Operations systems prioritize quality assurance and artisanal craftsmanship. Supply chain intentionally limits throughput to maintain scarcity. Digital systems are modernizing slowly, with selective technology adoption to preserve brand tradition.",
    score: 7,
  },
  "Shared Values": {
    description:
      "Core values: heritage, craftsmanship, patience, long-term thinking, and cultural symbolism. Hermès employees internalize the idea of *'making things with soul'*. These values deeply align across leadership, artisans, and customer experience.\n\nHermès' shared values represent the philosophical and cultural core that unites all other elements of the organization. Unlike many luxury brands that emphasize aspiration or status, Hermès centers on authenticity, timelessness, and the preservation of artisanal traditions. These values are not simply marketing constructs but are embedded in every operational decision, from hiring practices to product design to retail experience.\n\nThe concept of 'patient luxury' permeates the organization. Where competitors chase trends and quarterly targets, Hermès views itself as a steward of craft traditions spanning centuries. This manifests in multi-year artisan training programs, limited production runs that create natural scarcity, and a refusal to discount or dilute brand equity for short-term gains.\n\nCraftsmanship is revered as both a technical skill and a spiritual practice. Artisans are given significant autonomy and creative input, with many pieces bearing the craftsperson's unique signature. This respect for human craft creates deep employee loyalty and pride, translating into exceptionally low turnover rates for skilled workers.\n\nThe family-owned structure reinforces long-term thinking. Without pressure from public shareholders, Hermès can prioritize brand heritage over growth metrics. Strategic decisions are evaluated through the lens of 'will this honor our legacy in 50 years?' rather than 'will this maximize next quarter's revenue?'\n\nThese shared values create powerful organizational alignment. When every element—from supply chain decisions to marketing campaigns—flows from the same philosophical foundation, the result is remarkable strategic coherence. However, this value system also creates constraints: rapid scaling is antithetical to craft values, digital transformation must be carefully balanced against tradition, and the premium positioning limits addressable market size.",
    score: 10,
  },
  Style: {
    description:
      "The leadership and cultural style is understated, confident, and heritage-driven. Branding is subtle and never loud, with messaging focused on excellence rather than aspiration or trendiness.",
    score: 8,
  },
  Staff: {
    description:
      "Hermès employs highly trained artisans, many of whom undergo multi-year apprenticeships. Employee culture emphasizes pride in craftsmanship, but scaling artisan labor is slow and difficult.",
    score: 7,
  },
  Skills: {
    description:
      "Hermès' primary organizational skill is artisanal mastery and cultural storytelling. This includes leatherwork, silk printing, and saddle-making traditions that differentiate the company from fashion competitors.",
    score: 9,
  },
};

export const alignmentData: Record<
  SName,
  Record<
    SName,
    {
      alignmentExplanation: string;
      alignmentScore: number;
    }
  >
> = {
  Strategy: {
    Strategy: {
      alignmentExplanation: "Self-alignment - Strategy is internally consistent.",
      alignmentScore: 10,
    },
    Structure: {
      alignmentExplanation:
        "The decentralized atelier model supports the strategic goal of preserving craftsmanship and rarity. Strategy and structure reinforce each other strongly.",
      alignmentScore: 9,
    },
    Systems: {
      alignmentExplanation:
        "Systems emphasize quality over efficiency, which aligns with the differentiation strategy, though modernization efforts sometimes lag.",
      alignmentScore: 7,
    },
    "Shared Values": {
      alignmentExplanation:
        "Strategy and Shared Values represent the symbiotic relationship between execution and ethos at Hermès. The luxury differentiation strategy is not merely informed by shared values—it is fundamentally dependent on them. Without the cultural commitment to craftsmanship, patience, and heritage preservation, the strategic positioning would be hollow marketing rather than authentic differentiation.\n\nThe strategy of controlled scarcity derives directly from the value system that views each product as a work of art rather than a commodity. This creates a virtuous cycle: the strategy protects the values by limiting scale, while the values provide the philosophical justification for strategic choices that might otherwise appear to sacrifice growth opportunities.\n\nLeadership consistently reinforces this alignment through decision-making that prioritizes brand integrity over short-term revenue. When faced with opportunities for rapid expansion or trend-driven product lines, the shared values serve as a strategic filter, ensuring that growth initiatives align with the long-term brand vision.\n\nHowever, this tight coupling also creates strategic constraints. The values system makes certain strategic options (mass production, aggressive discounting, trend chasing) not just inadvisable but culturally impossible. This constraint becomes a competitive advantage when luxury consumers increasingly value authenticity, but it limits strategic flexibility in responding to market disruptions.\n\nThe family ownership structure serves as the institutional mechanism that maintains this strategy-values alignment across generations. Without quarterly earnings pressure, strategic decisions can be evaluated against decades-long brand trajectories rather than immediate financial returns. This creates remarkable strategic consistency but also means that strategic pivots, when necessary, must navigate deeply embedded cultural assumptions about what Hermès fundamentally is.",
      alignmentScore: 9,
    },
    Style: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Staff: {
      alignmentExplanation:
        "Artisan training pipelines support the strategic premium positioning. Strategy depends on staff excellence.",
      alignmentScore: 8,
    },
    Skills: {
      alignmentExplanation:
        "Hermès' core skills in craftsmanship are the foundation of the strategy itself — very strong alignment.",
      alignmentScore: 10,
    },
  },
  Structure: {
    Strategy: {
      alignmentExplanation:
        "The decentralized atelier model supports the strategic goal of preserving craftsmanship and rarity. Strategy and structure reinforce each other strongly.",
      alignmentScore: 9,
    },
    Structure: {
      alignmentExplanation: "Self-alignment - Structure is internally consistent.",
      alignmentScore: 10,
    },
    Systems: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    "Shared Values": {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Style: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Staff: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Skills: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
  },
  Systems: {
    Strategy: {
      alignmentExplanation:
        "Systems emphasize quality over efficiency, which aligns with the differentiation strategy, though modernization efforts sometimes lag.",
      alignmentScore: 7,
    },
    Structure: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Systems: {
      alignmentExplanation: "Self-alignment - Systems are internally consistent.",
      alignmentScore: 10,
    },
    "Shared Values": {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Style: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Staff: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Skills: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
  },
  "Shared Values": {
    Strategy: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Structure: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Systems: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    "Shared Values": {
      alignmentExplanation: "Self-alignment - Shared Values are internally consistent.",
      alignmentScore: 10,
    },
    Style: {
      alignmentExplanation:
        "Brand values of subtlety and timelessness match the brand communication style perfectly.",
      alignmentScore: 10,
    },
    Staff: {
      alignmentExplanation:
        "Employees deeply internalize the company's shared values, creating strong cultural coherence.",
      alignmentScore: 9,
    },
    Skills: {
      alignmentExplanation:
        "The company's core skills reflect its values in practice — craftsmanship is the embodiment of the shared ethos.",
      alignmentScore: 10,
    },
  },
  Style: {
    Strategy: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Structure: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Systems: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    "Shared Values": {
      alignmentExplanation:
        "Brand values of subtlety and timelessness match the brand communication style perfectly.",
      alignmentScore: 10,
    },
    Style: {
      alignmentExplanation: "Self-alignment - Style is internally consistent.",
      alignmentScore: 10,
    },
    Staff: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Skills: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
  },
  Staff: {
    Strategy: {
      alignmentExplanation:
        "Artisan training pipelines support the strategic premium positioning. Strategy depends on staff excellence.",
      alignmentScore: 8,
    },
    Structure: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Systems: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    "Shared Values": {
      alignmentExplanation:
        "Employees deeply internalize the company's shared values, creating strong cultural coherence.",
      alignmentScore: 9,
    },
    Style: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Staff: {
      alignmentExplanation: "Self-alignment - Staff is internally consistent.",
      alignmentScore: 10,
    },
    Skills: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
  },
  Skills: {
    Strategy: {
      alignmentExplanation:
        "Hermès' core skills in craftsmanship are the foundation of the strategy itself — very strong alignment.",
      alignmentScore: 10,
    },
    Structure: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Systems: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    "Shared Values": {
      alignmentExplanation:
        "The company's core skills reflect its values in practice — craftsmanship is the embodiment of the shared ethos.",
      alignmentScore: 10,
    },
    Style: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Staff: {
      alignmentExplanation: "Neutral but cohesive alignment.",
      alignmentScore: 7,
    },
    Skills: {
      alignmentExplanation: "Self-alignment - Skills are internally consistent.",
      alignmentScore: 10,
    },
  },
};

// Helper function to get alignment between any two S's
export function getAlignment(s1: SName, s2: SName) {
  return alignmentData[s1][s2];
}

// Helper function to calculate overall alignment score
export function calculateOverallAlignment(): number {
  let totalScore = 0;
  let count = 0;

  // Add all individual S scores
  sList.forEach((s) => {
    totalScore += singleSData[s].score;
    count++;
  });

  // Add all alignment scores (excluding self-alignments)
  sList.forEach((s1) => {
    sList.forEach((s2) => {
      if (s1 !== s2) {
        totalScore += alignmentData[s1][s2].alignmentScore;
        count++;
      }
    });
  });

  return Math.round((totalScore / count) * 10) / 10;
}
