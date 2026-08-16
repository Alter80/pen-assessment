import type { RichContent } from "@/data/courses";

export function RichContentBlocks({ content }: { content: RichContent }) {
  return (
    <div className="flex flex-col gap-4 text-default text-text/75">
      {content.map((block, i) => (
        <div key={i}>
          {block.heading && (
            <p className="mb-2 font-semibold text-white">{block.heading}</p>
          )}
          {block.paragraph && <p>{block.paragraph}</p>}
          {block.bullets && (
            <ul className="mt-2 list-disc space-y-2 pl-5">
              {block.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
