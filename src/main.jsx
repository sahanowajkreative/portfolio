import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDownRight, ArrowUpRight, Code2, Layers3, Sparkles, Workflow, ShoppingBag, Globe, Mail } from "lucide-react";
import "./styles.css";

const projects = [
  { type: "shopify", name: "RefluxRaft", url: "https://refluxraft.com/", label: "Wellness e-commerce", headline: "Reflux relief, one teaspoon at a time.", description: "Conversion-focused wellness storefront combining product discovery, education, testimonials, bundles and recurring purchase journeys.", tech: ["Liquid", "Theme", "E-commerce"], tint: "mint" },
  { type: "shopify", name: "ShineWater", url: "https://shinewater.com/", label: "Functional beverages", headline: "Vitamin-enhanced hydration.", description: "Beverage storefront with product collections, merchandising, retail discovery and a family-friendly shopping experience.", tech: ["Liquid", "Collections", "UX"], tint: "peach" },
  { type: "shopify", name: "Snakkidz", url: "https://snakkidz.com/", label: "Kids snacks", headline: "Healthy snacks for happy kids.", description: "Kids snack store focused on product discovery, trust signals, offers and simple purchasing.", tech: ["Liquid", "Product UX", "Responsive"], tint: "yellow" },
  { type: "shopify", name: "City Threads", url: "https://www.citythreads.com/", label: "Apparel", headline: "Comfort, ease & everyday basics.", description: "Apparel shopping experience built around category navigation, product detail, comfort messaging and brand trust.", tech: ["Liquid", "Collections", "Responsive"], tint: "slate" },
  { type: "shopify", name: "HL Medical", url: "https://shophlmed.com/", label: "Medical & essentials", headline: "Stock your essentials.", description: "Broad catalog storefront with structured navigation across medical supplies, home essentials, packaging and pet care.", tech: ["Liquid", "Catalog", "Navigation"], tint: "blue" },
  { type: "shopify", name: "Kanu Surf", url: "https://kanusurf.com/", label: "Family swimwear", headline: "Made for days by the water.", description: "Family swimwear storefront featuring men's, women's and kids' collections, filters, product options and seasonal merchandising.", tech: ["Liquid", "Filters", "Product UX"], tint: "ocean" },
  { type: "shopify", name: "4Throws", url: "https://4throws.com/", label: "Track & field", headline: "Premium equipment for throwing events.", description: "Specialist sporting-goods store organized around throwing disciplines, brands, product detail and customer reviews.", tech: ["Liquid", "Catalog", "Reviews"], tint: "sand" },
  { type: "shopify", name: "Zaza by Somya", url: "https://www.zazaindia.com/", label: "Handcrafted jewellery", headline: "Bold, beautiful, fearless & feminine.", description: "Jewellery storefront combining brand story, editorial presentation, featured products, testimonials and collection browsing.", tech: ["Liquid", "Brand UX", "Products"], tint: "rose" },
  { type: "wordpress", name: "Route Relief", url: "https://routerelief.com/", label: "Route network", headline: "Connect route distributors and relief drivers.", description: "Peer-to-peer vacation relief network connecting independent route distributors and relief drivers.", tech: ["WordPress", "Forms", "Custom UX"], tint: "mint" },
  { type: "wordpress", name: "Routes For Sale", url: "https://www.routesforsale.net/", label: "Route brokerage", headline: "Buying or selling a route.", description: "Route-sales platform with buyer/seller pathways, listings, financing, insurance, map search and portal access.", tech: ["WordPress", "Listings", "Portal"], tint: "sand" },
  { type: "wordpress", name: "Review Raffles", url: "https://reviewraffles.com/", label: "WooCommerce plugin", headline: "Webinar raffle automation.", description: "Product site for a WooCommerce webinar raffle plugin with automated seats, alerts, timers and winner selection.", tech: ["WordPress", "WooCommerce", "Plugin"], tint: "peach" },
  { type: "wordpress", name: "Shooter McDilly", url: "https://shootermcdilly.com/", label: "Launch page", headline: "A focused brand launch experience.", description: "Launch-focused WordPress page with brand presentation, contact capture and email-list signup flow.", tech: ["WordPress", "Landing Page", "Forms"], tint: "slate" },
  { type: "wordpress", name: "Kurt Thomas Gymnastics", url: "https://www.kurtthomas.com/", label: "Gymnastics", headline: "Training, events and a lasting legacy.", description: "Gymnastics website covering academy services, scholarships, events, careers, foundation and legacy content.", tech: ["WordPress", "Content UX", "Events"], tint: "sand" },
  { type: "wordpress", name: "SynDaver", url: "https://syndaver.com/", label: "Medical simulation", headline: "High-fidelity medical simulation.", description: "Corporate medical-simulation platform presenting product specialties, technology, mission and industry applications.", tech: ["WordPress", "Product UX", "Corporate"], tint: "blue" },
  { type: "wordpress", name: "SynDaverX", url: "http://syndaverx.com/", label: "Medical technology", headline: "Synthetic human innovation.", description: "Additional SynDaver-branded web experience supporting the product and medical-simulation ecosystem.", tech: ["WordPress", "Custom Pages", "Responsive"], tint: "slate" },
  { type: "wordpress", name: "West Virginia Senior Advantage", url: "https://www.wvsenioradvantage.com/", label: "Healthcare", headline: "Senior health plan information hub.", description: "Healthcare information portal organized around plan information, enrollment, member resources, providers and prescription benefits.", tech: ["WordPress", "Information UX", "Accessibility"], tint: "blue" },
  { type: "wordpress", name: "Reading Corner Online", url: "https://readingcorneronline.com/", label: "Reading & learning", headline: "A welcoming corner for readers.", description: "Content-led WordPress website focused on reader discovery, organized information and accessible browsing.", tech: ["WordPress", "Content UX", "Responsive"], tint: "peach" },
  { type: "wordpress", name: "Sign Performance", url: "https://www.signperformance.net/", label: "Signs & graphics", headline: "Make your business stand out.", description: "Business-facing WordPress website presenting signage and visual communication services with clear service discovery.", tech: ["WordPress", "Business Site", "Responsive"], tint: "slate" },
  { type: "ghl", name: "EvolvXAI — Salon", url: "https://evolvxai.com/salon", label: "AI salon automation", headline: "Grow your salon with AI.", description: "Lead-generation funnel for salons focused on AI reception, instant bookings, reminders and reviews.", tech: ["GHL", "Funnels", "Automation"], tint: "rose" },
  { type: "ghl", name: "Four-Week Sprint — Salon", url: "https://evolvxai.com/four-week-sprint-salon", label: "Salon growth offer", headline: "A four-week salon growth sprint.", description: "Offer-focused GHL landing page designed around clear messaging and lead conversion.", tech: ["GHL", "Landing Page", "Lead Gen"], tint: "sand" },
  { type: "ghl", name: "Planet Friendly Pest Control — Inspection Funnel", url: "https://pestfree.planetfriendlypestcontrol.com/schedule-free-inspection", label: "Pest control lead funnel", headline: "Schedule a free inspection.", description: "Booking-focused funnel guiding prospective customers toward scheduling a free pest-control inspection.", tech: ["GHL", "Lead Capture", "Booking"], tint: "mint" },
  { type: "react", name: "Planet Friendly Pest Control", url: "https://planetfriendlypestcontrol.com/", label: "React website", headline: "A friendlier pest-control experience.", description: "Customer-facing service website project for a pest-control business.", tech: ["React", "Frontend", "Responsive UI"], tint: "ocean" },
  { type: "react", name: "HR Portal", url: "https://hr-portal-jet.vercel.app/", label: "HR management app", headline: "A clear workspace for HR tasks.", description: "React-based HR portal project showcasing an application-style interface for HR information and workflows.", tech: ["React", "Vite", "Frontend UI"], tint: "lavender" },
];

const categories = [
  { id: "all", label: "All work", icon: Layers3 },
  { id: "shopify", label: "Shopify", icon: ShoppingBag },
  { id: "wordpress", label: "WordPress", icon: Globe },
  { id: "ghl", label: "GoHighLevel", icon: Workflow },
  { id: "react", label: "React", icon: Code2 },
];

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card tint-${project.tint}`}>
      <a className="visual" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} website`}>
        <div className="visual-top"><span /><span /><span /><small>{new URL(project.url).hostname.replace("www.", "")}</small><ArrowUpRight size={15} /></div>
        <div className="visual-copy">
          <span className="visual-label">{project.label}</span>
          <h3>{project.headline}</h3>
          <p>{project.description}</p>
          <span className="visual-cta">Explore project <ArrowUpRight size={13} /></span>
        </div>
        <div className="visual-art" aria-hidden="true"><span className="orb orb-one" /><span className="orb orb-two" /><span className="orb orb-three" /></div>
        <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
      </a>
      <div className="project-info">
        <div className="project-title-row"><div><span className={`platform platform-${project.type}`}>{project.type === "ghl" ? "GoHighLevel" : project.type === "react" ? "React" : project.type === "shopify" ? "Shopify" : "WordPress"}</span><h3>{project.name}</h3></div><a className="round-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><ArrowUpRight size={18} /></a></div>
        <p>{project.description}</p>
        <div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
      </div>
    </article>
  );
}

function App() {
  const [active, setActive] = useState("all");
  const filtered = useMemo(() => active === "all" ? projects : projects.filter((project) => project.type === active), [active]);
  const counts = useMemo(() => Object.fromEntries(categories.map((category) => [category.id, category.id === "all" ? projects.length : projects.filter((p) => p.type === category.id).length])), []);

  return (
    <div className="app-shell" id="top">
      <header className="site-nav">
        <a className="brand" href="#top">Sahanowaj<span>.</span>Dev</a>
        <nav><a href="#work">Work</a><a href="#skills">Skills</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow glow-a" /><div className="hero-glow glow-b" />
          <div className="hero-inner">
            <div className="eyebrow"><span className="status-dot" /> Independent web developer <span className="eyebrow-divider">/</span> Shopify · WordPress · GHL · React</div>
            <h1>Digital experiences<br />built with <span>purpose.</span></h1>
            <p className="hero-description">I'm Sahanowaj Sikder, a web developer with 7+ years of experience building e-commerce stores, WordPress platforms, custom solutions and lead-generation funnels.</p>
            <div className="hero-actions"><a className="button button-light" href="#work">Explore selected work <ArrowDownRight size={17} /></a><a className="button button-ghost" href="#contact"><Mail size={16} /> Get in touch</a></div>
            <div className="hero-metrics"><div><strong>23</strong><span>Featured projects</span></div><div><strong>04</strong><span>Platforms</span></div><div><strong>7+ <small>yrs</small></strong><span>Development experience</span></div><div><strong>End-to-end</strong><span>Build · customize · launch</span></div></div>
          </div>
          <div className="hero-side-note"><span>PORTFOLIO / 2026</span><span>DESIGN · DEVELOPMENT · DELIVERY</span></div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-heading"><div><span className="section-kicker">Capabilities</span><h2>Good work takes<br /><span>the right toolkit.</span></h2></div><p>From front-end implementation to e-commerce logic and marketing automation, I work across the full website delivery cycle.</p></div>
          <div className="skills-grid">
            <div className="skill-card"><span className="skill-icon"><ShoppingBag size={20} /></span><h3>Shopify development</h3><p>Liquid, theme customization, sections, product and collection templates, responsive storefronts and e-commerce UX.</p><div className="skill-tags"><span>Liquid</span><span>Theme sections</span><span>Storefront UX</span></div></div>
            <div className="skill-card"><span className="skill-icon"><Code2 size={20} /></span><h3>WordPress development</h3><p>Custom themes, Elementor, WooCommerce, plugins, ACF, REST APIs, performance and business logic.</p><div className="skill-tags"><span>PHP</span><span>WooCommerce</span><span>REST API</span></div></div>
            <div className="skill-card"><span className="skill-icon"><Workflow size={20} /></span><h3>GoHighLevel funnels</h3><p>Landing pages, forms, calendars, A/B testing, workflows, lead routing, email/SMS automation and snapshots.</p><div className="skill-tags"><span>Funnels</span><span>Automation</span><span>CRM</span></div></div>
            <div className="skill-card"><span className="skill-icon"><Layers3 size={20} /></span><h3>React & web technologies</h3><p>React UI, HTML, CSS, JavaScript, PHP, MySQL, jQuery, REST APIs and Git/GitHub.</p><div className="skill-tags"><span>React</span><span>JavaScript</span><span>Git</span></div></div>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading work-heading"><div><span className="section-kicker">Selected work</span><h2>A few things I've<br /><span>helped bring to life.</span></h2></div><p>Explore projects across four platforms. Each card links to the corresponding live website.</p></div>
          <div className="filter-bar" role="tablist" aria-label="Filter projects">{categories.map(({ id, label, icon: Icon }) => <button key={id} className={`filter-tab ${active === id ? "is-active" : ""}`} onClick={() => setActive(id)} role="tab" aria-selected={active === id}><Icon size={15} />{label}<span>{counts[id]}</span></button>)}</div>
          <div className="projects-grid">{filtered.map((project) => <ProjectCard key={project.name} project={project} index={projects.indexOf(project)} />)}</div>
          <div className="work-footnote"><span className="status-dot" /> 23 selected projects <span>·</span> Links open in a new tab</div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-panel"><div className="about-mark"><Sparkles size={23} /><span>HOW I WORK</span></div><div className="about-copy"><span className="section-kicker">More than page building</span><h2>From a design or idea<br />to a <span>working experience.</span></h2><p>My work sits between design, development and business requirements. I translate layouts and ideas into responsive websites, then connect the pieces needed for real-world e-commerce or lead generation.</p></div><div className="process-list"><div><b>01</b><span><strong>Build</strong><small>Theme sections, templates, components and page layouts.</small></span></div><div><b>02</b><span><strong>Integrate</strong><small>APIs, forms, payments, CRM and third-party services.</small></span></div><div><b>03</b><span><strong>Optimize</strong><small>Responsive UX, performance, SEO-friendly structure and maintainability.</small></span></div><div><b>04</b><span><strong>Launch</strong><small>Testing, content checks, fixes and production support.</small></span></div></div></div>
        </section>

        <section className="contact-section section-wrap" id="contact"><div className="contact-panel"><div><span className="section-kicker">Have a project in mind?</span><h2>Let's make something<br /><span>useful together.</span></h2><p>Open to Shopify, WordPress/WooCommerce, GoHighLevel and front-end development opportunities, including remote roles and project-based work.</p></div><a className="button button-light contact-button" href="mailto:your-email@example.com">Start a conversation <ArrowUpRight size={17} /></a><div className="contact-decoration">LET'S BUILD</div></div></section>
      </main>

      <footer className="site-footer"><a className="brand" href="#top">Sahanowaj<span>.</span>Dev</a><span>© 2026 Sahanowaj Sikder</span><span>Shopify · WordPress · GoHighLevel · React</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
