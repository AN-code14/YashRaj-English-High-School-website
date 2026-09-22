import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function OwnerMessageSection() {
  return (
    <section className="px-4 pb-20 pt-8 md:px-8 lg:px-12">
      <div className="glass-panel mx-auto max-w-6xl overflow-hidden p-6 md:p-8 lg:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[260px_1fr]">
          <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-slate-900/30 p-3">
            <Image
              src={siteConfig.ownerImage}
              alt="Mr. Parshuram Yadav, Founder & Owner"
              width={500}
              height={620}
              className="h-[300px] w-full rounded-[22px] object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Owner&apos;s Message</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">A vision built on care, values, and excellence.</h2>

            <p className="mt-6 text-base leading-8 text-slate-200/85">{siteConfig.ownerMessage.text}</p>
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
              <div>
                <p className="font-semibold text-white">{siteConfig.ownerMessage.signature}</p>
              </div>
              <Link href="/about#management" className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
