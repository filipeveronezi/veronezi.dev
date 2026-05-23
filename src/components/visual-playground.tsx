"use client";

import Image from "next/image";
import { motion } from "motion/react";
import React, { useMemo, useState, useRef, useEffect } from "react";
import { TransitionLink } from "./transition-link";
import { LogOutIcon } from "lucide-react";

const ITEMS = [
  {
    mediaUrl: "/visual-playground/pilgrim-week.mp4",
    externalUrl: "https://pilgrim.com.br/pilgrim-week-01",
    width: 1256,
    height: 1256,
  },
  {
    mediaUrl: "/visual-playground/pilgrim-week.png",
    externalUrl: "https://pilgrim.com.br/pilgrim-week-01",
    width: 1512,
    height: 1350,
  },
  {
    mediaUrl: "/visual-playground/logo-fv.png",
    externalUrl: null,
    width: 1000,
    height: 1000,
  },
  {
    mediaUrl: "/visual-playground/responsive-table.png",
    externalUrl: null, // TODO: X post
    width: 1932,
    height: 1930,
  },
  {
    mediaUrl: "/visual-playground/unfair-logo.png",
    externalUrl: null,
    width: 1000,
    height: 1000,
  },
  {
    mediaUrl: "/visual-playground/dashboard-sidebar.png",
    externalUrl: null, // TODO: X post
    width: 1000,
    height: 1000,
  },
  {
    mediaUrl: "/visual-playground/polis-logo.png",
    externalUrl: null,
    width: 1798,
    height: 1798,
  },
  {
    mediaUrl: "/visual-playground/pilgrim-compass.png",
    externalUrl: null,
    width: 2166,
    height: 2166,
  },
  {
    mediaUrl: "/visual-playground/bible-reader.png",
    externalUrl: "https://app.pilgrim.com.br/tabs/b%C3%ADblia",
    width: 1095,
    height: 1094,
  },
  {
    mediaUrl: "/visual-playground/bible-toolbar-audio.mp4",
    externalUrl: "https://app.pilgrim.com.br/tabs/b%C3%ADblia",
    width: 1000,
    height: 1000,
  },
  {
    mediaUrl: "/visual-playground/calendar-elements.png",
    externalUrl: "https://pilgrim.com.br/pilgrim-week-01#day-5",
    width: 1546,
    height: 1546,
  },
  {
    mediaUrl: "/visual-playground/pilgrim-lp.png",
    externalUrl: "https://pilgrim.com.br",
    width: 1000,
    height: 1000,
  },
  {
    mediaUrl: "/visual-playground/eventsea.png",
    externalUrl: null,
    width: 960,
    height: 960,
  },
  {
    mediaUrl: "/visual-playground/canada_1.png",
    externalUrl: null,
    width: 1153,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/canada_2.png",
    externalUrl: null,
    width: 1153,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/canada_3.png",
    externalUrl: null,
    width: 1153,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/canada_4.png",
    externalUrl: null,
    width: 1153,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/canada_5.png",
    externalUrl: null,
    width: 1153,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/canada_6.png",
    externalUrl: null,
    width: 1536,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/canada_7.png",
    externalUrl: null,
    width: 1536,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/canada_8.png",
    externalUrl: null,
    width: 1536,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/canada_9.png",
    externalUrl: null,
    width: 1153,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/canada_10.png",
    externalUrl: null,
    width: 1153,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/canada_11.png",
    externalUrl: null,
    width: 1153,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/canada_12.png",
    externalUrl: null,
    width: 1153,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/canada_13.png",
    externalUrl: null,
    width: 1153,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/canada_14.png",
    externalUrl: null,
    width: 1153,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/canada_15.png",
    externalUrl: null,
    width: 1153,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/disney_1.png",
    externalUrl: null,
    width: 1536,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/disney_2.png",
    externalUrl: null,
    width: 1153,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/foots.png",
    externalUrl: null,
    width: 1395,
    height: 2048,
  },
  {
    mediaUrl: "/visual-playground/universal_1.png",
    externalUrl: null,
    width: 1153,
    height: 2048,
  },
];

type PlaygroundItem = (typeof ITEMS)[number];

const DEFAULT_IMAGE_SIZE = 500; // Desktop column width
const MOBILE_IMAGE_SIZE = 310; // Mobile column width
const DEFAULT_GRID_GAP = 110;
const MOBILE_GRID_GAP = 40;
const GRID_OVERSCAN = 1;
const ROTATION_RANGE = 8; // Range of rotation in degrees (e.g., 10 = ±5 degrees)
const ENTER_BLUR = "6px";

// Helper: seeded random for repeatable positions
function seededRandom(seed: number) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Helper: get random rotation for a grid cell
function getItemRotation(cellX: number, cellY: number) {
  const seed = cellX * 10000 + cellY * 100;
  // Random rotation between -ROTATION_RANGE/2 and +ROTATION_RANGE/2 degrees
  return seededRandom(seed) * ROTATION_RANGE - ROTATION_RANGE / 2;
}

// Helper: check if media is a video
function isVideo(mediaUrl: string): boolean {
  return mediaUrl.toLowerCase().endsWith(".mp4");
}

function positiveModulo(value: number, modulo: number) {
  return ((value % modulo) + modulo) % modulo;
}

function getMasonryCycleSize(totalItems: number) {
  return totalItems;
}

function getItemIndex(cellX: number, cellY: number, totalItems: number) {
  return positiveModulo(cellX * 7 + cellY * 11, totalItems);
}

function getRenderedItemHeight(item: PlaygroundItem, width: number) {
  return Math.round((width * item.height) / item.width);
}

function getMasonryCycleHeight(cellX: number, width: number, gap: number) {
  let cycleHeight = 0;

  for (let row = 0; row < getMasonryCycleSize(ITEMS.length); row++) {
    const item = ITEMS[getItemIndex(cellX, row, ITEMS.length)];
    cycleHeight += getRenderedItemHeight(item, width) + gap;
  }

  return cycleHeight;
}

function getMasonryY(cellX: number, cellY: number, width: number, gap: number) {
  const cycleSize = getMasonryCycleSize(ITEMS.length);
  const normalizedY = ((cellY % cycleSize) + cycleSize) % cycleSize;
  const cycleIndex = Math.floor(cellY / cycleSize);
  let cycleHeight = 0;
  let offsetY = 0;

  for (let row = 0; row < cycleSize; row++) {
    const item = ITEMS[getItemIndex(cellX, row, ITEMS.length)];
    const rowHeight = getRenderedItemHeight(item, width) + gap;

    cycleHeight += rowHeight;

    if (row < normalizedY) {
      offsetY += rowHeight;
    }
  }

  return cycleIndex * cycleHeight + offsetY;
}

export function VisualPlayground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const panRef = useRef(pan);
  const panFrameRef = useRef<number | null>(null);
  const [drag, setDrag] = useState<{
    startX: number;
    startY: number;
    panX: number;
    panY: number;
  } | null>(null);
  const [hasMoved, setHasMoved] = useState(false);
  const [imageSize, setImageSize] = useState(DEFAULT_IMAGE_SIZE);
  const [gridGap, setGridGap] = useState(DEFAULT_GRID_GAP);

  useEffect(() => {
    return () => {
      if (panFrameRef.current !== null) {
        cancelAnimationFrame(panFrameRef.current);
      }
    };
  }, []);

  function schedulePan(nextPan: { x: number; y: number }) {
    panRef.current = nextPan;

    if (panFrameRef.current !== null) {
      return;
    }

    panFrameRef.current = requestAnimationFrame(() => {
      panFrameRef.current = null;
      setPan(panRef.current);
    });
  }

  // Prevent trackpad horizontal scroll gestures from triggering browser navigation
  useEffect(() => {
    function handleGlobalWheel(e: WheelEvent) {
      // Check if the event target is within our canvas container
      if (containerRef.current && containerRef.current.contains(e.target as Node)) {
        // If there's significant horizontal scroll, prevent default to stop browser navigation
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          e.preventDefault();
        }
      }
    }

    // Use passive: false to allow preventDefault
    document.addEventListener("wheel", handleGlobalWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleGlobalWheel);
    };
  }, []);

  // Responsive image size and grid gap
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 500) {
        setImageSize(MOBILE_IMAGE_SIZE);
        setGridGap(MOBILE_GRID_GAP);
      } else {
        setImageSize(DEFAULT_IMAGE_SIZE);
        setGridGap(DEFAULT_GRID_GAP);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mouse/touch handlers
  function onPointerDown(e: React.PointerEvent) {
    setHasMoved(false);
    setDrag({
      startX: e.clientX,
      startY: e.clientY,
      panX: panRef.current.x,
      panY: panRef.current.y,
    });
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!drag) return;

    // Remove drag threshold for touch events (mobile)
    // If it's a touch or pen, always set hasMoved to true
    if (e.pointerType === "touch" || e.pointerType === "pen") {
      setHasMoved(true);
    } else {
      const deltaX = Math.abs(e.clientX - drag.startX);
      const deltaY = Math.abs(e.clientY - drag.startY);
      // If we've moved more than 5px, consider it a drag
      if (deltaX > 5 || deltaY > 5) {
        setHasMoved(true);
      }
    }

    schedulePan({
      x: drag.panX + (e.clientX - drag.startX),
      y: drag.panY + (e.clientY - drag.startY),
    });
  }

  function onPointerUp() {
    setDrag(null);
  }

  // Add wheel handler for scroll navigation
  function onWheel(e: React.WheelEvent) {
    // Prevent default browser scroll
    e.preventDefault();
    schedulePan({
      x: panRef.current.x - e.deltaX,
      y: panRef.current.y - e.deltaY,
    });
  }

  // Calculate which items to render based on viewport and pan
  const getVisibleItems = () => {
    if (typeof window === "undefined") {
      return [];
    }

    const columnWidth = imageSize;
    const columnPitch = columnWidth + gridGap;
    const viewportWidth = containerRef.current?.getBoundingClientRect().width ?? window.innerWidth;
    const viewportHeight =
      containerRef.current?.getBoundingClientRect().height ?? window.innerHeight;
    const viewportTop = -pan.y;
    const viewportBottom = viewportTop + viewportHeight;

    if (!containerRef.current) {
      // Fallback for initial render - use window dimensions
      const cols = Math.ceil(viewportWidth / columnPitch) + GRID_OVERSCAN * 2;
      const startCol = Math.floor(-pan.x / columnPitch) - GRID_OVERSCAN;

      const items = [];

      for (let cx = startCol; cx < startCol + cols; cx++) {
        const cycleSize = getMasonryCycleSize(ITEMS.length);
        const cycleHeight = getMasonryCycleHeight(cx, columnWidth, gridGap);
        const startCycle = Math.floor(viewportTop / cycleHeight) - GRID_OVERSCAN;
        const endCycle = Math.floor(viewportBottom / cycleHeight) + GRID_OVERSCAN;

        for (let cycle = startCycle; cycle <= endCycle; cycle++) {
          for (let row = 0; row < cycleSize; row++) {
            const cy = cycle * cycleSize + row;
            const itemIdx = getItemIndex(cx, cy, ITEMS.length);
            const item = ITEMS[itemIdx];
            const x = cx * columnPitch;
            const y = getMasonryY(cx, cy, columnWidth, gridGap);
            const height = getRenderedItemHeight(item, columnWidth);
            const isVisible = y + height >= viewportTop && y <= viewportBottom;
            const animationDelay = seededRandom(cx * 10000 + cy * 100 + 999) * 0.18;

            if (y + height < viewportTop - gridGap || y > viewportBottom + gridGap) {
              continue;
            }

            items.push({
              ...item,
              x,
              y,
              width: columnWidth,
              renderedHeight: height,
              isVisible,
              animationDelay,
              key: `${cx}-${cy}`,
            });
          }
        }
      }

      return items;
    }

    // Calculate visible grid cells
    const cols = Math.ceil(viewportWidth / columnPitch) + GRID_OVERSCAN * 2;
    const startCol = Math.floor(-pan.x / columnPitch) - GRID_OVERSCAN;

    const items = [];

    for (let cx = startCol; cx < startCol + cols; cx++) {
      const cycleSize = getMasonryCycleSize(ITEMS.length);
      const cycleHeight = getMasonryCycleHeight(cx, columnWidth, gridGap);
      const startCycle = Math.floor(viewportTop / cycleHeight) - GRID_OVERSCAN;
      const endCycle = Math.floor(viewportBottom / cycleHeight) + GRID_OVERSCAN;

      for (let cycle = startCycle; cycle <= endCycle; cycle++) {
        for (let row = 0; row < cycleSize; row++) {
          const cy = cycle * cycleSize + row;
          const itemIdx = getItemIndex(cx, cy, ITEMS.length);
          const item = ITEMS[itemIdx];
          const x = cx * columnPitch;
          const y = getMasonryY(cx, cy, columnWidth, gridGap);
          const height = getRenderedItemHeight(item, columnWidth);
          const isVisible = y + height >= viewportTop && y <= viewportBottom;
          const animationDelay = seededRandom(cx * 10000 + cy * 100 + 999) * 0.18;

          if (y + height < viewportTop - gridGap || y > viewportBottom + gridGap) {
            continue;
          }

          items.push({
            ...item,
            x,
            y,
            width: columnWidth,
            renderedHeight: height,
            isVisible,
            animationDelay,
            key: `${cx}-${cy}`,
          });
        }
      }
    }

    return items;
  };

  //
  const visibleItems = useMemo(
    () => getVisibleItems(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pan.x, pan.y, imageSize, gridGap, mounted],
  );

  if (!mounted) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden bg-zinc-100 select-none"
      style={{
        cursor: drag ? "grabbing" : "grab",
        touchAction: "none",
        WebkitOverflowScrolling: "touch",
        overscrollBehavior: "none",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onWheel={onWheel}
    >
      <TransitionLink
        className="corner-squircle fixed inset-x-0 bottom-4 z-50 mx-auto flex w-max items-center justify-center gap-2 rounded-full border border-white bg-linear-to-tr from-zinc-900 via-zinc-900 to-zinc-500 px-5 py-2 text-white shadow-2xl transition-transform hover:scale-105 active:scale-100"
        href="/"
      >
        <LogOutIcon className="size-4" />
        <span>Leave Playground</span>
      </TransitionLink>
      <div
        className="absolute will-change-transform"
        style={{
          transform: `translate3d(${pan.x}px, ${pan.y}px, 0)`,
        }}
      >
        {visibleItems.map((item) => {
          const rotation = getItemRotation(
            Math.floor(item.x / (imageSize + gridGap)),
            Math.floor(item.y / (item.renderedHeight + gridGap)),
          );

          return (
            <motion.a
              key={item.key}
              href={item.externalUrl ?? undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute block rounded-2xl no-underline select-none"
              style={{
                left: item.x,
                top: item.y,
                width: item.width,
                height: item.renderedHeight,
              }}
              initial={{
                filter: `blur(${ENTER_BLUR})`,
                rotate: rotation,
                scale: 0.94,
                opacity: 0,
              }}
              animate={{
                filter: item.isVisible ? "blur(0px)" : `blur(${ENTER_BLUR})`,
                rotate: rotation,
                scale: item.isVisible ? 1 : 0.94,
                opacity: item.isVisible ? 1 : 0,
                transition: {
                  duration: 0.45,
                  ease: "easeOut",
                  delay: item.isVisible ? item.animationDelay : 0,
                },
              }}
              whileHover={{
                rotate: 0,
                scale: 1.08,
                boxShadow: "0 0 40px 0 rgba(0, 0, 0, 0.05)",
                transition: { duration: 0.15, ease: "easeOut", delay: 0 },
              }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
              onPointerDown={(e) => {
                // Prevent default link behavior but allow event to bubble to container
                e.preventDefault();
              }}
              onClick={(e) => {
                // Only prevent clicks if there was actual movement
                if (hasMoved) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
            >
              {isVideo(item.mediaUrl) ? (
                <video
                  src={item.mediaUrl}
                  width={item.width}
                  height={item.renderedHeight}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="pointer-events-none box-border size-full rounded-2xl border-4 border-white object-cover outline -outline-offset-4 outline-zinc-400/20"
                />
              ) : (
                <Image
                  quality={100}
                  src={item.mediaUrl}
                  width={item.width}
                  height={item.renderedHeight}
                  sizes={`${item.width}px`}
                  decoding="async"
                  alt=""
                  className="pointer-events-none box-border size-full rounded-2xl border-4 border-white object-cover outline -outline-offset-4 outline-zinc-400/20"
                />
              )}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
