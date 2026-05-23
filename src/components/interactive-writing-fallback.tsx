import type { ContentItem } from "@/lib/content";
import { AtomIcon, ConeIcon, ScanIcon, VectorSquareIcon } from "lucide-react";

function WritingItem({ item }: { item: ContentItem }) {
  const href =
    item.type === "articles"
      ? `/articles/${item.slug}`
      : item.type === "components"
        ? `/components/${item.slug}`
        : `/mimics/${item.slug}`;

  const Icon =
    item.type === "articles" ? ScanIcon : item.type === "components" ? AtomIcon : VectorSquareIcon;

  return (
    <a
      href={href}
      className="group corner-squircle flex w-full items-center justify-between gap-2 rounded-full px-2 py-1 text-zinc-900 transition-all hover:bg-zinc-100 hover:text-zinc-600"
    >
      <div className="flex items-center gap-2">
        <Icon className="size-4" />
        <span className="font-medium">{item.title ?? item.slug}</span>
        {item.type === "mimics" ? (
          <>
            <span className="hidden font-medium text-zinc-400 lg:block">
              {item.originalBy ? `originally by ${item.originalBy}` : null}
            </span>
            <span className="font-medium text-zinc-400 lg:hidden">
              {item.originalBy ? `by ${item.originalBy}` : null}
            </span>
          </>
        ) : null}
      </div>
      <div className="h-[0.5px] w-full flex-1 bg-linear-to-r from-zinc-300 via-zinc-200 to-zinc-200"></div>
      {item.publishedAt ? (
        <span className="shrink-0 text-sm text-zinc-400">
          {new Date(item.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          })}
        </span>
      ) : null}
    </a>
  );
}

export function InteractiveWritingFallback({ content }: { content: ContentItem[] }) {
  return (
    <section className="space-y-2 pb-20 leading-loose">
      <h2 className="flex items-center gap-1 px-4 font-medium text-zinc-900">
        <ConeIcon className="size-4 rotate-215 text-zinc-500" />
        <span>Interactive writing</span>
      </h2>
      <p className="px-4 text-zinc-500">
        <span className="relative z-10">Everything I learn, shared in </span>
        <span className="group relative text-zinc-900">
          <span className="corner-squircle absolute -inset-[0.15rem] rounded-2xl bg-zinc-200" />
          <span className="relative z-10 font-medium text-zinc-900 underline decoration-zinc-200 decoration-dotted underline-offset-5 transition-colors group-hover:decoration-zinc-200">
            three formats
          </span>
        </span>
        <span className="relative z-10">:</span>
      </p>
      <ul className="px-4 text-zinc-500">
        <li className="inline">
          <span className="group relative text-zinc-900">
            <ScanIcon className="relative z-10 inline size-4 -translate-y-0.5" />{" "}
            <span className="relative z-10 font-medium text-zinc-500 underline decoration-zinc-400 decoration-dotted underline-offset-5 transition-colors group-hover:text-zinc-900 group-hover:decoration-zinc-600">
              Articles
            </span>
          </span>
        </li>
        <span className="relative z-10">, </span>
        <li className="inline">
          <span className="group relative text-zinc-900">
            <AtomIcon className="relative z-10 inline size-4 -translate-y-0.5" />{" "}
            <span className="relative z-10 font-medium text-zinc-500 underline decoration-zinc-400 decoration-dotted underline-offset-5 transition-colors group-hover:text-zinc-900 group-hover:decoration-zinc-600">
              Components
            </span>
          </span>
        </li>{" "}
        <span className="relative z-10">and </span>
        <li className="inline">
          <span className="group relative text-zinc-900">
            <VectorSquareIcon className="relative z-10 inline size-4 -translate-y-0.5" />{" "}
            <span className="relative z-10 font-medium text-zinc-500 underline decoration-zinc-400 decoration-dotted underline-offset-5 transition-colors group-hover:text-zinc-900 group-hover:decoration-zinc-600">
              Mimics
            </span>
          </span>
        </li>
      </ul>
      <div className="px-4 text-zinc-500">
        <p className="-mt-1 hidden text-sm text-zinc-400 lg:block">(click items above to filter)</p>
        <p className="-mt-1 text-sm text-zinc-400 lg:hidden">(tap on the items above to filter)</p>
      </div>
      <ul className="space-y-px px-2 pt-4">
        {content.map((item) => (
          <li key={`${item.type}/${item.slug}`}>
            <WritingItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
