import { TransitionLink } from "@/components/transition-link";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const components = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ children }) => <h1 className="font-medium text-zinc-900">{children}</h1>,
  p: ({ children }) => <p className="mb-4 text-zinc-600">{children}</p>,
  img: (props) => (
    <Image sizes="100vw" width={100} height={100} className="w-full" {...(props as ImageProps)} />
  ),
  strong: (props) => <strong className="font-medium text-zinc-900" {...props} />,
  li: ({ children }) => <li className="ml-4 marker:text-zinc-400">{children}</li>,
  ul: ({ children }) => <ul className="list-disc text-zinc-600">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal text-zinc-600 marker:text-sm">{children}</ol>,
  a: ({ children, href }) => (
    <TransitionLink
      href={href}
      className="font-medium text-zinc-900 underline decoration-dotted underline-offset-5 transition-colors hover:text-zinc-600"
    >
      {children}
    </TransitionLink>
  ),
  code: ({ children }) => (
    <code className="corner-squircle rounded-full border border-zinc-200 bg-white px-1 py-0.5 font-mono text-sm text-zinc-600">
      {children}
    </code>
  ),
  hr: () => (
    <hr className="mx-auto my-20 h-px w-full rounded-full border-none bg-linear-to-r from-transparent via-zinc-300/80 to-transparent" />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
