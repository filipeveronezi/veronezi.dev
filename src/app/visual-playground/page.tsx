import { Metadata } from "next";

export const metadata: Metadata = {
  title: "F. Veronezi — Visual Playground",
  description: "Design Engineer. Building for the web.",
};

import { VisualPlayground } from "@/components/visual-playground";

export default function VisualPlaygroundPage() {
  return (
    <main className="size-full min-h-screen overflow-hidden bg-zinc-100 p-1">
      <VisualPlayground />
    </main>
  );
}
