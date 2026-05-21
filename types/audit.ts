export interface AuditResult {
  tool: string;
  currentSpend: number;
  recommendedSpend: number;
  savings: number;
  recommendation: string;
}