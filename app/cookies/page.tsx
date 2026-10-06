import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#f5f4ef] text-black">
      <header className="border-b border-black/8 bg-white/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 lg:px-10">
          <Link href="/" className="text-[11px] font-semibold tracking-[0.14em] text-black/65 hover:text-black">
            SCOREBOARD INTELLIGENCE™
          </Link>
          <Link href="/" className="text-[11px] font-medium tracking-[0.12em] text-black/55 hover:text-black">
            BACK TO WEBSITE
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-16 lg:px-10 lg:py-24">
        <p className="text-[10px] font-semibold tracking-[0.18em] text-[#5260E8]">BITSTAR TECHNOLOGIES</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-black sm:text-5xl">Cookie Policy</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-black/55">How ScoreBoard Intelligence™ uses cookies and similar technologies.</p>
        <p className="mt-6 text-[11px] font-medium tracking-[0.12em] text-black/35">EFFECTIVE DATE: 6 OCTOBER 2026</p>
        <div className="mt-14 border-t border-black/8 pt-2">
          <section className="mt-10">
            <h2 className="text-xl font-semibold tracking-[-0.02em] text-black">1. Our approach</h2>
            <p className="mt-4 whitespace-pre-line text-[15px] leading-8 text-black/65">ScoreBoard Intelligence™ is designed to minimize tracking. Our planned website analytics uses Plausible Analytics in its privacy-first, cookieless configuration. Plausible states that its standard analytics does not use cookies or persistent identifiers and does not build persistent individual visitor profiles.</p>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold tracking-[-0.02em] text-black">2. Analytics</h2>
            <p className="mt-4 whitespace-pre-line text-[15px] leading-8 text-black/65">The purpose of analytics is to understand aggregate website traffic, such as visits, page views, referral sources, countries, devices, browsers, and selected website interactions. This helps Bitstar understand whether ScoreBoard Intelligence™ content is useful and where visitors come from.</p>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold tracking-[-0.02em] text-black">3. Cookies</h2>
            <p className="mt-4 whitespace-pre-line text-[15px] leading-8 text-black/65">We do not intend to use advertising cookies or persistent analytics cookies on the ScoreBoard Intelligence™ website. If future functionality introduces a technology that requires cookies or similar consent-based storage, this policy and the website consent experience will be updated before that technology is enabled where required.</p>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold tracking-[-0.02em] text-black">4. Essential technologies</h2>
            <p className="mt-4 whitespace-pre-line text-[15px] leading-8 text-black/65">The hosting platform, security controls, or website infrastructure may use strictly necessary technical mechanisms required to deliver and protect the website. These are distinct from advertising or persistent analytics tracking.</p>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold tracking-[-0.02em] text-black">5. Third-party services</h2>
            <p className="mt-4 whitespace-pre-line text-[15px] leading-8 text-black/65">The website may load services from third parties, including analytics or embedded resources. Their own technical behavior is governed by their respective policies and configurations.</p>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold tracking-[-0.02em] text-black">6. Changes</h2>
            <p className="mt-4 whitespace-pre-line text-[15px] leading-8 text-black/65">We may update this Cookie Policy when the website or its technologies change. The latest version will be published on this page.</p>
          </section>
          <section className="mt-10">
            <h2 className="text-xl font-semibold tracking-[-0.02em] text-black">7. Contact</h2>
            <p className="mt-4 whitespace-pre-line text-[15px] leading-8 text-black/65">For questions about privacy or cookies, contact info@bitstar-tech.com.</p>
          </section>
        </div>
        <div className="mt-16 border-t border-black/8 pt-8 text-[12px] leading-6 text-black/45">
          ScoreBoard Intelligence™ is a product of Bitstar Technologies.
        </div>
      </article>
    </main>
  );
}
