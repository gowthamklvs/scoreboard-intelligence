"use client";

import { useQuietAutoCycle } from "@/lib/useQuietAutoCycle";

const layers = [
  {
    id: "compute",
    number: "01",
    name: "Compute",
    headline: "Compute is only one part of the factory.",
    description:
      "GPU and accelerator utilization matter — but utilization alone does not explain whether the factory is producing efficiently.",
    metrics: [
      ["GPU utilization", "82%"],
      ["Accelerator state", "ACTIVE"],
      ["Workload pressure", "RISING"],
    ],
    color: "#4F6BFF",
  },
  {
    id: "data",
    number: "02",
    name: "Data",
    headline: "Data movement shapes the factory.",
    description:
      "Storage, memory and network behavior determine how efficiently data reaches compute — and where movement becomes a constraint.",
    metrics: [
      ["Data throughput", "14.8 GB/s"],
      ["I/O latency", "8.2 ms"],
      ["Movement state", "ELEVATED"],
    ],
    color: "#8B63E8",
  },
  {
    id: "power",
    number: "03",
    name: "Power",
    headline: "Every token has an infrastructure cost.",
    description:
      "Power and thermal conditions are part of workload economics. Understanding them requires connecting facility behavior to infrastructure demand.",
    metrics: [
      ["Current load", "4.8 kW"],
      ["Thermal state", "31°C"],
      ["Energy trend", "RISING"],
    ],
    color: "#35C98A",
  },
  {
    id: "operations",
    number: "04",
    name: "Operations",
    headline: "The factory is always changing.",
    description:
      "Incidents, workload transitions and infrastructure events continuously alter the operating state. Context turns those changes into understanding.",
    metrics: [
      ["Operational events", "03:42"],
      ["Active conditions", "06"],
      ["Factory state", "ADAPTING"],
    ],
    color: "#D94FA8",
  },
];

export function AIFactory() {
  const { activeIndex, selectIndex } = useQuietAutoCycle({
    length: layers.length,
    intervalMs: 7000,
    resumeAfterMs: 12000,
    initialIndex: 0,
  });

  const active = layers[activeIndex] ?? layers[0];

  return (
    <section
      id="ai-factory"
      className="sb-factory relative overflow-hidden bg-[#090b11] px-6 py-24 text-white lg:px-10 lg:py-32"
    >
      <div className="sb-factory-grid absolute inset-0" />
      <div className="sb-factory-glow absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold tracking-[0.32em] text-[#6B7CFF]">
              AI FACTORY
            </p>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.93] tracking-[-0.045em] sm:text-6xl lg:text-[5.6rem]">
              An AI factory
              <br />
              is more than
              <br />
              <span className="text-[#737780]">compute.</span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-white/55 sm:text-lg">
              AI infrastructure behaves as a system. Compute, data, power and
              operations continuously influence one another — and the factory
              only makes sense when those relationships are understood together.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#4F6BFF] shadow-[0_0_18px_rgba(79,107,255,0.75)]" />
              <span className="text-[9px] tracking-[0.24em] text-white/35">
                ONE FACTORY · MANY DEPENDENCIES
              </span>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[9px] font-semibold tracking-[0.26em] text-white/30">
                FACTORY OPERATING MODEL
              </span>
              <span className="text-[9px] tracking-[0.18em] text-white/25">
                SELECT A LAYER
              </span>
            </div>

            <div className="sb-factory-shell">
              <div className="sb-factory-header">
                <span>AI FACTORY</span>
                <span className="flex items-center gap-2">
                  <i />
                  LIVE OPERATING STATE
                </span>
              </div>

              <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                <div className="sb-factory-nav">
                  {layers.map((layer) => {
                    const selected = layer.id === active.id;

                    return (
                      <button
                        key={layer.id}
                        type="button"
                        onClick={() => selectIndex(layers.indexOf(layer))}
                        aria-pressed={selected}
                        className={`sb-factory-layer ${
                          selected ? "sb-factory-layer-active" : ""
                        }`}
                        style={
                          {
                            "--factory-accent": layer.color,
                          } as React.CSSProperties
                        }
                      >
                        <span className="sb-factory-layer-number">
                          {layer.number}
                        </span>

                        <span className="sb-factory-layer-name">
                          {layer.name}
                        </span>

                        <span
                          className="sb-factory-layer-dot"
                          style={{ backgroundColor: layer.color }}
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="sb-factory-state">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: active.color,
                        boxShadow: `0 0 18px ${active.color}`,
                      }}
                    />
                    <span className="text-[9px] font-semibold tracking-[0.26em] text-white/35">
                      ACTIVE FACTORY LAYER · {active.number}
                    </span>
                  </div>

                  <h3 className="mt-7 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
                    {active.headline}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/45">
                    {active.description}
                  </p>

                  <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-white/8 bg-white/7 sm:grid-cols-3">
                    {active.metrics.map(([label, value]) => (
                      <div
                        key={label}
                        className="bg-[#0d1018] px-5 py-5"
                      >
                        <p className="text-[8px] tracking-[0.18em] text-white/25">
                          {label}
                        </p>
                        <p
                          className="mt-3 text-lg font-medium tracking-[-0.02em]"
                          style={{ color: active.color }}
                        >
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-9 flex items-center gap-3">
                    <span className="text-[8px] tracking-[0.18em] text-white/25">
                      FACTORY STATE
                    </span>
                    <span className="h-px flex-1 bg-white/8" />
                    <span className="text-[8px] font-semibold tracking-[0.18em] text-white/45">
                      {active.name.toUpperCase()} → SYSTEM CONTEXT
                    </span>
                  </div>
                </div>
              </div>

              <div className="sb-factory-footer">
                <span>COMPUTE</span>
                <span>DATA</span>
                <span>POWER</span>
                <span>OPERATIONS</span>
                <span className="ml-auto text-[#6B7CFF]">
                  SHARED FACTORY CONTEXT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
