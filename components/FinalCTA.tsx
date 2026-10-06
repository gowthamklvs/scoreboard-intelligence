export function FinalCTA() {
  return (
    <section
      id="contact"
      className="sb-final relative overflow-hidden bg-[#05070b] px-6 py-28 text-white lg:px-10 lg:py-40"
    >
      <div className="sb-final-grid absolute inset-0" />
      <div className="sb-final-glow absolute inset-0" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[10px] font-semibold tracking-[0.34em] text-[#6B7CFF]">
            SCOREBOARD INTELLIGENCE™
          </p>

          <h2 className="mt-8 text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl lg:text-[6.2rem]">
            See the
            <br />
            infrastructure
            <br />
            <span className="text-white/30">differently.</span>
          </h2>

          <p className="mx-auto mt-9 max-w-2xl text-base leading-7 text-white/45 sm:text-lg">
            Infrastructure already generates the signals. ScoreBoard
            Intelligence™ connects them into context, understanding and
            operational direction.
          </p>

          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:sales@bitstar-tech.com?subject=ScoreBoard%20Intelligence%20Inquiry"
              className="sb-final-primary"
            >
              <span>Talk to Bitstar</span>
              <i>↗</i>
            </a>

            <a
              href="#technology"
              className="sb-final-secondary"
            >
              Explore the technology
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className="sb-final-principles mt-24">
          <div>
            <span>01</span>
            <strong>OBSERVE</strong>
            <small>See what infrastructure is doing.</small>
          </div>

          <div>
            <span>02</span>
            <strong>UNDERSTAND</strong>
            <small>Connect what is happening across domains.</small>
          </div>

          <div>
            <span>03</span>
            <strong>OPTIMIZE</strong>
            <small>Turn understanding into better decisions.</small>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 text-[12px] font-semibold tracking-[0.16em] text-white/55">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6B7CFF] shadow-[0_0_12px_rgba(107,124,255,0.7)]" />
          <span>INFRASTRUCTURE GENERATES DATA</span>
          <i className="h-px w-10 bg-white/10" />
          <span className="text-white/75">SCOREBOARD GENERATES INTELLIGENCE</span>
        </div>
      </div>
    </section>
  );
}
