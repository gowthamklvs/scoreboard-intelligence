import Image from "next/image";
import { InfrastructureField } from "./InfrastructureField";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8F5] text-[#0B0D0C]">
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <header className="flex items-center justify-between border-b border-black/10 py-5">
          <Image
            src="/brand/scoreboard-intelligence.png"
            alt="ScoreBoard Intelligence™"
            width={280}
            height={94}
            className="h-auto w-[190px] object-contain object-left"
            priority
          />

          <nav className="hidden items-center gap-8 text-[11px] font-medium tracking-[0.12em] text-black/65 md:flex">
            <a href="#platform" className="transition hover:text-[#5260E8]">PLATFORM</a>
            <a href="#intelligence" className="transition hover:text-[#5260E8]">INTELLIGENCE</a>
            <a href="#ai-factory" className="transition hover:text-[#5260E8]">AI FACTORY</a>
            <a href="#edge" className="transition hover:text-[#5260E8]">EDGE</a>
            <a href="#technology" className="transition hover:text-[#5260E8]">TECHNOLOGY</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-black/15 px-5 py-2.5 text-[11px] font-medium tracking-[0.1em] text-black transition hover:border-[#5260E8] hover:text-[#4654E8]"
          >
            TALK TO US
          </a>
        </header>

        <div className="grid items-center gap-14 py-20 lg:grid-cols-[1.18fr_0.62fr] lg:gap-20 lg:py-24">
          <div>
            <p className="mb-7 text-[11px] font-semibold tracking-[0.28em] text-[#5260E8]">
              AI INFRASTRUCTURE INTELLIGENCE
            </p>

            <h1 className="max-w-[900px] text-balance text-[4.3rem] font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[5.7rem]">
              Infrastructure generates data.
              <br />
              <span className="text-[#5260E8]">
                ScoreBoard generates intelligence.
              </span>
            </h1>
          </div>

          <div className="max-w-[430px] lg:pt-20">
            <p className="text-base leading-7 text-black/60 sm:text-lg">
              The intelligence layer for AI infrastructure — connecting signals
              across compute, storage, network, power, facility and operations
              to reveal what is happening, why it matters, and what to do next.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#intelligence"
                className="rounded-md bg-[#5260E8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4351DA]"
              >
                Explore ScoreBoard
              </a>

              <a
                href="#contact"
                className="rounded-md border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-black/75 transition hover:border-black/30 hover:text-black"
              >
                Talk to our team
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-[10px] tracking-[0.18em] text-black/35">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5260E8]" />
              OBSERVE · CORRELATE · UNDERSTAND · PREDICT · OPTIMIZE
            </div>
          </div>
        </div>

        <InfrastructureField />

        <div className="flex items-center justify-center py-7 text-[10px] tracking-[0.24em] text-black/30">
          SCROLL TO EXPLORE <span className="ml-3 text-[#5260E8]">↓</span>
        </div>
      </div>
    </section>
  );
}
