import Link from "next/link";
import { ComponentProps } from "react";

type Props = Omit<ComponentProps<"a">, "href"> & { href: string };

export function ExternalLink({ children, href, ...props }: Props) {
  return (
    <Link
      href={href}
      className="inline font-medium text-zinc-900 underline decoration-dotted underline-offset-5 transition-colors hover:text-zinc-600"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </Link>
  );
}
