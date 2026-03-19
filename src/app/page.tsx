import { InteractiveWriting } from "@/components/interactive-writing";
import { PilgrimLogo } from "@/components/logos/pilgrim-logo";
import { XLogo } from "@/components/logos/x-logo";
import { BoxIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-4 pt-20">
      <section className="flex flex-col gap-px py-6">
        <h1 className="flex items-center gap-1 font-medium text-zinc-900">
          <span>Filipe Veronezi</span>
        </h1>
        <span className="font-medium text-zinc-500">
          Design Engineer, Head of Technology at Pilgrim
        </span>
      </section>
      <section className="space-y-2 pb-20 leading-loose text-zinc-500">
        <p>
          I&apos;m currently building software and leading a small, talented team at{" "}
          <Link
            className="group"
            href="https://pilgrim.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PilgrimLogo className="inline size-4 -translate-y-0.5 grayscale" />{" "}
            <span className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-5 transition-colors group-hover:decoration-zinc-500">
              Pilgrim
            </span>
          </Link>
          . Our mission is to create the best biblical learning experience possible for Christians.
        </p>
        <p>
          I deeply value polished interfaces and thoughtful user experiences. I truly believe
          software shouldn’t just be useful, it should be{" "}
          <em className="font-medium text-zinc-900 not-italic">enjoyable</em>.
        </p>
        <p>
          You can reach out to me on{" "}
          <Link
            className="group"
            href="https://x.com/fiveronezi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <XLogo className="inline size-3.5 translate-y-[-0.05rem]" />{" "}
            <span className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-5 transition-colors group-hover:decoration-zinc-500">
              @fiveronezi
            </span>
          </Link>{" "}
          or check out some of my work below.
        </p>
      </section>
      <section className="space-y-2 pb-20">
        <h2 className="flex items-center gap-1 font-medium text-zinc-900">
          <BoxIcon className="size-4 text-zinc-500" />
          <span>OSS Projects</span>
        </h2>
        <p className="text-zinc-500">Soon.</p>
      </section>
      <InteractiveWriting />
    </main>
  );
}
