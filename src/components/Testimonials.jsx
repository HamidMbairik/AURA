import { testimonials } from "../data/content.js";
import Reveal from "./Reveal.jsx";

function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 bg-surface/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.3em] text-muted">
              <span className="inline-block h-px w-8 bg-accent" />
              {testimonials.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-medium leading-tight tracking-tight text-primary">
              {testimonials.heading}
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-primary/10 bg-background p-7">
                <blockquote className="flex-1 text-pretty text-[15px] leading-relaxed text-body/80">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-primary/10 pt-4">
                  <p className="font-medium text-primary">{t.name}</p>
                  <p className="mt-0.5 text-[12px] uppercase tracking-[0.12em] text-muted">{t.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;