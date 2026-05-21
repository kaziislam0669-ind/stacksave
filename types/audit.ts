export interface AuditResult {
  tool: string;
  currentSpend: number;
  recommendedSpend: number;
  savings: number;
  recommendation: string;
}
export interface AuditInput {
  tool: string;
  monthlySpend: number;
  seats: number;
  useCase: string;
}

export interface AuditRecommendation {
  currentTool: string;
  suggestedTool: string;
  monthlySavings: number;
  annualSavings: number;
  reason: string;
}

export interface AuditResult {
  totalMonthlySpend: number;
  totalAnnualSpend: number;
  potentialSavings: number;
  recommendations: AuditRecommendation[];
}