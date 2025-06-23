import { sql } from "../dbConnection.mjs";


export const allAuthors = async () => {
  const allAuthors = await sql`
    SELECT * FROM authors
    `;
  return allAuthors;
};