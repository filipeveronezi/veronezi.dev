"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { defineSound } from "@web-kits/audio";

const WORDS = [
  { text: "make you feel something", emojis: ["🥹", "❤️", "💫"] },
  { text: "be enjoyable", emojis: ["✨", "😊", "💛"] },
  { text: "make you smile", emojis: ["😁", "☀️", "🌈"] },
  { text: "spark curiosity", emojis: ["👀", "💡", "🔍"] },
  { text: "feel like magic", emojis: ["🪄", "✨", "🔮"] },
];

const stepSound = defineSound({
  source: { type: "sine", frequency: { start: 620, end: 460 } },
  envelope: { attack: 0.001, decay: 0.045, sustain: 0, release: 0.015 },
  gain: 0.18,
});

const burstSound = defineSound({
  layers: [
    {
      source: { type: "noise", color: "pink" },
      filter: { type: "lowpass", frequency: 4200 },
      envelope: { attack: 0.001, decay: 0.07, sustain: 0, release: 0.04 },
      gain: 0.3,
    },
    {
      source: { type: "sine", frequency: { start: 1200, end: 180 } },
      envelope: { attack: 0.001, decay: 0.09, sustain: 0, release: 0.025 },
      gain: 0.25,
    },
  ],
});

export function Enjoyable() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const indexRef = useRef(0);
  const particlesRef = useRef<HTMLSpanElement>(null);
  const animationsRef = useRef(new Set<Animation>());
  const timersRef = useRef(new Set<ReturnType<typeof setTimeout>>());
  const voicesRef = useRef(new Set<ReturnType<typeof burstSound>>());
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
    const animations = animationsRef.current;
    const timers = timersRef.current;
    const voices = voicesRef.current;
    return () => {
      timers.forEach(clearTimeout);
      timers.clear();
      voices.forEach((voice) => voice.stop(0.004));
      voices.clear();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
  }, []);

  function changeWord(event: MouseEvent<HTMLButtonElement>) {
    timersRef.current.forEach(clearTimeout);
    timersRef.current.clear();
    voicesRef.current.forEach((voice) => voice.stop(0.004));
    voicesRef.current.clear();
    const celebrate = indexRef.current === WORDS.length - 1;
    const next = (indexRef.current + 1) % WORDS.length;
    const palette = WORDS[indexRef.current].emojis;
    indexRef.current = next;
    setIndex(next);

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.detail === 0 ? bounds.left + bounds.width / 2 : event.clientX;
    const y = event.detail === 0 ? bounds.top + bounds.height / 2 : event.clientY;

    if (!celebrate) {
      try {
        voicesRef.current.add(stepSound({ detune: (next - 1) * 300 }));
      } catch {
        // Keep the interaction available without browser audio.
      }
      emitParticles(x, y, palette);
      return;
    }

    [0, -72, 72].forEach((offset, burst) => {
      const explode = () => {
        try {
          voicesRef.current.add(burstSound({ detune: burst * 200, pan: offset / 144 }));
        } catch {
          // Particles still celebrate when browser audio is unavailable.
        }
        emitParticles(Math.max(24, Math.min(window.innerWidth - 24, x + offset)), y, palette);
      };
      if (burst === 0) explode();
      else {
        const timer = setTimeout(() => {
          timersRef.current.delete(timer);
          explode();
        }, burst * 160);
        timersRef.current.add(timer);
      }
    });
  }

  function emitParticles(x: number, y: number, palette: string[]) {
    const layer = particlesRef.current;
    if (!layer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Bound the particle count even during repeated rapid clicks.
    while (layer.childElementCount > 56) {
      const oldest = layer.firstElementChild;
      oldest?.getAnimations().forEach((animation) => animation.cancel());
      oldest?.remove();
    }

    for (let i = 0; i < 14; i++) {
      const particle = document.createElement("span");
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
            className="inline-block origin-bottom underline decoration-zinc-400 decoration-dotted underline-offset-5 transition-colors group-hover:text-zinc-700 group-hover:decoration-zinc-400"
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
