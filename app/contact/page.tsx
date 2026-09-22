"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import { MapPin, MessageCircle, Phone } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactPage() {
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
    setStatus({ type: "loading", message: "Sending your message..." });

    const text = [
      "New Contact Message",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Message: ${form.message}`,
    ].join("\n");

    const waLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Message could not be recorded");

      setStatus({ type: "success", message: "Your message has been sent successfully." });
      window.open(waLink, "_blank", "noopener,noreferrer");
      setForm(initialForm);
    } catch {
      setStatus({ type: "error", message: "WhatsApp message prepared, but your message could not be recorded." });
      window.open(waLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="px-4 pb-20 pt-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white md:text-6xl">Talk to us</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="glass-panel rounded-[28px] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Reach us</p>
              <div className="mt-6 space-y-4 text-slate-200/80">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-amber-200" />
                  <a href={siteConfig.phoneHref} className="hover:text-white">{siteConfig.phoneDisplay}</a>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 text-emerald-200" />
                  <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-violet-200" />
                  <span>{siteConfig.address}</span>
                </div>
              </div>
            </div>

            <div className="glass-panel overflow-hidden rounded-[28px] p-3">
              <iframe
                title="School map"
                src={siteConfig.mapEmbedUrl}
                className="h-[300px] w-full rounded-[22px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel rounded-[32px] p-6 md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-200/80">Name</span>
                <input required value={form.name} onChange={(e) => handleChange("name", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-200/30" placeholder="Your name" />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-200/80">Email</span>
                <input type="email" required value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-200/30" placeholder="you@example.com" />
              </label>

              <label className="md:col-span-2 block">
                <span className="mb-2 block text-sm text-slate-200/80">Phone</span>
                <input required value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-200/30" placeholder="+91" />
              </label>

              <label className="md:col-span-2 block">
                <span className="mb-2 block text-sm text-slate-200/80">Message</span>
                <textarea required value={form.message} onChange={(e) => handleChange("message", e.target.value)} className="min-h-[150px] w-full rounded-2xl border border-white/10 bg-slate-950/20 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-amber-200/30" placeholder="Write your message" />
              </label>
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-5 md:flex-row md:items-center">
              <button type="submit" disabled={status.type === "loading"} className="rounded-full border border-amber-200/30 bg-gradient-to-r from-amber-300/20 to-orange-200/10 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60">
                {status.type === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status.message ? <p className={`text-sm ${status.type === "success" ? "text-emerald-300" : status.type === "error" ? "text-red-300" : "text-slate-200/80"}`}>{status.message}</p> : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
