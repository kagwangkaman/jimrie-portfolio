// Reusable section heading (Minimal Zinc reference).
// Keeps every section title consistent: index label + lowercase title.
export default function SectionHeading({ index, title }) {
  return (
    <header className="mb-6">
      <div className="label-micro mb-1">
        {index} — {title}
      </div>
      <h2 className="font-display text-2xl lowercase leading-none text-zinc-900 dark:text-white">
        {title}
      </h2>
    </header>
  );
}
