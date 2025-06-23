import AppError from "../utils/appError.mjs";
import { allAuthors } from "../modules/authorModule.mjs";



//get all authors

export const getAuthors = async (req, res, next) => {
  try {
    const authors = await allAuthors();

    if (!authors || authors.length === 0) {
      return next(new AppError("Where is no authors.", 404));
    }

    res.status(200).json({
      status: "Success",
      data: authors,
    });
  } catch (error) {
    next(new AppError(error.message || "Failed to get all books", 500));
  }
};