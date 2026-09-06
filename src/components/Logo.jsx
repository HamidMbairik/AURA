export function LogoMark({ size = 40, className = "", strokeWidth = 3.4 }) {
  return (
    <svg
      viewBox="0 0 96 96"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="48" cy="48" r="43.5" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.85" />
      <path d="M34 68 C34 47 42.5 38.5 48 34.5" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M62 68 C62 47 53.5 38.5 48 34.5" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M39 51.5 C44 54.5 52 54.5 57 51.5" fill="none" stroke="var(--accent, #c89b6d)" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ size = 40, className = "", caption = true }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={size} />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[22px] font-semibold tracking-tight text-current">AURA</span>
        {caption && (
          <span className="mt-1 text-[8.5px] font-medium uppercase tracking-[0.26em] opacity-60">
            Physiotherapy &amp; Wellness
          </span>
        )}
      </span>
    </span>
  );
}