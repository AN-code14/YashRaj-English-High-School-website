import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.2c0-.9.3-1.6 1.7-1.6H17V2.8c-.4-.1-1.8-.2-3.3-.2-3.2 0-5.4 1.9-5.4 5.5V9.8H6v3.2h2.3v8h5.2Z" />
    </svg>
  );
}

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="6.5" width="17" height="11" rx="3" />
      <path d="m10.5 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
  { label: "YouTube", href: siteConfig.social.youtube, icon: YouTubeIcon },
];

export function FindUsSection() {
  return (
    <section className="px-4 pb-20 pt-8 md:px-8 lg:px-12">
      <div className="glass-panel mx-auto max-w-6xl p-6 md:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Find Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Stay connected with our school community.</h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-amber-200/50 hover:bg-amber-400/10"
              >
                <Icon className="h-6 w-6" />
              </Link>
            ))}

            <Link
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-5 py-3 text-sm font-medium text-emerald-100 transition duration-300 hover:-translate-y-1 hover:bg-emerald-500/20"
            >
              <MessageCircle className="h-5 w-5" />
              {siteConfig.phoneDisplay}
            </Link>

            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              <PhoneCall className="h-4 w-4" />
              Call us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
