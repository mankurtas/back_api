import {
  allBooks,
  insertNewBook,
  deleteBookById
 
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
    const { title, authorid, categoryid, cover } = req.body;

    if (!title || !authorid || !categoryid) {
      return next(new AppError("Missing required fields: title, authorid, categoryid", 400));
    }

    const bookData = {
      title,
      authorid,
      categoryid,
      cover: cover ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNTZQQ-pyVNx8eWJXF8Cla1IfmOlEpY9O6w&s",
      reserved: false,
    };

    const insertedBook = await insertNewBook(bookData);

    res.status(201).json({
      status: "success",
      data: insertedBook,
    });
  } catch (error) {
    next(new AppError(error.message || "Failed to create book", 500));
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    

    const deletedBook = await deleteBookById(id);
    return res.status(200).json({
      status: "success",
      message: "Book deleted",
      data: deletedBook,
    });
  } catch (error) {
    next(new AppError(error.message || "Failed to delete tour by ID", 500));
  }
};
