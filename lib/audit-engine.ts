import { AuditResult } from "@/types/audit";

interface ToolInput {
  tool: string;
  monthlySpend: string;
  seats: string;
  useCase: string;
}

export function generateAudit(
  tools: ToolInput[]
): AuditResult[] {
  return tools.map((tool) => {
    const spend = Number(tool.monthlySpend);
    const seats = Number(tool.seats);

    let recommendedSpend = spend;
    let recommendation =
      "Current setup looks reasonable.";

    // SIMPLE AUDIT RULES

    if (tool.tool === "ChatGPT") {
      if (seats <= 2 && spend > 60) {
        recommendedSpend = 40;

        recommendation =
          "Small teams usually do not need ChatGPT Team plans.";
      }
    }

    if (tool.tool === "Claude") {
      if (spend > 100) {
        recommendedSpend = spend * 0.7;

        recommendation =
          "Claude spend appears high relative to typical usage.";
      }
    }

    if (tool.tool === "Cursor") {
      if (seats <= 3 && spend > 40) {
        recommendedSpend = 20;

        recommendation =
          "Cursor Pro may be enough for smaller teams.";
      }
    }

    const savings =
      spend - recommendedSpend;

    return {
      tool: tool.tool,
      currentSpend: spend,
      recommendedSpend,
      savings,
      recommendation,
    };
  });
}