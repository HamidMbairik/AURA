import { approach } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import { Check } from "./Icons.jsx";

function Approach() {
  return (
    <section id="approach" className="scroll-mt-16 bg-surface/50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
            <img
              src={approach.image}
              alt={approach.imageAlt}
              className="aspect-[4/3] w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.3em] text-muted">
              <span className="inline-block h-px w-8 bg-accent" />
              {approach.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-medium leading-tight tracking-tight text-primary">
              {approach.heading}
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-6 space-y-5">
              <p className="text-pretty text-lg leading-relaxed text-body/80">{approach.paragraphs[0]}</p>
              <p className="text-pretty text-lg leading-relaxed text-body/80">{approach.paragraphs[1]}</p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <ul className="mt-8 space-y-4">
              {approach.points.map((p) => (
                <li key={p.title} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="font-medium text-body">{p.title}</p>
                    <p className="text-sm text-muted">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-primary/10 pt-6">
              {approach.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-medium text-primary">{s.value}</p>
                  <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Approach;