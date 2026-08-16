const SLOT_CLASSES = [
  "sm:col-start-1 sm:row-start-1 sm:row-span-2",
  "sm:col-start-2 sm:row-start-1",
  "sm:col-start-2 sm:row-start-2",
  "sm:col-start-3 sm:row-start-1 sm:row-span-2",
];

export function CoursesSkeleton() {
  return (
    <div
      className="grid grid-cols-1 gap-6 sm:auto-rows-47.5 sm:grid-cols-3 lg:auto-rows-52.5"
      aria-hidden
    >
      {SLOT_CLASSES.map((className) => (
        <div
          key={className}
          className={`${className} min-h-70 animate-pulse rounded-card bg-card`}
        />
      ))}
    </div>
  );
}
