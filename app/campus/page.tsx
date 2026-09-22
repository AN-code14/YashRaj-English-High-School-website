import Image from "next/image";
import { Building2, Cpu, Dumbbell, FlaskConical, ShieldCheck, Trophy } from "lucide-react";

const infrastructure = [
  { title: "Spacious classrooms", image: "/images/gallery/gallery-1.svg" },
  { title: "Learning spaces", image: "/images/gallery/gallery-2.svg" },
  { title: "Student support zones", image: "/images/gallery/gallery-3.svg" },
  { title: "Campus infrastructure", image: "/images/gallery/gallery-4.svg" },
];

const labs = [
  { title: "Science Lab", description: "Hands-on experiments and guided practical learning in chemistry, biology, and physics.", icon: FlaskConical },
  { title: "Computer Lab", description: "Digital readiness, productivity skills, and exposure to modern learning tools.", icon: Cpu },
  { title: "Safety & Discipline", description: "Well-supervised spaces that encourage responsibility, order, and comfort.", icon: ShieldCheck },
];

const facilities = [
  { title: "Sports Ground", description: "Open field activities and team-building events that support holistic development.", icon: Dumbbell },
  { title: "Indoor Activities", description: "Creative and active spaces for life skills, wellness, and recreation.", icon: Trophy },
  { title: "Learning Infrastructure", description: "Purposeful spaces designed for focused study and guided classroom engagement.", icon: Building2 },
];

export default function CampusPage() {
  return (
    <div className="px-4 pb-20 pt-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Campus</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white md:text-6xl">A campus designed for growth, comfort, and confidence.</h1>
        </div>

        <section id="infrastructure" className="glass-panel rounded-[32px] p-6 md:p-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Infrastructure</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Purposeful spaces for learning and wellbeing.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {infrastructure.map((item) => (
              <div key={item.title} className="glass-panel rounded-[28px] p-3">
                <Image src={item.image} alt={item.title} width={500} height={420} className="h-56 w-full rounded-[22px] object-cover" />
                <p className="mt-4 px-2 pb-2 text-sm font-medium text-slate-100/90">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="laboratories" className="mt-12">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Laboratories</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Practical spaces that bring knowledge to life.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {labs.map(({ title, description, icon: Icon }) => (
              <div key={title} className="glass-panel rounded-[28px] p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200/20 bg-amber-300/10 text-amber-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-200/75">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="sports" className="mt-12">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Sports & Facilities</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Healthy routines, active habits, and engaging spaces.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {facilities.map(({ title, description, icon: Icon }) => (
              <div key={title} className="glass-panel rounded-[28px] p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-200/20 bg-sky-400/10 text-sky-100">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-200/75">{description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
