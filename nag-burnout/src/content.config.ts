import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const burnout = defineCollection({
  /* Récupère tous les fichiers Markdown dans votre répertoire de pages. */
  loader: glob({ pattern: "**/*.yaml", base: "./src/data/burnout" }),
});

export const collections = {
  burnout,
};
