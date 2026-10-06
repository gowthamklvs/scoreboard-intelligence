"use client";

import { useEffect, useState } from "react";

const stages = [
  {
    number: "01",
    label: "DATA",
    title: "Infrastructure generates data.",
    description:
      "Signals originate across compute, storage, network, power, facility and operational systems.",
  },
  {
    number: "02",
    label: "TELEMETRY",
    title: "Signals become observable.",
    description:
      "Telemetry brings distributed infrastructure states into a common observation layer.",
  },
  {
    number: "03",
    label: "NORMALIZATION",
    title: "Different signals become comparable.",
    description:
      "Heterogeneous infrastructure information is organized into consistent operational context.",
  },
  {
    number: "04",
    label: "CONTEXT",
    title: "State gains meaning.",
    description:
      "Individual observations become meaningful when their operational environment is understood.",
  },
  {
    number: "05",
    label: "CORRELATION",
    title: "Relationships become visible.",
    description:
      "Signals across infrastructure domains are related to reveal conditions that isolated tools cannot see.",
  },
  {
    number: "06",
    label: "INTELLIGENCE",
    title: "Patterns become understanding.",
    description:
      "Correlated infrastructure behavior becomes intelligence that can explain what is happening and why.",
  },
  {
    number: "07",
    label: "DECISION",
    title: "Understanding becomes direction.",
    description:
      "Intelligence supports operational decisions across deployment, optimization, runtime and validation.",
  },
  {
    number: "08",
    label: "ACTION",
    title: "The system can respond.",
    description:
      "Insights can drive human action, operational workflows and, where appropriate, automated response.",
  },
];

export function TechnologyFlow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % stages.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const active = stages[activeIndex];

  return (
    <section
      id="technology"
      className="sb-tech relative overflow-hidden bg-[#f7f6f2] px-6 py-24 text-[#10131a] lg:px-10 lg:py-32"
    >
      <div className="sb-tech-grid absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold tracking-[0.32em] text-[#3156d8]">
              TECHNOLOGY
            </p>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-[5.25rem]">
              From
              <br />
              infrastructure
              <br />
              data to
              <br />
              <span className="text-[#85878d]">action.</span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-[#555963] sm:text-lg">
              ScoreBoard transforms distributed infrastructure signals into
              shared context, intelligence and operational direction.
            </p>

            <div className="mt-10 border-l-2 border-[#3156d8] pl-5">
              <p className="text-[9px] font-semibold tracking-[0.22em] text-[#747780]">
                THE INTELLIGENCE PATH
              </p>
              <p className="mt-2 text-sm leading-6 text-[#3f434b]">
                Observe → Understand → Decide → Act
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[9px] font-semibold tracking-[0.26em] text-[#888b91]">
                SCOREBOARD INTELLIGENCE FLOW
              </span>
              <span className="text-[9px] tracking-[0.18em] text-[#a0a2a7]">
                SELECT A STAGE
              </span>
            </div>

            <div className="sb-tech-panel">
              <div className="sb-tech-flow">
                {stages.map((stage, index) => {
                  const selected = index === activeIndex;
                  const completed = index < activeIndex;

                  return (
                    <button
                      key={stage.label}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={selected}
                      className={`sb-tech-stage ${
                        selected ? "sb-tech-stage-active" : ""
                      } ${completed ? "sb-tech-stage-complete" : ""}`}
                    >
                      <span className="sb-tech-stage-number">
                        {stage.number}
                      </span>

                      <span className="sb-tech-stage-label">
                        {stage.label}
                      </span>

                      <i />
                    </button>
                  );
                })}
              </div>

              <div className="sb-tech-track">
                <div
                  className="sb-tech-progress"
                  style={{
                    width: `${((activeIndex + 1) / stages.length) * 100}%`,
                  }}
                />
              </div>

              <div className="sb-tech-detail">
                <div className="sb-tech-detail-meta">
                  <span>ACTIVE TECHNOLOGY STAGE</span>
                  <strong>
                    {active.number} / {String(stages.length).padStart(2, "0")}
                  </strong>
                </div>

                <div className="sb-tech-detail-content">
                  <div className="sb-tech-detail-index">
                    {active.number}
                  </div>

                  <div>
                    <p className="sb-tech-detail-label">{active.label}</p>
                    <h3>{active.title}</h3>
                    <p className="sb-tech-detail-description">
                      {active.description}
                    </p>
                  </div>
                </div>

                <div className="sb-tech-detail-bottom">
                  <span>INFRASTRUCTURE SIGNAL</span>
                  <i />
                  <span>SHARED CONTEXT</span>
                  <i />
                  <span>INTELLIGENCE</span>
                  <i />
                  <strong>ACTION</strong>
                </div>
              </div>

              <div className="sb-tech-note">
                <span>
                  HIGH-LEVEL TECHNOLOGY MODEL · PROPRIETARY IMPLEMENTATION
                  DETAILS NOT SHOWN
                </span>
              </div>
            </div>

            <p className="mt-4 text-right text-[8px] tracking-[0.16em] text-[#a1a3a8]">
              SCOREBOARD INTELLIGENCE™ · DATA → INTELLIGENCE → ACTION
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
