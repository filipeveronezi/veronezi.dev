import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Demo({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "my-6 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50/60 p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
