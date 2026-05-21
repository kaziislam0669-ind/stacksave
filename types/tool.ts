export type ToolName =
  | "chatgpt"
  | "cursor"
  | "claude"
  | "copilot"
  | "gemini";

export interface ToolInput {
  name: ToolName;
  plan: string;
  monthlySpend: number;
  seats: number;
  useCase: string;
}