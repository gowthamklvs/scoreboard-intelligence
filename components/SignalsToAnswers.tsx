"use client";

import { motion } from "motion/react";
import { useQuietAutoCycle } from "@/lib/useQuietAutoCycle";

const signals = [
  {
    label: "GPU UTILIZATION",
    value: "82%",
    detail: "Workload pressure rising",
    tone: "#526CFF",
  },
  {
    label: "STORAGE LATENCY",
    value: "8.2 ms",
    detail: "I/O response increasing",
    tone: "#9666F5",
  },
  {
    label: "NETWORK TRAFFIC",
    value: "14.8 GB/s",
    detail: "Fabric activity elevated",
    tone: "#D94B9B",
  },
  {
    label: "THERMAL STATE",
    value: "31°C",
    detail: "Facility load increasing",
    tone: "#55D98A",
  },
];

const answers = [
  {
    label: "CONTEXT",
    question: "What is happening?",
    answer:
      "Compute demand is increasing while data movement and facility load rise with it.",
  },
  {
    label: "INSIGHT",
    question: "Why does it matter?",
    answer:
      "The signals are related. Treating each event independently can hide the underlying workload pattern.",
  },
  {
    label: "ACTION",
    question: "What should happen next?",
    answer:
      "Investigate the workload and data path together before changing individual infrastructure components.",
  },
];

export function SignalsToAnswers() {
  const { activeIndex: active, selectIndex } = useQuietAutoCycle({
    length: signals.length,
    intervalMs: 6000,
    resumeAfterMs: 12000,
  });

  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-[#FBFBFA] text-[#0B0D0C]"
    >
      <div className="sb-signals-grid absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-7 text-[10px] font-semibold tracking-[0.30em] text-[#526CFF]">
            SIGNALS TO ANSWERS
          </p>

          <h2 className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-[5.2rem]">
            The signal is not
            <br />
            the answer.
            <br />
            <span className="text-black/30">The relationship is.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-7 text-black/55 sm:text-lg">
            ScoreBoard brings signals together, identifies relationships
            across infrastructure domains, and turns fragmented events into
            an operational explanation.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.07)]">
          <div className="flex items-center justify-between border-b border-black/8 px-6 py-4 sm:px-8">
            <div className="text-[9px] font-semibold tracking-[0.24em] text-black/35">
              LIVE INTELLIGENCE SCENARIO
            </div>

            <div className="flex items-center gap-2 text-[8px] tracking-[0.18em] text-black/30">
              <span className="h-1.5 w-1.5 rounded-full bg-[#55D98A] shadow-[0_0_8px_rgba(85,217,138,0.7)]" />
              CORRELATING
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.82fr_0.9fr_1.28fr]">
            {/* SIGNALS */}
            <div className="border-b border-black/8 p-6 lg:border-b-0 lg:border-r sm:p-8">
              <div className="mb-6 text-[9px] font-semibold tracking-[0.22em] text-black/30">
                INFRASTRUCTURE SIGNALS
              </div>

              <div className="space-y-3">
                {signals.map((signal, index) => (
                  <motion.button
                    key={signal.label}
                    type="button"
                    onClick={() => selectIndex(index)}
                    className={`group relative w-full rounded-xl border p-4 text-left transition ${
                      active === index
                        ? "border-black/15 bg-[#F7F8FB] shadow-[0_10px_25px_rgba(15,23,42,0.05)]"
                        : "border-black/7 bg-white hover:border-black/12"
                    }`}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span
                      className="absolute bottom-0 left-0 top-0 w-0.5 rounded-full"
                      style={{ backgroundColor: signal.tone }}
                    />

                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[9px] font-semibold tracking-[0.18em] text-black/70">
                          {signal.label}
                        </div>
                        <div className="mt-1 text-[8px] text-black/30">
                          {signal.detail}
                        </div>
                      </div>

                      <div
                        className="text-sm font-semibold"
                        style={{ color: signal.tone }}
                      >
                        {signal.value}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-7 border-t border-black/8 pt-5 text-[8px] tracking-[0.16em] text-black/25">
                FOUR SIGNALS
                <span className="mx-2">→</span>
                ONE OPERATIONAL PICTURE
              </div>
            </div>

            {/* CORRELATION */}
            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden border-b border-black/8 bg-[#F7F8FB] p-8 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(82,108,255,0.10),transparent_48%)]" />

              <div className="sb-correlation-lines absolute inset-0">
                <span className="sb-correlation-line sb-correlation-blue" />
                <span className="sb-correlation-line sb-correlation-purple" />
                <span className="sb-correlation-line sb-correlation-magenta" />
                <span className="sb-correlation-line sb-correlation-green" />
              </div>

              <motion.div
                key={active}
                className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-full border border-[#526CFF]/20 bg-white text-center shadow-[0_20px_60px_rgba(82,108,255,0.12)]"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35 }}
              >
                <div className="text-[8px] font-semibold tracking-[0.24em] text-[#526CFF]">
                  SCOREBOARD
                </div>

                <div className="mt-3 text-xl font-semibold tracking-[-0.04em]">
                  Correlation
                </div>

                <div className="mt-2 text-[8px] tracking-[0.15em] text-black/30">
                  CROSS-DOMAIN CONTEXT
                </div>

                <div className="mt-4 flex gap-1.5">
                  {signals.map((signal) => (
                    <span
                      key={signal.label}
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor: signal.tone,
                        opacity: 0.85,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-semibold tracking-[0.20em] text-black/25">
                SIGNALS → RELATIONSHIPS → CONTEXT
              </div>
            </div>

            {/* ANSWERS */}
            <div className="p-6 sm:p-8">
              <div className="mb-6 text-[9px] font-semibold tracking-[0.22em] text-black/30">
                FROM SIGNALS TO ANSWERS
              </div>

              <div className="space-y-3">
                {answers.map((item, index) => (
                  <motion.button
                    key={item.label}
                    type="button"
                    onClick={() => selectIndex(index)}
                    className={`w-full rounded-xl border p-5 text-left transition ${
                      active === index
                        ? "border-[#526CFF]/25 bg-[#F7F8FF]"
                        : "border-black/7 bg-white hover:border-black/12"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[9px] font-semibold tracking-[0.20em] text-[#526CFF]">
                          {item.label}
                        </div>

                        <div className="mt-2 text-base font-semibold tracking-[-0.02em] text-black/80">
                          {item.question}
                        </div>
                      </div>

                      <span className="text-lg text-[#526CFF]">↗</span>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: active === index ? "auto" : 0,
                        opacity: active === index ? 1 : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm leading-6 text-black/55">
                        {item.answer}
                      </p>
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-black/8 px-6 py-5 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="text-[8px] tracking-[0.18em] text-black/25">
                EXAMPLE INTELLIGENCE EVENT
              </div>

              <div className="flex gap-2">
                {signals.map((signal, index) => (
                  <button
                    key={signal.label}
                    type="button"
                    onClick={() => selectIndex(index)}
                    className="h-1.5 w-8 rounded-full bg-black/8 transition hover:bg-black/15"
                    aria-label={`Select ${signal.label}`}
                  >
                    <span
                      className="block h-full rounded-full transition-all"
                      style={{
                        width: active === index ? "100%" : "35%",
                        backgroundColor: signal.tone,
                      }}
                    />
                  </button>
                ))}
              </div>

              <div className="text-[8px] font-semibold tracking-[0.18em] text-[#526CFF]">
                CONTEXT OVER ISOLATION
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
