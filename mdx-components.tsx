import { TransitionLink } from "@/components/transition-link";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { isValidElement, type ReactNode } from "react";

type CodeProps = {
  children?: ReactNode;
  className?: string;
};

function textFromNode(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textFromNode).join("");
  if (isValidElement<CodeProps>(node)) return textFromNode(node.props.children);

  return "";
}

function highlightCode(code: string) {
  const tokenPattern =
    /(\/\/.*|\/\*.*?\*\/|["'`](?:\\.|[^"'`\\])*["'`]|\b(?:const|let|var|function|return|if|else|type|interface|import|export|from|as|satisfies|null|undefined|true|false)\b|\b\d+(?:\.\d+)?\b|<\/?[\w.-]+|[{}()[\].,;:?])/g;

  return code.split("\n").map((line, lineIndex) => {
    const parts = line.split(tokenPattern).filter(Boolean);

    return (
      <span key={lineIndex} className="block min-h-lh">
        {parts.map((part, partIndex) => {
          if (part.startsWith("//") || part.startsWith("/*")) {
            return (
              <span key={partIndex} className="text-[#8b8b8b]">
                {part}
              </span>
            );
          }

          if (/^["'`]/.test(part)) {
            return (
              <span key={partIndex} className="text-[#a45f00]">
                {part}
              </span>
            );
          }

          if (
            /^(const|let|var|function|return|if|else|type|interface|import|export|from|as|satisfies|null|undefined|true|false)$/.test(
              part,
            )
          ) {
            return (
              <span key={partIndex} className="text-[#49AF94]">
                {part}
              </span>
            );
          }

          if (/^\d/.test(part)) {
            return (
              <span key={partIndex} className="text-[#a45f00]">
                {part}
              </span>
            );
          }

          if (/^<\/?[\w.-]+$/.test(part)) {
            return (
              <span key={partIndex} className="text-[#a45f00]">
                {part}
              </span>
            );
          }

          if (/^[{}()[\].,;:?]$/.test(part)) {
            return (
              <span key={partIndex} className="text-[#8b8b8b]">
                {part}
              </span>
            );
          }

          return part;
        })}
      </span>
    );
  });
}

function CodeBlock({ children }: { children?: ReactNode }) {
  const codeElement = isValidElement<CodeProps>(children) ? children : null;
  const language = codeElement?.props.className?.match(/language-(\w+)/)?.[1];
  const code = textFromNode(codeElement?.props.children ?? children).trimEnd();

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-[#e7e5df] bg-[#fbfaf7]">
      <div className="flex items-center justify-between border-b border-[#e7e5df] px-4 py-2">
        <span className="font-mono text-xs text-[#7f7a70]">{language ?? "code"}</span>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-normal">
        <code className="font-mono text-[#222222]">{highlightCode(code)}</code>
      </pre>
    </div>
  );
}

const components = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ children }) => (
    <h1 className="mb-6 text-lg font-medium text-balance text-zinc-900">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-2 text-base font-medium text-balance text-zinc-900">{children}</h2>
  ),
  p: ({ children }) => <p className="mb-4 text-zinc-600">{children}</p>,
  img: (props) => (
    <Image sizes="100vw" width={100} height={100} className="w-full" {...(props as ImageProps)} />
  ),
  strong: (props) => <strong className="font-medium text-zinc-900" {...props} />,
  li: ({ children }) => <li className="ml-4 marker:text-zinc-400">{children}</li>,
  ul: ({ children }) => <ul className="mb-4 list-disc text-zinc-600">{children}</ul>,
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal text-zinc-600 marker:text-sm">{children}</ol>
  ),
  a: ({ children, href }) => (
    <TransitionLink
      href={href}
      className="font-medium text-zinc-900 underline decoration-dotted underline-offset-5 transition-colors hover:text-zinc-600"
    >
      {children}
    </TransitionLink>
  ),
  pre: CodeBlock,
  code: ({ children, className }) => (
    <code
      className={
        className ??
        "corner-squircle rounded-full border border-zinc-200 bg-white px-1 py-0.5 font-mono text-sm text-zinc-600"
      }
    >
      {children}
    </code>
  ),
  hr: () => (
    <hr className="mx-auto my-16 h-px w-full rounded-full border-none bg-linear-to-r from-transparent via-zinc-300/80 to-transparent" />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
