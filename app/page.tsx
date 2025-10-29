const navigation = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" }
];

const features = [
  {
    title: "Unified Customer Timeline",
    description:
      "Capture every user action, support ticket, and usage spike in a single, searchable timeline that surfaces what truly drives retention."
  },
  {
    title: "Predictive Health Scores",
    description:
      "Blend product telemetry with billing and CRM data to forecast churn and expansion opportunities weeks before they happen."
  },
  {
    title: "AI Insight Copilot",
    description:
      "Ask natural-language questions and receive instant narratives, suggested experiments, and recommended follow-up workflows."
  }
];

const metrics = [
  { label: "Product Teams", value: "120+" },
  { label: "Data Sources", value: "45" },
  { label: "Avg. ROI", value: "6.5x" }
];

const pricing = [
  {
    name: "Launch",
    price: "$249",
    description: "For product-led startups shipping fast and learning even faster.",
    highlights: [
      "Up to 10k tracked users",
      "Two workspaces",
      "Playbook automation library"
    ]
  },
  {
    name: "Scale",
    price: "$549",
    description: "Advanced governance for teams orchestrating multi-product portfolios.",
    highlights: [
      "Unlimited tracked users",
      "Role-based permissions",
      "Data warehouse syncs"
    ],
    accent: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored deployments with dedicated success engineering.",
    highlights: [
      "Private cloud or on-prem",
      "HIPAA, SOC 2 Type II",
      "Global success coverage"
    ]
  }
];

const testimonials = [
  {
    quote:
      "NovaPulse transformed our growth meetings. We finally speak the same language across product, sales, and success.",
    name: "Amelia Fraser",
    role: "VP Product, LumaCloud"
  },
  {
    quote:
      "Insight Copilot surfaces expansion leads our reps close in days, not weeks.",
    name: "Mateo Nguyen",
    role: "Head of Revenue Operations, Cymbal"
  }
];

export default function HomePage() {
  return (
    <div className="page">
      <header className="site-header">
        <nav className="nav">
          <a className="brand" href="#home">
            NovaPulse Labs
          </a>
          <div className="nav-links">
            {navigation.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <a className="cta" href="#contact">
            Request demo
          </a>
        </nav>
      </header>

      <main id="home" className="content">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Product intelligence reimagined</span>
            <h1>Accelerate growth with AI-powered customer intelligence</h1>
            <p>
              NovaPulse Labs ingests every interaction across your stack to deliver proactive guidance, experiment ideas, and
              revenue insights when your team needs them most.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#product">
                Explore the platform
              </a>
              <a className="button button-secondary" href="#contact">
                Talk to sales
              </a>
            </div>
          </div>
          <div className="hero-card">
            <h2>Growth Command Center</h2>
            <p>
              Monitor conversion funnels, expansion signals, and product health scores in one configurable hub powered by live
              data connectors.
            </p>
            <div className="stat-grid">
              <div className="stat-card">
                <span className="stat-label">Forecasted ARR impact</span>
                <span className="stat-value">+$420K</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Experiment velocity</span>
                <span className="stat-value">3.4× faster</span>
              </div>
              <div className="stat-card">
                <span className="stat-label">Proactive playbooks shipped</span>
                <span className="stat-value">27 this quarter</span>
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="section">
          <div className="section-heading">
            <div>
              <h2>The NovaPulse advantage</h2>
              <p>
                Purpose-built for SaaS leaders who need more than dashboards. Our platform unifies product analytics, customer
                success, and go-to-market playbooks into one orchestrated growth engine.
              </p>
            </div>
            <a className="link" href="#contact">
              See customer stories →
            </a>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <div className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="solutions">
          <div className="solutions-copy">
            <h2>Proactive intelligence for every team</h2>
            <p>
              Combine telemetry, billing, and engagement data into actionable intelligence. NovaPulse surfaces the next best
              action for product managers, growth marketers, and customer success—automatically.
            </p>
          </div>
          <div className="metric-grid">
            {metrics.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <span className="metric-label">{metric.label}</span>
                <span className="metric-value">{metric.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="section-heading center">
            <div>
              <h2>Choose a plan that scales with you</h2>
              <p>
                Flexible pricing tiers designed to deliver value from the first experiment to the millionth active user.
              </p>
            </div>
          </div>
          <div className="pricing-grid">
            {pricing.map((plan) => (
              <div className={`pricing-card${plan.accent ? " accent" : ""}`} key={plan.name}>
                <div className="pricing-header">
                  <h3>{plan.name}</h3>
                  <p className="price">{plan.price}</p>
                  <p className="description">{plan.description}</p>
                </div>
                <ul>
                  {plan.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <a className={`button ${plan.accent ? "button-primary" : "button-outline"}`} href="#contact">
                  {plan.accent ? "Start scaling" : "Talk with us"}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section">
          <div className="section-heading center">
            <div>
              <h2>Trusted by leaders who build what&apos;s next</h2>
              <p>NovaPulse delivers clarity to product and revenue teams at fast-growing SaaS companies.</p>
            </div>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <figure className="testimonial-card" key={testimonial.name}>
                <blockquote>“{testimonial.quote}”</blockquote>
                <figcaption>
                  {testimonial.name} · {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Ready to orchestrate product growth?</h2>
          <p>
            Join the teams transforming raw telemetry into revenue acceleration. Tell us about your goals and we&apos;ll design a
            tailored activation plan.
          </p>
          <form className="contact-form">
            <label>
              <span>Name</span>
              <input name="name" placeholder="Avery Johnson" type="text" />
            </label>
            <label>
              <span>Company email</span>
              <input name="email" placeholder="avery@novapulse.ai" type="email" />
            </label>
            <label className="textarea">
              <span>What challenge can we help you solve?</span>
              <textarea name="message" placeholder="Share your growth goals and timelines." />
            </label>
            <button className="button button-primary" type="submit">
              Book a discovery call
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} NovaPulse Labs. All rights reserved.</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  );
}
