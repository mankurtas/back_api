import {
  allBooks,
  insertNewBook
 
} from "../modules/bookModule.mjs";

import AppError from "../utils/appError.mjs";

// get all books

export const getBooks = async (req, res, next) => {
  try {
    const booksList = await allBooks();

    if (!booksList || booksList.length === 0) {
      return next(new AppError("Where is no books.", 404));
    }

    res.status(200).json({
      status: "Success",
      data: booksList,
    });
  } catch (error) {
    next(new AppError(error.message || "Failed to get all books", 500));
  }
};

//New Book

export const createBook = async (req, res, next) => {
  try {
    // const { authorid } = req.body;

    // // Check if the author exists
    // const authorExists = await selectAuthorById(authorid);

    // // If the author doesn't exist, throw an error
    // if (!authorExists) {
    //   return next(
    //     new AppError("Author with the specified ID does not exist", 404)
    //   );
    // }

    const bookData = req.body;

    const insertedBook = await insertNewBook(bookData);

    res.status(200).json({
      status: "Success",
      data: insertedBook,
    });
  } catch (error) {
    next(new AppError(error.message || "Failed to create book", 500));
  }
};