type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-white md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-200/80 md:text-lg">{description}</p> : null}
    </div>
  );
}
