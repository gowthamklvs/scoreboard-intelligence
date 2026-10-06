"use client";

import { motion } from "motion/react";

const domains = [
  { label: "COMPUTE", meta: "GPU · CPU · ACCELERATION" },
  { label: "MEMORY", meta: "HBM · DDR · FABRIC" },
  { label: "STORAGE", meta: "IO · BANDWIDTH · LATENCY" },
  { label: "NETWORK", meta: "FABRIC · TRAFFIC · EVENTS" },
  { label: "POWER", meta: "LOAD · STATE · ENERGY" },
  { label: "FACILITY", meta: "THERMAL · COOLING · ENVIRONMENT" },
  { label: "OPERATIONS", meta: "LOGS · INCIDENTS · EVENTS" },
];

const outputs = [
  { label: "CONTEXT", value: "What is happening?" },
  { label: "INSIGHT", value: "Why does it matter?" },
  { label: "ACTION", value: "What should happen next?" },
];

const leftY = [70, 135, 200, 265, 330, 395, 460];
const rightY = [145, 250, 355];

export function InfrastructureField() {
  return (
    <div
      className="sb-editorial-field relative overflow-hidden rounded-[22px] border border-black/10 bg-white"
    >
      <div className="sb-editorial-grid absolute inset-0" />

      <div className="relative z-20 flex items-center justify-between border-b border-black/8 px-6 py-4 lg:px-8">
        <div className="text-[10px] font-semibold tracking-[0.24em] text-black/45">
          INFRASTRUCTURE INTELLIGENCE FIELD
        </div>

        <div className="flex items-center gap-2 text-[9px] tracking-[0.18em] text-black/35">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5260E8]" />
          SIGNALS ACTIVE
        </div>
      </div>

      <div className="relative min-h-[500px] px-6 py-10 lg:px-10">
        <svg
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
          viewBox="0 0 1200 560"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="signalLine" x1="0" x2="1">
              <stop offset="0" stopColor="#5260E8" stopOpacity="0.18" />
              <stop offset="0.5" stopColor="#5260E8" stopOpacity="0.62" />
              <stop offset="1" stopColor="#5260E8" stopOpacity="0.22" />
            </linearGradient>
          </defs>

          {leftY.map((y, index) => (
            <path
              key={`left-${index}`}
              d={`M 250 ${y} C 390 ${y} 445 280 585 280`}
              fill="none"
              stroke="url(#signalLine)"
              strokeWidth="1.7"
              strokeDasharray="5 9"
              className="sb-editorial-signal"
              style={{ animationDelay: `${index * -0.35}s` }}
            />
          ))}

          {rightY.map((y, index) => (
            <path
              key={`right-${index}`}
              d={`M 615 280 C 760 280 805 ${y} 950 ${y}`}
              fill="none"
              stroke="url(#signalLine)"
              strokeWidth="1.7"
              strokeDasharray="5 9"
              className="sb-editorial-signal"
              style={{ animationDelay: `${-1.2 - index * 0.4}s` }}
            />
          ))}

          {leftY.map((y, index) => (
            <circle
              key={`left-pulse-${index}`}
              r="3"
              fill="#5260E8"
            >
              <animateMotion
                dur={`${3.8 + (index % 3) * 0.4}s`}
                repeatCount="indefinite"
                begin={`${-index * 0.5}s`}
                path={`M 250 ${y} C 390 ${y} 445 280 585 280`}
              />
            </circle>
          ))}

          {rightY.map((y, index) => (
            <circle
              key={`right-pulse-${index}`}
              r="3"
              fill="#5260E8"
            >
              <animateMotion
                dur={`${3.4 + index * 0.4}s`}
                repeatCount="indefinite"
                begin={`${-index * 0.8}s`}
                path={`M 615 280 C 760 280 805 ${y} 950 ${y}`}
              />
            </circle>
          ))}
        </svg>

        <div className="relative z-10 grid min-h-[420px] items-center gap-8 lg:grid-cols-[1fr_0.72fr_1fr] lg:gap-10">
          <div className="flex flex-col gap-2">
            <div className="mb-2 text-[9px] font-semibold tracking-[0.2em] text-black/30">
              INFRASTRUCTURE SIGNALS
            </div>

            {domains.map((domain, index) => (
              <motion.div
                key={domain.label}
                className="sb-domain-card"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
              >
                <span className="sb-domain-marker" />
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.16em] text-black/75">
                    {domain.label}
                  </div>
                  <div className="mt-1 text-[8px] tracking-[0.1em] text-black/35">
                    {domain.meta}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative flex items-center justify-center">
            <motion.div
              className="sb-intelligence-core"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.65 }}
            >
              <div className="text-[10px] font-semibold tracking-[0.24em] text-[#5260E8]">
                SCOREBOARD
              </div>
              <div className="mt-2 text-xl font-semibold tracking-[-0.03em] text-black">
                Intelligence
              </div>
              <div className="mt-4 h-px w-16 bg-black/10" />
              <div className="mt-4 text-[8px] tracking-[0.16em] text-black/35">
                CORRELATION ENGINE
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="mb-1 text-[9px] font-semibold tracking-[0.2em] text-black/30">
              FROM SIGNALS TO ANSWERS
            </div>

            {outputs.map((output, index) => (
              <motion.div
                key={output.label}
                className="sb-output-card"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + index * 0.12, duration: 0.45 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-black/70">
                    {output.label}
                  </span>
                  <span className="text-[#5260E8]">↗</span>
                </div>
                <div className="mt-3 text-sm text-black/50">
                  {output.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-20 border-t border-black/8 px-6 py-3 text-center text-[8px] tracking-[0.2em] text-black/25">
        COMPUTE · DATA · NETWORK · FACILITY · OPERATIONS
      </div>
    </div>
  );
}
