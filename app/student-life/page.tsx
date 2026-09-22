import { siteConfig } from "@/lib/siteConfig";

export default function StudentLifePage() {
  return (
    <div className="px-4 pb-20 pt-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Student life</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white md:text-6xl">Growth beyond the classroom.</h1>
        </div>

        <section id="events" className="glass-panel rounded-[32px] p-6 md:p-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Events</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Moments that build belonging and confidence.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {siteConfig.events.map((event) => (
              <div key={event.title} className="rounded-[28px] border border-white/10 bg-slate-900/20 p-5">
                <div className="mb-5 inline-flex rounded-full border border-amber-200/25 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-100">
                  {event.date}
                </div>
                <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-200/75">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="activities" className="mt-12">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">Activities</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">Creative, cultural, and active learning experiences.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {siteConfig.activities.map((activity) => (
              <div key={activity.title} className="glass-panel rounded-[28px] p-5">
                <h3 className="text-xl font-semibold text-white">{activity.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-200/75">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
