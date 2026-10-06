"use client";

import { motion } from "motion/react";

const domains = [
  {
    name: "COMPUTE",
    signal: "GPU / CPU / ACCELERATION",
    state: "82% utilization",
    behavior: "Workload pressure",
    relationship: "Compute ↔ data movement",
    tone: "blue",
  },
  {
    name: "DATA",
    signal: "STORAGE / MEMORY / I/O",
    state: "8.2 ms latency",
    behavior: "Movement pattern",
    relationship: "Data ↔ compute demand",
    tone: "purple",
  },
  {
    name: "NETWORK",
    signal: "FABRIC / TRAFFIC / EVENTS",
    state: "14.8 GB/s",
    behavior: "Traffic behavior",
    relationship: "Traffic ↔ workload state",
    tone: "magenta",
  },
  {
    name: "POWER",
    signal: "LOAD / ENERGY / STATE",
    state: "4.8 kW",
    behavior: "Energy behavior",
    relationship: "Power ↔ utilization",
    tone: "green",
  },
  {
    name: "FACILITY",
    signal: "THERMAL / COOLING / ENVIRONMENT",
    state: "31°C",
    behavior: "Thermal condition",
    relationship: "Thermal ↔ infrastructure load",
    tone: "blue",
  },
  {
    name: "OPERATIONS",
    signal: "LOGS / INCIDENTS / EVENTS",
    state: "03:42 incident",
    behavior: "Operational pattern",
    relationship: "Events ↔ system state",
    tone: "purple",
  },
];

const toneMap = {
  blue: "#526CFF",
  purple: "#9666F5",
  magenta: "#D94B9B",
  green: "#55D98A",
};

export function WhatScoreBoardUnderstands() {
  return (
    <section
      id="understanding"
      className="relative overflow-hidden bg-[#F5F6F8] text-[#0B0D0C]"
    >
      <div className="sb-understand-grid absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-7 text-[10px] font-semibold tracking-[0.30em] text-[#526CFF]">
              WHAT SCOREBOARD UNDERSTANDS
            </p>

            <h2 className="max-w-xl text-balance text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[5rem]">
              From
              <br />
              infrastructure
              <br />
              <span className="text-black/30">signals to meaning.</span>
            </h2>

            <p className="mt-9 max-w-lg text-base leading-7 text-black/55 sm:text-lg">
              ScoreBoard looks across the infrastructure stack — not at one
              system in isolation. It turns individual signals into operational
              understanding.
            </p>

            <div className="mt-10 grid max-w-md grid-cols-3 border-y border-black/10 py-5">
              <div>
                <div className="text-[8px] font-semibold tracking-[0.20em] text-black/30">
                  LEVEL 01
                </div>
                <div className="mt-2 text-sm font-medium">STATE</div>
              </div>

              <div>
                <div className="text-[8px] font-semibold tracking-[0.20em] text-black/30">
                  LEVEL 02
                </div>
                <div className="mt-2 text-sm font-medium">BEHAVIOR</div>
              </div>

              <div>
                <div className="text-[8px] font-semibold tracking-[0.20em] text-black/30">
                  LEVEL 03
                </div>
                <div className="mt-2 text-sm font-medium">RELATIONSHIP</div>
              </div>
            </div>

            <div className="mt-9 border-l-2 border-[#526CFF] pl-5">
              <div className="text-[9px] font-semibold tracking-[0.20em] text-black/30">
                THE DIFFERENCE
              </div>
              <p className="mt-3 max-w-sm text-lg font-medium leading-7 text-black/70">
                Seeing a signal is not the same as understanding what it means.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="mb-4 flex items-center justify-between px-4 text-[9px] font-semibold tracking-[0.22em] text-black/30">
              <span>INFRASTRUCTURE DOMAIN</span>
              <span>CROSS-DOMAIN INTELLIGENCE</span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-black/8 bg-white/75 shadow-[0_25px_70px_rgba(15,23,42,0.06)] backdrop-blur">
              <div className="grid grid-cols-[1.15fr_0.75fr_0.9fr_1.25fr] border-b border-black/8 bg-black/[0.018] px-5 py-4 text-[8px] font-semibold tracking-[0.18em] text-black/30 sm:px-7">
                <span>DOMAIN</span>
                <span>STATE</span>
                <span>BEHAVIOR</span>
                <span>RELATIONSHIP</span>
              </div>

              {domains.map((domain, index) => {
                const tone =
                  toneMap[domain.tone as keyof typeof toneMap];

                return (
                  <motion.div
                    key={domain.name}
                    className="group relative grid grid-cols-[1.15fr_0.75fr_0.9fr_1.25fr] items-center border-b border-black/7 px-5 py-6 last:border-b-0 sm:px-7"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                  >
                    <div
                      className="absolute inset-y-0 left-0 w-0.5 opacity-70 transition-opacity group-hover:opacity-100"
                      style={{ backgroundColor: tone }}
                    />

                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor: tone,
                            boxShadow: `0 0 10px ${tone}66`,
                          }}
                        />
                        <span className="text-[10px] font-semibold tracking-[0.20em] text-black/80">
                          {domain.name}
                        </span>
                      </div>

                      <div className="mt-2 pl-5 text-[8px] tracking-[0.10em] text-black/30">
                        {domain.signal}
                      </div>
                    </div>

                    <div className="text-xs font-medium text-black/55">
                      {domain.state}
                    </div>

                    <div className="text-xs text-black/50">
                      {domain.behavior}
                    </div>

                    <div className="text-xs font-medium text-black/70">
                      {domain.relationship}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="relative mt-5 flex items-center justify-center gap-4 text-[8px] font-semibold tracking-[0.20em] text-black/25">
              <span>LOCAL SIGNALS</span>
              <span className="h-px w-16 bg-black/10" />
              <span className="text-[#526CFF]">SHARED UNDERSTANDING</span>
              <span className="h-px w-16 bg-black/10" />
              <span>OPERATIONAL CONTEXT</span>
            </div>

            <motion.div
              className="mt-10 rounded-2xl border border-[#526CFF]/15 bg-[#EEF1FF] px-6 py-7 sm:px-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-[9px] font-semibold tracking-[0.22em] text-[#526CFF]">
                    CROSS-DOMAIN VIEW
                  </div>
                  <div className="mt-2 text-lg font-semibold tracking-[-0.02em] text-black">
                    The signal is only the beginning.
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[8px] tracking-[0.18em] text-black/30">
                    SCOREBOARD CONNECTS
                  </div>
                  <div className="mt-1 text-sm font-medium text-black/65">
                    State → Behavior → Relationship
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-black/8 pt-7 text-[8px] tracking-[0.20em] text-black/25">
          <span>COMPUTE</span>
          <span>DATA</span>
          <span>NETWORK</span>
          <span>POWER</span>
          <span>FACILITY</span>
          <span>OPERATIONS</span>
          <span className="text-[#526CFF]">→ SHARED CONTEXT</span>
        </div>
      </div>
    </section>
  );
}
