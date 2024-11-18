import type { APIRoute } from "astro";
import { Res } from "../response/Res";
import { db, eq, Movies } from "astro:db";

export const prerender = false;

export const PATCH: APIRoute = async ({ params, request }) => {
  try {
    const movieId = params.id as string;
    const body = await request.json();

    const result = await db
      .update(Movies)
      .set({ ...body })
      .where(eq(Movies.id, movieId));

    if (!result.rowsAffected) return Res.notFound();

    return Res.json({
      status: 201,
      data: "Pélicula actualizada correctamente",
    });
  } catch (error) {
    return Res.err();
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const movieId = params.id as string;

    const result = await db.delete(Movies).where(eq(Movies.id, movieId));

    if (!result.rowsAffected) return Res.notFound();

    return Res.json({
      status: 200,
      data: "Pélicula borrada correctamente",
    });
  } catch (error) {
    return Res.err();
  }
};
