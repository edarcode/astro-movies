import { db, Movies } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  // TODO
  await db.insert(Movies).values([
    {
      id: crypto.randomUUID(),
      title: "Batman: El Caballero de la Noche",
      description:
        "Batman se enfrenta a su mayor enemigo, el Joker, mientras lucha por mantener la justicia en Gotham City.",
      img: "https://res.cloudinary.com/dvmsllkkg/image/upload/v1731900411/astro-movies/eeamjxvud1sbw3rgrozx.png",
    },
    {
      id: crypto.randomUUID(),
      title: "Blade Runner",
      description:
        "En un futuro distópico, un 'blade runner' debe cazar y eliminar a los replicantes, seres bioingenierizados, que han escapado a la Tierra.",
      img: "https://res.cloudinary.com/dvmsllkkg/image/upload/v1731900415/astro-movies/fexfmsfeujzfvknzikcl.png",
    },
  ]);
}
