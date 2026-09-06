import { brand, hours, services } from "../data/content.js";
import { Logo, LogoMark } from "./Logo.jsx";
import { Mail, MapPin, Phone } from "./Icons.jsx";

function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-background pb-10 pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="mt-1 text-primary">
              <Logo size={30} />
            </div>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-muted">
              A small physiotherapy and wellness practice in Harmony Park, established {brand.since}.
            </p>
            <LogoMark size={40} className="mt-8 text-primary/30" />
          </div>

          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-faint">Services</p>
            <ul className="space-y-2.5 text-[15px] text-body/80">
              {services.items.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="transition-colors hover:text-primary">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-faint">Visit</p>
            <ul className="space-y-3 text-[15px] text-body/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <span>{brand.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${brand.phone.replace(/[^0-9]/g, "")}`} className="transition-colors hover:text-primary">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${brand.email}`} className="transition-colors hover:text-primary">
                  {brand.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-faint">Hours</p>
            <dl className="space-y-2.5 text-[15px]">
              {hours.map((h) => (
                <div key={h.day} className="flex items-baseline justify-between gap-3">
                  <dt className="text-body/80">{h.day}</dt>
                  <dd className="text-muted">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-6 text-[12px] text-muted sm:flex-row">
          <span>© {new Date().getFullYear()} AURA Physiotherapy &amp; Wellness</span>
          <span className="flex gap-6">
            <a href="#top" className="transition-colors hover:text-primary">Privacy</a>
            <a href="#top" className="transition-colors hover:text-primary">Terms</a>
            <a href="#top" className="transition-colors hover:text-primary">Back to top</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;