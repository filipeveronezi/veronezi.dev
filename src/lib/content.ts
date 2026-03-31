import fs from "fs";
import path from "path";

const WRITING = path.join(process.cwd(), "src/app/(writing)");

function slugs(type: string): string[] {
  const dir = path.join(WRITING, type);
  return fs.existsSync(dir)
    ? fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
    : [];
}

export type ContentItem = {
  slug: string;
  type: "articles" | "components" | "mimics";
  title?: string;
  publishedAt?: string;
  originalBy?: string;
  originalUrl?: string;
};

export async function getArticles(): Promise<ContentItem[]> {
  return Promise.all(
    slugs("articles").map(async (slug) => {
      const mod = await import(`../app/(writing)/articles/${slug}/page.mdx`);
      return { slug, type: "articles" as const, ...mod.metadata };
    }),
  );
}

export async function getComponents(): Promise<ContentItem[]> {
  return Promise.all(
    slugs("components").map(async (slug) => {
      const mod = await import(`../app/(writing)/components/${slug}/page.mdx`);
      return { slug, type: "components" as const, ...mod.metadata };
    }),
  );
}

export async function getMimics(): Promise<ContentItem[]> {
  return Promise.all(
    slugs("mimics").map(async (slug) => {
      const mod = await import(`../app/(writing)/mimics/${slug}/details/page.mdx`);
      return { slug, type: "mimics" as const, ...mod.metadata };
    }),
  );
}

export async function getAllContent(): Promise<ContentItem[]> {
  const [articles, components, mimics] = await Promise.all([
    getArticles(),
    getComponents(),
    getMimics(),
  ]);
  return [...articles, ...components, ...mimics].sort((a, b) => {
    if (!a.publishedAt) return 1;
    if (!b.publishedAt) return -1;
    return b.publishedAt.localeCompare(a.publishedAt);
  });
}
