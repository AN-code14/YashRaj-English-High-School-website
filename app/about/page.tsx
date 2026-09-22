import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { OwnerMessageSection } from "@/components/owner-message";

export default function AboutPage() {
  return (
    <div className="px-4 pb-20 pt-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">About</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-white md:text-6xl">Our institution</h1>
          </div>
          <Link href="/" className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">Back to home</Link>
        </div>

        <section id="institution" className="glass-panel rounded-[32px] p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">A caring learning environment shaped by purpose and discipline.</h2>
              <p className="mt-5 text-base leading-8 text-slate-200/80">{siteConfig.aboutIntro}</p>
              <p className="mt-5 text-base leading-8 text-slate-200/80">
                We believe in helping each child grow in confidence, empathy, and intellectual curiosity. Through strong academic guidance and a warm school culture, we aim to create young people who are ready to thrive in life beyond school walls.
              </p>
            </div>
            <div className="glass-panel rounded-[28px] p-4">
              <Image src={siteConfig.heroImage} alt={siteConfig.schoolName} width={700} height={520} className="h-[320px] w-full rounded-[22px] object-cover" />
            </div>
          </div>
        </section>

        <section id="vision" className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="glass-panel rounded-[28px] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200/80">Vision</p>
            <h3 className="mt-4 font-display text-3xl font-bold text-white">A future-ready learning culture.</h3>
            <p className="mt-5 text-base leading-8 text-slate-200/80">{siteConfig.vision}</p>
          </div>
          <div className="glass-panel rounded-[28px] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-200/80">Mission</p>
            <h3 className="mt-4 font-display text-3xl font-bold text-white">Learning that balances excellence and character.</h3>
            <p className="mt-5 text-base leading-8 text-slate-200/80">{siteConfig.mission}</p>
          </div>
        </section>

        <section id="principal" className="mt-12 grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-panel rounded-[28px] p-5">
            <Image src={siteConfig.principalImage} alt="Fiyaz Uddins, Principal" width={500} height={620} className="h-[420px] w-full rounded-[24px] object-cover" />
          </div>
          <div className="glass-panel rounded-[28px] p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Principal&apos;s Message</p>
            <h3 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">A school is not built by bricks alone—it is built by values.</h3>
            <p className="mt-6 text-base leading-8 text-slate-200/80">{siteConfig.principalMessage.text}</p>
            <p className="mt-8 text-lg font-semibold text-white">{siteConfig.principalMessage.signature}</p>
          </div>
        </section>

        <section id="management" className="mt-12">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Management</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Leadership rooted in vision and community care.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {siteConfig.management.map((member) => (
              <div key={member.name} className="glass-panel rounded-[28px] p-5">
                <Image src={member.image} alt={member.name} width={420} height={440} className="h-64 w-full rounded-[22px] object-cover" />
                <h3 className="mt-5 text-xl font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-amber-200/80">{member.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-200/75">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <OwnerMessageSection />
      </div>
    </div>
  );
}
