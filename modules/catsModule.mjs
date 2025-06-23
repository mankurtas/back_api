import { sql } from "../dbConnection.mjs";

//get all
export const allCats = async () => {
  const allCategories = await sql`
    SELECT * FROM categories
    `;
  return allCategories;
};

//insert new

export const insertNewCategory = async (newCategory) => {
  const { category } = newCategory;

  const [cat] = await sql`
    INSERT INTO categories
      (category)
    VALUES
      (${category})
    RETURNING *;
  `;

  return cat;
};