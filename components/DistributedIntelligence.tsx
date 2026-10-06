"use client";

import { motion } from "motion/react";

const systems = [
  {
    number: "01",
    label: "COMPUTE",
    description: "GPU · CPU · ACCELERATION",
    intelligence: "WORKLOAD INTELLIGENCE",
    signal: "82%",
  },
  {
    number: "02",
    label: "STORAGE",
    description: "IO · BANDWIDTH · LATENCY",
    intelligence: "DATA MOVEMENT",
    signal: "8.2 ms",
  },
  {
    number: "03",
    label: "NETWORK",
    description: "FABRIC · TRAFFIC · EVENTS",
    intelligence: "TRAFFIC INTELLIGENCE",
    signal: "14.8 GB/s",
  },
  {
    number: "04",
    label: "BMC / REDFISH",
    description: "THERMAL · POWER · HEALTH",
    intelligence: "SYSTEM HEALTH",
    signal: "31°C",
  },
  {
    number: "05",
    label: "DCIM",
    description: "CAPACITY · ASSETS · FACILITY",
    intelligence: "FACILITY STATE",
    signal: "94%",
  },
  {
    number: "06",
    label: "OPERATIONS",
    description: "LOGS · INCIDENTS · EVENTS",
    intelligence: "OPERATIONAL EVENTS",
    signal: "03:42",
  },
];

export function DistributedIntelligence() {
  return (
    <section
      id="platform"
      className="sb-stack-section relative overflow-hidden bg-[#E9ECF2] text-[#0B0D0C]"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div className="max-w-2xl">
            <p className="mb-7 text-[11px] font-semibold tracking-[0.28em] text-[#5260E8]">
              EXISTING INTELLIGENCE
            </p>

            <h2 className="text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-[5.15rem]">
              Your infrastructure
              <br />
              already knows
              <br />
              <span className="text-black/35">a lot.</span>
            </h2>

            <p className="mt-9 max-w-xl text-base leading-7 text-black/58 sm:text-lg">
              Modern infrastructure is not a collection of passive devices.
              Every layer already produces intelligence about its own domain.
            </p>

            <div className="mt-10 max-w-md">
              <div className="text-[9px] font-semibold tracking-[0.2em] text-black/30">
                THE LIMIT
              </div>

              <div className="mt-4 border-l-2 border-[#5260E8] pl-5">
                <p className="text-lg font-medium leading-7 text-black/72">
                  Each system understands its own domain.
                </p>
                <p className="mt-1 text-lg leading-7 text-black/38">
                  Cross-domain context is still missing.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mb-4 flex items-center justify-between px-1">
              <span className="text-[9px] font-semibold tracking-[0.22em] text-black/30">
                INTELLIGENCE BY DOMAIN
              </span>
              <span className="text-[9px] tracking-[0.18em] text-black/25">
                LOCAL VISIBILITY
              </span>
            </div>

            <div className="sb-stack-diagram">
              {systems.map((system, index) => (
                <motion.div
                  key={system.label}
                  className="sb-stack-row"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.4,
                  }}
                >
                  <div className="sb-stack-number">{system.number}</div>

                  <div className="min-w-[145px]">
                    <div className="text-[11px] font-semibold tracking-[0.16em] text-black/78">
                      {system.label}
                    </div>
                    <div className="mt-1 text-[8px] tracking-[0.1em] text-black/32">
                      {system.description}
                    </div>
                  </div>

                  <div className="hidden h-px flex-1 bg-black/8 sm:block" />

                  <div className="hidden min-w-[150px] text-right sm:block">
                    <div className="text-[8px] tracking-[0.12em] text-black/28">
                      {system.intelligence}
                    </div>
                  </div>

                  <div className="flex min-w-[62px] items-center justify-end gap-3">
                    <span className="text-xs font-medium text-black/52">
                      {system.signal}
                    </span>
                    <span className="sb-stack-status" />
                  </div>
                </motion.div>
              ))}

              <div className="sb-stack-convergence">
                <div className="sb-convergence-lines">
                  {systems.map((system) => (
                    <span key={system.label} />
                  ))}
                </div>

                <div className="sb-convergence-label">
                  <div className="text-[9px] font-semibold tracking-[0.2em] text-[#5260E8]">
                    THE MISSING CONNECTION
                  </div>
                  <div className="mt-2 text-lg font-semibold tracking-[-0.02em] text-black">
                    CROSS-DOMAIN CONTEXT
                  </div>
                  <div className="mt-2 text-[9px] tracking-[0.14em] text-black/30">
                    WHERE DISTRIBUTED INTELLIGENCE BECOMES A PICTURE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-6 border-t border-black/10 pt-8 md:grid-cols-3">
          <div>
            <div className="text-[9px] font-semibold tracking-[0.2em] text-black/30">
              LOCAL
            </div>
            <div className="mt-2 text-sm text-black/50">
              Each system understands its own signals.
            </div>
          </div>

          <div>
            <div className="text-[9px] font-semibold tracking-[0.2em] text-black/30">
              DISTRIBUTED
            </div>
            <div className="mt-2 text-sm text-black/50">
              Intelligence exists across the infrastructure stack.
            </div>
          </div>

          <div>
            <div className="text-[9px] font-semibold tracking-[0.2em] text-[#5260E8]">
              CROSS-DOMAIN
            </div>
            <div className="mt-2 text-sm font-medium text-black/70">
              The meaning emerges when those domains are connected.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
