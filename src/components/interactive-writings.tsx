"use client";

import { cn } from "@/lib/cn";
import { AtomIcon, ConeIcon, ScanIcon, VectorSquareIcon } from "lucide-react";
import { motion } from "motion/react";
import { useQueryState } from "nuqs";

export function InteractiveWritings() {
  const [filter, setFilter] = useQueryState("filter");

  return (
    <section className="space-y-2 pb-20">
      <h2 className="flex items-center gap-1 font-medium text-zinc-900">
        <ConeIcon className="size-4 rotate-215 text-zinc-500" />
        <span>Interactive writings</span>
      </h2>
      <p className="text-zinc-500">Everything I learned, shared in three main formats:</p>
      <ul className="text-zinc-500">
        <li className="inline">
          <button className="group relative text-zinc-900" onClick={() => setFilter("articles")}>
            {filter === "articles" || !filter ? (
              <motion.span
                className="absolute -inset-[0.15rem] rounded-md bg-zinc-200"
                layoutId="background"
              />
            ) : null}
            <ScanIcon className="relative z-10 inline size-4 -translate-y-0.5" />{" "}
            <span
              className={cn(
                filter === "articles"
                  ? "decoration-zinc-200 group-hover:decoration-zinc-200 text-zinc-900"
                  : "decoration-zinc-300 text-zinc-500 group-hover:decoration-zinc-500 group-hover:text-zinc-900",
                "relative z-10 font-medium underline underline-offset-5 transition-colors",
              )}
            >
              Articles
            </span>
          </button>
        </li>
        <span className="relative z-10">, </span>
        <li className="inline">
          <button className="group relative text-zinc-900" onClick={() => setFilter("components")}>
            {filter === "components" ? (
              <motion.span
                className="absolute -inset-[0.15rem] rounded-md bg-zinc-200"
                layoutId="background"
              />
            ) : null}
            <AtomIcon className="relative z-10 inline size-4 -translate-y-0.5" />{" "}
            <span
              className={cn(
                filter === "components"
                  ? "decoration-zinc-200 group-hover:decoration-zinc-200 text-zinc-900"
                  : "decoration-zinc-300 text-zinc-500 group-hover:decoration-zinc-500 group-hover:text-zinc-900",
                "relative z-10 font-medium underline underline-offset-5 transition-colors",
              )}
            >
              Components
            </span>
          </button>
        </li>{" "}
        <span className="relative z-10">and </span>
        <li className="inline">
          <button className="group relative text-zinc-900" onClick={() => setFilter("mimic")}>
            {filter === "mimic" ? (
              <motion.span
                className="absolute -inset-[0.15rem] rounded-md bg-zinc-200"
                layoutId="background"
              />
            ) : null}
            <VectorSquareIcon className="relative z-10 inline size-4 -translate-y-0.5" />{" "}
            <span
              className={cn(
                filter === "mimic"
                  ? "decoration-zinc-200 group-hover:decoration-zinc-200 text-zinc-900"
                  : "decoration-zinc-300 text-zinc-500 group-hover:decoration-zinc-500 group-hover:text-zinc-900",
                "relative z-10 font-medium underline underline-offset-5 transition-colors",
              )}
            >
              Mimic
            </span>
          </button>
        </li>
      </ul>
    </section>
  );
}
