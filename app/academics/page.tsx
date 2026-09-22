"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const scienceSubjects = [
  "Physics",
  "Chemistry",
  "Biology",
  "Mathematics",
  "English",
  "Information Technology",
  "Practical lab work",
];

const commerceSubjects = [
  "Accountancy",
  "Business Studies",
  "Economics",
  "Mathematics / Statistics",
  "English",
  "Computer Applications",
  "Project work and commerce fundamentals",
];

export default function AcademicsPage() {
  const [activeStream, setActiveStream] = useState<"science" | "commerce">("science");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "commerce") setActiveStream("commerce");
    if (hash === "science") setActiveStream("science");
  }, []);

  const subjects = activeStream === "science" ? scienceSubjects : commerceSubjects;

  return (
    <div className="px-4 pb-20 pt-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Academics</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white md:text-6xl">Learning built for curiosity and success.</h1>
        </div>

        <section id="overview" className="glass-panel rounded-[32px] p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">School academics with a nurturing, standards-driven approach.</h2>
              <p className="mt-5 text-base leading-8 text-slate-200/80">
                Our academic structure supports conceptual understanding, everyday discipline, and steady progress from foundational years to senior classes. We focus on balanced learning with a strong emphasis on values, confidence, and future readiness.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-200/80">
                The curriculum is designed to help students perform well in examinations while also developing practical problem-solving skills and a lifelong love for learning.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-slate-900/30 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Curriculum</p>
              <p className="mt-4 text-lg text-slate-100/90">{siteConfig.schoolBoard}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-200/80">
                <li>• Concept-first teaching approach</li>
                <li>• Guided classroom practice and revision planning</li>
                <li>• Parent communication for progress review</li>
                <li>• Focus on language, numeracy, and confident expression</li>
              </ul>
            </div>
          </div>
        </section>

        <section id={activeStream === "science" ? "science" : "commerce"} className="mt-12 glass-panel rounded-[32px] p-6 md:p-8">
          <div className="flex flex-wrap gap-3">
            <button onClick={() => setActiveStream("science")} className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${activeStream === "science" ? "bg-amber-300/20 text-white border border-amber-200/30" : "bg-white/5 text-slate-200/80 border border-white/10"}`}>
              Junior College – Science
            </button>
            <button onClick={() => setActiveStream("commerce")} className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${activeStream === "commerce" ? "bg-amber-300/20 text-white border border-amber-200/30" : "bg-white/5 text-slate-200/80 border border-white/10"}`}>
              Junior College – Commerce
            </button>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="font-display text-3xl font-bold text-white">{activeStream === "science" ? "Science stream" : "Commerce stream"}</h3>
              <p className="mt-4 text-base leading-8 text-slate-200/80">
                {activeStream === "science"
                  ? "The science stream is designed for students who want to pursue analytical thinking, practical inquiry, and higher studies in scientific or technical fields."
                  : "The commerce stream develops business awareness, quantitative ability, and decision-making skills that prepare students for management and entrepreneurship pathways."}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-200/80">
                {subjects.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/10 bg-slate-900/20 px-4 py-3">{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-slate-900/30 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-amber-200/90">Academic support</p>
              <ul className="mt-5 space-y-4 text-sm text-slate-200/80">
                <li>• Concept-building classes and guided practice</li>
                <li>• Subject-wise mentoring during critical academic periods</li>
                <li>• Progress reviews and parent guidance</li>
                <li>• Career pathways and higher-education awareness</li>
              </ul>
              <Link href="/admissions" className="mt-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">
                Explore admissions
              </Link>
            </div>
          </div>
        </section>

        <section id="faculty" className="mt-12">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Faculty</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Dedicated teachers who guide, encourage, and mentor.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {siteConfig.faculty.map((teacher) => (
              <div key={teacher.name} className="glass-panel rounded-[28px] p-4">
                <Image src={teacher.image} alt={teacher.name} width={400} height={440} className="h-64 w-full rounded-[24px] object-cover" />
                <h3 className="mt-4 text-lg font-semibold text-white">{teacher.name}</h3>
                <p className="mt-2 text-sm text-amber-200/80">{teacher.subject}</p>
                <p className="mt-2 text-sm leading-6 text-slate-200/75">{teacher.qualification}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
