import { services } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import { Activity, Arrow, Hand, Heart, Leaf, Monitor, Target } from "./Icons.jsx";

const icons = { activity: Activity, hand: Hand, target: Target, heart: Heart, monitor: Monitor, leaf: Leaf };

function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.3em] text-muted">
              <span className="inline-block h-px w-8 bg-accent" />
              {services.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-medium leading-tight tracking-tight text-primary">
              {services.heading}
            </h2>
            <p className="mt-4 text-pretty text-lg text-body/80">{services.intro}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s, i) => {
            const Icon = icons[s.icon] || Activity;
            return (
              <Reveal key={s.title} delay={i * 60}>
                <div className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-background p-7 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[var(--shadow-soft)]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-primary transition-colors group-hover:bg-accent group-hover:text-background">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                      {s.time}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-medium text-primary">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{s.desc}</p>
                  <a
                    href="#contact"
                    className="group/link mt-5 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-primary transition-colors hover:text-accent"
                  >
                    Book this
                    <Arrow className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;