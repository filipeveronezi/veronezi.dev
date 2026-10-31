import fs from "fs";
import path from "path";

const WRITINGS = path.join(process.cwd(), "src/app/(writing)/writings");

export type Writing = {
  slug: string;
  title?: string;
  description?: string;
  publishedAt?: string;
};

export async function getWritings(): Promise<Writing[]> {
  const slugs = fs
    .readdirSync(WRITINGS, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  const writings = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`../app/(writing)/writings/${slug}/page.mdx`);
      return { ...metadata, slug };
    }),
  );

  return writings.sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));
}
