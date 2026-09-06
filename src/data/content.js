export const brand = {
  name: "AURA",
  tagline: "Physiotherapy & Wellness",
  since: "2016",
  phone: "555-014-2381",
  email: "hello@aura-wellness.com",
  address: "24 Willow Lane, Harmony Park",
};

export const hours = [
  { day: "Monday — Wednesday", time: "8:00 – 19:00" },
  { day: "Thursday — Friday", time: "8:00 – 20:00" },
  { day: "Saturday", time: "9:00 – 15:00" },
  { day: "Sunday", time: "Closed" },
];

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Physiotherapy & wellness · Harmony Park",
  titleA: "Move better.",
  titleB: "Recover fully.",
  sub: "AURA is a physiotherapy and wellness practice offering manual therapy, sports rehabilitation and chronic pain care. Appointments run sixty to ninety minutes, so there is time to do the work properly.",
  image: "/images/hero.jpg",
  imageAlt: "Patient stretching in the treatment room",
  facts: [
    "Est. 2016",
    "60–90 minute sessions",
    "Registered physiotherapists",
    "No double-booking",
  ],
};

export const services = {
  eyebrow: "Services",
  heading: "Physiotherapy and wellness care, kept deliberately focused.",
  intro:
    "Six services, each run as a proper appointment rather than a conveyor-belt slot. If you need something outside this list, we will say so and refer you.",
  items: [
    {
      icon: "activity",
      title: "Physiotherapy",
      time: "60 min",
      desc: "Assessment, diagnosis and treatment of musculoskeletal pain — back, neck, joints and soft tissue.",
    },
    {
      icon: "hand",
      title: "Manual Therapy",
      time: "60 min",
      desc: "Hands-on treatment of muscle and connective tissue to reduce pain, tension and restricted movement.",
    },
    {
      icon: "target",
      title: "Sports Injury & Rehab",
      time: "75 min",
      desc: "Structured return-to-sport plans for athletes, from the initial injury through full recovery.",
    },
    {
      icon: "heart",
      title: "Chronic Pain Program",
      time: "75 min",
      desc: "An evidence-based approach to persistent pain, with careful assessment and graded, achievable progress.",
    },
    {
      icon: "monitor",
      title: "Posture & Ergonomics",
      time: "45 min",
      desc: "A review of your desk and daily setup, followed by a practical plan you can actually keep.",
    },
    {
      icon: "leaf",
      title: "Wellness Coaching",
      time: "45 min",
      desc: "One-to-one guidance on recovery habits — sleep, stress and building capacity without overtraining.",
    },
  ],
};

export const approach = {
  eyebrow: "Our approach",
  heading: "Thorough over quick, always.",
  paragraphs: [
    "Most physiotherapy appointments run twenty minutes. Ours start at sixty. We treat pain as information, so every visit begins with a proper conversation and assessment before any treatment.",
    "You will always know where things stand. If a treatment isn't working, we change it. If we are not the right practice for your condition, we will say so and refer you to someone we trust.",
  ],
  image: "/images/about.jpg",
  imageAlt: "Manual therapy session in the treatment room",
  points: [
    {
      title: "Sessions long enough to matter",
      text: "No double-booking. When you are in the room, you are the only patient.",
    },
    {
      title: "Clear communication",
      text: "You always know what we are treating, why, and what progress to expect.",
    },
    {
      title: "A written plan",
      text: "You leave every first visit with a written outline of your treatment and home program.",
    },
  ],
  stats: [
    { value: "68", label: "Avg. session (min)" },
    { value: "94%", label: "Would refer a friend" },
    { value: "11", label: "Years in practice" },
  ],
};

export const team = {
  eyebrow: "The team",
  heading: "Registered clinicians. One consistent standard.",
  intro:
    "Every appointment is covered by the same assessment and communication standards, whichever clinician you see.",
  members: [
    {
      name: "Dr. Sara Mitchell",
      credentials: "DPT",
      role: "Lead Physiotherapist",
      tag: "Spinal & chronic pain",
      line: "Twelve years working with back, neck and persistent pain. Leads the clinical team and the chronic pain program.",
      src: "/images/team-1.jpg",
    },
    {
      name: "James Okafor",
      credentials: "MSc",
      role: "Sports Physiotherapist",
      tag: "Sports rehab",
      line: "Athlete rehabilitation and return-to-sport planning for runners, lifters and field sports.",
      src: "/images/team-2.jpg",
    },
    {
      name: "Elena Rossi",
      credentials: "MSc",
      role: "Manual Therapist",
      tag: "Manual & postural care",
      line: "Soft-tissue treatment, posture and ergonomics, and recovery coaching for everyday life.",
      src: "/images/team-3.jpg",
    },
  ],
  note: "We are in network with most major insurers. Tell us who you are with and we will confirm your coverage before your first visit.",
};

export const testimonials = {
  eyebrow: "Patient stories",
  heading: "What patients say about the care.",
  items: [
    {
      quote:
        "Two years of low back pain and several clinics that gave up on it after a couple of sessions. AURA's approach was slow, thorough and honest about progress. I can run again.",
      name: "Claire D.",
      detail: "Chronic low back pain",
    },
    {
      quote:
        "I had carried a shoulder injury for years. Six weeks of structured rehab and it finally stopped being the first thing I thought about in the morning.",
      name: "Marcus T.",
      detail: "Shoulder rehabilitation",
    },
    {
      quote:
        "Returning to sport after a hamstring injury felt impossible until the program here made it concrete. Every phase, every setback, was discussed openly.",
      name: "Priya N.",
      detail: "Return to sport · hamstring",
    },
  ],
};

export const visit = {
  eyebrow: "Visit us",
  heading: "Book an appointment",
  sub: "Call, email, or use the form below. We reply within one working day.",
  firstVisit:
    "First appointments run 60 minutes and include a full assessment plus a written plan.",
  blurb: "Thank you. We will reply within one working day.",
};

export const contentData = {
  brand,
  hours,
  navLinks,
  hero,
  services,
  approach,
  team,
  testimonials,
  visit,
};