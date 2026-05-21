import { pricingData } from "@/data/pricing";
import { AuditInput, AuditResult, AuditRecommendation } from "@/types/audit";

export function generateAudit(tools: AuditInput[]): AuditResult {
  let totalMonthlySpend = 0;
  let potentialSavings = 0;

  const recommendations: AuditRecommendation[] = [];

  tools.forEach((tool) => {
    totalMonthlySpend += tool.monthlySpend * tool.seats;

    const pricing =
      pricingData[tool.tool as keyof typeof pricingData];

    if (!pricing) return;

    pricing.alternatives.forEach((alternativeName) => {
      const alternative =
        pricingData[alternativeName as keyof typeof pricingData];

      if (!alternative) return;

      const currentCost = tool.monthlySpend * tool.seats;
      const alternativeCost =
        alternative.monthlyPrice * tool.seats;

      if (alternativeCost < currentCost) {
        const savings = currentCost - alternativeCost;

        potentialSavings += savings;

        recommendations.push({
          currentTool: tool.tool,
          suggestedTool: alternativeName,
          monthlySavings: savings,
          annualSavings: savings * 12,
          reason: `${alternativeName} offers similar functionality at lower cost.`,
        });
      }
    });
  });

  return {
    totalMonthlySpend,
    totalAnnualSpend: totalMonthlySpend * 12,
    potentialSavings,
    recommendations,
  };
}