import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = false;

export const GET: APIRoute = async () => {
  const movies = await getCollection("movies");

  return new Response(JSON.stringify(movies), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
