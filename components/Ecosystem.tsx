"use client";

import { useEffect, useState } from "react";

const sources = [
  { id: "compute", label: "COMPUTE", detail: "GPU · CPU · ACCELERATORS" },
  { id: "storage", label: "STORAGE", detail: "IOPS · LATENCY · THROUGHPUT" },
  { id: "network", label: "NETWORK", detail: "TRAFFIC · EVENTS · PATHS" },
  { id: "bmc", label: "BMC / REDFISH", detail: "SENSORS · POWER · HEALTH" },
  { id: "dcim", label: "DCIM", detail: "FACILITY · CAPACITY · EVENTS" },
  { id: "facility", label: "FACILITY", detail: "POWER · THERMAL · ENVIRONMENT" },
  { id: "vendor", label: "VENDOR TOOLS", detail: "DOMAIN-SPECIFIC OUTPUT" },
  { id: "operations", label: "OPERATIONS", detail: "INCIDENTS · HISTORY · WORKFLOWS" },
];

export function Ecosystem() {
  const [activeId, setActiveId] = useState("compute");

  const active =
    sources.find((source) => source.id === activeId) ?? sources[0];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveId((current) => {
        const index = sources.findIndex((source) => source.id === current);
        return sources[(index + 1) % sources.length].id;
      });
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="ecosystem"
      className="sb-ecosystem relative overflow-hidden bg-[#f4f3ef] px-6 py-24 text-[#10131a] lg:px-10 lg:py-32"
    >
      <div className="sb-ecosystem-grid absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="max-w-xl">
            <p className="text-[10px] font-semibold tracking-[0.32em] text-[#3156d8]">
              ECOSYSTEM
            </p>

            <h2 className="mt-7 text-5xl font-semibold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-[5.25rem]">
              One
              <br />
              intelligence
              <br />
              layer.
              <br />
              <span className="text-[#85878d]">Many sources.</span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-7 text-[#555963] sm:text-lg">
              ScoreBoard works across the infrastructure systems already in
              place. It does not replace domain-specific tools — it connects
              the intelligence they produce.
            </p>

            <div className="mt-10 border-l-2 border-[#3156d8] pl-5">
              <p className="text-[9px] font-semibold tracking-[0.22em] text-[#747780]">
                THE PRINCIPLE
              </p>
              <p className="mt-2 text-sm leading-6 text-[#3f434b]">
                Keep the tools. Connect the intelligence.
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[9px] font-semibold tracking-[0.26em] text-[#888b91]">
                INFRASTRUCTURE INTELLIGENCE ECOSYSTEM
              </span>
              <span className="text-[9px] tracking-[0.18em] text-[#a0a2a7]">
                SELECT A SOURCE
              </span>
            </div>

            <div className="sb-ecosystem-map">
              <div className="sb-ecosystem-lines" />

              <div className="sb-ecosystem-sources">
                {sources.map((source, index) => {
                  const selected = source.id === active.id;

                  return (
                    <button
                      key={source.id}
                      type="button"
                      onClick={() => setActiveId(source.id)}
                      aria-pressed={selected}
                      className={`sb-ecosystem-source ${
                        selected ? "sb-ecosystem-source-active" : ""
                      }`}
                    >
                      <span className="sb-ecosystem-source-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="sb-ecosystem-source-copy">
                        <strong>{source.label}</strong>
                        <small>{source.detail}</small>
                      </span>

                      <i />
                    </button>
                  );
                })}
              </div>

              <div className="sb-ecosystem-core">
                <div className="sb-ecosystem-core-ring">
                  <span />
                </div>

                <p>SCOREBOARD</p>
                <strong>INTELLIGENCE™</strong>
                <small>SHARED CONTEXT</small>
              </div>

              <div className="sb-ecosystem-output">
                <span>OUTPUT</span>
                <strong>INFRASTRUCTURE<br />UNDERSTANDING</strong>
                <small>
                  Context · Correlation · Insight · Decision
                </small>
              </div>

              <div className="sb-ecosystem-active">
                <span>ACTIVE SOURCE</span>
                <strong>{active.label}</strong>
                <small>{active.detail}</small>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-3 text-[8px] font-semibold tracking-[0.18em] text-[#999ba0]">
              <span>DOMAIN TOOLS REMAIN</span>
              <span>DATA PATHS REMAIN</span>
              <span>VENDOR AGNOSTIC</span>
              <span className="text-[#3156d8]">
                SHARED INTELLIGENCE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
