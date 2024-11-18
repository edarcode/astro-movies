import { column, defineDb, defineTable } from "astro:db";

const Movies = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    img: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Movies,
  },
});
