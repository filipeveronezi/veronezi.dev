"use client";

import { MouseIcon } from "lucide-react";
import { motion, MotionConfig } from "motion/react";
import type { MouseEvent, TouchEvent, WheelEvent } from "react";
import { useEffect, useRef, useState } from "react";

const cards = [
  { id: "rose", color: "bg-gradient-to-tr from-rose-300 to-rose-100" },
  { id: "sky", color: "bg-gradient-to-tr from-sky-300 to-sky-100" },
  { id: "emerald", color: "bg-gradient-to-tr from-emerald-300 to-emerald-100" },
  { id: "amber", color: "bg-gradient-to-tr from-amber-300 to-amber-100" },
  { id: "violet", color: "bg-gradient-to-tr from-violet-300 to-violet-100" },
];

const stackOffset = 22;
const stackScaleStep = 0.035;
const scrollThreshold = 80;
const inputCooldown = 220;
const animationDuration = 420;
const reinsertDuration = 80;
const throwDistance = "-55vh";
const prepareEnterDelay = 20;

type Card = (typeof cards)[number];
type Direction = "next" | "previous";
type ActiveAction = { direction: Direction; cardId: Card["id"] };
type HiddenCard = { id: Card["id"]; placement: "top" | "stack" } | null;
type CursorPosition = { visible: boolean; x: number; y: number };

function DisposableCardPile({
  action,
  hiddenCard,
  onMouseLeave,
  onMouseMove,
  order,
}: {
  action: ActiveAction | null;
  hiddenCard: HiddenCard;
  onMouseLeave: () => void;
  onMouseMove: (event: MouseEvent<HTMLDivElement>) => void;
  order: Card[];
}) {
  return (
    <div
      className="relative h-86 w-full max-w-2xl"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {order.map((card, index) => {
        const isLeaving = action?.direction === "next" && action.cardId === card.id;
        const isEntering = action?.direction === "previous" && action.cardId === card.id;
        const isHidden = hiddenCard?.id === card.id;
        const isHiddenAtTop = isHidden && hiddenCard?.placement === "top";
        const shouldThrow = isLeaving && !isHidden;
        const shouldFade = isLeaving || isEntering;
        const stackY = index * stackOffset;
        const stackScale = 1 - index * stackScaleStep;

        return (
          <motion.div
            key={card.id}
            className={`absolute inset-x-0 top-0 mx-auto h-96 rounded-xl border-2 border-white shadow-lg ${card.color} shadow-sm`}
            initial={{
              opacity: isEntering ? 0 : 1,
              scale: stackScale,
              y: isEntering ? throwDistance : stackY,
            }}
            animate={{
              opacity: isLeaving || isHidden ? 0 : 1,
              rotate: shouldThrow ? -8 : 0,
              scale: stackScale,
              y: shouldThrow || isHiddenAtTop ? throwDistance : stackY,
            }}
            style={{ zIndex: order.length - index }}
            transition={{
              opacity: { duration: shouldFade ? 0.22 : 0, delay: shouldThrow ? 0.3 : 0 },
              rotate: { duration: shouldThrow ? 0.36 : 0, ease: "easeOut" },
              scale: {
                duration: isHidden ? 0 : animationDuration / 1000,
                ease: [0.22, 1, 0.36, 1],
              },
              y: {
                duration: isHidden ? 0 : animationDuration / 1000,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
          />
        );
      })}
    </div>
  );
}

function DisposableCardsMimic() {
  const [order, setOrder] = useState(cards);
  const [action, setAction] = useState<ActiveAction | null>(null);
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    visible: false,
    x: 0,
    y: 0,
  });
  const [hiddenCard, setHiddenCard] = useState<HiddenCard>(null);
  const actionRef = useRef<ActiveAction | null>(null);
  const inputDelta = useRef(0);
  const inputLocked = useRef(false);
  const inputTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const actionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reinsertTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchY = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (inputTimer.current) {
        clearTimeout(inputTimer.current);
      }
      if (actionTimer.current) {
        clearTimeout(actionTimer.current);
      }
      if (enterTimer.current) {
        clearTimeout(enterTimer.current);
      }
      if (reinsertTimer.current) {
        clearTimeout(reinsertTimer.current);
      }
    };
  }, []);

  function unlockInputAfterAnimation() {
    if (inputTimer.current) {
      clearTimeout(inputTimer.current);
    }

    inputTimer.current = setTimeout(() => {
      inputLocked.current = false;
      inputDelta.current = 0;
    }, inputCooldown);
  }

  function startAction(direction: Direction) {
    if (actionRef.current) return;

    const card = direction === "next" ? order[0] : order.at(-1);
    if (!card) return;

    const nextAction = { direction, cardId: card.id };

    actionRef.current = nextAction;

    if (direction === "previous") {
      setHiddenCard({ id: card.id, placement: "top" });
      setOrder((currentOrder) => [card, ...currentOrder.slice(0, -1)]);
      enterTimer.current = setTimeout(() => {
        setHiddenCard(null);
        setAction(nextAction);
      }, prepareEnterDelay);
    } else {
      setAction(nextAction);
    }

    actionTimer.current = setTimeout(
      () => {
        if (direction === "next") {
          setHiddenCard({ id: card.id, placement: "stack" });
          setOrder((currentOrder) => {
            const topCard = currentOrder[0];
            return topCard ? [...currentOrder.slice(1), topCard] : currentOrder;
          });
          reinsertTimer.current = setTimeout(() => {
            setHiddenCard(null);
          }, reinsertDuration);
        }

        actionRef.current = null;
        setAction(null);
        unlockInputAfterAnimation();
      },
      direction === "previous" ? animationDuration + prepareEnterDelay : animationDuration,
    );
  }

  function handleInputDelta(delta: number) {
    if (inputLocked.current || actionRef.current || Math.abs(delta) < 2) return;

    const nextDelta =
      Math.sign(inputDelta.current) === Math.sign(delta) ? inputDelta.current + delta : delta;

    inputDelta.current = nextDelta;

    if (nextDelta >= scrollThreshold) {
      inputDelta.current = 0;
      inputLocked.current = true;
      startAction("next");
    }

    if (nextDelta <= -scrollThreshold) {
      inputDelta.current = 0;
      inputLocked.current = true;
      startAction("previous");
    }
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    event.preventDefault();
    handleInputDelta(event.deltaY);
  }

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    setCursorPosition({ visible: true, x: event.clientX, y: event.clientY });
  }

  function handleMouseLeave() {
    setCursorPosition((currentPosition) => ({ ...currentPosition, visible: false }));
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchY.current = event.touches[0]?.clientY ?? null;
  }

  function handleTouchMove(event: TouchEvent<HTMLDivElement>) {
    event.preventDefault();

    const currentTouchY = event.touches[0]?.clientY;
    if (touchY.current === null || currentTouchY === undefined) return;

    handleInputDelta(touchY.current - currentTouchY);
    touchY.current = currentTouchY;
  }

  function handleTouchEnd() {
    touchY.current = null;
  }

  return (
    <div
      className="fixed top-0 left-0 flex size-full touch-none items-center justify-center overscroll-none"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <DisposableCardPile
        action={action}
        hiddenCard={hiddenCard}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        order={order}
      />
      <ScrollCursorHint cursorPosition={cursorPosition} direction={action?.direction} />
    </div>
  );
}

function ScrollCursorHint({
  cursorPosition,
  direction,
}: {
  cursorPosition: CursorPosition;
  direction?: Direction;
}) {
  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 hidden translate-x-3 translate-y-1/2 rounded-full bg-zinc-950 px-3 py-1.5 text-sm font-medium text-white shadow-lg md:flex md:items-center md:justify-center md:gap-1"
      animate={{
        opacity: cursorPosition.visible ? 1 : 0,
        x: cursorPosition.x,
        y: cursorPosition.y,
      }}
      transition={{
        opacity: { duration: 0.12 },
        x: { duration: 0.1, ease: "easeOut" },
        y: { duration: 0.1, ease: "easeOut" },
      }}
    >
      <MouseIcon className="size-4" />
      <span>Scroll it!</span>
    </motion.div>
  );
}

export default function TestMimic() {
  useEffect(() => {
    document.documentElement.classList.add("overscroll-none");

    return () => {
      document.documentElement.classList.remove("overscroll-none");
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <DisposableCardsMimic />
    </MotionConfig>
  );
}
