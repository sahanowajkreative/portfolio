import { useMemo, useState } from "react";
import "./App.css";

const projects = [
  // Shopify
  {
    name: "RefluxRaft",
    category: "Shopify",
    url: "https://refluxraft.com/",
    description:
      "E-commerce storefront for a consumer product brand, with product discovery and shopping experiences.",
    technologies: ["Shopify", "Liquid", "E-commerce"],
  },
  {
    name: "ShineWater",
    category: "Shopify",
    url: "https://shinewater.com/",
    description:
      "Shopify storefront with product-focused layouts and a streamlined shopping experience.",
    technologies: ["Shopify", "Liquid", "Responsive UI"],
  },
  {
    name: "Snakkidz",
    category: "Shopify",
    url: "https://snakkidz.com/",
    description:
      "Online store designed to present products clearly and support a user-friendly customer journey.",
    technologies: ["Shopify", "Liquid", "E-commerce"],
  },
  {
    name: "City Threads",
    category: "Shopify",
    url: "https://www.citythreads.com/",
    description:
      "Retail e-commerce website with product browsing and collection-based navigation.",
    technologies: ["Shopify", "Theme Customization"],
  },
  {
    name: "HL Medical",
    category: "Shopify",
    url: "https://shophlmed.com/",
    description: "E-commerce storefront for medical-related products.",
    technologies: ["Shopify", "Liquid", "Product Pages"],
  },
  {
    name: "Kanu Surf",
    category: "Shopify",
    url: "https://kanusurf.com/",
    description:
      "Apparel storefront showcasing product collections and online shopping features.",
    technologies: ["Shopify", "E-commerce", "Responsive UI"],
  },
  {
    name: "4Throws",
    category: "Shopify",
    url: "https://4throws.com/",
    description:
      "Specialist e-commerce store with product-focused shopping and category navigation.",
    technologies: ["Shopify", "Liquid", "E-commerce"],
  },
  {
    name: "Zaza India",
    category: "Shopify",
    url: "https://www.zazaindia.com/",
    description:
      "Online retail storefront with product listings and collection pages.",
    technologies: ["Shopify", "Theme Customization"],
  },

  // WordPress
  {
    name: "Route Relief",
    category: "WordPress",
    url: "https://routerelief.com/",
    description:
      "Business website built around presenting services and helping visitors find relevant information.",
    technologies: ["WordPress", "PHP", "Responsive Design"],
  },
  {
    name: "Routes For Sale",
    category: "WordPress",
    url: "https://www.routesforsale.net/",
    description:
      "Website for browsing and presenting route-related business listings.",
    technologies: ["WordPress", "PHP", "Website Development"],
  },
  {
    name: "Review Raffles",
    category: "WordPress",
    url: "https://reviewraffles.com/",
    description:
      "Business website focused on review-related services and customer engagement.",
    technologies: ["WordPress", "PHP", "Integrations"],
  },
  {
    name: "Shooter McDilly",
    category: "WordPress",
    url: "https://shootermcdilly.com/",
    description:
      "WordPress website with content and page layouts tailored to its business.",
    technologies: ["WordPress", "Theme Customization"],
  },
  {
    name: "Kurt Thomas",
    category: "WordPress",
    url: "https://www.kurtthomas.com/",
    description:
      "Website presenting a personal brand, its content, and related offerings.",
    technologies: ["WordPress", "Responsive Design"],
  },
  {
    name: "SynDaver",
    category: "WordPress",
    url: "https://syndaver.com/",
    description:
      "Corporate website for a company specializing in synthetic human and animal models.",
    technologies: ["WordPress", "PHP", "Website Maintenance"],
  },
  {
    name: "SynDaverX",
    category: "WordPress",
    url: "http://syndaverx.com/",
    description: "Related brand website with product and business information.",
    technologies: ["WordPress", "Theme Customization"],
  },
  {
    name: "WV Senior Advantage",
    category: "WordPress",
    url: "https://www.wvsenioradvantage.com/",
    description:
      "Information-focused website designed to help visitors explore services and resources.",
    technologies: ["WordPress", "Responsive Design"],
  },
  {
    name: "Reading Corner Online",
    category: "WordPress",
    url: "https://readingcorneronline.com/",
    description:
      "Education-focused website for presenting reading resources and learning content.",
    technologies: ["WordPress", "Content Management"],
  },
  {
    name: "Sign Performance",
    category: "WordPress",
    url: "https://www.signperformance.net/",
    description:
      "Business website presenting signage-related services and company information.",
    technologies: ["WordPress", "PHP", "Website Development"],
  },

  // GoHighLevel
  {
    name: "Luxe Glow Salon",
    category: "GoHighLevel",
    url: "https://evolvxai.com/salon",
    description:
      "Salon-focused landing page designed to present a service offer and encourage lead enquiries.",
    technologies: ["GoHighLevel", "Landing Pages", "Lead Generation"],
  },
  {
    name: "Four-Week Salon Sprint",
    category: "GoHighLevel",
    url: "https://evolvxai.com/four-week-sprint-salon",
    description:
      "Campaign landing page for presenting a structured salon marketing offer.",
    technologies: ["GoHighLevel", "Funnels", "Conversion UI"],
  },
  {
    name: "Free Pest Inspection",
    category: "GoHighLevel",
    url: "https://pestfree.planetfriendlypestcontrol.com/schedule-free-inspection",
    description:
      "Lead-generation page that guides visitors toward scheduling a free inspection.",
    technologies: ["GoHighLevel", "Forms", "Lead Generation"],
  },

  // React
  {
    name: "Planet Friendly Pest Control",
    category: "React",
    url: "https://planetfriendlypestcontrol.com/",
    description:
      "Website for a pest-control business, presenting services and guiding visitors toward enquiries.",
    technologies: ["React", "JavaScript", "Responsive UI"],
  },
  {
    name: "HR Portal",
    category: "React",
    url: "https://hr-portal-jet.vercel.app/",
    description:
      "HR portal project demonstrating a dashboard-style interface for employee-related workflows.",
    technologies: ["React", "JavaScript", "CSS"],
  },
];

const filters = ["All", "Shopify", "WordPress", "GoHighLevel", "React"];

const skills = [
  {
    title: "WordPress Development",
    description:
      "Custom themes, plugin development, WooCommerce, Elementor, and backend customization.",
    items: ["WordPress", "PHP", "WooCommerce", "REST API"],
  },
  {
    title: "Shopify Development",
    description:
      "Theme customization, Liquid templates, storefront layouts, and e-commerce functionality.",
    items: ["Shopify", "Liquid", "JavaScript", "E-commerce"],
  },
  {
    title: "Funnels & Automation",
    description:
      "Landing pages, lead capture, CRM workflows, and business process automation.",
    items: ["GoHighLevel", "n8n", "CRM", "Integrations"],
  },
  {
    title: "Frontend Development",
    description:
      "Reusable UI components, responsive layouts, and interactive web experiences.",
    items: ["React", "JavaScript", "HTML", "CSS"],
  },
];

function ProjectCard({ project, index }) {
  const [imageFailed, setImageFailed] = useState(false);

  // This service creates a website preview. Replace it with a local
  // screenshot later if a website preview does not load.
  const screenshotUrl = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(
    project.url,
  )}?w=1000`;

  return (
    <article className="project-card">
      <a
        className={`project-image ${
          imageFailed ? "project-image--fallback" : ""
        }`}
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${project.name} website`}
      >
        {!imageFailed && (
          <img
            src={screenshotUrl}
            alt={`${project.name} website preview`}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        )}

        {imageFailed && (
          <div className="project-image-placeholder">
            <span className="placeholder-mark">
              {project.name.slice(0, 2).toUpperCase()}
            </span>
            <span>{project.name}</span>
            <small>Website preview</small>
          </div>
        )}

        <span className="project-category">{project.category}</span>
        <span className="project-number">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="project-image-link" aria-hidden="true">
          ↗
        </span>
      </a>

      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <a
          className="project-visit"
          href={project.url}
          target="_blank"
          rel="noreferrer"
        >
          Visit live website <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const scrollToProjects = () => {
    document.getElementById("work")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio">
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Home">
            <span className="brand-mark">S</span>
            <span>
              Sahanowaj<span className="brand-dot">.dev</span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#work">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="nav-cta" href="#contact">
            Let's talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability">
                <span className="availability-dot" />
                Open to opportunities
              </div>

              <p className="eyebrow">SENIOR DEVELOPER · KOLKATA, INDIA</p>

              <h1>
                Building digital
                <br />
                experiences that
                <br />
                <span className="gradient-text">work beautifully.</span>
              </h1>

              <p className="hero-description">
                I'm Sahanowaj Sikder, a web developer with 7+ years of
                experience building WordPress websites, Shopify storefronts,
                custom plugins, and web integrations. I also work with
                GoHighLevel and React.
              </p>

              <div className="hero-actions">
                <button
                  type="button"
                  className="button button-primary"
                  onClick={scrollToProjects}
                >
                  Explore my work <span aria-hidden="true">↘</span>
                </button>

                <a className="button button-secondary" href="#contact">
                  Contact me
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>7+</strong>
                  <span>Years of experience</span>
                </div>
                <div>
                  <strong>23</strong>
                  <span>Listed projects</span>
                </div>
                <div>
                  <strong>4</strong>
                  <span>Technology areas</span>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Developer profile">
              <div className="hero-orbit hero-orbit-one" />
              <div className="hero-orbit hero-orbit-two" />

              <div className="hero-glow" />

              <div className="hero-profile-card">
                <div className="profile-top">
                  <span className="profile-indicator" />
                  <span>DEVELOPER PROFILE</span>
                  <span className="profile-menu">•••</span>
                </div>

                <div className="profile-avatar">SS</div>

                <h2>Sahanowaj Sikder</h2>
                <p>Senior Web Developer</p>

                <div className="profile-divider" />

                <div className="profile-skill">
                  <span>WordPress & PHP</span>
                  <span>Core skill</span>
                </div>
                <div className="profile-skill">
                  <span>Shopify & Liquid</span>
                  <span>Core skill</span>
                </div>
                <div className="profile-skill">
                  <span>React & JavaScript</span>
                  <span>Frontend</span>
                </div>

                <div className="profile-footer">
                  <span>Available for new projects</span>
                  <span className="availability-dot" />
                </div>
              </div>

              <div className="floating-chip floating-chip-one">
                <span className="chip-symbol">{"</>"}</span>
                <span>
                  <strong>Clean code</strong>
                  <small>Built with purpose</small>
                </span>
              </div>

              <div className="floating-chip floating-chip-two">
                <span className="chip-symbol">✳</span>
                <span>
                  <strong>Responsive UI</strong>
                  <small>Across screen sizes</small>
                </span>
              </div>
            </div>
          </div>

          <div className="container hero-bottom">
            <span>MY TECH STACK</span>
            <div className="tech-strip">
              <span>WordPress</span>
              <span>Shopify</span>
              <span>PHP</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>GoHighLevel</span>
            </div>
          </div>
        </section>

        <section className="work-section section" id="work">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">SELECTED PROJECTS</p>
                <h2>
                  Work that <span className="gradient-text">speaks.</span>
                </h2>
                <p className="section-description">
                  A collection of websites and development projects across
                  e-commerce, content management, automation, and frontend
                  development.
                </p>
              </div>

              <span className="project-count">
                {filteredProjects.length} projects
              </span>
            </div>

            <div
              className="project-filters"
              role="group"
              aria-label="Filter projects by technology"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`filter-button ${
                    activeFilter === filter ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                  {filter === "All" && (
                    <span className="filter-count">{projects.length}</span>
                  )}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.url}
                  project={project}
                  index={projects.indexOf(project)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section section" id="skills">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">WHAT I DO</p>
                <h2>
                  Skills built through{" "}
                  <span className="gradient-text">experience.</span>
                </h2>
              </div>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>

                  <div className="skill-tags">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>
                Practical development.
                <br />
                <span className="gradient-text">Thoughtful solutions.</span>
              </h2>
            </div>

            <div className="about-copy">
              <p>
                I'm a web developer based in Kolkata, India, with professional
                experience in WordPress, Shopify, and web integrations. My work
                includes website customization, backend development, custom
                plugins, e-commerce functionality, and third-party APIs.
              </p>
              <p>
                I also build GoHighLevel landing pages and automation workflows.
                Alongside my core development experience, I'm growing my
                frontend skills with React and modern JavaScript.
              </p>

              <div className="about-facts">
                <div>
                  <span>Location</span>
                  <strong>Kolkata, India</strong>
                </div>
                <div>
                  <span>Experience</span>
                  <strong>7+ years</strong>
                </div>
                <div>
                  <span>Focus</span>
                  <strong>Web development</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="container">
            <div className="contact-card">
              <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
              <h2>
                Let's build something
                <br />
                <span className="gradient-text">worth sharing.</span>
              </h2>
              <p>
                Looking for a web developer for your next website, e-commerce
                store, or development project? Let's connect.
              </p>

              <div className="contact-actions">
                <a
                  className="button button-primary"
                  href="mailto:s.sikder525@gmail.com"
                >
                  Email me <span aria-hidden="true">↗</span>
                </a>

                <a
                  className="button button-secondary"
                  href="https://linkedin.com/in/sahanowaj-sikder-58997ab1"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="contact-email">s.sikder525@gmail.com</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">S</span>
            <span>
              Sahanowaj<span className="brand-dot">.dev</span>
            </span>
          </a>

          <p>
            © Copyright {new Date().getFullYear()} Sahanowaj Sikder. All rights
            reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
