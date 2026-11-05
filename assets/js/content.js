/* ============================================================================
   PORTFOLIO CONTENT — THE ONLY FILE YOU NEED TO EDIT
   ----------------------------------------------------------------------------
   Everything on the website (name, copy, projects, links) is driven by this
   file. Edit the values between the " " quotes and save — refresh the page.

   PLACEHOLDER CONVENTION
   Any text you wrap in [square brackets] is rendered as a visibly-marked
   placeholder (dimmed, dashed underline) so you can spot unfinished fields.
   Replace the brackets and their content with real text when ready.
   ========================================================================== */

window.PORTFOLIO = {

  /* ------------------------------------------------------------------
     OWNER — your identity, used across the whole site
     ------------------------------------------------------------------ */
  owner: {
    name:      "Mann Soni",
    role:      "Digital Product Builder",
    location:  "Vadodara, Gujarat, India",
    email:     "mannsoni8054@gmail.com",
    phone:     "+91 90167 61301",            // shown in Contact
    phoneHref: "tel:+919016761301",
    availability: "Available for new projects",
  },

  /* ------------------------------------------------------------------
     HERO — the first screen
     headline: array of segments. Set em:true to render a segment in the
     elegant serif italic (use sparingly — one segment is ideal).
     ------------------------------------------------------------------ */
  hero: {
    eyebrow: "Digital Product Builder",
    headline: [
      { t: "Perceive. Design. ", em: false },
      { t: "Develop.",           em: true  },
    ],
    sub: "Websites, web apps, and business tools. Made in Vadodara, shipped anywhere.",
    metaNote: "",
  },

  /* ------------------------------------------------------------------
     ABOUT — keep it human, 2–4 short paragraphs
     quote: your philosophy line, shown above the paragraphs.
     Portrait image: replace assets/img/portrait.jpeg (any tall photo).
     ------------------------------------------------------------------ */
  about: {
    quote: "Asking questions is important! Building isn't hard — knowing what and how to build is.",
    paragraphs: [
      "I'm Mann Soni. I make websites, web apps, and business tools — the kind that get used on a Monday morning, not admired once and forgotten.",
      "I design it, build it, test it, fix it. AI helps me move fast; I make sure it's right. If something's off, tell me straight — that's how the work gets good.",
    ],
    // Small facts row (label + value pairs). Edit freely, add/remove pairs.
    facts: [
      { label: "Focus",     value: "Websites, web apps, product UI" },
      { label: "Based in",  value: "Vadodara, Gujarat, India" },
      { label: "Working",   value: "Remote, worldwide" },
    ],
  },

  /* ------------------------------------------------------------------
     CAPABILITIES — the numbered index list
     Each entry: title + one-line description.
     ------------------------------------------------------------------ */
  skills: [
    { title: "Website Development",
      desc: "Websites that load fast and look sharp." },
    { title: "Web Application Development",
      desc: "Web apps built around how you actually work." },
    { title: "UI Implementation",
      desc: "Designs turned into working interfaces, pixel for pixel." },
    { title: "AI-Assisted Development",
      desc: "AI helps me move fast. I keep the quality." },
    { title: "Product Prototyping",
      desc: "Rough, clickable versions that test an idea early." },
    { title: "Workflow & Business Process Solutions",
      desc: "Tools that make the day-to-day simpler." },
    { title: "Interface Testing & Refinement",
      desc: "Real devices, real edge cases — fixed until solid." },
  ],

  /* ------------------------------------------------------------------
     PROJECTS — each entry is one card on the home page.
       slug     : short id, lowercase, no spaces
       dotColor : small identity marker on the card (CSS color)
       preview  : { src, alt, w, h } — image shown in the card frame
                  (w/h = real pixel size, keeps layout stable)
       status   : e.g. "Ongoing", "Live", "In development", "Completed"
       features : short bullet list shown under the description
     ------------------------------------------------------------------ */
  projects: [
    {
      slug: "red-zap",
      title: "Red Zap",
      tagline: "Social platform",
      description: "Simple sharing. Simple discovery. That's the whole idea.",
      dotColor: "#F0564A",
      status: "Ongoing",
      tags: ["Social", "Web App"],
      preview: { src: "assets/img/preview-red-zap.svg", alt: "Red Zap — interface preview", w: 800, h: 500 },
      features: [
        "User profiles & posts",
        "A clean central feed",
        "Media sharing in posts",
        "Likes & interactions",
      ],
    },
    {
      slug: "gulfsky",
      title: "Gulfsky",
      tagline: "Property management software",
      description: "Property software — tenants, complaints, maintenance, inventory. One dashboard.",
      dotColor: "#5CA8FF",
      status: "Ongoing",
      tags: ["SaaS", "Dashboard"],
      preview: { src: "assets/img/shot-gulfsky.png", alt: "Gulfsky — property management dashboard", w: 1920, h: 940 },
      features: [
        "Live occupancy & tenant stats",
        "Complaint tracking with technician assignment",
        "Evacuation & unit-prep workflows",
        "Inventory & supplier management",
      ],
    },
    {
      slug: "endless-luv",
      title: "Endless Luv",
      tagline: "Legacy preservation platform",
      description: "For future messages, time capsules, and final wishes. With a full admin side.",
      dotColor: "#F27EB4",
      status: "Ongoing",
      tags: ["Platform", "Admin"],
      preview: { src: "assets/img/shot-endless-luv.png", alt: "Endless Luv — legacy preservation dashboard", w: 1920, h: 946 },
      features: [
        "Guided legacy dashboard",
        "Future video & photo messages",
        "Time capsules & final wishes",
        "Family tree & next-of-kin setup",
      ],
    },
  ],

  /* ------------------------------------------------------------------
     APPROACH — the four-step process
     ------------------------------------------------------------------ */
  approach: [
    { title: "Understand the problem",
      desc: "Who is this for, what should it do, what does success look like?" },
    { title: "Plan the product",
      desc: "Flows, screens, and structure — before anything gets built." },
    { title: "Build & refine",
      desc: "Make it real, look at it at real sizes, sharpen the details." },
    { title: "Test & improve",
      desc: "Devices, edge cases, feedback — until it consistently holds up." },
  ],

  /* ------------------------------------------------------------------
     CONTACT — links must be full URLs (https://…), mailto: or tel:
     Add or remove rows freely (e.g. LinkedIn, GitHub when ready).
     ------------------------------------------------------------------ */
  contact: {
    heading: [
      { t: "Let's build something ", em: false },
      { t: "worth using.", em: true },
    ],
    blurb: "Tell me what you're working on — I'll tell you honestly how I can help.",
    links: [
      { label: "Email", value: "mannsoni8054@gmail.com", href: "mailto:mannsoni8054@gmail.com" },
      { label: "Phone", value: "+91 90167 61301",        href: "tel:+919016761301" },
    ],
  },

  /* ------------------------------------------------------------------
     FOOTER
     ------------------------------------------------------------------ */
  footer: {
    note: "Designed & built by hand",
    showLocalTime: true, // shows "Local time HH:MM" next to © line
  },
};
