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
const scrollThreshold = 80;
const inputCooldown = 400;
const inertiaDeltaLimit = 40;

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
      className="absolute flex aspect-[4/2.6] w-[90%] items-center justify-center lg:w-full"
      initial={{ opacity: 0, scale: index === 0 ? 0.8 : 1, translateY: index === 0 ? 0 : -20 }}
      animate={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ delay: index * 0.25 }}
    >
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
  const touchDelta = useRef(0);
  const wheelDelta = useRef(0);
  const wheelLocked = useRef(false);
  const inertiaDirection = useRef<1 | -1 | null>(null);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    window.scrollTo(0, 0);

    return () => {
      document.documentElement.classList.remove("overflow-hidden");

      if (wheelTimer.current) {
        clearTimeout(wheelTimer.current);
      }
    };
  }, []);

  function stepProgress(direction: 1 | -1) {
    rawProgress.set(rawProgress.get() + direction);
  }

  function triggerWheelGesture(direction: 1 | -1) {
    stepProgress(direction);
    wheelLocked.current = true;
    wheelDelta.current = 0;
    inertiaDirection.current = direction;
    scheduleWheelUnlock();
  }

  function scheduleWheelUnlock() {
    if (wheelTimer.current) {
      clearTimeout(wheelTimer.current);
    }

    wheelTimer.current = setTimeout(() => {
      wheelLocked.current = false;
    }, inputCooldown);
  }

  function handleWheelDelta(delta: number) {
    if (wheelLocked.current) {
      return;
    }

    const direction = delta > 0 ? 1 : -1;

    if (inertiaDirection.current === direction && Math.abs(delta) < inertiaDeltaLimit) {
      return;
    }

    if (inertiaDirection.current !== direction || Math.abs(delta) >= inertiaDeltaLimit) {
      inertiaDirection.current = null;
    }

    wheelDelta.current =
      Math.sign(wheelDelta.current) === Math.sign(delta) ? wheelDelta.current + delta : delta;

    if (wheelDelta.current >= scrollThreshold) {
      triggerWheelGesture(1);
    } else if (wheelDelta.current <= -scrollThreshold) {
      triggerWheelGesture(-1);
    }
  }

  function handleTouchDelta(delta: number) {
    if (delta === 0) return;

    touchDelta.current =
      Math.sign(touchDelta.current) === Math.sign(delta) ? touchDelta.current + delta : delta;

    while (touchDelta.current >= scrollThreshold) {
      stepProgress(1);
      touchDelta.current -= scrollThreshold;
    }

    while (touchDelta.current <= -scrollThreshold) {
      stepProgress(-1);
      touchDelta.current += scrollThreshold;
    }
  }

  return (
    <section
      className="fixed inset-0 z-0 flex touch-none items-center justify-center overflow-hidden"
      onWheel={(event) => {
        event.preventDefault();
        handleWheelDelta(event.deltaY);
      }}
      onTouchStart={(event) => {
        touchY.current = event.touches[0]?.clientY ?? null;
        touchDelta.current = 0;
      }}
      onTouchMove={(event) => {
        event.preventDefault();

        const nextY = event.touches[0]?.clientY;
        if (touchY.current === null || nextY === undefined) return;

        handleTouchDelta(touchY.current - nextY);
        touchY.current = nextY;
      }}
      onTouchEnd={() => {
        touchY.current = null;
        touchDelta.current = 0;
      }}
      onTouchCancel={() => {
        touchY.current = null;
        touchDelta.current = 0;
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
