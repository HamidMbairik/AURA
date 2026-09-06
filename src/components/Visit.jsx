import { useState } from "react";
import { brand, hours, visit, services } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import { Arrow, Clock, Mail, MapPin, Phone } from "./Icons.jsx";

const inputClass =
  "w-full rounded-lg border border-background/25 bg-background/5 px-4 py-3 text-[15px] text-background placeholder:text-background/40 outline-none transition-colors focus:border-accent";

const DEFAULT = { name: "", email: "", service: "", message: "" };

function Visit() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState(DEFAULT);

  const submit = (e) => {
    e.preventDefault();
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!form.name.trim() || !okEmail) return;
    setSent(true);
  };
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contact" className="scroll-mt-16 bg-primary py-20 text-background lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.3em] text-accent-light/90">
              <span className="inline-block h-px w-8 bg-accent" />
              {visit.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.4rem)] font-medium leading-tight tracking-tight text-background">
              {visit.heading}
            </h2>
            <p className="mt-4 max-w-md text-pretty text-lg text-background/70">{visit.sub}</p>
            <p className="mt-4 max-w-md text-pretty text-background/60">{visit.firstVisit}</p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="border-t border-background/15 pt-6">
                <p className="mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-background/50">
                  <MapPin className="h-4 w-4 text-accent" />
                  Address
                </p>
                <p className="text-[15px] leading-relaxed text-background/85">{brand.address}</p>
              </div>
              <div className="border-t border-background/15 pt-6">
                <p className="mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-background/50">
                  <Phone className="h-4 w-4 text-accent" />
                  Contact
                </p>
                <p className="text-[15px] text-background/85">
                  <a href={`tel:${brand.phone.replace(/[^0-9]/g, "")}`} className="block transition-colors hover:text-accent-light">
                    {brand.phone}
                  </a>
                  <a href={`mailto:${brand.email}`} className="mt-1 block transition-colors hover:text-accent-light">
                    {brand.email}
                  </a>
                </p>
              </div>
              <div className="border-t border-background/15 pt-6 sm:col-span-2">
                <p className="mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-background/50">
                  <Clock className="h-4 w-4 text-accent" />
                  Hours
                </p>
                <dl className="grid gap-3 sm:grid-cols-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex items-baseline justify-between gap-4 text-[15px]">
                      <dt className="text-background/85">{h.day}</dt>
                      <dd className="text-background/55">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="rounded-[1.75rem] bg-primary-deep p-7 shadow-lg sm:p-9">
            {sent ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center gap-5 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-accent-light">
                  <Mail className="h-6 w-6" />
                </span>
                <h3 className="font-display text-3xl font-medium text-background">
                  Request received.
                </h3>
                <p className="max-w-xs text-pretty text-[15px] text-background/60">{visit.blurb}</p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setForm(DEFAULT);
                  }}
                  className="mt-2 u-accent text-[12px] font-medium uppercase tracking-[0.2em] text-accent-light"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="vt-name" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-background/50">
                      Name *
                    </label>
                    <input
                      id="vt-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="vt-email" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-background/50">
                      Email *
                    </label>
                    <input
                      id="vt-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                      placeholder="jane@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="vt-service" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-background/50">
                    Service
                  </label>
                  <select
                    id="vt-service"
                    value={form.service}
                    onChange={set("service")}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" className="bg-primary-deep">Not sure — I'd like guidance</option>
                    {services.items.map((s) => (
                      <option key={s.title} value={s.title} className="bg-primary-deep">{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="vt-message" className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-background/50">
                    Message
                  </label>
                  <textarea
                    id="vt-message"
                    rows="4"
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Briefly what's going on, and roughly when you'd like to come in."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-background px-8 py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-primary transition-colors hover:bg-accent hover:text-background"
                >
                  Request appointment
                  <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Visit;