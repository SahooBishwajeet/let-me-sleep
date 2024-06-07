import { describe } from "node:test";
import { defineConfig, defineCollection, s } from "velite";

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s.object({
    slug: s.path(),
    title: s.string().max(99),
    describtion: s.string().max(999).optional(),
    date: s.isodate(),
    published: s.boolean().default(true),
    body: s.mdx(),
  }),
});
