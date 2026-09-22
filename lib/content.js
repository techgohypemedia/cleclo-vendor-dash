// Central place for copy used by the list-driven sections of the site.
// Sections with custom per-item icons (Hero, Services, the 3-step
// verification cards) keep their markup inline in their own component
// instead of living here, since JSX icons don't serialize well into
// plain data.

export const navLinks = [
  { href: "#why", label: "Why Cleclo" },
  { href: "#how", label: "How it works" },
  { href: "#services", label: "Services" },
  { href: "#standard", label: "The Standard" },
  { href: "#coverage", label: "Coverage" },
  { href: "#faq", label: "FAQ's" },
  { href: "/vendor", label: "Partner as Vendor" },
];

export const comparison = {
  without: {
    tag: "Without Cleclo",
    title: "The traditional way",
    items: [
      "Prices vary from one cleaner to another",
      "No clear visibility after your garments are handed over",
      "Delivery timelines are often uncertain",
      "Every cleaner follows their own process",
      "Quality can depend on who handles your garments",
    ],
  },
  with: {
    tag: "With Cleclo",
    title: "The Cleclo standard",
    items: [
      "Clear and consistent pricing",
      "Every garment logged and tracked from pickup to delivery",
      "Defined delivery timelines, with Express options when needed",
      "Verified partners operating to defined service standards",
      "Consistent quality checks across every order and every city",
    ],
  },
};

export const kpiCards = [
  {
    num: "72HRS",
    title: "Standard turnaround",
    desc: "A defined pickup-to-delivery window, so you know when to expect your order.",
  },
  {
    num: "EVERY ORDER",
    title: "Fully tracked",
    desc: "Every garment is logged and tracked from pickup through cleaning to final delivery.",
  },
  {
    num: "3-STEP",
    title: "Quality verification",
    desc: "Your order is checked at pickup, at the cleaning facility and once again before delivery.",
  },
  {
    num: "100%",
    title: "Verified partners",
    desc: "Every Cleclo partner is onboarded, trained and evaluated before they start serving customers.",
  },
];

export const steps = [
  {
    stepNo: "STEP 01",
    title: "Book in the app",
    desc: "Choose your service and pickup slot in just a few taps.",
  },
  {
    stepNo: "STEP 02",
    title: "Picked up & logged",
    desc: "Our rider collects your garments, with every item tagged and recorded.",
  },
  {
    stepNo: "STEP 03",
    title: "Assigned to a verified partner",
    desc: "Your order is routed to a trained Cleclo partner operating to defined service standards.",
  },
  {
    stepNo: "STEP 04",
    title: "Cleaned. Checked. Approved.",
    desc: "Your garments go through the Cleclo process and quality checks before leaving the facility.",
  },
  {
    stepNo: "STEP 05",
    title: "Delivered within 72 hours",
    desc: "Your order is tracked through delivery, with Express options available when you need it sooner.",
  },
];

export const standardRows = [
  {
    tag: "01 — Pricing",
    title: "One price. Every time.",
    desc: "A clear, standardised price list — no shop-to-shop variation for the same service.",
  },
  {
    tag: "02 — Partners",
    title: "Verified to meet the standard.",
    desc: "Every partner is assessed, onboarded and trained before becoming part of the Cleclo network.",
  },
  {
    tag: "03 — Custody",
    title: "Tracked at every handoff.",
    desc: "Every garment is tagged at pickup and tracked through each stage until it is safely back with you.",
  },
  {
    tag: "04 — Delivery",
    title: "A delivery promise, not an estimate.",
    desc: "A defined 72-hour turnaround, with Express options when you need your order sooner.",
  },
  {
    tag: "05 — Garment Care",
    title: "The right process for every fabric.",
    desc: "Defined care protocols ensure your garments receive the appropriate treatment, regardless of which partner handles them.",
  },
];

export const coverageTiers = [
  {
    tier: "Tier 1",
    title: "Metro & major cities",
    desc: "Our launch markets, starting with Delhi NCR, with the deepest partner network and fastest onboarding.",
    badge: "Live now",
    live: true,
  },
  {
    tier: "Tier 2",
    title: "Growing cities",
    desc: "The same standard price list and SLA, brought to fast-growing cities as partners come online.",
    badge: "Onboarding",
    live: false,
  },
  {
    tier: "Tier 3",
    title: "Emerging towns",
    desc: "Bringing organised, certified dry cleaning to towns that have never had it before.",
    badge: "Coming soon",
    live: false,
  },
];

export const faqs = [
  {
    q: "How is the 72-hour window calculated?",
    a: "From the moment your pickup is collected to the moment it's delivered back to your door — timed and shown to you inside the app for every order.",
    open: true,
  },
  {
    q: "Can I get my order back faster?",
    a: "Yes — Express options for same-day or next-day delivery are available on select services and pincodes. You'll see them at checkout in the app if they're available for your order.",
  },
  {
    q: "How do I know the price before I book?",
    a: "Every service has a fixed, standard price shown in the app before you confirm — the same rate card whether you're in a Tier-1 metro or a Tier-3 town so there's no surprise at delivery.",
  },
  {
    q: "What if my pincode isn't covered yet?",
    a: "The app shows pincode-level availability before you book. We're onboarding certified partners city by city so coverage keeps expanding.",
  },
  {
    q: "Who actually cleans my clothes?",
    a: "A certified local partner in the Cleclo network, matched to you by pincode, trained and audited to the Cleclo standard.",
  },
  {
    q: "Can I add instructions for a specific item?",
    a: "Yes — you can add a note for individual items when you book, like a stain to treat or a particular finish and it's passed along to the partner handling your order.",
  },
  {
    q: "How do I pay?",
    a: "Payment is handled in the app, with online payment or pay-on-delivery available depending on your order — you'll see the options at checkout.",
  },
  {
    q: "Can I reschedule or cancel a pickup?",
    a: "Yes — pickups can be rescheduled or cancelled from the app until your rider is on the way. Once it's confirmed, any changes are handled through in-app support.",
  },
  {
    q: "What if I'm not home when the rider arrives?",
    a: "You'll get a notification as your rider gets close, with a short window to be available. If a pickup or delivery can't be completed, you can reschedule it from the app.",
  },
  {
    q: "What happens if something goes wrong?",
    a: "Every order is logged at pickup, at processing and at delivery. Any damage or loss is handled under Cleclo's SLA and resolution policy — not left to shop-to-shop discretion.",
  },
  {
    q: "How do I actually place an order?",
    a: "Download the Cleclo app for iOS or Android — booking, live tracking and payments all happen there.",
  },
];

export const footerColumns = [
  {
    heading: "For Vendors",
    links: [
      { label: "Partner With Us", href: "/vendor" },
      {
        label: "Vendor Login",
        href: "/login",
      },
      { label: "Partner Support", href: "#" },
    ],
  },
  {
    heading: "For Delivery Partners",
    links: [
      { label: "Ride With Us", href: "#" },
      { label: "Rider App", href: "#" },
      { label: "Rider Support", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Cleclo", href: "#why" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Centre", href: "#faq" },
      { label: "Contact us", href: "mailto:support@cleclo.in" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
];
