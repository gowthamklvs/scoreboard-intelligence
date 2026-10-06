"use client";

import { motion } from "motion/react";

const stages = [
  {
    number: "01",
    label: "OBSERVE",
    detail: "Capture infrastructure state",
    tone: "blue",
    position: "top",
  },
  {
    number: "02",
    label: "CORRELATE",
    detail: "Connect signals across domains",
    tone: "purple",
    position: "right-top",
  },
  {
    number: "03",
    label: "UNDERSTAND",
    detail: "Build operational context",
    tone: "magenta",
    position: "right-bottom",
  },
  {
    number: "04",
    label: "PREDICT",
    detail: "Identify what is coming",
    tone: "green",
    position: "left-bottom",
  },
  {
    number: "05",
    label: "OPTIMIZE",
    detail: "Turn intelligence into action",
    tone: "blue",
    position: "left-top",
  },
];

export function IntelligenceLoop() {
  return (
    <section
      className="sb-loop-section relative overflow-hidden bg-[#F5F6F8] text-[#0B0D0C]"
    >
      <div className="sb-loop-grid absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="mb-7 text-[10px] font-semibold tracking-[0.30em] text-[#526CFF]">
              CONTINUOUS INTELLIGENCE
            </p>

            <h2 className="max-w-xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-[5.1rem]">
              Intelligence
              <br />
              is not a
              <br />
              <span className="text-black/32">snapshot.</span>
            </h2>

            <p className="mt-9 max-w-lg text-base leading-7 text-black/55 sm:text-lg">
              Infrastructure changes continuously. ScoreBoard continuously
              observes, correlates and interprets those changes to help
              infrastructure teams understand what is happening and what to
              do next.
            </p>

            <div className="mt-10 border-l-2 border-[#526CFF] pl-5">
              <div className="text-[9px] font-semibold tracking-[0.20em] text-black/30">
                THE INTELLIGENCE LOOP
              </div>
              <p className="mt-3 max-w-sm text-lg font-medium leading-7 text-black/70">
                Observe → understand → act → observe again.
              </p>
            </div>
          </div>

          <div className="relative flex min-h-[600px] items-center justify-center lg:min-h-[680px]">
            <div className="sb-loop-canvas">
              <div className="sb-loop-ring sb-loop-ring-outer" />
              <div className="sb-loop-ring sb-loop-ring-inner" />

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 700 700"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="sbLoopGradient"
                    x1="120"
                    y1="120"
                    x2="580"
                    y2="580"
                  >
                    <stop offset="0" stopColor="#526CFF" />
                    <stop offset="0.35" stopColor="#9666F5" />
                    <stop offset="0.65" stopColor="#D94B9B" />
                    <stop offset="1" stopColor="#55D98A" />
                  </linearGradient>
                </defs>

                <path
                  d="M350 82
                     C500 82 618 202 618 350
                     C618 500 500 618 350 618
                     C202 618 82 500 82 350
                     C82 202 202 82 350 82Z"
                  stroke="url(#sbLoopGradient)"
                  strokeWidth="2"
                  strokeOpacity="0.18"
                />

                <path
                  d="M350 82
                     C500 82 618 202 618 350"
                  stroke="#526CFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="3 14"
                  className="sb-loop-path"
                />

                <path
                  d="M618 350
                     C618 500 500 618 350 618"
                  stroke="#9666F5"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="3 14"
                  className="sb-loop-path sb-loop-delay-1"
                />

                <path
                  d="M350 618
                     C202 618 82 500 82 350"
                  stroke="#D94B9B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="3 14"
                  className="sb-loop-path sb-loop-delay-2"
                />

                <path
                  d="M82 350
                     C82 202 202 82 350 82"
                  stroke="#55D98A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="3 14"
                  className="sb-loop-path sb-loop-delay-3"
                />

                <circle
                  cx="350"
                  cy="82"
                  r="5"
                  fill="#526CFF"
                  className="sb-loop-node"
                />
                <circle
                  cx="618"
                  cy="350"
                  r="5"
                  fill="#9666F5"
                  className="sb-loop-node"
                />
                <circle
                  cx="350"
                  cy="618"
                  r="5"
                  fill="#D94B9B"
                  className="sb-loop-node"
                />
                <circle
                  cx="82"
                  cy="350"
                  r="5"
                  fill="#55D98A"
                  className="sb-loop-node"
                />

                <circle
                  r="6"
                  fill="#526CFF"
                  className="sb-loop-pulse"
                >
                  <animateMotion
                    dur="6s"
                    repeatCount="indefinite"
                    path="M350 82
                          C500 82 618 202 618 350
                          C618 500 500 618 350 618
                          C202 618 82 500 82 350
                          C82 202 202 82 350 82Z"
                  />
                </circle>
              </svg>

              <motion.div
                className="sb-loop-center"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <div className="text-[9px] font-semibold tracking-[0.25em] text-[#526CFF]">
                  SCOREBOARD
                </div>

                <div className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-black sm:text-3xl">
                  Continuous
                  <br />
                  Intelligence
                </div>

                <div className="mx-auto mt-5 h-px w-10 bg-[#526CFF]" />

                <div className="mt-4 text-[8px] tracking-[0.16em] text-black/30">
                  STATE → CONTEXT → DECISION
                </div>
              </motion.div>

              {stages.map((stage, index) => (
                <motion.div
                  key={stage.label}
                  className={`sb-loop-stage sb-loop-stage-${stage.position}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.45,
                  }}
                >
                  <div className={`sb-loop-stage-dot sb-tone-${stage.tone}`} />

                  <div>
                    <div className="text-[9px] font-semibold tracking-[0.20em] text-black/75">
                      {stage.number} · {stage.label}
                    </div>
                    <div className="mt-1 text-[8px] tracking-[0.08em] text-black/35">
                      {stage.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-black/8 pt-7 text-[8px] tracking-[0.20em] text-black/25">
          <span>OBSERVE</span>
          <span>→</span>
          <span>CORRELATE</span>
          <span>→</span>
          <span>UNDERSTAND</span>
          <span>→</span>
          <span>PREDICT</span>
          <span>→</span>
          <span>OPTIMIZE</span>
          <span>→</span>
          <span className="text-[#526CFF]">CONTINUE</span>
        </div>
      </div>
    </section>
  );
}
