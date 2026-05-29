import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  name: string;
  description: string;
  logoUrl: string;
  externalUrl: string;
};

export function OSSProjectItem({ name, description, logoUrl, externalUrl }: Props) {
  return (
    <Link
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="corner-squircle group relative flex w-full max-w-xs flex-col gap-1 rounded-4xl border border-zinc-200 bg-zinc-50 p-4 transition-colors hover:bg-zinc-50/40"
    >
      <ArrowUpRightIcon className="absolute top-6 right-6 size-5 text-zinc-400 opacity-0 transition-all group-hover:top-5 group-hover:right-5 group-hover:opacity-100" />
      <div className="flex w-full items-center opacity-50 grayscale-100 transition-all group-hover:opacity-100 group-hover:grayscale-0">
        <Image className="size-14" src={logoUrl} alt={`${name} logo`} width={100} height={100} />
      </div>
      <span className="text-sm font-medium text-zinc-900">{name}</span>
      <span className="text-sm text-zinc-600">{description}</span>
    </Link>
  );
}
