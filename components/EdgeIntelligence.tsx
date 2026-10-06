"use client";

import { useQuietAutoCycle } from "@/lib/useQuietAutoCycle";

const agents = [
  {
    id: "software",
    number: "01",
    label: "SOFTWARE EDGE AGENT™",
    title: "Software intelligence at the edge.",
    description:
      "Collect infrastructure signals close to where they are generated, normalize the information and provide a consistent intelligence path into ScoreBoard.",
    capabilities: [
      "Telemetry collection",
      "Local normalization",
      "Event correlation",
      "Secure forwarding",
    ],
    accent: "#3156D8",
  },
  {
    id: "hardware",
    number: "02",
    label: "HARDWARE EDGE AGENT",
    title: "Hardware intelligence where timing matters.",
    description:
      "A dedicated edge layer can observe and process infrastructure behavior close to the physical data path, enabling deterministic and high-speed intelligence.",
    capabilities: [
      "High-speed observation",
      "Deterministic processing",
      "Data-path awareness",
      "FPGA acceleration",
    ],
    accent: "#35A879",
  },
];

export function EdgeIntelligence() {
  const { activeIndex, selectIndex } = useQuietAutoCycle({
    length: agents.length,
    intervalMs: 7000,
    resumeAfterMs: 12000,
    initialIndex: 0,
  });

  const active = agents[activeIndex] ?? agents[0];

  return (
    <section
      id="edge"
      className="sb-edge relative overflow-hidden bg-[#070a10] px-6 py-24 text-white lg:px-10 lg:py-32"
    >
      <div className="sb-edge-grid absolute inset-0" />
      <div className="sb-edge-glow absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold tracking-[0.32em] text-[#6B7CFF]">
            EDGE INTELLIGENCE
          </p>

          <h2 className="mt-7 text-5xl font-semibold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-[5.4rem]">
            Intelligence
            <br />
            cannot always
            <br />
            wait for
            <br />
            <span className="text-white/35">the cloud.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            ScoreBoard extends intelligence toward the infrastructure edge —
            where signals are generated, timing matters and context can begin
            before data reaches the central intelligence layer.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="sb-edge-flow">
            <div className="sb-edge-node">
              <span className="sb-edge-node-kicker">INFRASTRUCTURE</span>
              <strong>PHYSICAL + DIGITAL SIGNALS</strong>
              <small>Compute · Network · Storage · Facility</small>
            </div>

            <div className="sb-edge-connector">
              <span />
              <i />
              <span />
            </div>

            <div className="sb-edge-node sb-edge-node-active">
              <span className="sb-edge-node-kicker">EDGE INTELLIGENCE</span>
              <strong>{active.label}</strong>
              <small>Observe · Normalize · Process · Forward</small>
            </div>

            <div className="sb-edge-connector">
              <span />
              <i />
              <span />
            </div>

            <div className="sb-edge-node">
              <span className="sb-edge-node-kicker">SCOREBOARD</span>
              <strong>SHARED INTELLIGENCE</strong>
              <small>Context · Correlation · Decision</small>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[9px] font-semibold tracking-[0.26em] text-white/25">
                EDGE AGENT ARCHITECTURE
              </span>
              <span className="text-[9px] tracking-[0.18em] text-white/20">
                SELECT EDGE LAYER
              </span>
            </div>

            <div className="sb-edge-panel">
              <div className="sb-edge-tabs">
                {agents.map((agent) => {
                  const selected = agent.id === active.id;

                  return (
                    <button
                      key={agent.id}
                      type="button"
                      onClick={() => selectIndex(agents.indexOf(agent))}
                      aria-pressed={selected}
                      className={`sb-edge-tab ${
                        selected ? "sb-edge-tab-active" : ""
                      }`}
                      style={
                        {
                          "--edge-accent": agent.accent,
                        } as React.CSSProperties
                      }
                    >
                      <span>{agent.number}</span>
                      <strong>{agent.label}</strong>
                      <i />
                    </button>
                  );
                })}
              </div>

              <div className="sb-edge-detail">
                <div className="flex items-center gap-3">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor: active.accent,
                      boxShadow: `0 0 16px ${active.accent}`,
                    }}
                  />
                  <span className="text-[8px] font-semibold tracking-[0.24em] text-white/30">
                    ACTIVE EDGE LAYER · {active.number}
                  </span>
                </div>

                <h3>{active.title}</h3>

                <p>{active.description}</p>

                <div className="sb-edge-capabilities">
                  {active.capabilities.map((capability, index) => (
                    <div key={capability}>
                      <span>0{index + 1}</span>
                      <strong>{capability}</strong>
                    </div>
                  ))}
                </div>

                <div className="sb-edge-status">
                  <span>EDGE</span>
                  <i />
                  <span>INTELLIGENCE</span>
                  <b>→</b>
                  <strong>SCOREBOARD</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[8px] font-semibold tracking-[0.2em] text-white/20">
          <span>LOCAL OBSERVATION</span>
          <span>SECURE DATA PATH</span>
          <span>DISTRIBUTED INTELLIGENCE</span>
          <span className="text-[#6B7CFF]">
            EDGE → SCOREBOARD
          </span>
        </div>
      </div>
    </section>
  );
}
