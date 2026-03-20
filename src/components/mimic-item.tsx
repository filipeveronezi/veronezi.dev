import type { ContentItem } from "@/lib/content";
import { VectorSquareIcon } from "lucide-react";
import Link from "next/link";

export function MimicItem({ item }: { item: ContentItem }) {
  return (
    <Link
      href={`/mimics/${item.slug}`}
      className="group corner-squircle flex w-full items-center justify-between gap-2 rounded-full px-2 py-1 text-zinc-900 transition-all hover:bg-zinc-100 hover:text-zinc-600"
    >
      <div className="flex items-center gap-2">
        <VectorSquareIcon className="size-4" />
        <span className="font-medium">{item.title ?? item.slug}</span>
        <span className="hidden font-medium text-zinc-400 lg:block">
          {item.originalBy ? `originally by ${item.originalBy}` : null}
        </span>
        <span className="font-medium text-zinc-400 lg:hidden">
          {item.originalBy ? `by ${item.originalBy}` : null}
        </span>
      </div>
      <div className="h-[0.5px] w-full flex-1 bg-linear-to-r from-zinc-300 via-zinc-200 to-zinc-200"></div>
      {item.publishedAt ? (
        <span className="shrink-0 text-sm text-zinc-400">
          {new Date(item.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          })}
        </span>
      ) : null}
    </Link>
  );
}
