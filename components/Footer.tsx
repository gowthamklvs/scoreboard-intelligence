export function Footer() {
  return (
    <footer className="sb-footer bg-[#05070b] text-white">
      <div className="sb-footer-main mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.95fr]">
          <div>
            <img
              src="/brand/scoreboard-intelligence.png"
              alt="ScoreBoard Intelligence™"
              className="sb-footer-scoreboard-logo"
            />

            <p className="mt-7 max-w-md text-sm leading-7 text-white/38">
              Infrastructure generates data. ScoreBoard Intelligence™
              generates intelligence.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <img
                src="/brand/bitstar.jpeg"
                alt="Bitstar®"
                className="sb-footer-bitstar-logo"
              />

              <div>
                <p className="text-[9px] font-semibold tracking-[0.18em] text-white/22">
                  AN INTELLIGENCE PLATFORM BY
                </p>
                <p className="mt-1 text-sm font-semibold tracking-[0.08em] text-white/65">
                  Bitstar®
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="sb-footer-heading">EXPLORE</p>

            <nav className="mt-5 flex flex-col gap-3">
              <a href="#intelligence">Intelligence</a>
              <a href="#ai-factory">AI Factory</a>
              <a href="#edge">Edge</a>
              <a href="#technology">Technology</a>
              <a href="#ecosystem">Ecosystem</a>
              <a href="#insights">Insights</a>
            </nav>
          </div>

          <div>
            <p className="sb-footer-heading">PRODUCT</p>

            <nav className="mt-5 flex flex-col gap-3">
              <a href="#intelligence">Intelligence Layer</a>
              <a href="#edge">Software Edge Agent™</a>
              <a href="#edge">Hardware Edge Agent</a>
              <a href="#economics">Infrastructure Economics</a>
              <a href="#technology">Technology</a>
            </nav>
          </div>

          <div>
            <p className="sb-footer-heading">CONTACT</p>

            <div className="mt-5 flex flex-col gap-4 text-[12px] leading-5">
              <a href="mailto:sales@bitstar-tech.com">
                sales@bitstar-tech.com
              </a>

              <a href="mailto:info@bitstar-tech.com">
                info@bitstar-tech.com
              </a>

              <a href="mailto:support@bitstar-tech.com">
                support@bitstar-tech.com
              </a>

              <a href="tel:+919971647227">
                +91 9971647227
              </a>
            </div>
          </div>
        </div>

        <div className="sb-footer-locations mt-16 grid gap-8 border-t border-white/7 pt-8 sm:grid-cols-2">
          <div>
            <p className="sb-footer-heading">INDIA</p>
            <p className="mt-3 max-w-sm text-[11px] leading-6 text-white/32">
              Novel MSR Tech Park,
              <br />
              Marathahalli, Bengaluru 560037,
              <br />
              Karnataka, India
            </p>
          </div>

          <div>
            <p className="sb-footer-heading">USA</p>
            <p className="mt-3 max-w-sm text-[11px] leading-6 text-white/32">
              4500 Great America Parkway,
              <br />
              Santa Clara, CA 95054,
              <br />
              USA
            </p>
          </div>
        </div>
      </div>

      <div className="sb-footer-bottom border-t border-white/7">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-7 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p className="text-[10px] tracking-[0.10em] text-white/35">
            © 2026 Bitstar Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-7 gap-y-3 text-[10px] tracking-[0.08em] text-white/32">
            <span>Bitstar®</span>
            <span>ScoreBoard Intelligence™</span>
            <span>Bitstar Software Edge Agent™</span>
            <span>Engineering. Intelligence. Infrastructure.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
