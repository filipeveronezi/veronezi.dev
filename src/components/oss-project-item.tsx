import { HoverItem } from "@/components/item-hover";
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
    <HoverItem layoutId="project-hover">
    <Link
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block after:absolute after:-inset-x-3 after:-inset-y-2 after:rounded-2xl after:content-[''] space-y-1 leading-normal"
    >
      <span className="flex items-center gap-2 text-zinc-900">
        <Image
          className="h-4 w-5 object-contain"
          src={logoUrl}
          alt=""
          width={20}
          height={16}
        />
        <span>{name}</span>
      </span>
      <span className="block text-zinc-500">
        {description}
      </span>
    </Link>
    </HoverItem>
  );
}
