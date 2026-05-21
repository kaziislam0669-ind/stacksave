import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AuditForm from "@/components/audit-form";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
            AI Spend Optimization Platform
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Stop Overspending
            <span className="block text-zinc-500">
              On AI Tools
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Audit your AI stack in under 60 seconds.
            Discover cheaper plans, redundant tools,
            and hidden savings opportunities.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-12 px-8 text-base"
            >
              Run Free Audit
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base border-zinc-700 bg-transparent"
            >
              View Example Report
            </Button>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <Card className="border-zinc-800 bg-zinc-900 p-6 text-left">
              <p className="text-3xl font-bold">$1,240</p>
              <p className="mt-2 text-sm text-zinc-400">
                Average annual savings identified
              </p>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900 p-6 text-left">
              <p className="text-3xl font-bold">60 sec</p>
              <p className="mt-2 text-sm text-zinc-400">
                Average audit completion time
              </p>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900 p-6 text-left">
              <p className="text-3xl font-bold">8+</p>
              <p className="mt-2 text-sm text-zinc-400">
                AI platforms analyzed
              </p>
            </Card>
          </div>
        </div>
      </section>
      <AuditForm />
    </main>
  );
}