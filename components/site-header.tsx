"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "pt-1" : "pt-2"}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <nav className={`glass-panel flex items-center justify-between gap-3 rounded-full px-3 py-2 md:px-5 ${scrolled ? "shadow-[0_10px_35px_rgba(52,75,127,0.18)]" : ""}`}>
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Go to homepage">
            <Image src={siteConfig.logo} alt={`${siteConfig.schoolName} logo`} width={40} height={40} className="h-10 w-10 rounded-full object-cover shadow-lg shadow-amber-500/20" />
            <div className="min-w-0 whitespace-nowrap">
              <p className="overflow-hidden text-ellipsis font-display text-sm font-semibold text-white sm:text-base">{siteConfig.schoolName}</p>
            </div>
          </Link>
          <button aria-label="Open menu" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 lg:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <div className="mt-2 flex items-center justify-end gap-2 md:gap-3">
          <div className="hidden items-center gap-1 rounded-full glass-panel px-2 py-1 lg:flex">
            {siteConfig.navLinks.map((link) => (
              <div key={link.label} className="group relative">
                {link.dropdown ? (
                  <div className="group relative">
                    <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-slate-100/90 transition hover:bg-white/5 hover:text-white" aria-label={link.label}>
                      {link.label}<ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="invisible absolute right-0 top-full mt-3 min-w-[220px] rounded-2xl border border-white/10 bg-slate-950/70 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      {link.dropdown.map((item) => <Link key={item.label} href={item.href} className="block rounded-xl px-3 py-2 text-sm text-slate-100/80 transition hover:bg-white/5 hover:text-white">{item.label}</Link>)}
                    </div>
                  </div>
                ) : <Link href={link.href} className="rounded-full px-3 py-2 text-sm font-medium text-slate-100/90 transition hover:bg-white/5 hover:text-white">{link.label}</Link>}
              </div>
            ))}
          </div>
          <ThemeToggle />
          <a href={siteConfig.phoneHref} aria-label="Call school" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 transition hover:scale-105 hover:bg-white/10"><Phone className="h-4 w-4" /></a>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" aria-label="Message on WhatsApp" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-500/10 text-emerald-100 transition hover:scale-105 hover:bg-emerald-500/20"><MessageCircle className="h-4 w-4" /></a>
          <Link href="/admissions/apply" className="hidden rounded-full border border-amber-200/30 bg-gradient-to-r from-amber-200/20 to-orange-200/10 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-amber-500/10 transition hover:-translate-y-0.5 hover:shadow-amber-400/20 md:inline-flex">Apply Now</Link>
        </div>

        {menuOpen ? (
          <div className="glass-panel mt-3 rounded-[28px] p-4 lg:hidden">
            <div className="flex flex-col gap-2">
              {siteConfig.navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div className="rounded-2xl border border-white/10 bg-slate-900/20 p-2">
                      <div className="px-3 py-2 text-sm font-semibold text-white">{link.label}</div>
                      {link.dropdown.map((item) => (
                        <Link key={item.label} href={item.href} className="block rounded-xl px-3 py-2 text-sm text-slate-200/80">{item.label}</Link>
                      ))}
                    </div>
                  ) : (
                    <Link href={link.href} className="block rounded-xl px-3 py-2 text-sm text-slate-100/90">{link.label}</Link>
                  )}
                </div>
              ))}
              <Link href="/admissions/apply" className="mt-2 rounded-full border border-amber-200/30 bg-gradient-to-r from-amber-200/20 to-orange-200/10 px-4 py-2.5 text-center text-sm font-medium text-white">
                Apply Now
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
