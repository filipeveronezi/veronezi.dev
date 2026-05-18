"use client";

import { useEffect, useRef } from "react";
import { motion, type MotionValue, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/cn";

const cards = [
  { id: "rose", color: "bg-gradient-to-tr from-rose-300 to-rose-100" },
  { id: "sky", color: "bg-gradient-to-tr from-sky-300 to-sky-100" },
  { id: "emerald", color: "bg-gradient-to-tr from-emerald-300 to-emerald-100" },
  { id: "amber", color: "bg-gradient-to-tr from-amber-300 to-amber-100" },
  { id: "violet", color: "bg-gradient-to-tr from-violet-300 to-violet-100" },
  { id: "yellow", color: "bg-gradient-to-tr from-yellow-300 to-yellow-100" },
];

const visibleDepth = 3;
const scrollStep = 3000;
const snapDelay = 100;

function wrap(value: number, length: number) {
  return ((value % length) + length) % length;
}

function DisposableCard({
  card,
  index,
  progress,
}: {
  card: (typeof cards)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const slot = useTransform(progress, (value) => {
    const distance = index - wrap(value, cards.length);
    return distance <= -1 ? distance + cards.length : distance;
  });
  const opacity = useTransform(slot, [-1, 0, 2, visibleDepth], [0, 1, 1, 0]);
  const y = useTransform(slot, [-1, 0, 1, 2, visibleDepth], [-700, 0, 28, 56, 28]);
  const x = useTransform(slot, [-1, 0, 1, 2, visibleDepth], [30, 0, 0, 0, 0]);
  const scale = useTransform(slot, [-1, 0, 1, 2, visibleDepth], [0.96, 1, 0.965, 0.93, 0.9]);
  const rotate = useTransform(slot, [-1, 0, 1, 2, visibleDepth], [10, 0, 0, 0, 0]);
  const zIndex = useTransform(slot, (value) => cards.length - Math.round(value));

  return (
    <motion.div
      className={cn(
        card.color,
        "absolute flex aspect-[4/2.6] w-full items-center justify-center rounded-xl border-2 border-white text-5xl font-semibold text-white shadow-xl",
      )}
      style={{
        opacity,
        y,
        scale,
        rotate,
        zIndex,
        x,
      }}
    >
      {index + 1}
    </motion.div>
  );
}

export default function DisposableCardsPage() {
  const rawProgress = useMotionValue(0);
  const progress = useSpring(rawProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.25,
  });
  const touchY = useRef<number | null>(null);
  const snapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");

    return () => {
      document.documentElement.classList.remove("overflow-hidden");

      if (snapTimer.current) {
        clearTimeout(snapTimer.current);
      }
    };
  }, []);

  function movePile(delta: number) {
    rawProgress.set(rawProgress.get() + delta / scrollStep);

    if (snapTimer.current) {
      clearTimeout(snapTimer.current);
    }

    snapTimer.current = setTimeout(() => {
      const nextProgress = delta > 0 ? Math.ceil(rawProgress.get()) : Math.floor(rawProgress.get());
      rawProgress.set(nextProgress);
    }, snapDelay);
  }

  return (
    <section
      className="fixed inset-0 z-0 flex touch-none items-center justify-center overflow-hidden"
      onWheel={(event) => {
        event.preventDefault();
        movePile(event.deltaY);
      }}
      onTouchStart={(event) => {
        touchY.current = event.touches[0]?.clientY ?? null;
      }}
      onTouchMove={(event) => {
        event.preventDefault();

        const nextY = event.touches[0]?.clientY;
        if (touchY.current === null || nextY === undefined) return;

        movePile(touchY.current - nextY);
        touchY.current = nextY;
      }}
      onTouchEnd={() => {
        touchY.current = null;
      }}
      onTouchCancel={() => {
        touchY.current = null;
      }}
    >
      <div className="relative flex w-full max-w-xl items-center justify-center">
        {cards.map((card, index) => (
          <DisposableCard key={card.id} card={card} index={index} progress={progress} />
        ))}
      </div>
    </section>
  );
}
