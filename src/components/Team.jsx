import { team } from "../data/content.js";
import Reveal from "./Reveal.jsx";

function Team() {
  return (
    <section id="team" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.3em] text-muted">
                <span className="inline-block h-px w-8 bg-accent" />
                {team.eyebrow}
              </p>
              <h2 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-medium leading-tight tracking-tight text-primary">
                {team.heading}
              </h2>
            </div>
            <p className="max-w-sm text-pretty text-body/80">{team.intro}</p>
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.members.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <article className="group">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={m.src}
                    alt={`${m.name}, ${m.role}`}
                    className="aspect-[4/5] w-full object-cover object-center"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
                    {m.tag}
                  </span>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-medium text-primary">{m.name}</h3>
                  <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.12em] text-accent">
                    {m.credentials}
                  </span>
                </div>
                <p className="mt-1 text-[13px] font-medium text-body/70">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{m.line}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 rounded-2xl border border-primary/10 bg-surface/50 px-6 py-5 text-center text-[15px] text-body/80">
            {team.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Team;