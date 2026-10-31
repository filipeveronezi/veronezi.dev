"use client";

export function BackToDemo() {
  return (
    <button
      type="button"
      className="cursor-pointer font-medium text-zinc-900 underline decoration-dotted underline-offset-5 transition-colors hover:text-zinc-600"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
        });
      }}
    >
      come back to the demo
    </button>
  );
}
