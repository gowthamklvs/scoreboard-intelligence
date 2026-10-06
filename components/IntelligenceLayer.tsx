"use client";

import { motion } from "motion/react";
import { useQuietAutoCycle } from "@/lib/useQuietAutoCycle";

const domains = [
  { label: "COMPUTE", detail: "WORKLOAD", signal: "82%", tone: "blue" },
  { label: "STORAGE", detail: "DATA MOVEMENT", signal: "8.2 ms", tone: "purple" },
  { label: "NETWORK", detail: "TRAFFIC", signal: "14.8 GB/s", tone: "blue" },
  { label: "FACILITY", detail: "POWER · THERMAL", signal: "31°C", tone: "green" },
  { label: "OPERATIONS", detail: "EVENTS", signal: "03:42", tone: "magenta" },
];

const intelligenceSteps = [
  "OBSERVE",
  "CORRELATE",
  "UNDERSTAND",
  "PREDICT",
  "OPTIMIZE",
];

export function IntelligenceLayer() {
  const { activeIndex } = useQuietAutoCycle({
    length: intelligenceSteps.length,
    intervalMs: 6000,
    resumeAfterMs: 12000,
  });

  return (
    <section
      id="intelligence"
      className="sb-intelligence-v2 relative overflow-hidden bg-[#090B10] text-white"
    >
      <div className="sb-intelligence-v2-grid absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <div>
            <p className="mb-7 text-[10px] font-semibold tracking-[0.30em] text-[#526CFF]">
              THE INTELLIGENCE LAYER
            </p>

            <h2 className="max-w-3xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-[5.25rem]">
              From distributed signals
              <br />
              <span className="text-white/38">to shared context.</span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-7 text-white/52 sm:text-lg">
              ScoreBoard connects the intelligence already present across
              infrastructure and creates a common operational picture.
            </p>

            <p className="mt-5 text-sm leading-6 text-white/28">
              It works across the systems already operating your AI
              infrastructure. It does not replace them.
            </p>
          </div>
        </div>

        <div className="relative mt-20 lg:mt-24">
          <div className="sb-intelligence-plane">
            <div className="sb-plane-header">
              <span>SCOREBOARD INTELLIGENCE™</span>
              <span>SHARED CONTEXT ENGINE</span>
            </div>

            <div className="sb-plane-body">
              <div className="sb-domain-column">
                <div className="sb-plane-label">INFRASTRUCTURE SIGNALS</div>

                {domains.map((domain, index) => (
                  <motion.div
                    key={domain.label}
                    className="sb-domain-signal"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: index * 0.07,
                      duration: 0.4,
                    }}
                  >
                    <span className={`sb-signal-dot sb-signal-${domain.tone}`} />

                    <div className="min-w-0 flex-1">
                      <div className="text-[9px] font-semibold tracking-[0.17em] text-white/70">
                        {domain.label}
                      </div>
                      <div className="mt-1 text-[7px] tracking-[0.13em] text-white/27">
                        {domain.detail}
                      </div>
                    </div>

                    <span className="text-[9px] text-white/35">
                      {domain.signal}
                    </span>

                    <span className={`sb-signal-line sb-line-${domain.tone}`} />
                  </motion.div>
                ))}
              </div>

              <div className="sb-plane-center">
                <div className="sb-center-orbit sb-orbit-one" />
                <div className="sb-center-orbit sb-orbit-two" />

                <motion.div
                  className="sb-intelligence-v2-core"
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="sb-intelligence-v2-core-kicker">BITSTAR®</div>

                  <div className="sb-intelligence-v2-core-title">
                    ScoreBoard
                    <span>Intelligence™</span>
                  </div>

                  <div className="sb-intelligence-v2-core-rule" />

                  <div className="sb-intelligence-v2-core-description">
                    Shared operational context
                    <br />
                    across infrastructure.
                  </div>
                </motion.div>
              </div>

              <div className="sb-output-column">
                <div className="sb-plane-label">INTELLIGENCE OUTPUT</div>

                {[
                  { label: "CONTEXT", tone: "blue" },
                  { label: "CORRELATION", tone: "purple" },
                  { label: "PREDICTION", tone: "magenta" },
                  { label: "ACTION", tone: "green" },
                ].map((output, index) => (
                  <motion.div
                    key={output.label}
                    className="sb-output-signal"
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: 0.35 + index * 0.09,
                      duration: 0.4,
                    }}
                  >
                    <span className={`sb-signal-line sb-output-line-${output.tone}`} />
                    <span className={`sb-signal-dot sb-signal-${output.tone}`} />
                    <span className="text-[9px] font-semibold tracking-[0.17em] text-white/65">
                      {output.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="sb-plane-footer">
              <span>COMPUTE</span>
              <span>DATA</span>
              <span>NETWORK</span>
              <span>FACILITY</span>
              <span>OPERATIONS</span>

              <span className="sb-footer-arrow">→</span>

              {intelligenceSteps.map((step, index) => (
                <span
                  key={step}
                  className={index === activeIndex ? "sb-step-active" : ""}
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-[8px] tracking-[0.22em] text-white/20">
          <span>ONE INTELLIGENCE LAYER</span>
          <span className="text-white/10">·</span>
          <span>MANY INFRASTRUCTURE SOURCES</span>
        </div>
      </div>
    </section>
  );
}
