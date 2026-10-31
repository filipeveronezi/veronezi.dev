import { HoverItem } from "@/components/item-hover";
import type { Writing } from "@/lib/content";
import { TransitionLink as Link } from "@/components/transition-link";

export function WritingItem({ item }: { item: Writing }) {
  return (
    <HoverItem>
    <Link
      href={`/writings/${item.slug}`}
      className="group block after:absolute after:-inset-x-3 after:-inset-y-2 after:rounded-2xl after:content-[''] leading-normal"
    >
      <span
        className="block w-fit text-zinc-900">
        {item.title ?? item.slug}
      </span>
      {item.description ? (
        <span className="block text-zinc-500">
          {item.description}
        </span>
      ) : null}
    </Link>
    </HoverItem>
  );
}
