import {
  allBooks,
 
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

