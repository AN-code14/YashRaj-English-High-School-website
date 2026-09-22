/**
 * Admission form page.
 * Submit sends a WhatsApp pre-filled message and records the enquiry response.
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { getWhatsAppMessage, siteConfig } from "@/lib/siteConfig";

const initialForm = {
  studentName: "",
  dateOfBirth: "",
  gender: "Male",
  admissionFor: "School",
  stream: "Science",
  classGrade: "",
  parentName: "",
  parentPhone: "",
  parentEmail: "",
  address: "",
  previousSchool: "",
  message: "",
};

export default function AdmissionApplyPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Submitting your inquiry..." });

    const whatsAppText = getWhatsAppMessage(form);
    const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsAppText)}`;

    try {
      const res = await fetch("/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Email backup failed");
      }

      setStatus({ type: "success", message: "Your enquiry was sent successfully. The school has been notified." });
      window.open(whatsappLink, "_blank", "noopener,noreferrer");
      setForm(initialForm);
    } catch {
      setStatus({
        type: "error",
        message: "The WhatsApp link has been prepared, but the enquiry could not be recorded.",
      });
      window.open(whatsappLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="px-4 pb-20 pt-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Admissions</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-white md:text-6xl">Apply for admission</h1>
          </div>
          <Link href="/admissions" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">Back to overview</Link>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel rounded-[32px] p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-slate-200/80">Student full name</span>
              <input required value={form.studentName} onChange={(e) => handleChange("studentName", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-400 focus:border-amber-200/30" placeholder="Student name" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-200/80">Date of birth</span>
              <input required type="date" value={form.dateOfBirth} onChange={(e) => handleChange("dateOfBirth", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-200/30" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-200/80">Gender</span>
              <select value={form.gender} onChange={(e) => handleChange("gender", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none focus:border-amber-200/30">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-200/80">Admission for</span>
              <div className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/20 p-2">
                {[
                  { label: "School", value: "School" },
                  { label: "Junior College", value: "Junior College" },
                ].map((option) => (
                  <button key={option.value} type="button" onClick={() => handleChange("admissionFor", option.value)} className={`flex-1 rounded-xl px-4 py-2 text-sm transition ${form.admissionFor === option.value ? "bg-amber-300/20 text-white" : "text-slate-200/75"}`}>
                    {option.label}
                  </button>
                ))}
              </div>
            </label>

            {form.admissionFor === "Junior College" ? (
              <label className="block">
                <span className="mb-2 block text-sm text-slate-200/80">Stream</span>
                <select value={form.stream} onChange={(e) => handleChange("stream", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none focus:border-amber-200/30">
                  <option>Science</option>
                  <option>Commerce</option>
                </select>
              </label>
            ) : null}

            <label className="block">
              <span className="mb-2 block text-sm text-slate-200/80">Choose class for admission</span>
              <select required value={form.classGrade} onChange={(e) => handleChange("classGrade", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none focus:border-amber-200/30">
                <option value="">Select a class</option>
                {form.admissionFor === "School" ? <>
                  {Array.from({ length: 10 }, (_, index) => <option key={index + 1}>Grade {index + 1}</option>)}
                </> : <>
                  <option>FYJC</option>
                  <option>SYJC</option>
                </>}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-200/80">Parent / guardian name</span>
              <input required value={form.parentName} onChange={(e) => handleChange("parentName", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-200/30" placeholder="Parent or guardian" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-200/80">Parent contact number</span>
              <input required value={form.parentPhone} onChange={(e) => handleChange("parentPhone", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-200/30" placeholder="+91" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-200/80">Parent email</span>
              <input type="email" value={form.parentEmail} onChange={(e) => handleChange("parentEmail", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-200/30" placeholder="name@example.com (optional)" />
            </label>

            <label className="md:col-span-2 block">
              <span className="mb-2 block text-sm text-slate-200/80">Address</span>
              <textarea required value={form.address} onChange={(e) => handleChange("address", e.target.value)} className="min-h-[110px] w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-200/30" placeholder="Residential address" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-200/80">Previous school (optional)</span>
              <input value={form.previousSchool} onChange={(e) => handleChange("previousSchool", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-200/30" placeholder="Previous school name" />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-slate-200/80">Message / notes</span>
              <textarea value={form.message} onChange={(e) => handleChange("message", e.target.value)} className="min-h-[110px] w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-200/30" placeholder="Anything you would like us to know" />
            </label>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
            <button type="submit" disabled={status.type === "loading"} className="rounded-full border border-amber-200/30 bg-gradient-to-r from-amber-300/20 to-orange-200/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60">
              {status.type === "loading" ? "Submitting..." : "Submit Admission Form"}
            </button>

            {status.message ? (
              <p className={`text-sm ${status.type === "success" ? "text-emerald-300" : status.type === "error" ? "text-red-300" : "text-slate-200/80"}`}>
                {status.message}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
