"use client";

import { useState } from "react";
import { XIcon } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Demo } from "@/components/demo";

type Gutter = "auto" | "stable";

export function ScrollbarGutterDemo() {
  const shouldReduceMotion = useReducedMotion();
  const [gutter, setGutter] = useState<Gutter>("auto");
  const [open, setOpen] = useState(false);

  function openModal(nextGutter: Gutter) {
    setGutter(nextGutter);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  const keepGutter = !open || gutter === "stable";

  return (
    <Demo className="p-0">
      <div className="border-b border-zinc-200 bg-white px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-red-300" />
          <span className="size-2 rounded-full bg-amber-300" />
          <span className="size-2 rounded-full bg-emerald-300" />
          <span className="ml-2 text-xs text-zinc-400">Page preview</span>
        </div>
      </div>

      <div className="relative h-72 overflow-hidden bg-white">
        <div
          className="grid h-full"
          style={{ gridTemplateColumns: `minmax(0, 1fr) ${keepGutter ? 14 : 0}px` }}
        >
          <div className="relative flex flex-col items-center justify-center px-6 text-center">
            <div className="mb-5 size-2 rounded-full bg-emerald-500" />
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-zinc-600">
              This content is centered in the scrollable area.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                onClick={() => openModal("auto")}
                type="button"
              >
                Open without gutter
              </button>
              <button
                className="rounded-full bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-700"
                onClick={() => openModal("stable")}
                type="button"
              >
                Open with stable gutter
              </button>
            </div>
          </div>

          <div className={`p-1 ${open && gutter === "stable" ? "bg-transparent" : "bg-zinc-100"}`}>
            {!open ? <div className="h-20 rounded-full bg-zinc-300" /> : null}
          </div>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center bg-zinc-950/15 p-4"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.16, ease: [0.19, 1, 0.22, 1] }}
            >
              <motion.div
                animate={{ opacity: 0.75, scale: 1 }}
                aria-label="Modal example"
                aria-modal="true"
                className="flex h-40 w-full max-w-xs items-start justify-end rounded-xl border border-zinc-200 bg-white p-5 text-zinc-900 shadow-xl"
                exit={{
                  opacity: 0,
                  scale: shouldReduceMotion ? 1 : 0.95,
                  transition: { duration: 0.14 },
                }}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                role="dialog"
                transition={{ duration: 0.22, ease: [0.19, 1, 0.22, 1] }}
              >
                <button
                  aria-label="Close modal"
                  className="flex size-11 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100"
                  onClick={closeModal}
                  type="button"
                >
                  <XIcon className="size-5" />
                </button>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </Demo>
  );
}
