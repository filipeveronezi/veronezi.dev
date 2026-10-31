"use client";

import { defineSound } from "@web-kits/audio";
import { useEffect } from "react";

const click = defineSound({
  layers: [
    {
      source: { type: "noise", color: "white" },
      filter: { type: "bandpass", frequency: 7200, resonance: 1.1 },
      envelope: { attack: 0, decay: 0.004, sustain: 0, release: 0.002 },
      gain: 0.25,
    },
    {
      source: {
        type: "sine",
        frequency: { start: 2200, end: 1800 },
        fm: { ratio: 0.5, depth: 42 },
      },
      envelope: { attack: 0, decay: 0.014, sustain: 0, release: 0.005 },
      gain: 0.683,
    },
    {
      source: { type: "triangle", frequency: { start: 320, end: 240 } },
      envelope: { attack: 0, decay: 0.021, sustain: 0, release: 0.008 },
      gain: 0.25,
    },
  ],
});

export function NavigationSounds() {
  useEffect(() => {
    let voice: ReturnType<typeof click> | undefined;

    function playClick(event: MouseEvent) {
      if (!event.isTrusted || event.button !== 0) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      if (!link || link.hasAttribute("download") || link.getAttribute("aria-disabled") === "true") return;

      try {
        voice?.stop(0.004);
        voice = click({ volume: 0.35 });
      } catch {
        // Navigation stays available when browser audio is unavailable.
      }
    }

    document.addEventListener("click", playClick);
    return () => {
      document.removeEventListener("click", playClick);
      voice?.stop(0.004);
    };
  }, []);

  return null;
}
