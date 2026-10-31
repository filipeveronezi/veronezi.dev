import { HoverItems } from "@/components/item-hover";
import { Writings } from "@/components/writings";
import { getWritings } from "@/lib/content";
import { PilgrimLogo } from "@/components/logos/pilgrim-logo";
import { XLogo } from "@/components/logos/x-logo";
import { CuboidIcon } from "lucide-react";
import Link from "next/link";
import { VisualPlayground } from "@/components/visual-playground";
import { OSSProjectItem } from "@/components/oss-project-item";
import { Enjoyable } from "@/components/enjoyable";

export default async function Home() {
  const content = await getWritings();
  return (
    <main className="w-full pt-20">
      <div className="mx-auto w-full max-w-2xl">
        <section className="flex flex-col gap-px px-4 py-6">
          <h1 className="flex items-center gap-1 font-medium text-zinc-900">
            <span>Filipe Veronezi</span>
          </h1>
          <span className="font-medium text-zinc-500">
            Design Engineer
          </span>
        </section>
        <section className="space-y-2 px-4 leading-loose text-zinc-500">
          <p>
            I’m a design engineer and head of technology at{" "}
            <Link
              className="group"
              href="https://pilgrim.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                aria-hidden="true"
                className="intro-logo corner-squircle inline-flex size-5 -translate-y-0.5 items-center justify-center rounded-md bg-white align-middle"
              >
                <PilgrimLogo className="size-3" />
              </span>{" "}
              <span className="font-medium text-zinc-900 underline decoration-zinc-400 decoration-dotted underline-offset-5 transition-colors group-hover:text-zinc-700 group-hover:decoration-zinc-400">
                Pilgrim
              </span>
            </Link>
            , where I lead a small, talented team building the best biblical learning experience
            possible for Christians.
          </p>
          <p>
            I believe software shouldn’t just be useful, it should{" "}
            <Enjoyable />.
          </p>
          <p>
            You can reach out to me on{" "}
            <Link
              className="group"
              href="https://x.com/fiveronezi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                aria-hidden="true"
                className="intro-logo corner-squircle inline-flex size-5 -translate-y-0.5 items-center justify-center rounded-md bg-black align-middle"
              >
                <XLogo className="size-3 invert" />
              </span>{" "}
              <span className="font-medium text-zinc-900 underline decoration-zinc-400 decoration-dotted underline-offset-5 transition-colors group-hover:text-zinc-700 group-hover:decoration-zinc-400">
                @fiveronezi
              </span>
            </Link>{" "}
            or check out some of my work below.
          </p>
        </section>
      </div>
      <VisualPlayground />
      <div className="mx-auto w-full max-w-2xl">
        <HoverItems>
        <Writings writings={content} />
        <section className="space-y-6 px-4 pb-20">
          <h2 className="flex items-center gap-1 font-medium text-zinc-900">
            <CuboidIcon className="size-4 text-zinc-500" />
            <span>Projects</span>
          </h2>
          <OSSProjectItem
            name="Vespertine"
            description="Peppermint and orange-flavored light theme for Zed, inspired by Vesper."
            logoUrl="/vespertine-logo.svg"
            externalUrl="https://github.com/filipeveronezi/vespertine"
          />
        </section>
        </HoverItems>
      </div>
    </main>
  );
}
