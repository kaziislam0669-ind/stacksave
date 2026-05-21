import { ToolInput } from "@/types/tool";

export function generateAudit(tools: ToolInput[]) {
  return tools.map((tool) => {
    return {
      tool: tool.name,
      currentSpend: tool.monthlySpend,
      recommendedSpend: tool.monthlySpend,
      savings: 0,
      reason: "No optimization found yet.",
    };
  });
}