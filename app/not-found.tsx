import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/80">404</p>
      <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-6xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-slate-200/80">The page you are looking for might have moved or may not exist.</p>
      <Link href="/" className="mt-8 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10">
        Back to home
      </Link>
    </main>
  );
}
