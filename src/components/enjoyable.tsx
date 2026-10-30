"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// Placeholder copy and matching emoji palettes, ready to refine together.
const WORDS = [
  { text: "be enjoyable", emojis: ["✨", "😊", "💛"] },
  { text: "be fun", emojis: ["🎉", "🤸", "🎈"] },
  { text: "make you feel something", emojis: ["🥹", "❤️", "💫"] },
  { text: "be delightful", emojis: ["🌈", "✨", "😍"] },
];

export function Enjoyable() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const indexRef = useRef(0);
  const particlesRef = useRef<HTMLSpanElement>(null);
  const animationsRef = useRef(new Set<Animation>());
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    const animations = animationsRef.current;
    return () => {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
  }, []);

  function changeWord(event: MouseEvent<HTMLButtonElement>) {
    const next = (indexRef.current + 1) % WORDS.length;
    indexRef.current = next;
    setIndex(next);

    const layer = particlesRef.current;
    if (!layer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.detail === 0 ? bounds.left + bounds.width / 2 : event.clientX;
    const y = event.detail === 0 ? bounds.top + bounds.height / 2 : event.clientY;

    // Bound the particle count even during repeated rapid clicks.
    while (layer.childElementCount > 56) {
      const oldest = layer.firstElementChild;
      oldest?.getAnimations().forEach((animation) => animation.cancel());
      oldest?.remove();
    }

    for (let i = 0; i < 14; i++) {
      const particle = document.createElement("span");
      const palette = WORDS[next].emojis;
      particle.textContent = palette[i % palette.length];
      particle.style.cssText = `position:absolute;left:${x}px;top:${y}px;font-size:${22 + Math.random() * 16}px;line-height:1;`;
      layer.appendChild(particle);

      const vx = (Math.random() - 0.5) * 280;
      const vy = -100 - Math.random() * 160;
      const spin = (Math.random() - 0.5) * 220;
      const frames = Array.from({ length: 25 }, (_, frame) => {
        const t = frame / 24;
        return {
          transform: `translate(-50%, -50%) translate(${vx * t}px, ${vy * t + 310 * t * t}px) rotate(${spin * t}deg) scale(${t < 0.15 ? 0.9 + t * 2 : 1.2 - (t - 0.15) * 0.5})`,
          opacity: t < 0.65 ? 1 : (1 - t) / 0.35,
        };
      });
      const animation = particle.animate(frames, { duration: 800 + Math.random() * 200, easing: "linear" });
      animationsRef.current.add(animation);
      const remove = () => {
        particle.remove();
        animationsRef.current.delete(animation);
      };
      animation.onfinish = remove;
      animation.oncancel = remove;
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={changeWord}
        className="group relative cursor-pointer whitespace-nowrap rounded-sm font-medium text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500"
        aria-label={`${WORDS[index].text}. Click to change the word and celebrate.`}
      >
        <AnimatePresence initial={false} mode="popLayout">
          <motion.span
            key={index}
            aria-hidden="true"
            className="inline-block origin-bottom underline decoration-zinc-400 decoration-dotted underline-offset-5 transition-colors group-hover:decoration-zinc-500"
            initial={{ opacity: 0, transform: reducedMotion ? "none" : "translateY(-18px) rotate(-4deg) scale(0.95)" }}
            animate={{ opacity: 1, transform: "translateY(0px) rotate(0deg) scale(1)" }}
            exit={{ opacity: 0, transform: reducedMotion ? "none" : "translateY(-24px) rotate(5deg) scale(1.12)", transition: { duration: 0.14, ease: [0.23, 1, 0.32, 1] } }}
            transition={reducedMotion ? { duration: 0.15 } : { type: "spring", stiffness: 420, damping: 20, mass: 1, opacity: { duration: 0.12 } }}
          >
            {WORDS[index].text}
          </motion.span>
        </AnimatePresence>
      </button>
      {mounted && createPortal(
        <span ref={particlesRef} aria-hidden="true" style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 50 }} />,
        document.body,
      )}
    </>
  );
}
