"use client";

import { useState } from "react";

import { generateAudit } from "@/lib/audit-engine";
import { AuditResult } from "@/types/audit";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

import {
  TrendingDown,
  DollarSign,
  Sparkles,
  ArrowRight,
  BadgeDollarSign,
} from "lucide-react";

const toolOptions = [
  "ChatGPT",
  "Claude",
  "Cursor",
  "Copilot",
  "Gemini",
];

export default function AuditForm() {
  const [tools, setTools] = useState([
    {
      tool: "",
      monthlySpend: "",
      seats: "",
      useCase: "",
    },
  ]);

  const [results, setResults] = useState<AuditResult | null>(null);

  const updateTool = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...tools];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setTools(updated);
  };

  const addTool = () => {
    setTools([
      ...tools,
      {
        tool: "",
        monthlySpend: "",
        seats: "",
        useCase: "",
      },
    ]);
  };

  const handleGenerateAudit = () => {
  try {
    const formattedTools = tools.map((tool) => ({
      tool: tool.tool,
      monthlySpend: Number(tool.monthlySpend),
      seats: Number(tool.seats),
      useCase: tool.useCase,
    }));

    console.log(formattedTools);

    const auditResults = generateAudit(formattedTools);

    console.log(auditResults);

    setResults(auditResults);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <section className="relative z-50 px-6 pb-24">
      <div className="mx-auto max-w-4xl">
        <Card className="border-zinc-800 bg-zinc-900 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">
              Run Your AI Spend Audit
            </h2>

            <p className="mt-2 text-zinc-400">
              Add the AI tools your team currently pays for.
            </p>
          </div>

          <div className="space-y-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="grid gap-4 rounded-xl border border-zinc-800 p-4 md:grid-cols-2"
              >
                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    AI Tool
                  </label>

                  <select
                    value={tool.tool}
                    onChange={(e) =>
                      updateTool(
                        index,
                        "tool",
                        e.target.value
                      )
                    }
                    className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2 text-white"
                  >
                    <option value="">Select Tool</option>

                    {toolOptions.map((item) => (
                      <option
                        key={item}
                        value={item}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Monthly Spend ($)
                  </label>

                  <Input
                    value={tool.monthlySpend}
                    onChange={(e) =>
                      updateTool(
                        index,
                        "monthlySpend",
                        e.target.value
                      )
                    }
                    placeholder="50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Team Seats
                  </label>

                  <Input
                    value={tool.seats}
                    onChange={(e) =>
                      updateTool(
                        index,
                        "seats",
                        e.target.value
                      )
                    }
                    placeholder="5"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">
                    Primary Use Case
                  </label>

                  <Input
                    value={tool.useCase}
                    onChange={(e) =>
                      updateTool(
                        index,
                        "useCase",
                        e.target.value
                      )
                    }
                    placeholder="Coding, research, writing..."
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              variant="outline"
              onClick={addTool}
              className="border-zinc-700 bg-transparent"
            >
              Add Another Tool
            </Button>

            <button
             onClick={handleGenerateAudit}
             className="cursor-pointer rounded-md bg-white px-4 py-2 text-black"
          >
             Generate Audit
            </button>
          </div>
        </Card>
</div>

{results && (
  <div className="mt-10 space-y-6">
    <Card className="border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-2xl font-bold text-white">
        Audit Results
      </h3>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-5"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-400">
              Monthly Spend
            </p>

            <DollarSign className="h-5 w-5 text-zinc-500" />
          </div>

          <p className="mt-4 text-4xl font-bold text-white">
            ${results.totalMonthlySpend}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-5"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-zinc-400">
              Annual Spend
            </p>

            <TrendingDown className="h-5 w-5 text-red-400" />
          </div>

          <p className="mt-4 text-4xl font-bold text-white">
            ${results.totalAnnualSpend}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-emerald-900 bg-gradient-to-br from-emerald-950/30 to-zinc-900 p-5"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-emerald-400">
              Potential Savings
            </p>

            <Sparkles className="h-5 w-5 text-emerald-400" />
          </div>

          <p className="mt-4 text-4xl font-bold text-emerald-400">
            ${results.potentialSavings}
          </p>
        </motion.div>
      </div>
    </Card>

    <Card className="border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-2xl font-bold text-white">
        Recommendations
      </h3>

      <div className="mt-6 space-y-5">
        {results.recommendations.map(
          (recommendation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3 + index * 0.2,
              }}
              className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-6"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-zinc-800 p-2">
                      <ArrowRight className="h-4 w-4 text-zinc-300" />
                    </div>

                    <div>
                      <p className="text-lg font-semibold text-white">
                        {recommendation.currentTool}
                      </p>

                      <p className="text-sm text-zinc-500">
                        Replace with
                      </p>
                    </div>

                    <div className="rounded-full bg-emerald-950/40 px-3 py-1 text-sm text-emerald-400">
                      {recommendation.suggestedTool}
                    </div>
                  </div>

                  <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-400">
                    {recommendation.reason}
                  </p>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-emerald-900 bg-emerald-950/20 px-5 py-4">
                  <BadgeDollarSign className="h-8 w-8 text-emerald-400" />

                  <div>
                    <p className="text-sm text-emerald-400">
                      Estimated Savings
                    </p>

                    <p className="text-2xl font-bold text-white">
                      ${recommendation.monthlySavings}/mo
                    </p>

                    <p className="text-xs text-zinc-500">
                      ${recommendation.annualSavings}/year
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </Card>
  </div>
)}
</section>
);
}