import AppError from "../utils/appError.mjs";
import { allCats, insertNewCategory } from "../modules/catsModule.mjs";

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

// New Catagory

export const createCat = async (req, res, next) => {
  try {
    const { category } = req.body;

    if (!category) {
      return next(new AppError("Missing required field: category", 400));
    }

    const insertedCategory = await insertNewCategory({ category });

    res.status(201).json({
      status: "success",
      data: insertedCategory,
    });
  } catch (error) {
    next(new AppError(error.message || "Failed to create category", 500));
  }
};