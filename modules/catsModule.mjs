import { sql } from "../dbConnection.mjs";


export const allCats = async () => {
  const allCategories = await sql`
    SELECT * FROM categories
    `;
  return allCategories;
};