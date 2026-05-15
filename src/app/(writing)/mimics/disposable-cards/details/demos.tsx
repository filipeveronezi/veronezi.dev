"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";

const demoCards = [
  { id: "rose", color: "bg-gradient-to-tr from-rose-300 to-rose-100" },
  { id: "sky", color: "bg-gradient-to-tr from-sky-300 to-sky-100" },
  { id: "emerald", color: "bg-gradient-to-tr from-emerald-300 to-emerald-100" },
  { id: "amber", color: "bg-gradient-to-tr from-amber-300 to-amber-100" },
];

const stackOffset = 16;
const stackScaleStep = 0.045;
const throwDistance = -180;
const animationDuration = 0.42;

type Card = (typeof demoCards)[number];
type Direction = "next" | "previous";
type Action = { direction: Direction; cardId: Card["id"] } | null;
type HiddenCard = { id: Card["id"]; placement: "top" | "stack" } | null;

function DemoFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex min-h-80 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 p-6">
      {children}
    </div>
  );
}

function DemoButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StaticPile({ cards = demoCards }: { cards?: Card[] }) {
  return (
    <div className="relative h-48 w-full max-w-xs">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`absolute inset-x-0 top-0 h-40 rounded-xl border-2 border-white shadow-md ${card.color}`}
          style={{
            zIndex: cards.length - index,
            transform: `translateY(${index * stackOffset}px) scale(${1 - index * stackScaleStep})`,
          }}
        />
      ))}
    </div>
  );
}

function MotionPile({
  action,
  hiddenCard,
  order,
}: {
  action?: Action;
  hiddenCard?: HiddenCard;
  order: Card[];
}) {
  return (
    <div className="relative h-48 w-full max-w-xs">
      {order.map((card, index) => {
        const stackY = index * stackOffset;
        const stackScale = 1 - index * stackScaleStep;
        const isLeaving = action?.direction === "next" && action.cardId === card.id;
        const isEntering = action?.direction === "previous" && action.cardId === card.id;
        const isHidden = hiddenCard?.id === card.id;
        const isHiddenAtTop = isHidden && hiddenCard?.placement === "top";
        const shouldThrow = isLeaving && !isHidden;

        return (
          <motion.div
            key={card.id}
            className={`absolute inset-x-0 top-0 h-40 rounded-xl border-2 border-white shadow-md ${card.color}`}
            initial={{ opacity: isEntering ? 0 : 1, y: isEntering ? throwDistance : stackY }}
            animate={{
              opacity: isLeaving || isHidden ? 0 : 1,
              rotate: shouldThrow ? -8 : 0,
              scale: stackScale,
              y: shouldThrow || isHiddenAtTop ? throwDistance : stackY,
            }}
            style={{ zIndex: order.length - index }}
            transition={{
              opacity: { duration: isLeaving || isEntering ? 0.2 : 0 },
              rotate: { duration: shouldThrow ? 0.3 : 0 },
              scale: { duration: isHidden ? 0 : animationDuration },
              y: { duration: isHidden ? 0 : animationDuration },
            }}
          />
        );
      })}
    </div>
  );
}

export function StaticStackDemo() {
  return (
    <DemoFrame>
      <StaticPile />
    </DemoFrame>
  );
}

export function ScaleReorderDemo() {
  const [order, setOrder] = useState(demoCards);

  function rotate() {
    setOrder((currentOrder) => [...currentOrder.slice(1), currentOrder[0]]);
  }

  return (
    <DemoFrame>
      <div className="flex w-full flex-col items-center gap-6">
        <MotionPile order={order} />
        <DemoButton onClick={rotate}>Move top to bottom</DemoButton>
      </div>
    </DemoFrame>
  );
}

export function DisposablePileDemo() {
  const [order, setOrder] = useState(demoCards);
  const [action, setAction] = useState<Action>(null);
  const [hiddenCard, setHiddenCard] = useState<HiddenCard>(null);
  const busy = useRef(false);

  function finish(actionDirection: Direction, card: Card) {
    window.setTimeout(() => {
      if (actionDirection === "next") {
        setHiddenCard({ id: card.id, placement: "stack" });
        setOrder((currentOrder) => {
          const topCard = currentOrder[0];
          return topCard ? [...currentOrder.slice(1), topCard] : currentOrder;
        });
        window.setTimeout(() => setHiddenCard(null), 80);
      }

      busy.current = false;
      setAction(null);
    }, animationDuration * 1000);
  }

  function throwTop() {
    if (busy.current) return;

    const card = order[0];
    busy.current = true;
    setAction({ direction: "next", cardId: card.id });
    finish("next", card);
  }

  function bringLast() {
    if (busy.current) return;

    const card = order.at(-1);
    if (!card) return;

    const nextAction = { direction: "previous" as const, cardId: card.id };
    busy.current = true;
    setHiddenCard({ id: card.id, placement: "top" });
    setOrder((currentOrder) => [card, ...currentOrder.slice(0, -1)]);

    window.setTimeout(() => {
      setHiddenCard(null);
      setAction(nextAction);
      finish("previous", card);
    }, 20);
  }

  return (
    <DemoFrame>
      <div className="flex w-full flex-col items-center gap-6">
        <MotionPile action={action} hiddenCard={hiddenCard} order={order} />
        <div className="flex gap-2">
          <DemoButton onClick={throwTop}>Throw top</DemoButton>
          <DemoButton onClick={bringLast}>Bring last</DemoButton>
        </div>
      </div>
    </DemoFrame>
  );
}
