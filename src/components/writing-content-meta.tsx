"use client";

import { TransitionLink } from "@/components/transition-link";
import { CornerUpLeftIcon, ScanEyeIcon } from "lucide-react";
import { usePathname } from "next/navigation";

function getContentType(pathname: string) {
  if (pathname.includes("/mimics/")) return "Mimic";
  if (pathname.includes("/components/")) return "Component";
  if (pathname.includes("/articles/") || pathname.includes("/article/")) return "Article";

  return null;
}

export function WritingContentMeta() {
  const pathname = usePathname();
  const contentType = getContentType(pathname);
  const isMimic = contentType === "Mimic";
  const isDetails = pathname.endsWith("/details");
  const detailsHref = `${pathname.replace(/\/$/, "")}/details`;
  const demoHref = pathname.replace(/\/details$/, "");

  if (!contentType) return null;

  return (
    <div className="z-50 flex flex-col items-end gap-px text-right text-sm font-medium">
      <span className="text-zinc-500">{contentType}</span>
      {isMimic ? (
        <TransitionLink
          className="text-zinc-600 underline decoration-dotted underline-offset-5 transition-colors hover:text-zinc-900"
          href={isDetails ? demoHref : detailsHref}
        >
          {isDetails ? (
            <div className="flex items-center justify-center gap-1">
              <CornerUpLeftIcon className="size-4" />
              <span>back to demo</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1">
              <ScanEyeIcon className="size-4" />
              <span>see details</span>
            </div>
          )}
        </TransitionLink>
      ) : null}
    </div>
  );
}
