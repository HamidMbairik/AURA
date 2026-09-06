import { hero } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import { Arrow, Calendar } from "./Icons.jsx";

function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-surface/80 to-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24 lg:pt-40">
        <div>
          <Reveal>
            <p className="mb-5 flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.3em] text-muted">
              <span className="inline-block h-px w-8 bg-accent" />
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="font-display text-[clamp(2.6rem,5vw,4.4rem)] font-medium leading-[1.05] tracking-tight text-primary">
              {hero.titleA} <span className="text-primary-soft">{hero.titleB}</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-body/80">
              {hero.sub}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[13px] font-medium text-background transition-colors hover:bg-accent"
              >
                Book an appointment
                <Arrow className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-7 py-3.5 text-[13px] font-medium text-primary transition-colors hover:border-primary hover:bg-primary/5"
              >
                Our services
              </a>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-muted">
              {hero.facts.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
            <img
              src={hero.image}
              alt={hero.imageAlt}
              className="aspect-[4/3] w-full object-cover object-center"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl border border-primary/10 bg-background px-5 py-4 shadow-[var(--shadow-soft)]">
            <Calendar className="h-5 w-5 text-accent" />
            <div>
              <p className="text-sm font-medium text-body">First visit · 60 minutes</p>
              <p className="text-[13px] text-muted">Assessment and a written plan</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;