import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Building2, Brain, Activity, Gauge, Network, Layers, Zap, GraduationCap, School, Code2, ChevronDown } from "lucide-react";
import isbLogo from "@/assets/isb-iventure.jpg";
import nvidiaLogo from "@/assets/nvidia-inception.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cognitive Fingerprint AI — Learning Intelligence Infrastructure" },
      { name: "description", content: "An API-first engine that understands how learners learn and how instruction works—at scale." },
    ],
  }),
});

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-semibold uppercase tracking-wider text-brand">{children}</p>;
}

function Nav() {
  const items = [
    { href: "#problem", label: "Problem" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#engine", label: "CFA™ Engine" },
    { href: "#for-whom", label: "For Whom" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/15 text-brand">
            <Brain className="h-5 w-5" />
          </div>
          <span className="text-sm font-bold tracking-tight">Cognitive Fingerprint AI<sup className="ml-0.5">™</sup></span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {i.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-40 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-24 text-center md:pt-32">
        <Pill>Learning Intelligence AI Infrastructure</Pill>
        <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
          Cognitive Fingerprint <span className="text-brand">AI<sup className="text-3xl md:text-4xl">™</sup></span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-foreground/80 md:text-xl">
          An API-first engine that understands how learners learn and how instruction works—at scale.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
          Cognitive Fingerprint AI is a learning intelligence engine grounded in learning science, modeling learner–instructor interactions to drive measurable learning outcomes beyond content delivery and test scores.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition hover:opacity-90">
            <Sparkles className="h-4 w-4" /> Explore How It Works <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#for-whom" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-accent">
            <Building2 className="h-4 w-4" /> For Platforms & Institutions
          </a>
        </div>
        <div className="mt-16 flex justify-center text-brand/60">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = ["Teaching styles vary widely", "Learning patterns are deeply individual", "Assessments are static and shallow", "Learning gaps grow silently"];
  return (
    <section id="problem" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Education Still Runs on Averages</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Learners learn differently. Instruction varies widely. <span className="font-semibold text-foreground">Yet most education systems are built around standardisation.</span>
        </p>
        <p className="mt-3 text-muted-foreground">Assessment scores capture outcomes—but not how learning happens.</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t) => (
            <div key={t} className="rounded-xl border border-border bg-card p-6 text-left text-sm font-medium text-card-foreground shadow-sm">
              {t}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-muted-foreground">
          As a result, personalisation remains shallow and reactive, optimising content rather than learning itself.
        </p>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="border-t border-border/40 bg-brand/[0.04] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionLabel>The Solution</SectionLabel>
        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">From Content to Learning Intelligence</h2>
        <p className="mt-6 text-lg text-muted-foreground">True personalisation requires understanding learning behaviour, not just engagement.</p>
        <p className="mt-4 text-muted-foreground">
          Cognitive Fingerprint AI captures how learners respond to instruction, how teaching styles vary, and how outcomes evolve across real interactions. This enables fit-based decision-making—replacing trial-and-error approaches with data-driven learning intelligence grounded in how learning actually occurs.
        </p>
      </div>
    </section>
  );
}

function Engine() {
  return (
    <section id="engine" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionLabel>CFA™ Engine</SectionLabel>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">What Is Cognitive Fingerprint AI™?</h2>
          <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">
            An API-first learning intelligence engine inspired by learning science and the neuroscience of learning. Rather than optimising content delivery, the engine operates at the <span className="font-semibold text-foreground">decision layer</span>—modelling learning as a dynamic relationship between learner and instruction, continuously refined through real educational interactions.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand"><GraduationCap className="h-6 w-6" /></div>
            <h3 className="mt-5 text-xl font-bold">Learner</h3>
            <p className="mt-3 text-muted-foreground">Models pacing, cognitive load, response patterns and reflection–action loops to build an evolving learner profile.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand"><Layers className="h-6 w-6" /></div>
            <h3 className="mt-5 text-xl font-bold">Instruction</h3>
            <p className="mt-3 text-muted-foreground">Captures instructional intent, adaptability and pedagogy signals—turning teaching into structured, observable data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowEngineThinks() {
  const signals = [
    { icon: Gauge, label: "Pacing" },
    { icon: Brain, label: "Cognitive load" },
    { icon: Activity, label: "Adaptability" },
    { icon: Network, label: "Reflection–action patterns" },
    { icon: Sparkles, label: "Instructional intent" },
    { icon: Zap, label: "Learning response" },
  ];
  return (
    <section id="how-it-works" className="border-t border-border/40 bg-brand/[0.04] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionLabel>Observable Behaviors</SectionLabel>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">How the Engine Thinks</h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">Cognitive Fingerprint AI captures instruction-level signals that most platforms overlook.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signals.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand"><Icon className="h-5 w-5" /></div>
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground">
          These signals form evolving learner and instruction profiles—sometimes referred to as <span className="font-semibold text-foreground">Unique Learning DNA</span>—allowing systems to understand why the same curriculum produces different outcomes for different learners.
        </p>
      </div>
    </section>
  );
}

function Fit() {
  return (
    <section className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionLabel>Fit-Based Matching</SectionLabel>
        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Fit, Not Ideology</h2>
        <p className="mt-6 text-muted-foreground">Cognitive Fingerprint AI does not assume one teaching style works for everyone.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 text-left shadow-sm">
            <p className="font-medium">Some learners thrive under facilitation.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-left shadow-sm">
            <p className="font-medium">Others require structured instruction.</p>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-muted-foreground">
          The engine's role is to identify and refine <span className="font-semibold text-foreground">fit</span>—using outcome-driven feedback loops rather than static preferences, ratings, or assumptions.
        </p>
      </div>
    </section>
  );
}

function Compound() {
  return (
    <section className="border-t border-border/40 bg-brand/[0.04] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionLabel>Continuous Learning</SectionLabel>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Built to Compound Intelligence</h2>
          <p className="mt-6 text-muted-foreground">The engine improves with every learning interaction.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="text-xl font-bold">High-fidelity data</h3>
            <p className="mt-3 text-muted-foreground">Real instructional environments generate high-fidelity, instruction-level data that continuously trains the engine.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="text-xl font-bold">Compounding flywheel</h3>
            <p className="mt-3 text-muted-foreground">Incentive-aligned participation preserves natural teaching behaviour, creating a compounding learning intelligence flywheel that's difficult to replicate.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Deployment() {
  const items = [
    { icon: Code2, title: "API Integration", desc: "Plug Cognitive Fingerprint AI into existing platforms via clean, well-documented APIs." },
    { icon: Layers, title: "Licensing", desc: "License the engine for institutional deployments with model and data governance built in." },
    { icon: Sparkles, title: "Strategic Pilots", desc: "Co-design pilots that validate outcomes and refine fit for your context." },
  ];
  return (
    <section className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">How Cognitive Fingerprint AI Is Deployed</h2>
          <p className="mx-auto mt-6 max-w-3xl text-muted-foreground">Delivered via APIs and licensing, enabling platforms and institutions to embed learning intelligence directly into their existing systems.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-muted-foreground">
          Strategic pilots support outcome validation and integration, allowing partners to adopt learning intelligence <span className="font-semibold text-foreground">without rebuilding core infrastructure</span>.
        </p>
      </div>
    </section>
  );
}

function Live() {
  return (
    <section className="border-t border-border/40 bg-brand/[0.04] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionLabel>Now Live</SectionLabel>
        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Where Cognitive Fingerprint AI Operates Today</h2>
        <p className="mt-6 text-muted-foreground">
          Cognitive Fingerprint AI is live at <span className="font-semibold text-foreground">TutorSchool</span>—a real-world learning system that enables the engine to observe instruction, refine models, and harden learning intelligence.
        </p>
        <p className="mt-4 text-muted-foreground">
          TutorSchool functions as an operational environment where authentic learning interactions continuously strengthen the engine deployed via APIs to platforms and institutions.
        </p>
      </div>
    </section>
  );
}

function ForWhom() {
  const items = [
    { icon: Network, title: "Education Platforms", desc: "Embed adaptive learning intelligence without building complex learning systems in-house." },
    { icon: School, title: "Schools & Institutions", desc: "Gain cohort-level insight into learning outcomes and intervention needs." },
    { icon: Code2, title: "Learning System Builders", desc: "Power AI tutors, LMSs, and assessment tools with decision-grade learning intelligence." },
  ];
  return (
    <section id="for-whom" className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <SectionLabel>For Everyone</SectionLabel>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Built for Education Systems</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  const items = [
    "Built on instruction-level interaction data—not surface engagement metrics",
    "Compounds intelligence through outcome-driven feedback loops",
    "Encodes teaching-pattern signals most platforms ignore",
    "Grounded in learning science rather than heuristics",
  ];
  return (
    <section className="border-t border-border/40 bg-brand/[0.04] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <SectionLabel>What Sets Us Apart</SectionLabel>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Why Cognitive Fingerprint AI Is Different</h2>
        </div>
        <ul className="mx-auto mt-12 grid max-w-3xl gap-3">
          {items.map((t) => (
            <li key={t} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Sparkles className="h-3.5 w-3.5" />
              </div>
              <span className="text-sm font-medium">{t}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium">
          Cognitive Fingerprint AI is not a feature. <span className="text-brand">It is learning intelligence infrastructure.</span>
        </p>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="border-t border-border/40 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Our Vision</h2>
        <p className="mx-auto mt-8 text-lg text-muted-foreground">
          To build the <span className="font-semibold text-foreground">learning intelligence AI infrastructure</span> that understands how humans learn together and enables outcome-driven education at scale across platforms and institutions.
        </p>
        <a href="mailto:hello@cognitivefingerprint.ai" className="mt-10 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lg shadow-brand/25 transition hover:opacity-90">
          Partner with Us <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Recognition() {
  return (
    <section className="border-t border-border/40 py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionLabel>Recognition</SectionLabel>
        <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">Recognized & Backed By</h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-16">
          <img src={isbLogo} alt="ISB I-Venture" className="h-16 w-auto object-contain md:h-20" />
          <img src={nvidiaLogo} alt="NVIDIA Inception Program" className="h-16 w-auto object-contain md:h-20" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Brain className="h-4 w-4 text-brand" />
          <span>Cognitive Fingerprint AI™</span>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Engine />
        <HowEngineThinks />
        <Fit />
        <Compound />
        <Deployment />
        <Live />
        <ForWhom />
        <Differentiators />
        <Vision />
        <Recognition />
      </main>
      <Footer />
    </div>
  );
}
