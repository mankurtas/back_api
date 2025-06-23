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

//insert Book

export const insertNewBook = async (newBook) => {
   const {
    title,
    authorid,
    categoryid,
    cover 
  } = newBook;

  const [book] = await sql`
    INSERT INTO books
      (title, author_id, category_id, cover)
    VALUES 
      (${title}, ${authorid}, ${categoryid}, ${cover})
    RETURNING *;
  `;

  return book;
};

export const deleteBookById = async (id) => {
  const [book] = await sql`
    DELETE FROM books
    WHERE books.id = ${id} 
    `;

  return book;
};

