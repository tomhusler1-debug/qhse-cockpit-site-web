import Image from "next/image";

export function ShowcasePhoto({
  src,
  alt,
  caption,
  eyebrow,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  caption?: string;
  eyebrow?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <figure
      className={`group relative h-full min-h-40 w-full overflow-hidden rounded-2xl border border-border bg-bg-muted ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-indigo-950/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
      {(caption || eyebrow) && (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
          {eyebrow && (
            <span className="block translate-y-2 text-[11px] font-semibold uppercase tracking-wide text-indigo-200 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {eyebrow}
            </span>
          )}
          {caption && (
            <span className="mt-1 block text-sm font-semibold text-white">
              {caption}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
