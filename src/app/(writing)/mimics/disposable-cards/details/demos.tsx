"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useSpring } from "motion/react";
import { Demo } from "@/components/demo";
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

function wrap(value: number, length: number) {
  return ((value % length) + length) % length;
}

function getSlot(index: number, progress: number) {
  const distance = index - wrap(progress, cards.length);
  return distance <= -1 ? distance + cards.length : distance;
}

function getStyle(slot: number) {
  const opacity = slot < 0 ? Math.max(0, slot + 1) : slot <= 2 ? 1 : Math.max(0, 3 - slot);
  const y = slot < 0 ? slot * 150 : slot >= 3 ? 28 : slot * 24;
  const x = slot < 0 ? Math.abs(slot) * 24 : 0;
  const rotate = slot < 0 ? Math.abs(slot) * 8 : 0;
  const scale = slot <= 0 ? 1 : 1 - Math.min(slot, 3) * 0.035;

  return { opacity, y, x, rotate, scale };
}

function DemoButton({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function MiniPile({ progress, showSlots = false }: { progress: number; showSlots?: boolean }) {
  const smoothProgress = useSpring(progress, {
    stiffness: 180,
    damping: 30,
    mass: 0.25,
  });
  const [displayProgress, setDisplayProgress] = useState(progress);

  useEffect(() => smoothProgress.on("change", setDisplayProgress), [smoothProgress]);

  return (
    <div className="relative mx-auto flex h-56 w-full max-w-sm items-center justify-center">
      {cards.map((card, index) => {
        const slot = getSlot(index, displayProgress);
        const style = getStyle(slot);

        return (
          <motion.div
            key={card.id}
            animate={style}
            className={cn(
              card.color,
              "absolute flex aspect-[4/2.6] w-60 items-center justify-center rounded-lg border-2 border-white text-2xl font-semibold text-white shadow-lg",
            )}
            style={{ zIndex: cards.length - Math.round(slot) }}
            transition={{ duration: 0.18 }}
          >
            {showSlots ? (
              <span className="rounded-full bg-white/25 px-2 py-0.5 text-sm backdrop-blur">
                {slot.toFixed(2)}
              </span>
            ) : (
              index + 1
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export function FoundationDemo() {
  return (
    <Demo>
      <MiniPile progress={0} />
    </Demo>
  );
}

export function ProgressDemo() {
  const [progress, setProgress] = useState(0);

  return (
    <Demo>
      <MiniPile progress={progress} />
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <DemoButton onClick={() => setProgress((value) => value - 0.25)}>Back</DemoButton>
          <DemoButton onClick={() => setProgress((value) => value + 0.25)}>Forward</DemoButton>
        </div>
        <span className="font-mono text-sm text-zinc-500">progress {progress.toFixed(2)}</span>
      </div>
    </Demo>
  );
}

export function SlotsDemo() {
  const [progress, setProgress] = useState(0.75);
  const rows = useMemo(
    () =>
      cards.map((card, index) => ({
        id: card.id,
        index,
        slot: getSlot(index, progress),
      })),
    [progress],
  );

  return (
    <Demo>
      <MiniPile progress={progress} showSlots />
      <input
        className="mt-4 w-full accent-zinc-950"
        max={2}
        min={0}
        onChange={(event) => setProgress(Number(event.target.value))}
        step={0.01}
        type="range"
        value={progress}
      />
      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
        {rows.slice(0, 3).map((row) => (
          <div key={row.id} className="rounded-md border border-zinc-200 bg-white p-2">
            <div className="font-medium text-zinc-900">card {row.index + 1}</div>
            <div className="font-mono text-zinc-500">index {row.index}</div>
            <div className="font-mono text-zinc-500">slot {row.slot.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </Demo>
  );
}

export function LoopDemo() {
  const [progress, setProgress] = useState(4);

  return (
    <Demo>
      <MiniPile progress={progress} />
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <DemoButton onClick={() => setProgress(4)}>Near end</DemoButton>
          <DemoButton onClick={() => setProgress((value) => value + 1)}>Advance</DemoButton>
        </div>
        <span className="font-mono text-sm text-zinc-500">
          progress {progress} / wrapped {wrap(progress, cards.length)}
        </span>
      </div>
    </Demo>
  );
}

export function SnapDemo() {
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  useEffect(() => {
    if (Number.isInteger(progress)) return;

    const timer = setTimeout(() => {
      setProgress(direction === "forward" ? Math.ceil(progress) : Math.floor(progress));
    }, 450);

    return () => clearTimeout(timer);
  }, [direction, progress]);

  return (
    <Demo>
      <MiniPile progress={progress} />
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          <DemoButton
            onClick={() => {
              setDirection("back");
              setProgress((value) => value - 0.45);
            }}
          >
            Partial back
          </DemoButton>
          <DemoButton
            onClick={() => {
              setDirection("forward");
              setProgress((value) => value + 0.45);
            }}
          >
            Partial forward
          </DemoButton>
        </div>
        <span className="font-mono text-sm text-zinc-500">progress {progress.toFixed(2)}</span>
      </div>
    </Demo>
  );
}

export function TweakingDetailsDemo() {
  const [slot, setSlot] = useState(-0.45);
  const style = getStyle(slot);

  return (
    <Demo>
      <div className="flex h-56 items-center justify-center">
        <motion.div
          animate={style}
          className="flex aspect-[4/2.6] w-60 items-center justify-center rounded-lg border-2 border-white bg-gradient-to-tr from-violet-300 to-violet-100 text-2xl font-semibold text-white shadow-lg"
          transition={{ duration: 0.18 }}
        >
          slot {slot.toFixed(2)}
        </motion.div>
      </div>
      <input
        className="mt-4 w-full accent-zinc-950"
        max={3}
        min={-1}
        onChange={(event) => setSlot(Number(event.target.value))}
        step={0.01}
        type="range"
        value={slot}
      />
      <div className="mt-4 grid grid-cols-2 gap-2 font-mono text-sm text-zinc-500 md:grid-cols-5">
        <span>opacity {style.opacity.toFixed(2)}</span>
        <span>x {style.x.toFixed(0)}</span>
        <span>y {style.y.toFixed(0)}</span>
        <span>scale {style.scale.toFixed(2)}</span>
        <span>rotate {style.rotate.toFixed(0)}</span>
      </div>
    </Demo>
  );
}
