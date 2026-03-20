import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const components = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ children }) => <h1 className="text-2xl font-bold text-red-500">{children}</h1>,
  p: ({ children }) => <p className="text-zinc-500">{children}</p>,
  img: (props) => <Image sizes="100vw" className="w-full" {...(props as ImageProps)} />,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
