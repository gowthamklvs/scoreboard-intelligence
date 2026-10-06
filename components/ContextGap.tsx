"use client";

import { motion } from "motion/react";

const signals = [
  {
    label: "COMPUTE",
    value: "GPU utilization · 82%",
    detail: "Sees workload pressure",
  },
  {
    label: "STORAGE",
    value: "I/O latency · 8.2 ms",
    detail: "Sees data movement",
  },
  {
    label: "NETWORK",
    value: "Fabric traffic · 14.8 GB/s",
    detail: "Sees network behavior",
  },
  {
    label: "POWER",
    value: "Load · 4.8 kW",
    detail: "Sees energy state",
  },
  {
    label: "FACILITY",
    value: "Thermal · 31°C",
    detail: "Sees environmental state",
  },
  {
    label: "OPERATIONS",
    value: "Incident · 03:42",
    detail: "Sees operational events",
  },
];

export function ContextGap() {
  return (
    <section
      id="context"
      className="sb-fragmentation-section relative overflow-hidden bg-[#F7F8F5] text-[#0B0D0C]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <div className="max-w-2xl">
            <p className="mb-7 text-[11px] font-semibold tracking-[0.28em] text-[#5260E8]">
              THE CONTEXT GAP
            </p>

            <h2 className="text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-[5.3rem]">
              The data exists.
              <br />
              <span className="text-black/35">
                The context is missing.
              </span>
            </h2>

            <p className="mt-9 max-w-xl text-base leading-7 text-black/58 sm:text-lg">
              AI infrastructure already produces signals across compute,
              storage, network, power, facility and operations. Each system
              sees part of the picture. The challenge is understanding what
              those signals mean together.
            </p>

            <div className="mt-10 flex items-center gap-3 text-[10px] font-medium tracking-[0.18em] text-black/35">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5260E8]" />
              MANY SIGNALS · FRAGMENTED CONTEXT
            </div>
          </div>

          <div className="relative">
            <div className="mb-4 flex items-center justify-between px-1">
              <span className="text-[9px] font-semibold tracking-[0.22em] text-black/30">
                WHAT EACH SYSTEM CAN SEE
              </span>
              <span className="text-[9px] tracking-[0.18em] text-black/25">
                PARTIAL VIEWS
              </span>
            </div>

            <div className="sb-fragmentation-stack">
              {signals.map((signal, index) => (
                <motion.div
                  key={signal.label}
                  className="sb-fragment-card"
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.45,
                  }}
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="sb-fragment-dot" />

                    <div className="min-w-0">
                      <div className="text-[10px] font-semibold tracking-[0.18em] text-black/72">
                        {signal.label}
                      </div>

                      <div className="mt-1 truncate text-sm text-black/52">
                        {signal.value}
                      </div>
                    </div>
                  </div>

                  <div className="hidden text-right sm:block">
                    <div className="text-[8px] tracking-[0.14em] text-black/25">
                      {signal.detail}
                    </div>
                    <div className="mt-2 flex items-center justify-end gap-1">
                      <span className="h-px w-8 bg-black/10" />
                      <span className="h-1 w-1 rounded-full bg-black/15" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-black/8" />
              <div className="text-[9px] font-semibold tracking-[0.18em] text-black/25">
                NO SHARED CONTEXT
              </div>
              <div className="h-px flex-1 bg-black/8" />
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-black/8 pt-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-[9px] font-semibold tracking-[0.2em] text-black/30">
                SIGNAL
              </div>
              <div className="mt-2 text-sm text-black/55">
                A system reports what it can observe.
              </div>
            </div>

            <div>
              <div className="text-[9px] font-semibold tracking-[0.2em] text-black/30">
                CONTEXT
              </div>
              <div className="mt-2 text-sm text-black/55">
                Meaning appears when signals are connected.
              </div>
            </div>

            <div>
              <div className="text-[9px] font-semibold tracking-[0.2em] text-[#5260E8]">
                SCOREBOARD
              </div>
              <div className="mt-2 text-sm font-medium text-black/70">
                Intelligence begins where isolated signals become a picture.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
