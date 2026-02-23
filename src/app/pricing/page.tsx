import Link from "next/link";
import { Navbar } from "@/components/landing";
import { cn } from "@/lib/cn";

type PricingTier = {
  name: string;
  priceLabel: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  isPrimary?: boolean;
  external?: boolean;
};

const PRICING_TIERS: PricingTier[] = [
  {
    name: "Open Source",
    priceLabel: "Free",
    description:
      "The core OFFER-HUB platform is open source and free to use. Build, inspect, and contribute with full transparency.",
    features: [
      "Full access to core platform code",
      "Community-driven updates and improvements",
      "Ideal for developers and technical teams",
      "No platform licensing fees",
    ],
    ctaLabel: "View on GitHub",
    ctaHref: "https://github.com/josephchimebuka/OFFER-HUB-Frontend",
    external: true,
  },
  {
    name: "Self-Hosted",
    priceLabel: "Free",
    description:
      "Run OFFER-HUB in your own infrastructure for complete control over deployment, data, and operations.",
    features: [
      "Deploy on your preferred cloud or on-prem",
      "Own your data and security boundaries",
      "Customize features to your workflow",
      "Use existing DevOps tooling and processes",
    ],
    ctaLabel: "Start Self-Hosting",
    ctaHref: "/register",
  },
  {
    name: "Enterprise",
    priceLabel: "Contact Us",
    description:
      "For organizations that need tailored onboarding, SLAs, and strategic support, our team can help design the right plan.",
    features: [
      "Priority technical support",
      "Implementation and migration guidance",
      "Custom security and compliance alignment",
      "Training and long-term partnership",
    ],
    ctaLabel: "Talk to Sales",
    ctaHref: "/contact",
    isPrimary: true,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Navbar />

      <main className="pt-32 pb-14 lg:pt-36 lg:pb-18">
        <section className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-12">
            <p className="inline-flex items-center rounded-xl border border-primary/30 bg-white px-4 py-2 text-xs font-semibold tracking-[0.08em] text-primary shadow-raised">
              TRANSPARENT PRICING MODEL
            </p>

            <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-text-primary">
              Pricing built for builders and businesses
            </h1>

            <p className="mt-4 mx-auto max-w-3xl text-base sm:text-lg text-text-secondary leading-relaxed">
              OFFER-HUB is free at its core, free to self-host, and available with enterprise-grade
              support when your organization needs it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRICING_TIERS.map((tier, index) => (
              <article
                key={tier.name}
                className={cn(
                  "h-full rounded-3xl bg-white p-6 sm:p-7",
                  "shadow-raised shadow-raised-hover",
                  "flex flex-col",
                  tier.isPrimary && "ring-2 ring-primary/40",
                  "opacity-0 animate-fade-in-up"
                )}
                style={{ animationDelay: `${index * 0.08}s`, animationFillMode: "forwards" }}
              >
                <div className="mb-5">
                  <h2 className="text-2xl font-bold text-text-primary">{tier.name}</h2>
                  <p className="mt-2 text-lg font-semibold text-primary">{tier.priceLabel}</p>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-7 text-sm text-text-primary">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-primary"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.ctaHref}
                  target={tier.external ? "_blank" : undefined}
                  rel={tier.external ? "noreferrer" : undefined}
                  className={cn(
                    "mt-auto inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold",
                    "transition-all duration-200",
                    tier.isPrimary
                      ? "bg-primary text-white hover:bg-primary-hover"
                      : "border border-primary text-primary hover:bg-primary hover:text-white",
                    "shadow-raised"
                  )}
                >
                  {tier.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
