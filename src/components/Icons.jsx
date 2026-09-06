const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Arrow({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M3 12h17M14 6l6 6-6 6" {...S} />
    </svg>
  );
}

export function Menu({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4 10h16M4 15h16" {...S} />
    </svg>
  );
}

export function Close({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="m5 5 14 14M19 5 5 19" {...S} />
    </svg>
  );
}

export function Phone({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" {...S} />
    </svg>
  );
}

export function Mail({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" {...S} />
      <path d="m3 7 9 6 9-6" {...S} />
    </svg>
  );
}

export function MapPin({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z" {...S} />
      <circle cx="12" cy="11" r="2.2" {...S} />
    </svg>
  );
}

export function Clock({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" {...S} />
      <path d="M12 7.5V12l3 2" {...S} />
    </svg>
  );
}

export function Calendar({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" {...S} />
      <path d="M16 3v4M8 3v4M3 10h18" {...S} />
    </svg>
  );
}

export function Check({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4 12.5 9.5 18 20 6.5" {...S} />
    </svg>
  );
}

export function Activity({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M3 12h4l2.5-6 4 12 2.5-6h5" {...S} />
    </svg>
  );
}

export function Hand({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4 9.5c4-3.5 12-3.5 16 0M4 13.5c4-3.5 12-3.5 16 0M4 17.5c4-3.5 12-3.5 16 0" {...S} />
    </svg>
  );
}

export function Target({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" {...S} />
      <circle cx="12" cy="12" r="3.5" {...S} />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" {...S} />
    </svg>
  );
}

export function Heart({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M12 20s-7-4.6-9-9A5 5 0 0 1 12 6a5 5 0 0 1 9 5c-2 4.4-9 9-9 9Z" {...S} />
    </svg>
  );
}

export function Monitor({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" {...S} />
      <path d="M9 20h6M12 16v4" {...S} />
    </svg>
  );
}

export function Leaf({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M20 4c-8 1-15 6-15 14 8-1 13-6 15-14Z" {...S} />
      <path d="M5 19C6 13 11 7 18 5" {...S} />
    </svg>
  );
}