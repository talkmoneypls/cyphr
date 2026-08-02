'use client'

import { useEffect, useState, useRef } from 'react'

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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ========================================
// ANIMATED COUNTER
// ========================================
function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const start = Date.now()
          const tick = () => {
            const elapsed = Date.now() - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          tick()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

// ========================================
// NAV
// ========================================
function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-logo">
        CYPH<span>R</span>
      </div>
      <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span className={`burger-line ${open ? 'open' : ''}`} />
        <span className={`burger-line ${open ? 'open' : ''}`} />
        <span className={`burger-line ${open ? 'open' : ''}`} />
      </button>
      <ul className={`nav-links ${open ? 'nav-open' : ''}`}>
        <li><a href="#problem" onClick={() => setOpen(false)}>The Problem</a></li>
        <li><a href="#stack" onClick={() => setOpen(false)}>The Stack</a></li>
        <li><a href="#cubit" onClick={() => setOpen(false)}>Cubit</a></li>
        <li><a href="#fit" onClick={() => setOpen(false)}>Who It{"'"}s For</a></li>
        <li><a href="#faq" onClick={() => setOpen(false)}>FAQ</a></li>
        <li><a href="#close" className="nav-cta" onClick={() => setOpen(false)}>Book a Call</a></li>
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
        Your SaaS stack costs<br />
        you $120K/year.<br />
        <span className="accent">You own none of it.</span>
      </h1>
      <p className="hero-sub">
        We build custom software DTC brands own forever. One project. One fee. No more subscriptions. No more renting your business infrastructure.
      </p>
      <p className="hero-taglines">
        Klaviyo just raised prices again. So did your attribution tool. And your support tool. We build the exit.
      </p>
      <div className="hero-ctas">
        <a href="#close" className="btn-primary">Book a Call</a>
        <a href="#stack" className="btn-secondary">See the Stack</a>
      </div>
      <p className="hero-micro">
        for ecom brands doing $100K-$10M/mo. if your offer is real, so is ours.
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
    "you're paying for tools you don't use",
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
  const counter = useCounter(94800, 2500)

  const costs = [
    { cost: '$2,300/mo', tool: 'Shopify Plus' },
    { cost: '$1,200/mo', tool: 'Email & SMS' },
    { cost: '$2,000/mo', tool: 'Attribution' },
    { cost: '$600/mo', tool: 'Support' },
    { cost: '$400/mo', tool: 'Reviews' },
    { cost: '$500/mo', tool: 'Subscriptions' },
    { cost: '$400/mo', tool: 'Returns & Tracking' },
    { cost: '$500/mo', tool: 'Landing Pages & Misc' },
  ]

  return (
    <section className="section" id="problem">
      <div className="reveal">
        <div className="section-label">SEC.01 / The Problem</div>
        <h2>Your brand runs on 23 tools you don{"'"}t own.</h2>
        <div className="section-body">
          <p>
            The average ecom brand doing $500K-$2M/mo is bleeding $5K-$10K every month across a stack of subscriptions. That{"'"}s $60K-$120K a year. And you don{"'"}t own a single line of code.
          </p>
          <p style={{ marginTop: '1rem' }}>
            You can{"'"}t customize it. You can{"'"}t export your data properly. You can{"'"}t build the one feature that would actually move the needle because it{"'"}s {'"'}not on the roadmap.{'"'}
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

        <div className="problem-total" ref={counter.ref}>
          <span className="label">Annual SaaS Spend</span>
          <span className="amount">${counter.count.toLocaleString()}/yr</span>
        </div>

        <div className="problem-total" style={{ background: 'transparent', border: '1px solid var(--border)' }}>
          <span className="label">What You Own</span>
          <span className="amount" style={{ color: 'var(--text-primary)' }}>Nothing.</span>
        </div>

        <p className="section-note">
          You{"'"}re paying for a billion features and using three of them. If any of those tools shuts down, changes its API, or triples its pricing tomorrow, your entire operation breaks.
        </p>
        <p className="section-closer">you{"'"}re not running a business. you{"'"}re renting one.</p>
      </div>
    </section>
  )
}

// ========================================
// WHY NOW
// ========================================
function WhyNow() {
  return (
    <section className="section" id="whynow">
      <div className="reveal">
        <div className="section-label">SEC.02 / Why Now</div>
        <h2>Your costs are rising from every direction.</h2>
        <div className="section-body">
          <p>
            Customer acquisition costs are up 40-60% since 2023. The average DTC brand now loses money on the first order. Your margins are getting crushed from both sides: rising ad costs AND rising SaaS costs.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Meanwhile, every SaaS vendor is force-bundling AI features into their plans and sunsetting the old pricing. Paying more for features you didn{"'"}t ask for. Klaviyo post-IPO keeps hiking prices. HubSpot now charges $10 per 1,000 AI credits on top of your subscription.
          </p>
          <p style={{ marginTop: '1rem' }}>
            The era of {'"'}spin up a Shopify store, run paid ads, and ride it to an exit{'"'} is over.
          </p>
        </div>
      </div>
      <p className="section-closer reveal">the brands that own their infrastructure will outlast the ones still renting. this isn{"'"}t a prediction. it{"'"}s math.</p>
    </section>
  )
}

// ========================================
// OFFER
// ========================================
function Offer() {
  const steps = [
    { num: 'STEP 01', title: 'Audit', desc: 'We map your entire SaaS stack. Every tool, every cost, every overlap, every feature you\'re paying for but never use, every limitation you\'ve been working around with duct tape and Zapier flows.' },
    { num: 'STEP 02', title: 'Build', desc: 'Our team builds your custom software. Not a template. Not a white-label. Not another app in someone else\'s ecosystem. Your software, built for your brand. In weeks, not years.' },
    { num: 'STEP 03', title: 'Own', desc: 'We hand it over. You own the code. You own the data. You own the infrastructure. If you want to take it to another team tomorrow, you can.' },
    { num: 'STEP 04', title: 'Maintain', desc: 'We stay on retainer to maintain and improve. New features, new ideas. Added whenever you want, not whenever a product team gets around to it. But you can walk away anytime.' },
  ]

  return (
    <section className="section" id="offer">
      <div className="reveal">
        <div className="section-label">SEC.03 / The Offer</div>
        <h2>We build software DTC brands own for life.</h2>
        <div className="section-body">
          <p>
            One project. One fee. The software is yours. The code, the data, the infrastructure. No subscriptions. No platform taxes. No begging a product team for a feature that{"'"}s {'"'}not on the roadmap.{'"'}
          </p>
          <p style={{ marginTop: '1rem' }}>
            It{"'"}s the difference between owning a house and paying rent. One builds equity. The other builds someone else{"'"}s.
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

      <p className="section-closer reveal" style={{ marginTop: '2.5rem' }}>
        you don{"'"}t rent your warehouse. you don{"'"}t rent your office. why are you renting the software your entire business runs on?
      </p>
    </section>
  )
}

// ========================================
// STACK / SYSTEMS
// ========================================
function SystemBlock({ tag, title, desc, features }: { tag: string; title: string; desc: string; features: string[] }) {
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
            <div className="feature-item" key={i}>{f}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Stack() {
  const systems = [
    {
      tag: 'SYS.01', title: 'Creative Intelligence',
      desc: 'Your own ad intelligence engine. Not a $500/mo tool with features you\'ll never touch.',
      features: ['Ad variant generator', 'Ad-to-landing-page matcher', '24/7 competitor research agent', 'Creative fatigue detector', 'Winning ad auto-tagger', 'Angle & hook generator (from reviews/support tickets)', 'Competitor ad library scraper + gap analysis', 'Review-to-content engine'],
    },
    {
      tag: 'SYS.02', title: 'Content & Conversion',
      desc: 'One system replaces your landing page tool, your popup tool, your quiz builder, your copywriting subscriptions, and half your agency.',
      features: ['UGC script generator', 'Email/SMS copy generator', 'Influencer/UGC brief generator', 'Auto-generated PDP copy variants', 'Quiz/advertorial funnel builder', 'Dynamic landing page personalization', 'Smart popups/offers (segmented by source/behavior)', 'Personalized bundle builder'],
    },
    {
      tag: 'SYS.03', title: 'Customer Experience & Retention',
      desc: 'The average DTC brand loses money on the first order. The money is in the second, third, and tenth. This system makes sure they come back.',
      features: ['AI support setup (Commslayer/Gorgias)', 'Post-purchase education flows', 'AI-drafted support ticket responses', 'Win-back flow builder (personalized by purchase history)', 'Branded order tracking & shipping notifications', 'Agentic email marketing system'],
    },
    {
      tag: 'SYS.04', title: 'Data & Attribution',
      desc: "You're paying $1,000-$2,500/mo for attribution that gives you different numbers than your ad platform. Which one's lying?",
      features: ['Custom analytics dashboard (all sources, one view)', 'Attribution tracking (own it, don\'t rent it)'],
    },
  ]

  return (
    <section className="section" id="stack">
      <div className="reveal">
        <div className="section-label">SEC.04 / The Stack</div>
        <h2>Four systems. Your entire operation. <span style={{ color: 'var(--accent)' }}>Owned.</span></h2>
        <div className="section-body">
          <p>Every brand on Shopify has the same apps, same templates, same limitations. We build proprietary tools that give you an edge.</p>
        </div>
      </div>
      <div className="reveal" style={{ marginTop: '2.5rem' }}>
        {systems.map((sys, i) => <SystemBlock key={i} {...sys} />)}
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
    'One source of truth for each product', 'Shared brand knowledge library',
    'Market & competitor research with sourced reports', 'Ad script generation from real data',
    'Landing page builder with version control', 'Creative test tracking & decision logs',
    'Audio/video transcription', 'AI copilot with full brand context',
    'Reusable lessons across campaigns',
  ]

  return (
    <section className="section cubit-section" id="cubit">
      <div className="reveal">
        <div className="section-label">SEC.05 / Cubit</div>
        <h2>Your entire growth operation. <span style={{ color: 'var(--accent)' }}>One workspace.</span></h2>
        <div className="section-body">
          <p>Your research lives in one tool. Your scripts live in another. Your numbers live in a spreadsheet. Your AI conversations live in separate chats. Nothing is connected. Every campaign starts from scratch.</p>
          <p style={{ marginTop: '1rem' }}>Cubit keeps everything connected around the same product so every campaign compounds on the last one.</p>
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
            <div className="cubit-feature" key={i}><p>{f}</p></div>
          ))}
        </div>
        <p className="section-closer">your competitor starts every campaign from zero. you start from everything you{"'"}ve already learned. that{"'"}s the moat.</p>
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
        <div className="section-label">SEC.06 / VS The Competition</div>
        <h2>Everyone else rents you a seat. We hand you the keys.</h2>
      </div>
      <div className="reveal">
        <div className="comparison">
          <div className="comparison-col them">
            <h3>Every Other Agency / SaaS Vendor</h3>
            <ul>
              <li>Builds on templates everyone else uses</li>
              <li>Charges you monthly forever</li>
              <li>Hosts on their servers, your data is theirs</li>
              <li>Raises prices whenever they want</li>
              <li>You leave, you lose everything. Data, flows, history</li>
              <li>You own a login</li>
            </ul>
          </div>
          <div className="comparison-col us">
            <h3>Cyphr</h3>
            <ul>
              <li>Builds custom for your brand only</li>
              <li>Charges per project, one fee</li>
              <li>Runs on your infrastructure, your data is yours</li>
              <li>Your costs go down over time, not up</li>
              <li>You leave, you keep everything. Code, data, all of it</li>
              <li>You own the business</li>
            </ul>
          </div>
        </div>
        <p className="section-closer">that{"'"}s the difference. read it again.</p>
      </div>
    </section>
  )
}

// ========================================
// WHO IT'S FOR
// ========================================
function WhoItsFor() {
  const fits = [
    { tag: 'FIT.01', title: 'DTC brands doing $100K-$10M/mo', desc: 'Your SaaS stack costs more than some of your employees. You\'ve outgrown the off-the-shelf tools but you\'re trapped because migration is painful.' },
    { tag: 'FIT.02', title: 'Brands getting squeezed on margins', desc: 'CAC is up 40-60%. Your SaaS costs keep climbing. Every dollar you stop wasting on subscriptions goes straight to your bottom line.' },
    { tag: 'FIT.03', title: 'Brands that want to own their data', desc: 'Your customer data is scattered across 15 vendors. One breach at any of them and you\'re the one explaining it. Take control.' },
    { tag: 'FIT.04', title: 'Teams drowning in tool fatigue', desc: 'Your team is spending more time managing dashboards than doing the work that actually grows the business. One system. Everything connected.' },
  ]

  return (
    <section className="section" id="fit">
      <div className="reveal">
        <div className="section-label">SEC.07 / Who This Is For</div>
        <h2>If you{"'"}re paying $5K+/mo in SaaS and you still don{"'"}t own your tools, we should talk.</h2>
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
        <p className="fit-note">if you don{"'"}t have a real brand or real revenue, this isn{"'"}t for you. we build for operators doing $100K/mo and up.</p>
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
    { q: 'Is custom software actually cheaper than my SaaS stack?', a: "If you're paying $5K-$10K/mo in SaaS fees, that's $60K-$120K/year. A custom system costs a one-time project fee plus a maintenance retainer that's a fraction of what you're paying now. Most clients break even within 12-18 months and save every month after that. Except now you own an asset instead of renting a subscription." },
    { q: 'How is this different from hiring a dev team?', a: "A dev team builds what you tell them. We build what actually works. Because we understand DTC, ecommerce, the tools you're replacing, and the problems those tools never solved. Engineering plus ecom expertise in one team." },
    { q: "Isn't the maintenance fee the same as paying for SaaS?", a: "Same number on paper, completely different thing. SaaS scales with your usage. Klaviyo charges more as your list grows. Gorgias charges more as tickets increase. Our retainer stays flat whether you're doing $100K/mo or $10M/mo. And if you stop paying, you still have the software. Stop paying Klaviyo and you have nothing." },
    { q: 'How long does a project take?', a: "A single custom tool: 4-8 weeks. A full stack replacement: 3-6 months. In 2026, AI-assisted development makes us faster than any agency could have been two years ago. And there's zero downtime. We build alongside your existing stack." },
    { q: 'Do I really own the code?', a: "Yes. Full source code, complete documentation, infrastructure access. If you want to take it to another team tomorrow, you can. You'll never need our permission to use your own software. Try asking Klaviyo for their source code." },
    { q: 'What about migration? Will I lose my data?', a: "We handle the entire migration. Customer data, email lists, flows, automations, history. Everything moves to your new system. The difference is it now lives on YOUR servers, not someone else's." },
    { q: 'What if you guys disappear?', a: "You own the code, the documentation, and the infrastructure. Any competent developer can pick it up. That's the whole point. You're not dependent on us the way you're dependent on Klaviyo or Shopify. The irony is your current SaaS vendors could shut down any time and you'd lose everything." },
    { q: 'What if I only need one tool replaced?', a: "Most clients start with one system, usually the most expensive or most frustrating tool in their stack. Replace that, see the results, then decide if you want to go further. No pressure to replace everything on day one." },
    { q: 'Can custom software really replace Klaviyo or Triple Whale?', a: "You're not replacing all of Klaviyo. You're replacing the 20% you actually use, built exactly for your brand, without the 80% you pay for and never touch. Those companies serve millions with one generic product. We build one product for one customer: you." },
  ]

  return (
    <section className="section" id="faq">
      <div className="reveal">
        <div className="section-label">SEC.08 / FAQ</div>
        <h2>Questions.</h2>
      </div>
      <div className="reveal">
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <div className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
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
        <div className="section-label" style={{ textAlign: 'center' }}>SEC.09 / Let{"'"}s Talk</div>
        <h2>
          Every month you wait, that SaaS bill hits again. $5K. $8K. $10K.{' '}
          <span className="accent">And you still own nothing.</span>
        </h2>
        <p className="close-sub">Your SaaS vendors will keep raising prices. Your margins will keep shrinking. Or you build once, own forever, and never pay rent again.</p>
        <div className="close-ctas">
          <a href="#" className="btn-primary">Book a Call</a>
          <a href="#" className="btn-secondary">DM Us</a>
        </div>
        <p className="close-note">
          the brands that own their software will outrun the ones still renting. every single time.
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
        <br />© 2026 Cyphr. No templates. No rentals. No subscriptions.
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
      <WhyNow />
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
