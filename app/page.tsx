"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenCheck,
  FlaskConical,
  GraduationCap,
  MessageSquareQuote,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { OwnerMessageSection } from "@/components/owner-message";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/siteConfig";

const featureIcons = {
  BookOpen: BookOpenCheck,
  GraduationCap,
  Users,
  FlaskConical,
  Trophy,
  Sparkles,
};

export default function HomePage() {
  return (
    <div className="pb-10">
      <section className="px-4 pb-16 pt-8 md:px-8 lg:px-12 lg:pt-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-amber-200/20 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-100/90">
              Excellence with values
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Shaping confident learners for a brighter future.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-200/80">
              {siteConfig.schoolTagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/admissions/apply" className="inline-flex items-center gap-2 rounded-full border border-amber-200/40 bg-gradient-to-r from-amber-300/30 to-orange-200/10 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-400/10 transition duration-300 hover:-translate-y-1 hover:shadow-amber-300/20">
                Apply for Admission <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                Enquire on WhatsApp
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {siteConfig.stats.slice(0, 2).map((stat) => (
                <div key={stat.label} className="glass-panel p-4">
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-slate-200/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel overflow-hidden rounded-[32px] p-4">
              <div className="relative overflow-hidden rounded-[26px] border border-white/15 bg-slate-900/30 p-3">
                <Image
                  src={siteConfig.heroImage}
                  alt={`${siteConfig.schoolName} campus`}
                  width={1448}
                  height={1086}
                  priority
                  className="h-[530px] w-full rounded-[22px] object-cover"
                />
              </div>
            </div>

            <div className="absolute -left-2 bottom-5 glass-panel max-w-[220px] rounded-2xl p-4 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80">Board results</p>
              <p className="mt-2 text-3xl font-bold text-white">{siteConfig.stats[0].value}{siteConfig.stats[0].suffix}</p>
              <p className="mt-1 text-sm text-slate-200/75">Pass rate</p>
            </div>

            <div className="absolute -right-1 top-10 glass-panel max-w-[220px] rounded-2xl p-4 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-sky-200/80">Future focused</p>
              <p className="mt-2 text-3xl font-bold text-white">72+</p>
              <p className="mt-1 text-sm text-slate-200/75">Faculty mentors</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why choose us"
            title="A school community where academic growth and personal character flourish together."
            align="center"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {siteConfig.features.map((feature) => {
              const Icon = featureIcons[feature.icon as keyof typeof featureIcons] || BookOpenCheck;
              return (
                <div
                  key={feature.title}
                  className="glass-panel group rounded-[28px] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(52,75,127,0.12)]"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200/25 bg-amber-300/10 text-amber-100 group-hover:bg-amber-300/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-200/75">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="glass-panel mx-auto grid max-w-7xl gap-8 rounded-[32px] p-6 md:p-8 lg:grid-cols-[1fr_0.9fr] lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">About at a glance</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">A values-led institution with a strong academic heart.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-200/80">{siteConfig.aboutIntro}</p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              Explore our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[26px] border border-white/10 bg-slate-900/30 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-sky-200/80">Vision</p>
              <p className="mt-3 text-lg leading-8 text-slate-100/90">{siteConfig.vision}</p>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-slate-900/30 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-violet-200/80">Mission</p>
              <p className="mt-3 text-lg leading-8 text-slate-100/90">{siteConfig.mission}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-[32px] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200/90">The Principal</p>
            <Image src={siteConfig.principalImage} alt="Fiyaz Uddins, Principal" width={460} height={520} className="mt-6 h-[340px] w-full rounded-[26px] object-cover" />
          </div>

          <div className="glass-panel rounded-[32px] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200/90">Message from the Principal</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">A warm, values-led learning environment.</h2>
            <p className="mt-6 text-base leading-8 text-slate-200/85">{siteConfig.principalMessage.text}</p>
            <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
              <p className="font-medium text-white">{siteConfig.principalName}</p>
              <Link href="/about#principal" className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">
                Read full message
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Parent voices" title="Families trust us for care, continuity, and outcomes." align="center" />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {siteConfig.testimonials.map((item) => (
              <div key={item.name} className="glass-panel rounded-[28px] p-6">
                <MessageSquareQuote className="h-8 w-8 text-amber-200/80" />
                <p className="mt-5 text-base leading-8 text-slate-100/90">“{item.quote}”</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-300/80">{item.relation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Progress" title="Measured growth, meaningful learning, and steady outcomes." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-[28px] p-6 text-center">
                <p className="text-3xl font-bold text-white md:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm text-slate-200/75">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <SectionHeading eyebrow="Gallery" title="Snapshots of student life and campus energy." />
            <Link href="/campus" className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10 md:inline-flex">
              View more
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {siteConfig.gallery.map((item) => (
              <div key={item.title} className="glass-panel overflow-hidden rounded-[28px] p-3">
                <Image src={item.image} alt={item.title} width={600} height={500} className="h-64 w-full rounded-[22px] object-cover" />
                <p className="mt-4 px-2 pb-2 text-sm font-medium text-slate-100/90">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OwnerMessageSection />
    </div>
  );
}
