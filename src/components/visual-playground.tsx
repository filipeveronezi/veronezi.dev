"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";

const ITEMS = [
  {
    title: "Pilgrim Week · Motion",
    mediaUrl: "/visual-playground/pilgrim-week.mp4",
    externalUrl: "https://pilgrim.com.br/pilgrim-week-01",
    width: 1256,
    height: 1256,
  },
  {
    title: "Pilgrim · Website",
    mediaUrl: "/visual-playground/pilgrim-website.jpg",
    externalUrl: "https://pilgrim.com.br",
    width: 1440,
    height: 1000,
  },
  {
    title: "Pilgrim Compass · Website",
    mediaUrl: "/visual-playground/pilgrim-compass-website.jpg",
    externalUrl: "https://pilgrim.com.br/compass",
    width: 1440,
    height: 1000,
  },
  {
    title: "FV · Identity",
    mediaUrl: "/visual-playground/fv-hires.png",
    externalUrl: null,
    width: 8000,
    height: 8000,
  },
  {
    title: "Responsive table",
    mediaUrl: "/visual-playground/responsive-table.png",
    externalUrl: null, // TODO: X post
    width: 1932,
    height: 1930,
  },
  {
    title: "Unfair · Identity",
    mediaUrl: "/visual-playground/unfair-logo.png",
    externalUrl: null,
    width: 1000,
    height: 1000,
  },
  {
    title: "Dashboard sidebar",
    mediaUrl: "/visual-playground/dashboard-sidebar.png",
    externalUrl: null, // TODO: X post
    width: 1000,
    height: 1000,
  },
  {
    title: "Polis · Identity",
    mediaUrl: "/visual-playground/polis-logo.png",
    externalUrl: null,
    width: 1798,
    height: 1798,
  },
  {
    title: "Pilgrim Compass",
    mediaUrl: "/visual-playground/pilgrim-compass.png",
    externalUrl: null,
    width: 2166,
    height: 2166,
  },
  {
    title: "Bible reader",
    mediaUrl: "/visual-playground/bible-reader.png",
    externalUrl: "https://app.pilgrim.com.br/tabs/b%C3%ADblia",
    width: 1095,
    height: 1094,
  },
  {
    title: "Bible audio toolbar",
    mediaUrl: "/visual-playground/bible-toolbar-audio.mp4",
    externalUrl: "https://app.pilgrim.com.br/tabs/b%C3%ADblia",
    width: 1000,
    height: 1000,
  },
  {
    title: "Calendar elements",
    mediaUrl: "/visual-playground/calendar-elements.png",
    externalUrl: "https://pilgrim.com.br/pilgrim-week-01#day-5",
    width: 1546,
    height: 1546,
  },
  {
    title: "Pilgrim · Previous website",
    mediaUrl: "/visual-playground/pilgrim-lp.png",
    externalUrl: null,
    width: 1000,
    height: 1000,
  },
  {
    title: "Eventsea",
    mediaUrl: "/visual-playground/eventsea.png",
    externalUrl: null,
    width: 960,
    height: 960,
  },
  {
    title: "Invested",
    mediaUrl: "/visual-playground/invested.png",
    externalUrl: "https://x.com/fiveronezi/status/2060354711706820961",
    width: 1600,
    height: 900,
  },
];

export function VisualPlayground() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; scroll: number; moved: boolean; down: boolean; lastX: number; time: number; velocity: number } | null>(null);
  const [active, setActive] = useState(0);
  const momentumRef = useRef(0);

  function stopMomentum() {
    cancelAnimationFrame(momentumRef.current);
    momentumRef.current = 0;
  }

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const cards = Array.from(viewport.querySelectorAll<HTMLElement>("[data-work]"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    function update() {
      if (!viewport) return;
      const center = viewport.scrollLeft + viewport.clientWidth / 2;
      const inset = cards[0]?.offsetLeft ?? 0;
      let closest = 0;
      let closestDistance = Infinity;

      const gap = parseFloat(getComputedStyle(viewport).columnGap) || 0;
      const layout = cards.map((card, index) => {
        const width = card.offsetWidth;
        const cardCenter = card.offsetLeft + width / 2;
        const startDistance = Math.abs(card.offsetLeft - viewport.scrollLeft - inset);
        if (startDistance < closestDistance) {
          closest = index;
          closestDistance = startDistance;
        }
        return { width, center: cardCenter };
      });

      // Like the reference, perspective belongs to each card, not the scroller.
      // Solve rotation from the final packed position, never its old layout box.
      const perspective = 1800;
      function project(cardCenter: number, width: number) {
        const position = (cardCenter - center) / (viewport!.clientWidth / 2);
        const edge = Math.min(1, Math.max(0, (Math.abs(position) - 0.12) / 0.88));
        const angle = Math.sign(position) * edge ** 1.5 * 45;
        const depth = edge ** 2 * 160;
        const radians = angle * Math.PI / 180;
        const edgeX = (x: number) => perspective * x * Math.cos(radians) / (perspective + depth + x * Math.sin(radians));
        return { angle, depth, left: edgeX(-width / 2), right: edgeX(width / 2) };
      }
      let centers = layout.map((item) => item.center);
      let projections = layout.map((item, index) => project(centers[index], item.width));
      for (let iteration = 0; iteration < 24; iteration++) {
        const packed = [layout[0].center];
        for (let index = 1; index < layout.length; index++) {
          packed[index] = packed[index - 1] + projections[index - 1].right + gap - projections[index].left;
        }
        const corrections = packed.map((value, index) => value - layout[index].center);
        let anchor = corrections[corrections.length - 1];
        if (center <= layout[0].center) anchor = corrections[0];
        else {
          for (let index = 1; index < layout.length; index++) {
            if (center <= layout[index].center) {
              const progress = (center - layout[index - 1].center) / (layout[index].center - layout[index - 1].center);
              anchor = corrections[index - 1] + (corrections[index] - corrections[index - 1]) * progress;
              break;
            }
          }
        }
        centers = packed.map((value) => value - anchor);
        projections = layout.map((item, index) => project(centers[index], item.width));
      }
      cards.forEach((card, index) => {
        const { angle, depth } = projections[index];
        card.style.transform = reducedMotion.matches
          ? "none"
          : `translateX(${centers[index] - layout[index].center}px) perspective(${perspective}px) translateZ(${-depth}px) rotateY(${angle}deg)`;
      });
      setActive(closest);
      frame = 0;
    }

    function schedule() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    // Only horizontal wheel input belongs to the carousel. Vertical scroll stays native.
    function onWheel(event: WheelEvent) {
      stopMomentum();
      if (!viewport || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      const atStart = viewport.scrollLeft <= 0 && event.deltaX < 0;
      const atEnd = viewport.scrollLeft >= viewport.scrollWidth - viewport.clientWidth - 1 && event.deltaX > 0;
      if (atStart || atEnd) return;
      event.preventDefault();
      viewport.scrollLeft += event.deltaX * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.clientWidth : 1);
    }

    const resize = new ResizeObserver(schedule);
    resize.observe(viewport);
    viewport.addEventListener("scroll", schedule, { passive: true });
    viewport.addEventListener("wheel", onWheel, { passive: false });

    const visibility = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting && !reducedMotion.matches) {
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { root: viewport, threshold: 0.25 });
    viewport.querySelectorAll("video").forEach((video) => visibility.observe(video));
    function onMotionChange() {
      stopMomentum();
      viewport?.querySelectorAll("video").forEach((video) => {
        video.pause();
        visibility.unobserve(video);
        visibility.observe(video);
      });
      schedule();
    }
    reducedMotion.addEventListener("change", onMotionChange);
    update();

    return () => {
      cancelAnimationFrame(frame);
      stopMomentum();
      resize.disconnect();
      visibility.disconnect();
      viewport.removeEventListener("scroll", schedule);
      viewport.removeEventListener("wheel", onWheel);
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  function goTo(index: number, keyboard = false) {
    stopMomentum();
    const viewport = viewportRef.current;
    const card = viewport?.querySelectorAll<HTMLElement>("[data-work]")[index];
    if (!viewport || !card) return;
    const firstCard = viewport.querySelector<HTMLElement>("[data-work]");
    viewport.scrollTo({ left: card.offsetLeft - (firstCard?.offsetLeft ?? 0), behavior: keyboard || window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    stopMomentum();
    dragRef.current = { x: event.clientX, scroll: event.currentTarget.scrollLeft, moved: false, down: true, lastX: event.clientX, time: event.timeStamp, velocity: 0 };
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag?.down) return;
    if (Math.abs(event.clientX - drag.x) > 5) {
      drag.moved = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.dataset.dragging = "true";
    }
    if (drag.moved) {
      const elapsed = Math.max(1, event.timeStamp - drag.time);
      const velocity = (drag.lastX - event.clientX) / elapsed;
      drag.velocity = drag.velocity * 0.25 + velocity * 0.75;
      drag.lastX = event.clientX;
      drag.time = event.timeStamp;
      event.currentTarget.scrollLeft = drag.scroll + drag.x - event.clientX;
    }
  }

  function stopDrag(event: PointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    delete event.currentTarget.dataset.dragging;
    // Keep moved until the click following pointerup has been suppressed.
    const drag = dragRef.current;
    if (!drag) return;
    drag.down = false;
    if (!drag.moved || event.type !== "pointerup" || event.timeStamp - drag.time > 80 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const viewport = event.currentTarget;
    let velocity = Math.max(-3, Math.min(3, drag.velocity));
    let previousTime = performance.now();
    function coast(time: number) {
      const elapsed = Math.min(32, time - previousTime);
      previousTime = time;
      const decay = Math.exp(-elapsed / 180);
      const previousScroll = viewport.scrollLeft;
      viewport.scrollLeft += velocity * 180 * (1 - decay);
      velocity *= decay;
      if (Math.abs(velocity) > 0.02 && viewport.scrollLeft !== previousScroll) {
        momentumRef.current = requestAnimationFrame(coast);
      } else {
        momentumRef.current = 0;
      }
    }
    momentumRef.current = requestAnimationFrame(coast);
  }

  return (
    <section id="work" aria-label="UI and design work" aria-roledescription="carousel" className="work-carousel">
      <div
        ref={viewportRef}
        className="work-carousel-viewport"
        style={{ paddingInlineEnd: `max(0px, calc(100% - var(--work-inset) - var(--card-height) * ${ITEMS[ITEMS.length - 1].width / ITEMS[ITEMS.length - 1].height}))` }}
        tabIndex={0}
        aria-label="Design work. Scroll horizontally or use the arrow keys."
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerLeave={() => {
          if (dragRef.current && !dragRef.current.moved) dragRef.current = null;
        }}
        onPointerCancel={stopDrag}
        onLostPointerCapture={(event) => { delete event.currentTarget.dataset.dragging; }}
        onDragStart={(event) => event.preventDefault()}
        onClickCapture={(event) => {
          if (dragRef.current?.moved) event.preventDefault();
          dragRef.current = null;
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            dragRef.current = null;
            goTo(Math.max(0, Math.min(ITEMS.length - 1, active + (event.key === "ArrowRight" ? 1 : -1))), true);
          } else if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            goTo(event.key === "Home" ? 0 : ITEMS.length - 1, true);
          }
        }}
      >
        {ITEMS.map((item, index) => {
          const Media = item.externalUrl ? "a" : "div";
          return (
          <article key={item.mediaUrl} data-work className="work-carousel-card" aria-label={`${index + 1} of ${ITEMS.length}: ${item.title}`}>
            <Media
              {...(item.externalUrl ? {
                href: item.externalUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `View ${item.title}`,
              } : {})}
              draggable={false}
              className="work-carousel-media"
            >
              {item.mediaUrl.endsWith(".mp4") ? (
                <video src={item.mediaUrl} width={item.width} height={item.height} loop muted playsInline preload="metadata" aria-label={item.title} />
              ) : (
                <Image src={item.mediaUrl} width={item.width} height={item.height} quality={item.mediaUrl === "/visual-playground/fv-hires.png" ? 100 : undefined} sizes={`(max-width: 538px) ${78 * item.width / item.height}vw, ${420 * item.width / item.height}px`} alt={item.title} draggable={false} />
              )}
            </Media>
          </article>
          );
        })}
      </div>
    </section>
  );
}
