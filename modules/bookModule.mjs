import { sql } from "../dbConnection.mjs";

// Get all books

export const allBooks = async () => {
    const allBooks = await sql`
    SELECT 
      books.id,
      books.title,
      authors.name AS author,
      categories.category AS category,
      books.reserved,
      books.cover
    FROM books
    JOIN authors ON books.author_id = authors.id
    JOIN categories ON books.category_id = categories.id
    ORDER BY books.id;
  `;
  return allBooks;
};