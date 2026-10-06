"use client";

import { useQuietAutoCycle } from "@/lib/useQuietAutoCycle";

const scenarios = [
  {
    id: "inference",
    label: "INFERENCE",
    title: "Every token has an infrastructure cost.",
    description:
      "Token economics are shaped by more than GPU utilization. Data movement, power and unused capacity all influence the cost of producing useful work.",
    metrics: {
      cost: "$0.84",
      unit: "per 1M tokens",
      utilization: "82%",
      power: "4.8 kW",
      efficiency: "0.71",
    },
    bars: [
      { label: "COMPUTE", value: 82, valueText: "82%" },
      { label: "DATA MOVEMENT", value: 58, valueText: "58%" },
      { label: "POWER EFFICIENCY", value: 71, valueText: "71%" },
      { label: "CAPACITY USED", value: 76, valueText: "76%" },
    ],
  },
  {
    id: "rag",
    label: "RAG",
    title: "Data movement changes the equation.",
    description:
      "Retrieval-heavy workloads introduce additional storage, network and memory behavior. Infrastructure economics change when data becomes part of the workload path.",
    metrics: {
      cost: "$1.12",
      unit: "per 1M tokens",
      utilization: "74%",
      power: "5.1 kW",
      efficiency: "0.63",
    },
    bars: [
      { label: "COMPUTE", value: 74, valueText: "74%" },
      { label: "DATA MOVEMENT", value: 81, valueText: "81%" },
      { label: "POWER EFFICIENCY", value: 63, valueText: "63%" },
      { label: "CAPACITY USED", value: 69, valueText: "69%" },
    ],
  },
  {
    id: "batch",
    label: "BATCH",
    title: "Capacity has an economic dimension.",
    description:
      "Batch workloads can improve utilization while also exposing capacity, thermal and scheduling constraints. Efficiency depends on how the whole system behaves.",
    metrics: {
      cost: "$0.61",
      unit: "per 1M tokens",
      utilization: "91%",
      power: "6.2 kW",
      efficiency: "0.88",
    },
    bars: [
      { label: "COMPUTE", value: 91, valueText: "91%" },
      { label: "DATA MOVEMENT", value: 46, valueText: "46%" },
      { label: "POWER EFFICIENCY", value: 88, valueText: "88%" },
      { label: "CAPACITY USED", value: 94, valueText: "94%" },
    ],
  },
];

export function InfrastructureEconomics() {
  const { activeIndex, selectIndex } = useQuietAutoCycle({
    length: scenarios.length,
    intervalMs: 7000,
    resumeAfterMs: 12000,
    initialIndex: 0,
  });

  const active = scenarios[activeIndex] ?? scenarios[0];

  return (
    <section
      id="economics"
      className="sb-economics relative overflow-hidden bg-[#f5f4f0] px-6 py-24 text-[#10131a] lg:px-10 lg:py-32"
    >
      <div className="sb-economics-grid absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold tracking-[0.32em] text-[#3156d8]">
              INFRASTRUCTURE ECONOMICS
            </p>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-[5.4rem]">
              Performance
              <br />
              is only part
              <br />
              of the
              <br />
              <span className="text-[#85878d]">equation.</span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-[#555963] sm:text-lg">
              AI infrastructure has an economic state. Cost, utilization,
              power and data movement are connected — and understanding those
              relationships changes how infrastructure can be optimized.
            </p>

            <div className="mt-10 border-l-2 border-[#3156d8] pl-5">
              <p className="text-[9px] font-semibold tracking-[0.22em] text-[#747780]">
                SCOREBOARD ECONOMIC VIEW
              </p>
              <p className="mt-2 text-sm leading-6 text-[#3f434b]">
                Cost per token · Tokens per watt · Performance per dollar
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[9px] font-semibold tracking-[0.26em] text-[#888b91]">
                ILLUSTRATIVE WORKLOAD MODEL
              </span>
              <span className="text-[9px] tracking-[0.18em] text-[#a0a2a7]">
                SELECT WORKLOAD
              </span>
            </div>

            <div className="sb-economics-panel">
              <div className="sb-economics-tabs">
                {scenarios.map((scenario) => {
                  const selected = scenario.id === active.id;

                  return (
                    <button
                      key={scenario.id}
                      type="button"
                      onClick={() => selectIndex(scenarios.indexOf(scenario))}
                      aria-pressed={selected}
                      className={`sb-economics-tab ${
                        selected ? "sb-economics-tab-active" : ""
                      }`}
                    >
                      <span>{scenario.label}</span>
                      <i />
                    </button>
                  );
                })}
              </div>

              <div className="sb-economics-main">
                <div className="sb-economics-result">
                  <span className="sb-economics-kicker">
                    ILLUSTRATIVE ECONOMIC STATE
                  </span>

                  <div className="sb-economics-cost">
                    <span>{active.metrics.cost}</span>
                    <small>{active.metrics.unit}</small>
                  </div>

                  <h3>{active.title}</h3>

                  <p>{active.description}</p>

                  <div className="sb-economics-metrics">
                    <div>
                      <span>UTILIZATION</span>
                      <strong>{active.metrics.utilization}</strong>
                    </div>
                    <div>
                      <span>POWER</span>
                      <strong>{active.metrics.power}</strong>
                    </div>
                    <div>
                      <span>EFFICIENCY INDEX</span>
                      <strong>{active.metrics.efficiency}</strong>
                    </div>
                  </div>
                </div>

                <div className="sb-economics-bars">
                  <div className="sb-economics-bars-head">
                    <span>ECONOMIC DRIVERS</span>
                    <span>RELATIVE STATE</span>
                  </div>

                  {active.bars.map((bar) => (
                    <div className="sb-economics-bar-row" key={bar.label}>
                      <div className="sb-economics-bar-label">
                        <span>{bar.label}</span>
                        <strong>{bar.valueText}</strong>
                      </div>

                      <div className="sb-economics-track">
                        <span
                          style={{ width: `${bar.value}%` }}
                          className="sb-economics-fill"
                        />
                      </div>
                    </div>
                  ))}

                  <div className="sb-economics-equation">
                    <span>COMPUTE</span>
                    <b>+</b>
                    <span>DATA</span>
                    <b>+</b>
                    <span>POWER</span>
                    <b>+</b>
                    <span>CAPACITY</span>
                    <i />
                    <strong>ECONOMIC STATE</strong>
                  </div>
                </div>
              </div>

              <div className="sb-economics-footer">
                <span>OBSERVE</span>
                <span>RELATE</span>
                <span>MODEL</span>
                <span>OPTIMIZE</span>
                <span className="ml-auto text-[#3156d8]">
                  INFRASTRUCTURE → ECONOMIC INTELLIGENCE
                </span>
              </div>
            </div>

            <p className="mt-4 text-right text-[8px] tracking-[0.16em] text-[#a1a3a8]">
              EXAMPLE VALUES FOR INTERACTION ONLY · NOT CUSTOMER BENCHMARKS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
