"use client";

import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";

function navigate(href: string, push: (href: string) => void) {
  if (!document.startViewTransition) {
    push(href);
    return;
  }
  document.startViewTransition(() => push(href));
}

type Props = Omit<ComponentProps<"a">, "href"> & { href: string };

export function TransitionLink({ href, onClick, children, ...props }: Props) {
  const router = useRouter();

  return (
    <a
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        navigate(href, router.push);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
