import { TransitionLink } from "@/components/transition-link";
import { WritingContentMeta } from "@/components/writing-content-meta";

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="m-auto h-full w-full max-w-2xl px-4 pt-20">
      <section className="flex items-start justify-between gap-4 py-6">
        <div className="flex flex-col gap-px">
          <TransitionLink
            className="z-50 font-medium text-zinc-900 underline decoration-dotted underline-offset-5"
            href="/"
          >
            Filipe Veronezi
          </TransitionLink>
          <span className="z-50 font-medium text-zinc-500">Design Engineer</span>
        </div>
        <WritingContentMeta />
      </section>
      <section className="leading-loose">{children}</section>
    </main>
  );
}
