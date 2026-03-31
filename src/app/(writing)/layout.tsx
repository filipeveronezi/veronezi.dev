import { TransitionLink } from "@/components/transition-link";

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="m-auto h-full w-full max-w-2xl px-4 pt-20">
      <section className="flex flex-col gap-px py-6">
        <TransitionLink
          className="font-medium text-zinc-900 underline decoration-dotted underline-offset-5"
          href="/"
        >
          Filipe Veronezi
        </TransitionLink>
        <span className="font-medium text-zinc-500">Design Engineer</span>
      </section>
      <section className="leading-loose">{children}</section>
    </main>
  );
}
