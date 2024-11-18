import type { APIRoute } from "astro";

export const prerender = false;

export const PATCH: APIRoute = async ({ params: id }) => {
  return new Response(JSON.stringify({ msg: "PATCH", id }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};

export const DELETE: APIRoute = async ({ params: id }) => {
  return new Response(JSON.stringify({ msg: "DELETE", id }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
};
