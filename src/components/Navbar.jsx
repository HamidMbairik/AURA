import { useEffect, useState } from "react";
import { navLinks } from "../data/content.js";
import { Logo } from "./Logo.jsx";
import { Close, Menu } from "./Icons.jsx";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled && !open ? "border-b border-primary/10 bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="text-primary">
          <Logo size={28} caption={false} />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-[13px] font-medium text-body/70 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.14em] text-background transition-colors hover:bg-accent"
          >
            Book an appointment
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-primary md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background">
          <div className="flex h-16 items-center justify-between px-6">
            <span className="text-primary">
              <Logo size={28} caption={false} />
            </span>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full text-primary"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <Close />
            </button>
          </div>
          <nav className="flex flex-1 flex-col px-6 pt-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-primary/10 py-4 font-display text-3xl font-medium text-primary transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="p-6">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-primary py-4 text-center text-[13px] font-medium uppercase tracking-[0.14em] text-background"
            >
              Book an appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;