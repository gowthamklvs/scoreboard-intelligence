"use client";

import { useQuietAutoCycle } from "@/lib/useQuietAutoCycle";

const modules = [
  {
    id: "deployment",
    number: "01",
    name: "Deployment Intelligence",
    short: "Know before infrastructure goes live.",
    description:
      "Understand infrastructure readiness before workloads arrive. ScoreBoard brings configuration, topology, capacity and environmental signals together to expose deployment risk early.",
    inputs: ["Configuration", "Topology", "Capacity", "Environment"],
    output: "Deployment readiness",
    accent: "#4F6BFF",
  },
  {
    id: "optimization",
    number: "02",
    name: "Infrastructure Optimization",
    short: "Understand where efficiency is being lost.",
    description:
      "Correlate utilization, data movement, power, thermal and infrastructure behavior to reveal where performance and efficiency are being constrained.",
    inputs: ["Utilization", "Data movement", "Power", "Thermal"],
    output: "Efficiency opportunities",
    accent: "#35C98A",
  },
  {
    id: "runtime",
    number: "03",
    name: "Runtime Intelligence",
    short: "Understand what is happening now.",
    description:
      "Continuously interpret changing infrastructure conditions and connect events across domains so teams can understand operational behavior as it unfolds.",
    inputs: ["Live telemetry", "Events", "Workloads", "Incidents"],
    output: "Operational context",
    accent: "#D94FA8",
  },
  {
    id: "validation",
    number: "04",
    name: "Validation Intelligence",
    short: "Turn infrastructure behavior into evidence.",
    description:
      "Validate infrastructure against expected behavior, workload requirements and operational conditions with evidence that can be traced back to the underlying signals.",
    inputs: ["Workload", "Telemetry", "Expected state", "Observed state"],
    output: "Validation evidence",
    accent: "#8B63E8",
  },
];

export function IntelligenceModules() {
  const { activeIndex, selectIndex } = useQuietAutoCycle({
    length: modules.length,
    intervalMs: 7000,
    resumeAfterMs: 12000,
    initialIndex: 2,
  });

  const active = modules[activeIndex] ?? modules[2];

  return (
    <section
      className="sb-modules relative overflow-hidden bg-[#f6f7f9] px-6 py-24 text-[#080b12] lg:px-10 lg:py-32"
    >
      <div className="sb-modules-grid absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold tracking-[0.32em] text-[#4F6BFF]">
              ONE PLATFORM · FOUR INTELLIGENCE MODES
            </p>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.94] tracking-[-0.045em] sm:text-6xl lg:text-[5.5rem]">
              Intelligence
              <br />
              built for
              <br />
              <span className="text-[#a2a5ab]">the full lifecycle.</span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-[#5e646d] sm:text-lg">
              ScoreBoard is not a single monitoring view. Its intelligence
              operates across deployment, optimization, runtime and validation
              — using the same shared operational context.
            </p>

            <div className="mt-10 border-l-2 border-[#4F6BFF] pl-5">
              <p className="text-[9px] font-semibold tracking-[0.24em] text-[#a0a4ab]">
                THE COMMON FOUNDATION
              </p>
              <p className="mt-3 text-lg font-medium tracking-[-0.02em] text-[#252932]">
                One intelligence layer.
                <br />
                Different operational moments.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between px-1">
              <span className="text-[9px] font-semibold tracking-[0.26em] text-[#a0a4ab]">
                SCOREBOARD INTELLIGENCE MODULES
              </span>
              <span className="text-[9px] tracking-[0.18em] text-[#b1b4ba]">
                SELECT A MODULE
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {modules.map((module) => {
                const isActive = module.id === active.id;

                return (
                  <button
                    key={module.id}
                    type="button"
                    onClick={() => selectIndex(modules.indexOf(module))}
                    aria-pressed={isActive}
                    className={`sb-module-card text-left ${
                      isActive ? "sb-module-card-active" : ""
                    }`}
                    style={
                      {
                        "--module-accent": module.accent,
                      } as React.CSSProperties
                    }
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <span
                            className="sb-module-dot"
                            style={{ backgroundColor: module.accent }}
                          />
                          <span className="text-[9px] font-semibold tracking-[0.25em] text-[#8f949c]">
                            {module.number}
                          </span>
                        </div>

                        <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-[#151820]">
                          {module.name}
                        </h3>
                      </div>

                      <span
                        className={`sb-module-arrow ${
                          isActive ? "sb-module-arrow-active" : ""
                        }`}
                        style={{ color: module.accent }}
                      >
                        ↗
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-[#70757d]">
                      {module.short}
                    </p>

                    <div
                      className="mt-6 h-0.5 origin-left transition-transform duration-500"
                      style={{
                        backgroundColor: module.accent,
                        transform: isActive ? "scaleX(1)" : "scaleX(0.22)",
                        opacity: isActive ? 1 : 0.25,
                      }}
                    />
                  </button>
                );
              })}
            </div>

            <div
              className="sb-module-detail mt-4"
              style={
                {
                  "--module-accent": active.accent,
                } as React.CSSProperties
              }
            >
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: active.accent }}
                    />
                    <span className="text-[9px] font-semibold tracking-[0.26em] text-[#989ca3]">
                      ACTIVE MODULE · {active.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-[#10131a]">
                    {active.name}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#646a73]">
                    {active.description}
                  </p>
                </div>

                <div className="lg:border-l lg:border-[#dfe2e7] lg:pl-8">
                  <p className="text-[9px] font-semibold tracking-[0.25em] text-[#a0a4ab]">
                    INTELLIGENCE PATH
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {active.inputs.map((input, index) => (
                      <div key={input} className="flex items-center gap-2">
                        <span className="rounded-full border border-[#dfe2e7] bg-white px-3 py-2 text-[10px] font-medium text-[#555b64]">
                          {input}
                        </span>
                        {index < active.inputs.length - 1 && (
                          <span className="text-[#b8bbc1]">→</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 border-t border-[#e1e3e7] pt-5">
                    <p className="text-[9px] tracking-[0.22em] text-[#a0a4ab]">
                      SCOREBOARD OUTPUT
                    </p>
                    <p
                      className="mt-2 text-lg font-semibold tracking-[-0.02em]"
                      style={{ color: active.accent }}
                    >
                      {active.output}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-9 flex items-center gap-3 border-t border-[#e1e3e7] pt-5">
                <span className="text-[9px] tracking-[0.2em] text-[#a8acb2]">
                  OBSERVE
                </span>
                <span className="h-px flex-1 bg-[#dfe2e7]" />
                <span className="text-[9px] tracking-[0.2em] text-[#a8acb2]">
                  CORRELATE
                </span>
                <span className="h-px flex-1 bg-[#dfe2e7]" />
                <span
                  className="text-[9px] font-semibold tracking-[0.2em]"
                  style={{ color: active.accent }}
                >
                  UNDERSTAND
                </span>
                <span className="h-px flex-1 bg-[#dfe2e7]" />
                <span className="text-[9px] tracking-[0.2em] text-[#a8acb2]">
                  ACT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
