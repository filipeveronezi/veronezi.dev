import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto flex h-56 w-full max-w-2xl items-end justify-between px-2 pb-6">
      <span />
      <Link
        href="/"
        className="bg-linear-to-r from-zinc-500 via-zinc-800 to-zinc-400 bg-clip-text text-sm font-medium text-transparent"
      >
        veronezi.dev
      </Link>
    </footer>
  );
}
