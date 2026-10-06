"use client";

import { useQuietAutoCycle } from "@/lib/useQuietAutoCycle";

const insights = [
  {
    id: "throughput",
    number: "01",
    question: "Why did throughput fall?",
    observation: "NETWORK THROUGHPUT",
    observationValue: "-18%",
    evidence: [
      ["Storage latency", "+31%", "ELEVATED"],
      ["Network queue", "+24%", "RISING"],
      ["GPU utilization", "-7%", "FALLING"],
    ],
    relationship:
      "Storage latency increased before network pressure appeared, followed by reduced accelerator utilization.",
    insight:
      "The throughput reduction is correlated with upstream data movement pressure rather than an isolated compute event.",
    action: "INVESTIGATE DATA PATH",
  },
  {
    id: "incident",
    number: "02",
    question: "What changed before the incident?",
    observation: "INCIDENT SIGNAL",
    observationValue: "T−07m",
    evidence: [
      ["Thermal state", "+4.2°C", "CHANGED"],
      ["Power draw", "+11%", "RISING"],
      ["Workload state", "SHIFT", "TRANSITION"],
    ],
    relationship:
      "A workload transition preceded the thermal and power changes observed immediately before the incident window.",
    insight:
      "The incident sequence contains a measurable infrastructure state transition that occurred before the visible failure.",
    action: "TRACE EVENT SEQUENCE",
  },
  {
    id: "capacity",
    number: "03",
    question: "Where is capacity being lost?",
    observation: "AVAILABLE CAPACITY",
    observationValue: "23%",
    evidence: [
      ["GPU utilization", "91%", "HIGH"],
      ["Data path", "46%", "UNDERUSED"],
      ["Memory pressure", "68%", "AVAILABLE"],
    ],
    relationship:
      "Compute demand is high while upstream data movement remains below available capacity.",
    insight:
      "The observed imbalance suggests that available infrastructure capacity is not being converted uniformly into useful work.",
    action: "ANALYZE BOTTLENECK",
  },
  {
    id: "bottleneck",
    number: "04",
    question: "What is creating the bottleneck?",
    observation: "SYSTEM CONSTRAINT",
    observationValue: "DATA",
    evidence: [
      ["Compute", "82%", "ACTIVE"],
      ["Storage", "8.2 ms", "LATENCY"],
      ["Network", "14.8 GB/s", "ELEVATED"],
    ],
    relationship:
      "Compute remains active while storage latency and network traffic rise together.",
    insight:
      "The constraint appears to be emerging across the data path rather than inside the compute resource alone.",
    action: "CORRELATE DATA PATH",
  },
];

export function Insights() {
  const { activeIndex, selectIndex } = useQuietAutoCycle({
    length: insights.length,
    intervalMs: 8500,
    resumeAfterMs: 12000,
    initialIndex: 0,
  });

  const active = insights[activeIndex] ?? insights[0];

  return (
    <section
      id="insights"
      className="sb-insights relative overflow-hidden bg-[#080b11] px-6 py-24 text-white lg:px-10 lg:py-32"
    >
      <div className="sb-insights-grid absolute inset-0" />
      <div className="sb-insights-glow absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold tracking-[0.32em] text-[#6B7CFF]">
            INSIGHTS
          </p>

          <h2 className="mt-7 text-5xl font-semibold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-[5.3rem]">
            The answer
            <br />
            is usually
            <br />
            <span className="text-white/35">between the signals.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            ScoreBoard connects observations across infrastructure domains to
            explain what changed, what is related and where attention should
            move next.
          </p>
        </div>

        <div className="mt-20">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-[9px] font-semibold tracking-[0.26em] text-white/25">
              ILLUSTRATIVE INTELLIGENCE SCENARIOS
            </span>
            <span className="text-[9px] tracking-[0.18em] text-white/20">
              SELECT A QUESTION
            </span>
          </div>

          <div className="sb-insights-panel">
            <div className="sb-insights-questions">
              {insights.map((insight) => {
                const selected = insight.id === active.id;

                return (
                  <button
                    key={insight.id}
                    type="button"
                    onClick={() => selectIndex(insights.indexOf(insight))}
                    aria-pressed={selected}
                    className={`sb-insights-question ${
                      selected ? "sb-insights-question-active" : ""
                    }`}
                  >
                    <span>{insight.number}</span>
                    <strong>{insight.question}</strong>
                    <i />
                  </button>
                );
              })}
            </div>

            <div className="sb-insights-workspace">
              <div className="sb-insights-observation">
                <span className="sb-insights-label">OBSERVATION</span>

                <strong>{active.observationValue}</strong>

                <small>{active.observation}</small>
              </div>

              <div className="sb-insights-chain">
                <div className="sb-insights-chain-header">
                  <span>INTELLIGENCE CHAIN</span>
                  <span>ACTIVE SCENARIO · {active.number}</span>
                </div>

                <div className="sb-insights-evidence">
                  {active.evidence.map(([label, value, state], index) => (
                    <div key={label} className="sb-insights-evidence-item">
                      <div>
                        <span>0{index + 1}</span>
                        <strong>{label}</strong>
                      </div>

                      <div>
                        <b>{value}</b>
                        <small>{state}</small>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="sb-insights-relationship">
                  <span>RELATIONSHIP</span>
                  <p>{active.relationship}</p>
                </div>

                <div className="sb-insights-result">
                  <div>
                    <span>INSIGHT</span>
                    <strong>{active.insight}</strong>
                  </div>

                  <div className="sb-insights-action">
                    <small>NEXT ACTION</small>
                    <b>{active.action}</b>
                  </div>
                </div>
              </div>
            </div>

            <div className="sb-insights-footer">
              <span>OBSERVE</span>
              <i />
              <span>CONNECT</span>
              <i />
              <span>UNDERSTAND</span>
              <i />
              <strong>ACT</strong>
              <em>EXAMPLE VALUES · NOT CUSTOMER DATA</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
