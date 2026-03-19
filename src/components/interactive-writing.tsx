"use client";

import { cn } from "@/lib/cn";
import { AtomIcon, ConeIcon, ScanIcon, VectorSquareIcon } from "lucide-react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { useQueryState } from "nuqs";

export function InteractiveWriting() {
  const [filter, setFilter] = useQueryState("filter");

  return (
    <MotionConfig transition={{ duration: 0.3, type: "spring", bounce: 0 }}>
      <section className="space-y-2 pb-20 leading-loose">
        <h2 className="flex items-center gap-1 font-medium text-zinc-900">
          <ConeIcon className="size-4 rotate-215 text-zinc-500" />
          <span>Interactive writing</span>
        </h2>
        <p className="text-zinc-500">Everything I learn, shared in three formats:</p>
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
                  filter === "articles" || !filter
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
            <button
              className="group relative text-zinc-900"
              onClick={() => setFilter("components")}
            >
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
            <button className="group relative text-zinc-900" onClick={() => setFilter("mimics")}>
              {filter === "mimics" ? (
                <motion.span
                  className="absolute -inset-[0.15rem] rounded-md bg-zinc-200"
                  layoutId="background"
                />
              ) : null}
              <VectorSquareIcon className="relative z-10 inline size-4 -translate-y-0.5" />{" "}
              <span
                className={cn(
                  filter === "mimics"
                    ? "decoration-zinc-200 group-hover:decoration-zinc-200 text-zinc-900"
                    : "decoration-zinc-300 text-zinc-500 group-hover:decoration-zinc-500 group-hover:text-zinc-900",
                  "relative z-10 font-medium underline underline-offset-5 transition-colors",
                )}
              >
                Mimics
              </span>
            </button>
          </li>
        </ul>
        <AnimatePresence mode="wait">
          {filter === "articles" || !filter ? (
            <motion.div
              key="articles"
              className="text-zinc-500"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              <p>Thoughts on specific themes around design engineering, product and tech.</p>
              <p>
                Whenever I learn something useful, I turn it into an{" "}
                <em className="font-medium text-zinc-900 not-italic">Article</em>.
              </p>
            </motion.div>
          ) : null}
          {filter === "components" ? (
            <motion.div
              key="components"
              className="text-zinc-500"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              <p>Reusable pieces of code with interactive examples.</p>
              <p>
                While practicing my creativity I usually end up with some cool{" "}
                <em className="font-medium text-zinc-900 not-italic">Components</em>.
              </p>
            </motion.div>
          ) : null}
          {filter === "mimics" ? (
            <motion.div
              key="mimics"
              className="text-zinc-500"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
            >
              <p>
                This is both (1) an appreciation wall for people who inspire me and (2) the fastest
                way to develop design engineering skills.
              </p>
              <p>
                Relying on creativity to practice technical skills is not productive. That's why I
                like to create <em className="font-medium text-zinc-900 not-italic">Mimics</em>.
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>
    </MotionConfig>
  );
}
