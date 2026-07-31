'use client'

import { useEffect, useRef, useState } from 'react'

// ========================================
// SCROLL REVEAL HOOK
// ========================================
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

// ========================================
// NAV
// ========================================
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        CYPH<span>R</span>
      </div>
      <ul className="nav-links">
        <li><a href="#problem">The Problem</a></li>
        <li><a href="#stack">The Stack</a></li>
        <li><a href="#cubit">Cubit</a></li>
        <li><a href="#fit">Who It's For</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#close" className="nav-cta">Book a Call</a></li>
      </ul>
    </nav>
  )
}

// ========================================
// HERO
// ========================================
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow" />
      <div className="hero-label">Custom Software for DTC Brands</div>
      <h1>
        Stop renting<br />
        your software.<br />
        <span className="accent">Start owning it.</span>
      </h1>
      <p className="hero-sub">
        Custom-built software for DTC brands tired of paying thousands every month for tools they'll never own.
      </p>
      <p className="hero-taglines">
        No subscriptions. No platform lock-in. No begging for features.
      </p>
      <div className="hero-ctas">
        <a href="#close" className="btn-primary">Book a Call</a>
        <a href="#stack" className="btn-secondary">See the Stack</a>
      </div>
      <p className="hero-micro">
        response within 24 hours. if your offer is real, so is ours.
      </p>
    </section>
  )
}

// ========================================
// TICKER
// ========================================
function Ticker() {
  const items = [
    'your software, your data, your rules',
    'no monthly fees',
    'no platform lock-in',
    'custom-built for your brand',
    'own everything',
    'stop renting start owning',
  ]

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i}>
            {i % 2 === 0 ? item : <>{item.split(' ')[0]} <span className="purple">{item.split(' ').slice(1).join(' ')}</span></>}
            {' ::: '}
          </span>
        ))}
      </div>
    </div>
  )
}

// ========================================
// PROBLEM
// ========================================
function Problem() {
  const costs = [
    { cost: '$300/mo', tool: 'Email Platform' },
    { cost: '$200/mo', tool: 'Landing Pages' },
    { cost: '$150/mo', tool: 'Analytics' },
    { cost: '$100/mo', tool: 'Reviews' },
    { cost: '$250/mo', tool: 'Support Tools' },
    { cost: '$400/mo', tool: 'Attribution' },
  ]

  return (
    <section className="section" id="problem">
      <div className="reveal">
        <div className="section-label">SEC.01 / The Problem</div>
        <h2>You're paying rent on your entire business.</h2>
        <div className="section-body">
          <p>
            Every month your brand bleeds cash into tools you don't control. You can't customize them. You can't export your data properly. You can't build the one feature that would actually move the needle because it's "not on the roadmap."
          </p>
          <p style={{ marginTop: '1rem' }}>
            You're running a business on rented land. And every platform you depend on knows you can't leave.
          </p>
        </div>
      </div>

      <div className="reveal">
        <div className="problem-grid">
          {costs.map((item, i) => (
            <div className="problem-item" key={i}>
              <div className="cost">{item.cost}</div>
              <div className="tool">{item.tool}</div>
            </div>
          ))}
        </div>

        <div className="problem-total">
          <span className="label">Minimum Monthly SaaS Bill</span>
          <span className="amount">$1,400/mo</span>
        </div>

        <div className="problem-total" style={{ background: 'transparent', border: `1px solid var(--border)` }}>
          <span className="label">Annual Cost — You Own Nothing</span>
          <span className="amount" style={{ color: 'var(--text-primary)' }}>$16,800/yr</span>
        </div>

        <p className="problem-note">we build the exit.</p>
      </div>
    </section>
  )
}

// ========================================
// OFFER
// ========================================
function Offer() {
  const steps = [
    {
      num: 'STEP 01',
      title: 'Scope',
      desc: 'We audit your current stack. Every tool you\'re renting, every limitation, every feature you wish existed. Then we spec what to build.',
    },
    {
      num: 'STEP 02',
      title: 'Build',
      desc: 'Our team builds your custom software. Not a template. Not a white-label. Your software, your workflows, your data.',
    },
    {
      num: 'STEP 03',
      title: 'Own',
      desc: 'We hand it over. You own the code. You own the data. You own the infrastructure. It runs under your control.',
    },
    {
      num: 'STEP 04',
      title: 'Maintain',
      desc: 'We stay on retainer to maintain and improve. You keep growing, we keep building. But you can walk away — you own everything.',
    },
  ]

  return (
    <section className="section" id="offer">
      <div className="reveal">
        <div className="section-label">SEC.02 / The Offer</div>
        <h2>We build software DTC brands own for life.</h2>
        <div className="section-body">
          <p>
            One project. One fee. The software is yours — the code, the data, the infrastructure. No subscriptions. No platform taxes. No asking permission to use your own tools.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Then we maintain it for as long as you want us to. Updates, improvements, new features — on a flat monthly retainer that costs less than half the stack you're replacing.
          </p>
        </div>
      </div>

      <div className="reveal">
        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step-card" key={i}>
              <div className="step-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="problem-note reveal" style={{ marginTop: '2.5rem' }}>
        you don't rent your warehouse. why are you renting your software?
      </p>
    </section>
  )
}

// ========================================
// STACK / SYSTEMS
// ========================================
function SystemBlock({
  tag,
  title,
  desc,
  features,
}: {
  tag: string
  title: string
  desc: string
  features: string[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="system-block">
      <div className="system-header" onClick={() => setOpen(!open)}>
        <div>
          <div className="system-tag">{tag}</div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <div className={`system-toggle ${open ? 'open' : ''}`}>+</div>
      </div>
      <div className={`system-body ${open ? 'open' : ''}`}>
        <div className="system-features">
          {features.map((f, i) => (
            <div className="feature-item" key={i}>
              {f}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Stack() {
  const systems = [
    {
      tag: 'SYS.01',
      title: 'Creative Intelligence',
      desc: 'Your own ad intelligence engine. Research competitors 24/7, detect creative fatigue, generate angles from real customer data.',
      features: [
        'Ad variant generator',
        'Ad-to-landing-page matcher',
        '24/7 competitor research agent',
        'Creative fatigue detector',
        'Winning ad auto-tagger',
        'Angle & hook generator (from reviews/support tickets)',
        'Competitor ad library scraper + gap analysis',
        'Review-to-content engine',
      ],
    },
    {
      tag: 'SYS.02',
      title: 'Content & Conversion',
      desc: 'Everything between "idea" and "customer sees it." Scripts, copy, funnels, landing pages, and personalized experiences.',
      features: [
        'UGC script generator',
        'Email/SMS copy generator',
        'Influencer/UGC brief generator',
        'Auto-generated PDP copy variants',
        'Quiz/advertorial funnel builder',
        'Dynamic landing page personalization',
        'Smart popups/offers (segmented by source/behavior)',
        'Personalized bundle builder',
      ],
    },
    {
      tag: 'SYS.03',
      title: 'Customer Experience & Retention',
      desc: 'Stop losing customers after the first purchase. AI support, win-back flows, branded comms, and a full email marketing system.',
      features: [
        'AI support setup (Commslayer/Gorgias)',
        'Post-purchase education flows',
        'AI-drafted support ticket responses',
        'Win-back flow builder (personalized by purchase history)',
        'Branded order tracking & shipping notifications',
        'Agentic email marketing system',
      ],
    },
    {
      tag: 'SYS.04',
      title: 'Data & Attribution',
      desc: 'One dashboard. Every source. Your data, your hands. Replace Triple Whale and Northbeam with something you own.',
      features: [
        'Custom analytics dashboard (all sources, one view)',
        'Attribution tracking (own it, don\'t rent it)',
      ],
    },
  ]

  return (
    <section className="section" id="stack">
      <div className="reveal">
        <div className="section-label">SEC.03 / The Stack</div>
        <h2>Four systems. Your entire operation. <span style={{ color: 'var(--accent)' }}>Owned.</span></h2>
        <div className="section-body">
          <p>Everything a DTC brand needs to run, grow, and compete — built custom, owned forever.</p>
        </div>
      </div>

      <div className="reveal" style={{ marginTop: '2.5rem' }}>
        {systems.map((sys, i) => (
          <SystemBlock key={i} {...sys} />
        ))}
      </div>
    </section>
  )
}

// ========================================
// CUBIT
// ========================================
function Cubit() {
  const cycle = ['Product', 'Knowledge', 'Research', 'Create', 'Launch', 'Measure', 'Learn', 'Repeat']
  const features = [
    'One source of truth for each product',
    'Shared brand knowledge library',
    'Market & competitor research with sourced reports',
    'Ad script generation from real data',
    'Landing page builder with version control',
    'Creative test tracking & decision logs',
    'Audio/video transcription',
    'AI copilot with full brand context',
    'Reusable lessons across campaigns',
  ]

  return (
    <section className="section cubit-section" id="cubit">
      <div className="reveal">
        <div className="section-label">SEC.04 / Cubit</div>
        <h2>Your entire growth operation. <span style={{ color: 'var(--accent)' }}>One workspace.</span></h2>
        <div className="section-body">
          <p>
            Cubit is an AI-assisted workspace for DTC brands and growth teams. It connects product knowledge, market research, ad scripts, landing pages, creative testing, and campaign lessons in one place.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Instead of keeping research in one tool, scripts in another, numbers in a spreadsheet, and AI conversations in separate chats — Cubit keeps everything connected around the same product.
          </p>
        </div>
      </div>

      <div className="reveal">
        <div className="cubit-cycle">
          {cycle.map((item, i) => (
            <span key={i}>
              {i > 0 && <span className="arrow"> → </span>}
              {item}
            </span>
          ))}
        </div>

        <div className="cubit-features">
          {features.map((f, i) => (
            <div className="cubit-feature" key={i}>
              <p>{f}</p>
            </div>
          ))}
        </div>

        <p className="cubit-note">every campaign compounds on the last one. that's the point.</p>
      </div>
    </section>
  )
}

// ========================================
// COMPARISON
// ========================================
function Comparison() {
  return (
    <section className="section" id="comparison">
      <div className="reveal">
        <div className="section-label">SEC.05 / VS The Competition</div>
        <h2>Everyone else rents you a seat. We hand you the keys.</h2>
      </div>

      <div className="reveal">
        <div className="comparison">
          <div className="comparison-col them">
            <h3>Every Other Agency</h3>
            <ul>
              <li>Builds on templates</li>
              <li>Charges monthly</li>
              <li>Hosts on their servers</li>
              <li>You leave, you lose everything</li>
              <li>They own the code</li>
              <li>You own a login</li>
            </ul>
          </div>
          <div className="comparison-col us">
            <h3>Cyphr</h3>
            <ul>
              <li>Builds custom</li>
              <li>Charges per project</li>
              <li>Runs on your infrastructure</li>
              <li>You leave, you keep everything</li>
              <li>You own the code</li>
              <li>You own the business</li>
            </ul>
          </div>
        </div>

        <p className="comparison-note">that's the difference. read it again.</p>
      </div>
    </section>
  )
}

// ========================================
// WHO IT'S FOR
// ========================================
function WhoItsFor() {
  const fits = [
    {
      tag: 'FIT.01',
      title: 'DTC / Ecommerce brands',
      desc: 'Doing $50K+/mo and bleeding cash into a SaaS stack you\'ve outgrown.',
    },
    {
      tag: 'FIT.02',
      title: 'Brands scaling hard',
      desc: 'Your tools are limiting growth. You need software that scales with you, not against you.',
    },
    {
      tag: 'FIT.03',
      title: 'Data-first brands',
      desc: 'You\'re tired of platform lock-in and want full control over your customer data and analytics.',
    },
    {
      tag: 'FIT.04',
      title: 'Teams tired of workarounds',
      desc: 'Hacking together Zapier flows and spreadsheets because no tool does what you need. We build the tool.',
    },
  ]

  return (
    <section className="section" id="fit">
      <div className="reveal">
        <div className="section-label">SEC.06 / Who This Is For</div>
        <h2>If you sell online and you're tired of renting, we should talk.</h2>
      </div>

      <div className="reveal">
        <div className="fit-grid">
          {fits.map((f, i) => (
            <div className="fit-card" key={i}>
              <div className="fit-tag">{f.tag}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <p className="fit-note">if you don't have a real brand or real revenue, this isn't for you. we build for operators.</p>
      </div>
    </section>
  )
}

// ========================================
// FAQ
// ========================================
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'How is this different from hiring a dev team?',
      a: 'A dev team builds what you tell them. We build what actually works — because we understand DTC, ecommerce, and the tools you\'re replacing. Engineering + ecom expertise in one team.',
    },
    {
      q: 'How long does a project take?',
      a: 'Depends on scope. A single custom tool: 4–8 weeks. A full stack replacement: 3–6 months. We give you a real timeline on the discovery call.',
    },
    {
      q: 'Do I really own the code?',
      a: 'Yes. Full source code, documentation, and infrastructure access. If you want to take it to another team tomorrow, you can. You\'ll never need our permission.',
    },
    {
      q: 'What does maintenance cost?',
      a: 'A fraction of what you\'re paying in SaaS fees right now. Flat monthly retainer, no surprises. We spec this during the audit.',
    },
    {
      q: 'What if I only need one tool?',
      a: 'That\'s fine. Most clients start with one system and expand. We build exactly what you need, nothing more.',
    },
    {
      q: 'Can I see examples?',
      a: 'DM us. Some work is under NDA, some we can show. Either way we walk you through the architecture and the results.',
    },
  ]

  return (
    <section className="section" id="faq">
      <div className="reveal">
        <div className="section-label">SEC.07 / FAQ</div>
        <h2>Questions.</h2>
      </div>

      <div className="reveal">
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <div
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <h3>{faq.q}</h3>
                <span className={openIndex === i ? 'open' : ''}>+</span>
              </div>
              <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// CLOSE
// ========================================
function Close() {
  return (
    <section className="close-section" id="close">
      <div className="close-glow" />
      <div className="reveal">
        <div className="section-label" style={{ textAlign: 'center' }}>SEC.08 / Settlement</div>
        <h2>
          Every month you wait, that SaaS bill hits again.{' '}
          <span className="accent">And you still own nothing.</span>
        </h2>
        <div className="close-ctas">
          <a href="#" className="btn-primary">Book a Call</a>
          <a href="#" className="btn-secondary">DM Us</a>
        </div>
        <p className="close-note">
          the brands that own their software will outrun the ones still renting. pick a side.
        </p>
      </div>
    </section>
  )
}

// ========================================
// FOOTER
// ========================================
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <strong>CYPHR</strong> — Custom software for ecommerce brands. Own everything.
        <br />
        © 2026 Cyphr. No templates. No rentals.
      </div>
      <div className="footer-links">
        <a href="#">X</a>
        <a href="#">DM</a>
        <a href="#close">Book a Call</a>
      </div>
    </footer>
  )
}

// ========================================
// PAGE
// ========================================
export default function Home() {
  useReveal()

  return (
    <main>
      <Nav />
      <Hero />
      <Ticker />
      <hr className="section-divider" />
      <Problem />
      <hr className="section-divider" />
      <Offer />
      <hr className="section-divider" />
      <Stack />
      <hr className="section-divider" />
      <Cubit />
      <hr className="section-divider" />
      <Comparison />
      <hr className="section-divider" />
      <WhoItsFor />
      <hr className="section-divider" />
      <FAQ />
      <Close />
      <Footer />
    </main>
  )
}
