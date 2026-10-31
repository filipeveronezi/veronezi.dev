import type { Writing } from "@/lib/content";
import { WritingItem } from "@/components/writing-item";
import { ConeIcon } from "lucide-react";

export function Writings({ writings }: { writings: Writing[] }) {
  return (
    <section className="space-y-6 pb-20 leading-loose">
      <h2 className="flex items-center gap-1 px-4 font-medium text-zinc-900">
        <ConeIcon className="size-4 rotate-215 text-zinc-500" />
        <span>Writing</span>
      </h2>
      <ul className="space-y-6 px-4">
        {writings.map((writing) => (
          <li key={writing.slug}>
            <WritingItem item={writing} />
          </li>
        ))}
      </ul>
    </section>
  );
}
