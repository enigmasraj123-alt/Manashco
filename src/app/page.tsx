"use client";

import { useEffect, useState, useCallback, FormEvent } from "react";

const WHATSAPP_NUMBER = "YOUR_NUMBER";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  {
    tag: "01",
    title: "Web Development",
    description:
      "Fast, accessible sites built on modern frameworks. Clean code, sensible architecture, no bloat.",
    points: ["Next.js & React builds", "Headless CMS integration", "Core Web Vitals tuned"],
  },
  {
    tag: "02",
    title: "SEO / AEO",
    description:
      "Ranking for search engines and answer engines alike, so you show up wherever people are asking.",
    points: ["Technical SEO audits", "Structured data & schema", "AI answer-engine visibility"],
  },
  {
    tag: "03",
    title: "Performance Marketing",
    description:
      "Paid campaigns built on measurable outcomes. Every rupee tracked back to a result.",
    points: ["Meta & Google Ads", "Conversion tracking", "Weekly reporting"],
  },
];

const METRICS = [
  { value: "40+", label: "Projects shipped" },
  { value: "3.2x", label: "Avg. traffic growth" },
  { value: "18", label: "Industries served" },
  { value: "96%", label: "Client retention" },
];

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    window.setTimeout(() => setFormStatus("sent"), 900);
  }, []);

  return (
    <main className="min-h-screen bg-[#FDFBF7] font-mono text-zinc-900 antialiased">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <nav
          className={[
            "flex w-full max-w-5xl items-center justify-between rounded-full border transition-all duration-300",
            scrolled
              ? "border-zinc-200/60 bg-white/70 px-5 py-2.5 shadow-[0_1px_0_0_rgba(0,0,0,0.03)] backdrop-blur-xl"
              : "border-transparent bg-white/0 px-6 py-4",
          ].join(" ")}
        >
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-[11px] font-semibold text-[#FDFBF7]">
              m
            </span>
            <span className="text-[15px] font-semibold tracking-tight">manashmedia</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden px-6 pb-24 pt-40 md:pt-48">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200/60 bg-white px-3 py-1 font-mono text-[11px] text-zinc-500">
            digital growth studio
          </span>

          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl md:text-6xl">
            Websites and campaigns built to compound your growth
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-zinc-600 md:text-lg">
            manashmedia designs, builds, and markets digital products for
            founders who need results, not deliverables.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-[#FDFBF7] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Building
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-200/60 bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Browser mock preview */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_48px_-24px_rgba(0,0,0,0.15)]">
            <div className="flex items-center gap-2 border-b border-zinc-200/60 bg-zinc-50/80 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
              <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 font-mono text-[11px] text-zinc-400">
                manashmedia.com
              </div>
            </div>
            <div className="grid gap-px bg-zinc-100 sm:grid-cols-3">
              {["Discover", "Design", "Deploy"].map((step) => (
                <div key={step} className="bg-white p-6">
                  <p className="font-mono text-[11px] text-zinc-400">manashmedia / {step.toLowerCase()}</p>
                  <p className="mt-3 text-sm font-medium text-zinc-800">{step}</p>
                  <div className="mt-4 h-24 rounded-lg bg-zinc-50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-zinc-200/60 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-lg">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              What we do
            </h2>
            <p className="mt-3 text-zinc-600">
              Three disciplines, one team. Everything works together because it&apos;s built together.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-zinc-200/60 bg-white p-7 transition-shadow hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_32px_-20px_rgba(0,0,0,0.15)]"
              >
                <span className="font-mono text-xs text-zinc-400">{service.tag}</span>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{service.description}</p>
                <ul className="mt-5 space-y-2 border-t border-zinc-100 pt-5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-zinc-600">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-zinc-200/60 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
                Built for people who ship
              </h2>
              <p className="mt-4 leading-relaxed text-zinc-600">
                manashmedia started with a simple idea: agencies talk too much
                and build too little. We keep teams small, timelines short,
                and every decision tied back to a business outcome you can
                measure.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-600">
                No account managers relaying messages. You work directly with
                the people writing the code and running the campaigns.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-zinc-200/60 bg-white p-6"
                >
                  <p className="text-3xl font-semibold tracking-tight text-zinc-900">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-200/60 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-lg">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              Let&apos;s talk
            </h2>
            <p className="mt-3 text-zinc-600">
              Tell us about the project, or skip the form and message us directly.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-5">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-2xl border border-zinc-200/60 bg-white p-7 md:col-span-3"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Jane Doe" required />
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
              </div>
              <Field label="Company" name="company" placeholder="Company (optional)" />
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-zinc-500">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="What are you looking to build?"
                  className="w-full resize-none rounded-lg border border-zinc-200/60 bg-[#FDFBF7] px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400"
                />
              </div>
              <button
                type="submit"
                disabled={formStatus !== "idle"}
                className="mt-1 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-[#FDFBF7] transition-transform hover:scale-[1.01] active:scale-[0.98] disabled:opacity-60"
              >
                {formStatus === "idle" && "Send message"}
                {formStatus === "sending" && "Sending…"}
                {formStatus === "sent" && "Message sent"}
              </button>
            </form>

            <div className="flex flex-col justify-between rounded-2xl border border-zinc-200/60 bg-white p-7 md:col-span-2">
              <div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10">
                  <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">Prefer WhatsApp?</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Skip the form. Message us directly and we&apos;ll usually
                  reply within the hour.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200/60 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-semibold text-[#FDFBF7]">
              m
            </span>
            <span className="text-sm font-medium text-zinc-700">manashmedia</span>
          </div>
          <p className="font-mono text-[11px] text-zinc-400">
            © {new Date().getFullYear()} manashmedia. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium text-zinc-500">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-zinc-200/60 bg-[#FDFBF7] px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-zinc-400"
      />
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.22 8.22 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.99-1.22-.73-.66-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28z" />
    </svg>
  );
}
