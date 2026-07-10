import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  /* Récupère tous les fichiers Markdown dans votre répertoire de pages. */
  loader: glob({ pattern: "**/*.md", base: "./src/data/pages" }),
});
