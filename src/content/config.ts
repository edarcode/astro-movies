import { z, defineCollection } from "astro:content";

const moviesCollection = defineCollection({
  type: "content", // v2.5.0 y posteriores
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
    }),
});

export const collections = {
  movies: moviesCollection,
};
