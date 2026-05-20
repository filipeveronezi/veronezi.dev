import { Signature } from "@/components/signature";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto flex h-56 w-full max-w-2xl items-end justify-between px-4 pb-12">
      <span />
      <div className="relative">
        <Signature className="absolute inset-0 m-auto size-16 opacity-60" />
        <div className="absolute inset-0 m-auto h-4 w-full bg-white blur-sm" />
        <Link
          href="/"
          className="relative z-50 bg-linear-to-r from-zinc-600 via-zinc-800 to-zinc-500 bg-clip-text text-sm font-medium text-transparent"
        >
          veronezi.dev
        </Link>
      </div>
    </footer>
  );
}
