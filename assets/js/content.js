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
    sub: "Whether it's building software or processes — I take ideas from first sketch to a polished, working product.",
    metaNote: "Currently available for select projects",
  },

  /* ------------------------------------------------------------------
     ABOUT — keep it human, 2–4 short paragraphs
     quote: your philosophy line, shown above the paragraphs.
     Portrait image: replace assets/img/portrait.jpeg (any tall photo).
     ------------------------------------------------------------------ */
  about: {
    quote: "Asking questions is important! Building isn't hard — knowing what and how to build is.",
    paragraphs: [
      "I'm Mann Soni — a digital product builder working across websites, web applications, and business tools. My work sits between design and engineering: shaping the product, building the interface, and refining it until it feels effortless.",
      "I care about practical problem-solving. Before anything gets built, I make sure the problem is understood and the plan is sound. I use AI-assisted workflows to move faster and iterate more — never as a shortcut past quality.",
      "Good products are never finished. I test what I build, act on feedback, and keep improving — because the details are what separate a working product from a great one.",
    ],
    // Small facts row (label + value pairs). Edit freely, add/remove pairs.
    facts: [
      { label: "Focus",     value: "Websites · Web apps · Product UI" },
      { label: "Based in",  value: "Vadodara, Gujarat, India" },
      { label: "Working",   value: "Worldwide, remote-friendly" },
    ],
  },

  /* ------------------------------------------------------------------
     CAPABILITIES — the numbered index list
     Each entry: title + one-line description.
     ------------------------------------------------------------------ */
  skills: [
    { title: "Website Development",
      desc: "Fast, responsive websites with clean structure, careful typography, and polished detail." },
    { title: "Web Application Development",
      desc: "Interactive web applications built around real workflows and clear, well-structured data." },
    { title: "UI Implementation",
      desc: "Turning designs into precise, responsive interfaces that stay true to the original intent." },
    { title: "AI-Assisted Development",
      desc: "Using AI tools to prototype faster and iterate more, without cutting corners on quality." },
    { title: "Product Prototyping",
      desc: "Early, clickable versions that test ideas and assumptions before committing to a full build." },
    { title: "Workflow & Business Process Solutions",
      desc: "Digital tools that simplify how a business actually operates day to day." },
    { title: "Interface Testing & Refinement",
      desc: "Systematic review of usability, responsiveness, and edge cases until everything holds up." },
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
      description: "A social platform built around simple sharing and discovery.",
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
      description: "Property management software that brings tenants, complaints, maintenance, and inventory into one clear dashboard.",
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
      description: "A legacy preservation platform for future messages, time capsules, and final wishes — with a full admin interface.",
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
      desc: "Every project starts with questions. Who is this for, what should it do, and what does success actually look like?" },
    { title: "Plan the product",
      desc: "Mapping flows, screens, and structure before building — so the product has a clear shape from day one." },
    { title: "Build & refine",
      desc: "Implementing the interface, reviewing it at real sizes, and sharpening the details as it takes form." },
    { title: "Test & improve",
      desc: "Testing across devices and edge cases, gathering feedback, and refining until it consistently holds up." },
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
    blurb: "Whether it's a website, a web application, or an internal tool — tell me what you're working on and I'll tell you honestly how I can help.",
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
