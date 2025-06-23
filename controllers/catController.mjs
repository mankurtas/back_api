import AppError from "../utils/appError.mjs";
import { allCats } from "../modules/catsModule.mjs";

//get all cats

export const getCats = async (req, res, next) => {
  try {
    const categories = await allCats();

    if (!categories || categories.length === 0) {
      return next(new AppError("Where is no categories.", 404));
    }

    res.status(200).json({
      status: "Success",
      data: categories,
    });
  } catch (error) {
    next(new AppError(error.message || "Failed to get all books", 500));
  }
};