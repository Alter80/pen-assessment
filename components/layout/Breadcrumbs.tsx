import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex justify-center">
      <ol className="flex flex-wrap items-center justify-center gap-2 text-default text-text/80">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <span className="text-text/40">/</span>}
            {item.href ? (
              <Link href={item.href} className="underline underline-offset-4 hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className="text-text/60">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
