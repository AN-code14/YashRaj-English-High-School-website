import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { FindUsSection } from "@/components/find-us";
import { quickLinks, siteConfig } from "@/lib/siteConfig";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,127,45,0.08),_transparent_45%)]" />
      </div>
      <SiteHeader />
      <main>{children}</main>
      <FindUsSection />
      <footer className="pb-12 text-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-12">
          <div className="glass-panel p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <Image src={siteConfig.logo} alt={`${siteConfig.schoolName} logo`} width={64} height={64} className="h-16 w-16 rounded-full object-cover" />
                <p className="font-display text-2xl text-white">{siteConfig.schoolName}</p>
                <p className="mt-3 text-sm leading-7 text-slate-200/75">{siteConfig.schoolTagline}</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">Quick Links</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200/80">
                  {quickLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="hover:text-white">{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/80">Contact</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200/80">
                  <li>{siteConfig.phoneDisplay}</li>
                  <li>{siteConfig.address}</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-slate-300/80">
              © {new Date().getFullYear()} {siteConfig.schoolName}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      <a
        href="https://wa.me/918390325653"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-2 left-2 z-40 text-[10px] font-medium text-brand-navy/80 transition hover:text-brand-navy md:bottom-3 md:left-3"
      >
        Designed By Ajay Bind
      </a>
    </div>
  );
}
