import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function AdmissionsPage() {
  return (
    <div className="px-4 pb-20 pt-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Admissions</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-white md:text-6xl">A guided, transparent admissions journey.</h1>
          </div>
          <Link href="/admissions/apply" className="rounded-full border border-amber-200/30 bg-gradient-to-r from-amber-300/20 to-orange-200/10 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-1">
            Apply Now
          </Link>
        </div>

        <div id="school" className="grid gap-6 lg:grid-cols-2">
          <div className="glass-panel rounded-[28px] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200/80">School Admission</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white">Early years of confidence and curiosity.</h2>
            <p className="mt-5 text-base leading-8 text-slate-200/80">{siteConfig.schoolAdmission.overview}</p>
          </div>
          <div id="junior-college" className="glass-panel rounded-[28px] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-200/80">Junior College Admission</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-white">Focused guidance for future academic pathways.</h2>
            <p className="mt-5 text-base leading-8 text-slate-200/80">{siteConfig.juniorCollegeAdmission.overview}</p>
          </div>
        </div>

        <section id="eligibility" className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="glass-panel rounded-[28px] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Eligibility</p>
            <h3 className="mt-4 font-display text-3xl font-bold text-white">School level</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-200/80">
              {siteConfig.schoolAdmission.criteria.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-slate-900/20 px-4 py-3">• {item}</li>
              ))}
            </ul>
          </div>
          <div className="glass-panel rounded-[28px] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Eligibility</p>
            <h3 className="mt-4 font-display text-3xl font-bold text-white">Junior college level</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-200/80">
              {siteConfig.juniorCollegeAdmission.criteria.map((item) => (
                <li key={item} className="rounded-2xl border border-white/10 bg-slate-900/20 px-4 py-3">• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="process" className="mt-12">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Process</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Simple steps, personal guidance, and timely communication.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {siteConfig.processSteps.map((step, index) => (
              <div key={step} className="glass-panel rounded-[28px] p-5">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-200/25 bg-amber-300/10 text-sm font-semibold text-amber-100">{index + 1}</div>
                <p className="text-base font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="documents" className="mt-12 glass-panel rounded-[28px] p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Documents</p>
              <h3 className="mt-4 font-display text-3xl font-bold text-white">Checklist for admission</h3>
            </div>
            <Link href="/admissions/apply" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
              Start application
            </Link>
          </div>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {siteConfig.requiredDocuments.map((item) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-slate-900/20 px-4 py-3 text-sm text-slate-200/80">• {item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
