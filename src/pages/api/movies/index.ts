import type { APIRoute } from "astro";
import { db, Movies } from "astro:db";
import { Res } from "../response/Res";

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const movies = await db.select().from(Movies);
    return Res.json({ data: movies });
  } catch (error) {
    return Res.err();
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const newMovie = { id: crypto.randomUUID(), ...body };
    await db.insert(Movies).values(newMovie);

    return Res.json({
      status: 201,
      data: { msg: "Pélicula creada correctamente" },
    });
  } catch (error) {
    return Res.err();
  }
};
