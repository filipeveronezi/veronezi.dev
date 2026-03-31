"use client";

import { cn } from "@/lib/cn";
import type { ContentItem } from "@/lib/content";
import { ArticleItem } from "@/components/article-item";
import { ComponentItem } from "@/components/component-item";
import { MimicItem } from "@/components/mimic-item";
import { AtomIcon, ConeIcon, ScanIcon, VectorSquareIcon } from "lucide-react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useQueryState } from "nuqs";

export function InteractiveWriting({ content }: { content: ContentItem[] }) {
  const [filter, setFilter] = useQueryState("filter");

  const isAll = !filter || filter === "all";
  const filtered = isAll ? content : content.filter((item) => item.type === filter);

  return (
    <MotionConfig transition={{ duration: 0.3, type: "spring", bounce: 0 }}>
      <section className="space-y-2 pb-20 leading-loose">
        <h2 className="flex items-center gap-1 px-4 font-medium text-zinc-900">
          <ConeIcon className="size-4 rotate-215 text-zinc-500" />
          <span>Interactive writing</span>
        </h2>
        <p className="px-4 text-zinc-500">
          <span className="relative z-10">Everything I learn, shared in </span>
          <button className="group relative text-zinc-900" onClick={() => setFilter("all")}>
            {isAll ? (
              <motion.span
                className="corner-squircle absolute -inset-[0.15rem] rounded-2xl bg-zinc-200"
                layoutId="background"
              />
            ) : null}
            <span
              className={cn(
                isAll
                  ? "decoration-zinc-200 group-hover:decoration-zinc-200 text-zinc-900"
                  : "decoration-zinc-400 text-zinc-500 group-hover:decoration-zinc-600 group-hover:text-zinc-900",
                "relative z-10 font-medium underline decoration-dotted underline-offset-5 transition-colors",
              )}
            >
              three formats
            </span>
          </button>
          <span className="relative z-10">:</span>
        </p>
        <ul className="px-4 text-zinc-500">
          <li className="inline">
            <button className="group relative text-zinc-900" onClick={() => setFilter("articles")}>
              {filter === "articles" ? (
                <motion.span
                  className="corner-squircle absolute -inset-[0.15rem] rounded-2xl bg-zinc-200"
                  layoutId="background"
                />
              ) : null}
              <ScanIcon className="relative z-10 inline size-4 -translate-y-0.5" />{" "}
              <span
                className={cn(
                  filter === "articles"
                    ? "decoration-zinc-200 group-hover:decoration-zinc-200 text-zinc-900"
                    : "decoration-zinc-400 text-zinc-500 group-hover:decoration-zinc-600 group-hover:text-zinc-900",
                  "relative z-10 font-medium underline decoration-dotted underline-offset-5 transition-colors",
                )}
              >
                Articles
              </span>
            </button>
          </li>
          <span className="relative z-10">, </span>
          <li className="inline">
            <button
              className="group relative text-zinc-900"
              onClick={() => setFilter("components")}
            >
              {filter === "components" ? (
                <motion.span
                  className="corner-squircle absolute -inset-[0.15rem] rounded-2xl bg-zinc-200"
                  layoutId="background"
                />
              ) : null}
              <AtomIcon className="relative z-10 inline size-4 -translate-y-0.5" />{" "}
              <span
                className={cn(
                  filter === "components"
                    ? "decoration-zinc-200 group-hover:decoration-zinc-200 text-zinc-900"
                    : "decoration-zinc-400 text-zinc-500 group-hover:decoration-zinc-600 group-hover:text-zinc-900",
                  "relative z-10 font-medium underline decoration-dotted underline-offset-5 transition-colors",
                )}
              >
                Components
              </span>
            </button>
          </li>{" "}
          <span className="relative z-10">and </span>
          <li className="inline">
            <button className="group relative text-zinc-900" onClick={() => setFilter("mimics")}>
              {filter === "mimics" ? (
                <motion.span
                  className="corner-squircle absolute -inset-[0.15rem] rounded-2xl bg-zinc-200"
                  layoutId="background"
                />
              ) : null}
              <VectorSquareIcon className="relative z-10 inline size-4 -translate-y-0.5" />{" "}
              <span
                className={cn(
                  filter === "mimics"
                    ? "decoration-zinc-200 group-hover:decoration-zinc-200 text-zinc-900"
                    : "decoration-zinc-400 text-zinc-500 group-hover:decoration-zinc-600 group-hover:text-zinc-900",
                  "relative z-10 font-medium underline decoration-dotted underline-offset-5 transition-colors",
                )}
              >
                Mimics
              </span>
            </button>
          </li>
        </ul>
        <AnimatePresence mode="wait" initial={false}>
          {isAll ? (
            <motion.div
              key="all"
              className="px-4 text-zinc-500"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              <p className="-mt-1 hidden text-sm text-zinc-400 lg:block">
                (click items above to filter)
              </p>
              <p className="-mt-1 text-sm text-zinc-400 lg:hidden">
                (tap on the items above to filter)
              </p>
            </motion.div>
          ) : null}
          {filter === "articles" ? (
            <motion.div
              key="articles"
              className="px-4 text-zinc-500"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              <p>
                Thoughts on specific themes around design engineering, product, tech and career.
              </p>
              <p>
                Whenever I learn something useful and want to share it, I turn it into an{" "}
                <em className="font-medium text-zinc-900 not-italic">Article</em>.
              </p>
            </motion.div>
          ) : null}
          {filter === "components" ? (
            <motion.div
              key="components"
              className="px-4 text-zinc-500"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              <p>Reusable pieces of code explained.</p>
              <p>
                While exploring ideas, some cool{" "}
                <em className="font-medium text-zinc-900 not-italic">Components</em> stand out.
              </p>
            </motion.div>
          ) : null}
          {filter === "mimics" ? (
            <motion.div
              key="mimics"
              className="px-4 text-zinc-500"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              <p>
                This is both (1) an appreciation wall for builders who inspire me and (2) the
                fastest way to develop design engineering skills.
              </p>
              <p>
                Relying on pure creativity to practice technical skills is not productive. That's
                why I like to create{" "}
                <em className="font-medium text-zinc-900 not-italic">Mimics</em> of beautiful and
                well-designed software.
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <AnimatePresence mode="wait" initial={false}>
          <motion.ul
            key={isAll ? "all" : filter}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="space-y-px px-2 pt-4"
          >
            {filtered.map((item) => (
              <li key={`${item.type}/${item.slug}`}>
                {item.type === "articles" && <ArticleItem item={item} />}
                {item.type === "components" && <ComponentItem item={item} />}
                {item.type === "mimics" && <MimicItem item={item} />}
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </section>
    </MotionConfig>
  );
}
