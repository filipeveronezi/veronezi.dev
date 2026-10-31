"use client";

import { createContext, useContext, useId, useState, type ReactNode } from "react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";

const HoverContext = createContext<{
  active: string | null;
  setActive: (id: string | null) => void;
} | null>(null);

export function HoverItems({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<string | null>(null);
  const groupId = useId();

  return (
    <HoverContext.Provider value={{ active, setActive }}>
      <LayoutGroup id={groupId}>
        <div className="relative isolate" onPointerLeave={() => setActive(null)}>{children}</div>
      </LayoutGroup>
    </HoverContext.Provider>
  );
}

export function HoverItem({ children, layoutId = "writing-hover" }: { children: ReactNode; layoutId?: string }) {
  const context = useContext(HoverContext);
  const id = useId();
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="relative"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
          context?.setActive(id);
        }
      }}
    >
      {context?.active === id ? (
        <motion.div
          aria-hidden="true"
          layoutId={layoutId}
          className="corner-squircle pointer-events-none absolute -inset-x-3 -inset-y-2 -z-10 rounded-2xl bg-zinc-100"
          transition={reducedMotion ? { duration: 0 } : { type: "spring", duration: 0.25, bounce: 0.1 }}
        />
      ) : null}
      {children}
    </div>
  );
}
