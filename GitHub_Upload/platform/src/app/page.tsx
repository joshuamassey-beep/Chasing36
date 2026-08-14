import WaitlistForm from "@/components/WaitlistForm";

const FEATURES = [
  {
    title: "Any format, your rules",
    body: "Tournament, league, or club — pick from dozens of scoring formats (Stableford, Skins, Scramble, Wolf, and more) or run the same best-rounds handicap system Chasing 36 was built on. Every event sets its own rules; nothing is shared or hardcoded between them.",
  },
  {
    title: "A handicap that keeps up with you",
    body: "Your handicap starts from your skill level, then blends in your best rounds as the season goes — so a bad round never drags you down, and by mid-season the number actually reflects how you play.",
  },
  {
    title: "Live standings, skins, and closest-to-pin",
    body: "Season standings, weekly results, skins carryovers, and CTP all update live as scores are entered — no spreadsheet, no waiting for someone to tally it up.",
  },
  {
    title: "Built for the commissioner, too",
    body: "Approve players, enter scores, run closest-to-pin, and manage payouts from one admin view — scoped to just the tournament you run.",
  },
];

const STEPS = [
  {
    step: "1",
    title: "Create your tournament, league, or club",
    body: "One-off event or a full season — name it and pick the shape that fits.",
  },
  {
    step: "2",
    title: "Set your scoring format",
    body: "Choose how players compete and how handicaps work. Change it any time before it starts.",
  },
  {
    step: "3",
    title: "Invite your group and start chasing 36",
    body: "Players join, scores go in, and the leaderboard takes care of the rest.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <header className="border-b border-line bg-gradient-to-b from-headtop to-bg">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          {/* eslint-disable-next-line @next/next/no-img-element -- absolute URL to the live chasing36.com asset, avoids next/image remote-domain config and file-upload payload limits */}
          <img
            src="https://chasing36.com/Chasing36_Sport_Simple_Wordmark_Transparent.png"
            alt="Chasing 36"
            width={220}
            height={48}
            className="h-auto w-44 sm:w-56"
          />
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-line bg-card2 px-4 py-1.5 text-xs font-semibold text-dim">
              Invite only — public sign-up coming soon
            </span>
            <a
              href="https://chasing36.com"
              className="rounded-full border border-line px-4 py-1.5 text-xs font-semibold text-text transition hover:border-green hover:text-green"
            >
              Sign In
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-3xl px-6 pb-16 pt-20 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            A golf app for <span className="text-green">the rest of us.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-dim">
            Run a tournament, league, or club with real handicapping, live
            leaderboards, and scoring formats that fit how your group
            actually plays — without a spreadsheet in sight.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <span className="text-sm text-dim">
              Currently invite-only while we get it right.
            </span>
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-line bg-card/40">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="text-center text-sm font-bold uppercase tracking-widest text-green">
              How it works
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {STEPS.map((s) => (
                <div
                  key={s.step}
                  className="rounded-2xl border border-line bg-card p-6"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green text-sm font-extrabold text-[#0a1610]">
                    {s.step}
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-dim">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-center text-sm font-bold uppercase tracking-widest text-green">
            Why Chasing 36
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-line bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,.12),0_6px_18px_-10px_rgba(0,0,0,.35)]"
              >
                <h3 className="text-base font-semibold text-gold">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dim">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section className="border-t border-line bg-card/40">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <h2 className="text-2xl font-bold">
              Chasing 36 is invite-only for now.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-dim">
              We&apos;re still vetting the platform with real tournaments
              before opening it up. Leave your email and we&apos;ll let you
              know the moment it does.
            </p>
            <WaitlistForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-10 text-center text-xs text-dim">
        <p>Chasing 36, a 5280 Content LLC company · A Golf App for the rest of us.</p>
        <p className="mt-1">&copy; {new Date().getFullYear()} Chasing 36</p>
      </footer>
    </div>
  );
}
